/**
 * Reads a Google Search Console "Performance on Search" .xlsx export and prints
 * it as JSON, one array per sheet.
 *
 * Run: node scripts/gsc-report.mjs <path-to-export.xlsx> [--sheet Queries]
 *
 * Exists so the day-30 / 60 / 90 re-exports can be diffed against the baseline
 * without a spreadsheet or an xlsx dependency. An .xlsx is a zip of XML, and the
 * two parts that matter are the shared string table and each sheet's cell grid,
 * both of which are simple enough to read directly.
 */
import { readFileSync, writeFileSync } from "fs";
import { inflateRawSync } from "zlib";

const [, , filePath, ...rest] = process.argv;

if (!filePath) {
  console.error(
    "Usage: node scripts/gsc-report.mjs <export.xlsx> [--sheet Name] [--out file.json]",
  );
  process.exit(1);
}

const sheetFilter = rest.includes("--sheet")
  ? rest[rest.indexOf("--sheet") + 1]
  : undefined;

// Prefer --out over shell redirection: PowerShell re-encodes piped stdout and
// mangles the accented characters in the Spanish queries.
const outPath = rest.includes("--out") ? rest[rest.indexOf("--out") + 1] : undefined;

/** Reads the zip central directory and inflates every entry. */
function readZip(buffer) {
  const entries = new Map();
  // End-of-central-directory record, scanned from the tail because it is
  // preceded by a variable-length comment.
  let eocd = buffer.length - 22;
  while (eocd >= 0 && buffer.readUInt32LE(eocd) !== 0x06054b50) eocd--;
  if (eocd < 0) throw new Error("Not a zip file");

  const count = buffer.readUInt16LE(eocd + 10);
  let offset = buffer.readUInt32LE(eocd + 16);

  for (let i = 0; i < count; i++) {
    if (buffer.readUInt32LE(offset) !== 0x02014b50) {
      throw new Error("Corrupt central directory");
    }
    const method = buffer.readUInt16LE(offset + 10);
    const compressedSize = buffer.readUInt32LE(offset + 20);
    const nameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const localOffset = buffer.readUInt32LE(offset + 42);
    const name = buffer.toString("utf8", offset + 46, offset + 46 + nameLength);

    const localNameLength = buffer.readUInt16LE(localOffset + 26);
    const localExtraLength = buffer.readUInt16LE(localOffset + 28);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const raw = buffer.subarray(dataStart, dataStart + compressedSize);

    entries.set(name, method === 0 ? raw : inflateRawSync(raw));
    offset += 46 + nameLength + extraLength + commentLength;
  }

  return entries;
}

function decodeEntities(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&");
}

/** The shared string table: every text cell in the workbook points into this. */
function readSharedStrings(xml) {
  if (!xml) return [];
  return [...xml.matchAll(/<si>([\s\S]*?)<\/si>/g)].map((match) =>
    decodeEntities(
      [...match[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join(""),
    ),
  );
}

function columnIndex(reference) {
  const letters = reference.replace(/\d+/g, "");
  return [...letters].reduce((acc, ch) => acc * 26 + (ch.charCodeAt(0) - 64), 0) - 1;
}

function readSheet(xml, strings) {
  const rows = [];

  for (const rowMatch of xml.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
    const cells = [];
    for (const cellMatch of rowMatch[1].matchAll(
      /<c ([^>]*?)\/?>(?:([\s\S]*?)<\/c>)?/g,
    )) {
      const attrs = cellMatch[1];
      const body = cellMatch[2] ?? "";
      const ref = /r="([A-Z]+\d+)"/.exec(attrs)?.[1];
      const type = /t="([^"]+)"/.exec(attrs)?.[1];
      const value = /<v>([\s\S]*?)<\/v>/.exec(body)?.[1];
      const inline = /<is>[\s\S]*?<t[^>]*>([\s\S]*?)<\/t>/.exec(body)?.[1];

      let parsed;
      if (type === "s") parsed = strings[Number(value)] ?? "";
      else if (type === "inlineStr") parsed = decodeEntities(inline ?? "");
      else if (value === undefined) parsed = "";
      else parsed = Number(value);

      cells[ref ? columnIndex(ref) : cells.length] = parsed;
    }
    rows.push(cells);
  }

  return rows;
}

const zip = readZip(readFileSync(filePath));
const strings = readSharedStrings(zip.get("xl/sharedStrings.xml")?.toString("utf8"));

const workbook = zip.get("xl/workbook.xml").toString("utf8");
const rels = zip.get("xl/_rels/workbook.xml.rels").toString("utf8");

const relTargets = new Map(
  [...rels.matchAll(/Id="([^"]+)"[^>]*Target="([^"]+)"/g)].map((m) => [m[1], m[2]]),
);

const sheets = [...workbook.matchAll(/<sheet([^>]+)\/>/g)].map((match) => ({
  name: decodeEntities(/name="([^"]*)"/.exec(match[1])[1]),
  target: relTargets.get(/r:id="([^"]+)"/.exec(match[1])[1]),
}));

const output = {};

for (const sheet of sheets) {
  if (sheetFilter && sheet.name !== sheetFilter) continue;
  const path = sheet.target.startsWith("/")
    ? sheet.target.slice(1)
    : `xl/${sheet.target.replace(/^\.\//, "")}`;
  const rows = readSheet(zip.get(path).toString("utf8"), strings);
  if (rows.length === 0) continue;

  const [header, ...body] = rows;
  output[sheet.name] = body.map((row) =>
    Object.fromEntries(header.map((key, i) => [String(key), row[i] ?? ""])),
  );
}

const serialized = JSON.stringify(output, null, 2);

if (outPath) {
  writeFileSync(outPath, serialized, "utf8");
  console.log(
    `Wrote ${outPath}: ${Object.entries(output)
      .map(([name, rows]) => `${name} (${rows.length})`)
      .join(", ")}`,
  );
} else {
  console.log(serialized);
}

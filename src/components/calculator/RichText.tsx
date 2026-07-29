import { Fragment } from "react";

export function RichText({ text }: { text: string }) {
  const normalized = text.includes("**")
    ? text
    : text.replace(/^(.+?[.!?])(?=\s|$)/, "**$1**");
  const parts = normalized.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

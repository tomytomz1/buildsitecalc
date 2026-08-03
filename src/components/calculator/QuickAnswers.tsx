import { RichText } from "@/components/calculator/RichText";
import type { QuickAnswer } from "@/lib/i18n/types";

/**
 * Renders the direct-answer block for high-intent queries the calculator
 * itself cannot answer.
 *
 * Structure is deliberate and matches what currently ranks for these queries:
 * the question verbatim as an H2, the answer immediately after with the number
 * in the opening clause, then an optional reference table for the variants.
 * Answers sit in the static HTML rather than behind an accordion so the number
 * is available to a crawler without interaction.
 */
export function QuickAnswers({ title, items }: { title: string; items: QuickAnswer[] }) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-6" aria-labelledby="quick-answers-heading">
      <h2 id="quick-answers-heading" className="sr-only">
        {title}
      </h2>

      {items.map((item) => (
        <article
          key={item.question}
          className="rounded-lg border border-slate-200 bg-white p-5"
        >
          <h2 className="font-display text-lg font-semibold text-slate-900">
            {item.question}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            <RichText text={item.answer} />
          </p>

          {item.table ? (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-slate-900">{item.table.title}</h3>
              <div className="mt-2 overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-slate-900">
                    <tr>
                      {item.table.columns.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="border-b border-slate-200 px-4 py-2 font-semibold"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {item.table.rows.map((row, rowIndex) => (
                      <tr
                        key={`${item.question}-${rowIndex}`}
                        className="even:bg-slate-50/60"
                      >
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={cellIndex}
                              scope="row"
                              className="border-b border-slate-100 px-4 py-2 font-medium text-slate-900"
                            >
                              {cell}
                            </th>
                          ) : (
                            <td
                              key={cellIndex}
                              className="border-b border-slate-100 px-4 py-2"
                            >
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {item.table.note ? (
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.table.note}
                </p>
              ) : null}
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
}

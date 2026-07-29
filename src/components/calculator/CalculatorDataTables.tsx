import type { CalculatorDataTable } from "@/lib/i18n/types";

export function CalculatorDataTables({ tables }: { tables: CalculatorDataTable[] }) {
  if (tables.length === 0) return null;

  return (
    <div className="space-y-10">
      {tables.map((table) => (
        <section key={table.title} className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">{table.title}</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  {table.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-slate-200 px-4 py-3 font-semibold"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {table.rows.map((row, rowIndex) => (
                  <tr key={`${table.title}-${rowIndex}`} className="even:bg-slate-50/60">
                    {row.map((cell, cellIndex) =>
                      cellIndex === 0 ? (
                        <th
                          key={cellIndex}
                          scope="row"
                          className="border-b border-slate-100 px-4 py-3 font-medium text-slate-900"
                        >
                          {cell}
                        </th>
                      ) : (
                        <td
                          key={cellIndex}
                          className="border-b border-slate-100 px-4 py-3"
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
          {table.note ? (
            <p className="text-xs leading-relaxed text-slate-600">{table.note}</p>
          ) : null}
        </section>
      ))}
    </div>
  );
}

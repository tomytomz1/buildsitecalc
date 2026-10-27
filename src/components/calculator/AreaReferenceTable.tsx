import { areaReferenceRows } from "@/lib/calculators/area-reference";

type Props = { locale: "en" | "es"; showWaste?: boolean };

export function AreaReferenceTable({ locale, showWaste = false }: Props) {
  const spanish = locale === "es";
  const number = new Intl.NumberFormat(spanish ? "es-MX" : "en-US", {
    maximumFractionDigits: 2,
  });
  const rows = areaReferenceRows();

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5" aria-labelledby="room-area-reference">
      <h2 id="room-area-reference" className="font-display text-xl font-semibold text-slate-900">
        {spanish
          ? "¿Cuántos pies cuadrados tiene un cuarto de 12 × 12?"
          : "How many square feet is a 12 × 12 room?"}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        {spanish
          ? "Un cuarto de 12 pies de largo por 12 pies de ancho tiene 144 pies cuadrados (aproximadamente 13,38 m²). Multiplique el largo por el ancho, siempre en la misma unidad. Estos ejemplos corresponden a habitaciones rectangulares."
          : "A room measuring 12 feet long by 12 feet wide has 144 square feet (about 13.38 m²). Multiply length by width using the same unit. These examples assume rectangular rooms."}
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            {spanish ? "Tabla de áreas según las dimensiones de la habitación" : "Area by room dimensions"}
          </caption>
          <thead className="bg-slate-50 text-slate-900">
            <tr>
              <th scope="col" className="border-b border-slate-200 px-3 py-2 font-semibold">
                {spanish ? "Largo × ancho (pies)" : "Length × width (ft)"}
              </th>
              <th scope="col" className="border-b border-slate-200 px-3 py-2 font-semibold">
                {spanish ? "Área (pies²)" : "Area (ft²)"}
              </th>
              <th scope="col" className="border-b border-slate-200 px-3 py-2 font-semibold">
                {spanish ? "Área (m²)" : "Area (m²)"}
              </th>
              {showWaste ? (
                <th scope="col" className="border-b border-slate-200 px-3 py-2 font-semibold">
                  {spanish ? "Con 10 % extra (pies²)" : "With 10% extra (ft²)"}
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {rows.map((row) => (
              <tr key={row.dimensions} className="even:bg-slate-50/60">
                <th scope="row" className="border-b border-slate-100 px-3 py-2 font-medium text-slate-900">
                  {row.dimensions}
                </th>
                <td className="border-b border-slate-100 px-3 py-2">{number.format(row.squareFeet)}</td>
                <td className="border-b border-slate-100 px-3 py-2">{number.format(row.squareMeters)}</td>
                {showWaste ? (
                  <td className="border-b border-slate-100 px-3 py-2">
                    {number.format(row.squareFeetWithTenPercentExtra)}
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showWaste ? (
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          {spanish
            ? "El 10 % adicional es solo un ejemplo para cortes y desperdicio. La cantidad adecuada depende del patrón de instalación, el material y las instrucciones del fabricante. Redondee la compra según el tamaño de cada caja."
            : "The additional 10% is an example allowance for cuts and waste, not a universal rule. Actual needs depend on the installation pattern, material, and manufacturer instructions. Round your order to full package quantities."}
        </p>
      ) : (
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          {spanish
            ? "Las medidas son ejemplos; para cuartos irregulares, calcule cada sección por separado y sume las áreas."
            : "Dimensions are examples. For irregular rooms, calculate each rectangular section separately and add the areas."}
        </p>
      )}
    </section>
  );
}

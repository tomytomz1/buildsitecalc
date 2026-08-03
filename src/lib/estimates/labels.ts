import type { Locale } from "@/config/site";

/**
 * Chrome for the saved-estimates surface, kept with the feature for the same
 * reason as `src/lib/workflows/labels.ts`: `en.ts` and `es.ts` are partly
 * generated, and one-feature strings are easier to keep in sync here.
 */
const LABELS = {
  navLabel: {
    en: "Saved estimates",
    es: "Estimados guardados",
  },
  pageTitle: {
    en: "Your saved estimates",
    es: "Sus estimados guardados",
  },
  pageDescription: {
    en: "Estimates you saved on this device. Open one to keep working with the same numbers, or print it as a one-page material sheet to take to the supplier.",
    es: "Estimados que guardó en este dispositivo. Abra uno para seguir trabajando con las mismas cifras, o imprímalo como una hoja de materiales de una página para llevar al proveedor.",
  },
  metaDescription: {
    en: "Open, print or delete the estimates you saved on this device.",
    es: "Abra, imprima o elimine los estimados que guardó en este dispositivo.",
  },
  privacyNote: {
    en: "Saved estimates stay in this browser. Nothing is uploaded, there is no account, and clearing your browser data deletes them.",
    es: "Los estimados guardados permanecen en este navegador. Nada se sube a un servidor, no hay cuenta, y si borra los datos del navegador se eliminan.",
  },
  emptyTitle: {
    en: "Nothing saved yet",
    es: "Todavía no hay nada guardado",
  },
  emptyBody: {
    en: "Run any calculator, then press Save estimate under the results. It will show up here, on this device, ready to reopen or print.",
    es: "Use cualquier calculadora y presione Guardar estimado debajo de los resultados. Aparecerá aquí, en este dispositivo, listo para reabrir o imprimir.",
  },
  emptyCta: {
    en: "Browse the calculators",
    es: "Ver las calculadoras",
  },
  save: {
    en: "Save estimate",
    es: "Guardar estimado",
  },
  saved: {
    en: "Saved",
    es: "Guardado",
  },
  saveFailed: {
    en: "This browser blocked local storage, so the estimate could not be saved.",
    es: "Este navegador bloqueó el almacenamiento local, así que no se pudo guardar el estimado.",
  },
  viewAll: {
    en: "View saved estimates",
    es: "Ver estimados guardados",
  },
  open: {
    en: "Open with these numbers",
    es: "Abrir con estas cifras",
  },
  printSheet: {
    en: "Estimate sheet",
    es: "Hoja del estimado",
  },
  print: {
    en: "Print",
    es: "Imprimir",
  },
  copyLink: {
    en: "Copy link with these numbers",
    es: "Copiar enlace con estas cifras",
  },
  copied: {
    en: "Copied",
    es: "Copiado",
  },
  copyFailed: {
    en: "Could not copy the link.",
    es: "No se pudo copiar el enlace.",
  },
  remove: {
    en: "Delete",
    es: "Eliminar",
  },
  clearAll: {
    en: "Delete all",
    es: "Eliminar todo",
  },
  backToList: {
    en: "All saved estimates",
    es: "Todos los estimados guardados",
  },
  inputsHeading: {
    en: "Your inputs",
    es: "Sus datos",
  },
  resultsHeading: {
    en: "Results",
    es: "Resultados",
  },
  savedOn: {
    en: "Saved",
    es: "Guardado",
  },
  sheetSource: {
    en: "Calculated at",
    es: "Calculado en",
  },
  sheetDisclaimer: {
    en: "Estimate only. Verify quantities against your own measurements and local code before ordering.",
    es: "Solo es un estimado. Verifique las cantidades con sus propias medidas y el código local antes de ordenar.",
  },
  count: {
    en: "saved",
    es: "guardados",
  },
} as const;

export type EstimateLabelKey = keyof typeof LABELS;

export function estimateLabel(locale: Locale, key: EstimateLabelKey): string {
  return LABELS[key][locale === "es" ? "es" : "en"];
}

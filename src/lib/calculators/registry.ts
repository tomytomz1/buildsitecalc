import type { CalculatorCategoryId, CalculatorId } from "./types";

export type RegistryLocale = "en" | "es";

export interface CategoryDefinition {
  id: CalculatorCategoryId;
  slugEn: string;
  slugEs: string;
  icon: string;
  order: number;
}

export interface CalculatorRegistryEntry {
  id: CalculatorId;
  categoryId: CalculatorCategoryId;
  slugEn: string;
  slugEs: string;
  icon: string;
  relatedIds: CalculatorId[];
  popular?: boolean;
  searchTermsEn: string[];
  searchTermsEs: string[];
}

export const CATEGORIES: readonly CategoryDefinition[] = [
  {
    id: "concrete-masonry",
    slugEn: "concrete-masonry",
    slugEs: "concreto-y-mamposteria",
    icon: "BrickWall",
    order: 1,
  },
  {
    id: "painting-walls",
    slugEn: "painting-walls",
    slugEs: "pintura-y-paredes",
    icon: "Paintbrush",
    order: 2,
  },
  {
    id: "flooring-tile",
    slugEn: "flooring-tile",
    slugEs: "pisos-y-azulejos",
    icon: "LayoutGrid",
    order: 3,
  },
  {
    id: "roofing",
    slugEn: "roofing",
    slugEs: "techos",
    icon: "Home",
    order: 4,
  },
  {
    id: "landscaping",
    slugEn: "landscaping",
    slugEs: "jardineria",
    icon: "TreePine",
    order: 5,
  },
  {
    id: "fencing-decking",
    slugEn: "fencing-decking",
    slugEs: "cercas-y-decks",
    icon: "Fence",
    order: 6,
  },
  {
    id: "measurements",
    slugEn: "measurements",
    slugEs: "mediciones",
    icon: "Ruler",
    order: 7,
  },
  {
    id: "heating-insulation",
    slugEn: "heating-insulation",
    slugEs: "calefaccion-y-aislamiento",
    icon: "Thermometer",
    order: 8,
  },
  {
    id: "moving-cleanup",
    slugEn: "moving-cleanup",
    slugEs: "mudanza-y-limpieza",
    icon: "Truck",
    order: 9,
  },
  {
    id: "project-costs",
    slugEn: "project-costs",
    slugEs: "costos-de-proyecto",
    icon: "Calculator",
    order: 10,
  },
] as const;

export const CALCULATORS: readonly CalculatorRegistryEntry[] = [
  {
    id: "concrete-slab",
    categoryId: "concrete-masonry",
    slugEn: "concrete-slab",
    slugEs: "losa-de-concreto",
    icon: "SquareStack",
    relatedIds: ["concrete-bags", "square-footage", "project-budget", "material-cost"],
    popular: true,
    searchTermsEn: [
      "concrete slab",
      "slab calculator",
      "cement slab",
      "foundation slab",
      "patio slab",
      "driveway slab",
      "cubic yards concrete",
      "yd3 concrete",
      "conrete",
      "concete",
      "concret slab",
      "cement",
    ],
    searchTermsEs: [
      "losa de concreto",
      "losas",
      "calculadora de concreto",
      "losas de cemento",
      "losas de patio",
      "cimentación",
      "cimentacion",
      "concreto",
      "cemento",
      "yardas cúbicas",
      "yardas cubicas",
    ],
  },
  {
    id: "concrete-bags",
    categoryId: "concrete-masonry",
    slugEn: "concrete-bags",
    slugEs: "bolsas-de-concreto",
    icon: "Package",
    relatedIds: ["concrete-slab", "project-waste-factor", "material-cost"],
    searchTermsEn: [
      "concrete bags",
      "bag concrete",
      "80 lb bag",
      "60 lb bag",
      "premix concrete",
      "sakrete",
      "quikrete",
      "how many bags",
      "conrete bags",
      "cement bags",
      "post hole concrete",
    ],
    searchTermsEs: [
      "bolsas de concreto",
      "sacos de cemento",
      "concreto premix",
      "premezclado",
      "cuántas bolsas",
      "cuantas bolsas",
      "saco de concreto",
      "poste concreto",
    ],
  },
  {
    id: "paint",
    categoryId: "painting-walls",
    slugEn: "paint",
    slugEs: "pintura",
    icon: "Paintbrush",
    relatedIds: ["square-footage", "drywall", "wallpaper", "project-budget"],
    popular: true,
    searchTermsEn: [
      "paint calculator",
      "how much paint",
      "gallons of paint",
      "wall paint",
      "interior paint",
      "exterior paint",
      "coverage paint",
      "pint",
      "pait",
      "paint coverage",
      "primer",
    ],
    searchTermsEs: [
      "pintura",
      "calculadora de pintura",
      "cuánta pintura",
      "cuanta pintura",
      "galones de pintura",
      "cobertura pintura",
      "pintar paredes",
      "pintura interior",
      "pintura exterior",
      "imprimador",
    ],
  },
  {
    id: "flooring",
    categoryId: "flooring-tile",
    slugEn: "flooring",
    slugEs: "pisos",
    icon: "LayoutGrid",
    relatedIds: ["tile", "square-footage", "project-waste-factor", "material-cost"],
    popular: true,
    searchTermsEn: [
      "flooring calculator",
      "floor calculator",
      "hardwood flooring",
      "laminate flooring",
      "vinyl plank",
      "LVP",
      "square feet flooring",
      "flooring materials",
      "floring",
      "floorng",
      "how much flooring",
    ],
    searchTermsEs: [
      "pisos",
      "calculadora de pisos",
      "piso laminado",
      "piso de vinilo",
      "madera de piso",
      "metros cuadrados piso",
      "cuánto piso",
      "cuanto piso",
      "planchas de piso",
    ],
  },
  {
    id: "tile",
    categoryId: "flooring-tile",
    slugEn: "tile",
    slugEs: "azulejos",
    icon: "Grid2x2",
    relatedIds: ["flooring", "square-footage", "project-waste-factor"],
    popular: true,
    searchTermsEn: [
      "tile calculator",
      "ceramic tile",
      "porcelain tile",
      "backsplash tile",
      "floor tile",
      "how many tiles",
      "tile coverage",
      "til",
      "tiles",
      "subway tile",
    ],
    searchTermsEs: [
      "azulejos",
      "calculadora de azulejos",
      "cerámica",
      "ceramica",
      "porcelanato",
      "mosaico",
      "cuántos azulejos",
      "cuantos azulejos",
      "cobertura azulejo",
      "salpicadero",
    ],
  },
  {
    id: "drywall",
    categoryId: "painting-walls",
    slugEn: "drywall",
    slugEs: "tablaroca",
    icon: "PanelTop",
    relatedIds: ["paint", "square-footage", "wallpaper", "material-cost"],
    searchTermsEn: [
      "drywall calculator",
      "sheetrock",
      "gypsum board",
      "drywall sheets",
      "4x8 drywall",
      "4x12 drywall",
      "dry wall",
      "drywal",
      "hang drywall",
      "mud and tape",
    ],
    searchTermsEs: [
      "drywall",
      "tablaroca",
      "placa de yeso",
      "placas de yeso",
      "calculadora tablaroca",
      "hojas de drywall",
      "yeso",
      "panel de yeso",
      "placa yeso",
    ],
  },
  {
    id: "roofing-shingle",
    categoryId: "roofing",
    slugEn: "roofing-shingle",
    slugEs: "tejas-asfalticas",
    icon: "Home",
    relatedIds: ["square-footage", "project-budget", "material-cost", "project-waste-factor"],
    popular: true,
    searchTermsEn: [
      "roofing calculator",
      "shingle calculator",
      "asphalt shingles",
      "roof shingles",
      "bundles of shingles",
      "squares roofing",
      "roofing square",
      "shingl",
      "roofer",
      "roof pitch",
      "architectural shingles",
    ],
    searchTermsEs: [
      "tejas asfálticas",
      "tejas asfalticas",
      "calculadora de techo",
      "tejas",
      "techado",
      "techo",
      "tejas de asfalto",
      "paquetes de tejas",
      "cuadrados de techo",
      "inclinación techo",
    ],
  },
  {
    id: "mulch",
    categoryId: "landscaping",
    slugEn: "mulch",
    slugEs: "mantillo",
    icon: "Leaf",
    relatedIds: ["topsoil", "gravel", "square-footage"],
    searchTermsEn: [
      "mulch calculator",
      "landscape mulch",
      "bark mulch",
      "cubic yards mulch",
      "how much mulch",
      "garden mulch",
      "mulch bed",
      "mulch",
      "mulch coverage",
      "wood chips",
    ],
    searchTermsEs: [
      "mantillo",
      "calculadora de mantillo",
      "corteza",
      "mulch jardín",
      "mulch jardin",
      "yardas cúbicas mantillo",
      "cuánto mantillo",
      "cuanto mantillo",
      "cama de mantillo",
      "astillas",
    ],
  },
  {
    id: "gravel",
    categoryId: "landscaping",
    slugEn: "gravel",
    slugEs: "grava",
    icon: "Mountain",
    relatedIds: ["mulch", "topsoil", "square-footage"],
    searchTermsEn: [
      "gravel calculator",
      "crushed stone",
      "pea gravel",
      "driveway gravel",
      "gravel tonnage",
      "cubic yards gravel",
      "gravel weight",
      "graval",
      "gravel coverage",
      "aggregate",
    ],
    searchTermsEs: [
      "grava",
      "calculadora de grava",
      "piedra triturada",
      "grava de jardín",
      "grava de jardin",
      "grava para entrada",
      "toneladas grava",
      "yardas cúbicas grava",
      "agregado",
    ],
  },
  {
    id: "topsoil",
    categoryId: "landscaping",
    slugEn: "topsoil",
    slugEs: "tierra-vegetal",
    icon: "Sprout",
    relatedIds: ["mulch", "gravel", "square-footage"],
    searchTermsEn: [
      "topsoil calculator",
      "garden soil",
      "fill dirt",
      "cubic yards soil",
      "how much topsoil",
      "lawn soil",
      "top soil",
      "topsoil",
      "dirt calculator",
      "landscaping soil",
    ],
    searchTermsEs: [
      "tierra vegetal",
      "tierra para jardín",
      "tierra para jardin",
      "calculadora tierra",
      "suelo jardín",
      "suelo jardin",
      "yardas cúbicas tierra",
      "cuánta tierra",
      "cuanta tierra",
      "relleno",
    ],
  },
  {
    id: "fence-material",
    categoryId: "fencing-decking",
    slugEn: "fence-material",
    slugEs: "materiales-de-cerca",
    icon: "Fence",
    relatedIds: ["deck-board", "square-footage", "material-cost", "project-waste-factor"],
    searchTermsEn: [
      "fence calculator",
      "fence material",
      "fence posts",
      "picket fence",
      "privacy fence",
      "chain link fence",
      "fence boards",
      "fenc",
      "fencing",
      "how much fence",
    ],
    searchTermsEs: [
      "materiales de cerca",
      "calculadora de cerca",
      "cerca",
      "postes de cerca",
      "cerca de privacidad",
      "cerca de madera",
      "malla ciclón",
      "malla ciclon",
      "valla",
    ],
  },
  {
    id: "deck-board",
    categoryId: "fencing-decking",
    slugEn: "deck-board",
    slugEs: "tablas-de-deck",
    icon: "Rows3",
    relatedIds: ["fence-material", "board-foot", "material-cost", "project-waste-factor"],
    searchTermsEn: [
      "deck calculator",
      "deck boards",
      "decking material",
      "composite decking",
      "wood deck",
      "deck joists",
      "decking boards",
      "dec",
      "deck board spacing",
      "how many deck boards",
    ],
    searchTermsEs: [
      "tablas de deck",
      "calculadora de deck",
      "terrace decking",
      "terrazas",
      "tablas de terraza",
      "deck compuesto",
      "madera deck",
      "cuántas tablas",
      "cuantas tablas",
      "plataforma",
    ],
  },
  {
    id: "stair",
    categoryId: "fencing-decking",
    slugEn: "stair",
    slugEs: "escaleras",
    icon: "ArrowUpRight",
    relatedIds: ["square-footage", "board-foot", "material-cost"],
    searchTermsEn: [
      "stair calculator",
      "staircase",
      "stair rise run",
      "stair stringer",
      "deck stairs",
      "stair tread",
      "stair code",
      "stairs",
      "stiar",
      "stair dimensions",
    ],
    searchTermsEs: [
      "escaleras",
      "calculadora de escaleras",
      "escalera",
      "huella y contrahuella",
      "escalones",
      "escalera de deck",
      "escalera exterior",
      "dimensiones escalera",
      "peldaños",
      "peldanos",
    ],
  },
  {
    id: "wallpaper",
    categoryId: "painting-walls",
    slugEn: "wallpaper",
    slugEs: "papel-tapiz",
    icon: "ScrollText",
    relatedIds: ["paint", "square-footage", "drywall"],
    searchTermsEn: [
      "wallpaper calculator",
      "how much wallpaper",
      "wallpaper rolls",
      "wall paper",
      "wallpapper",
      "wallcovering",
      "wallpaper pattern repeat",
      "wallpaper coverage",
      "peel and stick wallpaper",
    ],
    searchTermsEs: [
      "papel tapiz",
      "calculadora papel tapiz",
      "papel de pared",
      "rollos de papel tapiz",
      "cuánto papel tapiz",
      "cuanto papel tapiz",
      "revestimiento pared",
      "empapelado",
    ],
  },
  {
    id: "insulation",
    categoryId: "heating-insulation",
    slugEn: "insulation",
    slugEs: "aislamiento",
    icon: "Thermometer",
    relatedIds: ["hvac-btu", "room-volume", "square-footage"],
    searchTermsEn: [
      "insulation calculator",
      "fiberglass insulation",
      "blown insulation",
      "R-value",
      "r value",
      "batt insulation",
      "spray foam",
      "insulaton",
      "insulation batts",
      "attic insulation",
    ],
    searchTermsEs: [
      "aislamiento",
      "calculadora de aislamiento",
      "aislamiento térmico",
      "aislamiento termico",
      "valor R",
      "fibra de vidrio",
      "espuma spray",
      "aislamiento ático",
      "aislamiento atico",
      "lana mineral",
    ],
  },
  {
    id: "hvac-btu",
    categoryId: "heating-insulation",
    slugEn: "hvac-btu",
    slugEs: "btu-hvac",
    icon: "AirVent",
    relatedIds: ["insulation", "room-volume", "square-footage"],
    popular: true,
    searchTermsEn: [
      "hvac calculator",
      "btu calculator",
      "air conditioner size",
      "AC sizing",
      "heating btu",
      "cooling btu",
      "tonnage ac",
      "hvac sizing",
      "btu",
      "manual j",
      "furnace size",
    ],
    searchTermsEs: [
      "btu hvac",
      "calculadora btu",
      "aire acondicionado",
      "tamaño aire acondicionado",
      "tamano aire acondicionado",
      "calefacción btu",
      "calefaccion btu",
      "toneladas ac",
      "dimensionamiento hvac",
      "horno calefacción",
    ],
  },
  {
    id: "moving-truck-size",
    categoryId: "moving-cleanup",
    slugEn: "moving-truck-size",
    slugEs: "tamano-camion-mudanza",
    icon: "Truck",
    relatedIds: ["dumpster-size", "square-footage", "room-volume"],
    searchTermsEn: [
      "moving truck calculator",
      "truck size moving",
      "u-haul size",
      "uhaul truck",
      "moving van",
      "what size truck",
      "moving truck cubic feet",
      "movng truck",
      "rental truck size",
      "10 foot truck",
    ],
    searchTermsEs: [
      "tamaño camión mudanza",
      "tamano camion mudanza",
      "calculadora camión mudanza",
      "camion de mudanza",
      "camión mudanza",
      "u-haul",
      "qué tamaño camión",
      "que tamano camion",
      "mudanza",
      "furgoneta mudanza",
    ],
  },
  {
    id: "dumpster-size",
    categoryId: "moving-cleanup",
    slugEn: "dumpster-size",
    slugEs: "tamano-contenedor",
    icon: "Trash2",
    relatedIds: ["moving-truck-size", "project-waste-factor", "project-budget"],
    searchTermsEn: [
      "dumpster calculator",
      "dumpster size",
      "roll off dumpster",
      "construction dumpster",
      "10 yard dumpster",
      "20 yard dumpster",
      "30 yard dumpster",
      "dumpter",
      "debris removal",
      "waste container",
    ],
    searchTermsEs: [
      "tamaño contenedor",
      "tamano contenedor",
      "calculadora contenedor",
      "contenedor de basura",
      "contenedor construcción",
      "contenedor construccion",
      "contenedor 10 yardas",
      "contenedor 20 yardas",
      "basura obra",
      "retiro escombros",
    ],
  },
  {
    id: "project-waste-factor",
    categoryId: "project-costs",
    slugEn: "project-waste-factor",
    slugEs: "factor-de-desperdicio",
    icon: "Percent",
    relatedIds: ["material-cost", "project-budget", "flooring", "tile"],
    searchTermsEn: [
      "waste factor calculator",
      "material waste",
      "overage calculator",
      "waste percentage",
      "cut waste",
      "extra material",
      "contingency material",
      "wast factor",
      "scrap factor",
      "order extra",
    ],
    searchTermsEs: [
      "factor de desperdicio",
      "desperdicio material",
      "porcentaje desperdicio",
      "margen material",
      "material extra",
      "sobrecompra",
      "contingencia material",
      "merma",
      "factor merma",
    ],
  },
  {
    id: "board-foot",
    categoryId: "measurements",
    slugEn: "board-foot",
    slugEs: "pie-tablero",
    icon: "Ruler",
    relatedIds: ["deck-board", "stair", "material-cost"],
    searchTermsEn: [
      "board foot calculator",
      "board feet",
      "lumber calculator",
      "bf calculator",
      "hardwood lumber",
      "board foot",
      "boardfoot",
      "bord foot",
      "timber volume",
      "wood board feet",
    ],
    searchTermsEs: [
      "pie tablero",
      "pies tablero",
      "calculadora pie tablero",
      "madera lumber",
      "volumen madera",
      "tableros madera",
      "pies de tabla",
      "medida madera",
    ],
  },
  {
    id: "square-footage",
    categoryId: "measurements",
    slugEn: "square-footage",
    slugEs: "pies-cuadrados",
    icon: "Square",
    relatedIds: ["room-volume", "flooring", "paint", "concrete-slab"],
    popular: true,
    searchTermsEn: [
      "square footage calculator",
      "area calculator",
      "sq ft calculator",
      "square feet",
      "room area",
      "floor area",
      "sqft",
      "square foot",
      "squre footage",
      "sq footage",
      "measure area",
    ],
    searchTermsEs: [
      "pies cuadrados",
      "calculadora área",
      "calculadora area",
      "metros cuadrados",
      "superficie habitación",
      "superficie habitacion",
      "área piso",
      "area piso",
      "medir área",
      "medir area",
    ],
  },
  {
    id: "room-volume",
    categoryId: "measurements",
    slugEn: "room-volume",
    slugEs: "volumen-habitacion",
    icon: "Box",
    relatedIds: ["square-footage", "hvac-btu", "insulation", "paint"],
    searchTermsEn: [
      "room volume calculator",
      "cubic feet room",
      "room cubic volume",
      "volume calculator",
      "air volume",
      "cubic footage",
      "room size volume",
      "cubic ft",
      "room cfm",
      "ceiling height volume",
    ],
    searchTermsEs: [
      "volumen habitación",
      "volumen habitacion",
      "pies cúbicos habitación",
      "pies cubicos habitacion",
      "calculadora volumen",
      "volumen cuarto",
      "volumen sala",
      "metros cúbicos",
      "metros cubicos",
      "altura techo volumen",
    ],
  },
  {
    id: "labor-markup",
    categoryId: "project-costs",
    slugEn: "labor-markup",
    slugEs: "margen-mano-obra",
    icon: "BadgeDollarSign",
    relatedIds: ["material-cost", "project-budget", "project-waste-factor"],
    searchTermsEn: [
      "labor markup calculator",
      "markup vs margin",
      "contractor markup",
      "labor margin",
      "profit margin",
      "markup percentage",
      "labor rate",
      "markup margin",
      "labour markup",
      "overhead markup",
    ],
    searchTermsEs: [
      "margen mano de obra",
      "markup mano de obra",
      "margen vs markup",
      "margen contratista",
      "porcentaje markup",
      "margen ganancia",
      "tarifa mano de obra",
      "sobreprecio mano de obra",
      "utilidad contratista",
    ],
  },
  {
    id: "material-cost",
    categoryId: "project-costs",
    slugEn: "material-cost",
    slugEs: "costo-materiales",
    icon: "Receipt",
    relatedIds: ["project-budget", "labor-markup", "project-waste-factor"],
    searchTermsEn: [
      "material cost calculator",
      "material estimate",
      "material list cost",
      "building materials cost",
      "supply cost",
      "material pricing",
      "materials calculator",
      "materiel cost",
      "cost estimate materials",
      "line item cost",
    ],
    searchTermsEs: [
      "costo materiales",
      "calculadora costo materiales",
      "presupuesto materiales",
      "estimado materiales",
      "precio materiales",
      "lista materiales",
      "costo insumos",
      "materiales construcción",
      "materiales construccion",
    ],
  },
  {
    id: "project-budget",
    categoryId: "project-costs",
    slugEn: "project-budget",
    slugEs: "presupuesto-proyecto",
    icon: "Wallet",
    relatedIds: ["material-cost", "labor-markup", "project-waste-factor", "concrete-slab"],
    popular: true,
    searchTermsEn: [
      "project budget calculator",
      "home renovation budget",
      "construction budget",
      "project cost estimate",
      "remodel budget",
      "total project cost",
      "budget estimator",
      "projec budget",
      "project buget",
      "renovation cost",
    ],
    searchTermsEs: [
      "presupuesto proyecto",
      "calculadora presupuesto",
      "presupuesto renovación",
      "presupuesto renovacion",
      "presupuesto construcción",
      "presupuesto construccion",
      "costo total proyecto",
      "estimado proyecto",
      "presupuesto remodelación",
      "presupuesto remodelacion",
    ],
  },
] as const;

const calculatorById = new Map<CalculatorId, CalculatorRegistryEntry>(
  CALCULATORS.map((entry) => [entry.id, entry]),
);

const calculatorsByCategory = new Map<CalculatorCategoryId, CalculatorRegistryEntry[]>();

for (const entry of CALCULATORS) {
  const list = calculatorsByCategory.get(entry.categoryId) ?? [];
  list.push(entry);
  calculatorsByCategory.set(entry.categoryId, list);
}

function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase().replace(/\s+/g, " ");
}

function getSlugForLocale(entry: CalculatorRegistryEntry, locale: RegistryLocale): string {
  return locale === "es" ? entry.slugEs : entry.slugEn;
}

function getCategorySlugForLocale(
  category: CategoryDefinition,
  locale: RegistryLocale,
): string {
  return locale === "es" ? category.slugEs : category.slugEn;
}

function getSearchTermsForLocale(
  entry: CalculatorRegistryEntry,
  locale: RegistryLocale,
): string[] {
  return locale === "es" ? entry.searchTermsEs : entry.searchTermsEn;
}

function matchesSearch(entry: CalculatorRegistryEntry, query: string, locale: RegistryLocale): boolean {
  if (!query) {
    return false;
  }

  const slug = getSlugForLocale(entry, locale);
  if (entry.id.includes(query) || slug.includes(query)) {
    return true;
  }

  const terms = getSearchTermsForLocale(entry, locale);
  return terms.some((term) => {
    const normalizedTerm = term.toLowerCase();
    return normalizedTerm.includes(query) || query.includes(normalizedTerm);
  });
}

export function getCalculatorById(id: CalculatorId): CalculatorRegistryEntry | undefined {
  return calculatorById.get(id);
}

export function getCalculatorBySlug(
  locale: RegistryLocale,
  slug: string,
): CalculatorRegistryEntry | undefined {
  const normalizedSlug = slug.trim().toLowerCase();
  return CALCULATORS.find((entry) => getSlugForLocale(entry, locale) === normalizedSlug);
}

export function getCalculatorsByCategory(
  categoryId: CalculatorCategoryId,
): CalculatorRegistryEntry[] {
  return calculatorsByCategory.get(categoryId) ?? [];
}

export function getAllCalculators(): CalculatorRegistryEntry[] {
  return [...CALCULATORS];
}

export function getAllCategories(): CategoryDefinition[] {
  return [...CATEGORIES].sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(
  locale: RegistryLocale,
  slug: string,
): CategoryDefinition | undefined {
  const normalizedSlug = slug.trim().toLowerCase();
  return CATEGORIES.find(
    (category) => getCategorySlugForLocale(category, locale) === normalizedSlug,
  );
}

export function getRelatedCalculators(id: CalculatorId): CalculatorRegistryEntry[] {
  const entry = calculatorById.get(id);
  if (!entry) {
    return [];
  }

  return entry.relatedIds
    .map((relatedId) => calculatorById.get(relatedId))
    .filter((related): related is CalculatorRegistryEntry => related !== undefined);
}

export function searchCalculators(
  query: string,
  locale: RegistryLocale,
): CalculatorRegistryEntry[] {
  const normalizedQuery = normalizeSearchQuery(query);
  if (!normalizedQuery) {
    return [];
  }

  return CALCULATORS.filter((entry) => matchesSearch(entry, normalizedQuery, locale));
}

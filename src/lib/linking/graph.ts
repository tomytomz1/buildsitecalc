import { CALCULATORS, getCalculatorsByCategory } from "@/lib/calculators/registry";
import type { CalculatorCategoryId, CalculatorId } from "@/lib/calculators/types";
import { WORKFLOWS, type WorkflowId } from "@/lib/workflows/registry";

/**
 * Where a link originates. Categories, workflow hubs and the site-level index
 * pages all contribute real internal links, so counting only
 * calculator-to-calculator edges would badly undercount a page's inbound
 * profile and hide orphans.
 */
export type LinkSource =
  | { kind: "calculator"; id: CalculatorId }
  | { kind: "workflow"; id: WorkflowId }
  | { kind: "category"; id: CalculatorCategoryId }
  | { kind: "site"; id: "home" | "calculators-index" };

/**
 * Position in the reading order of a calculator page, which determines both
 * where the link renders and how much weight it carries:
 * - `prereq`    something you should calculate before this one
 * - `next-step` the natural thing to do with this result
 * - `related`   an alternative or adjacent tool
 * - `inline`    referenced from body copy
 */
export type LinkPlacement = "prereq" | "next-step" | "related" | "inline";

export interface LinkEdge {
  to: CalculatorId;
  /**
   * Anchor text is descriptive and varied rather than the page title. Every
   * inbound link to the paint page saying "Paint Calculator" wastes the
   * strongest on-page relevance signal available; these read as phrases a
   * person would search or say.
   */
  anchorEn: string;
  anchorEs: string;
  placement: LinkPlacement;
}

export interface InboundLink {
  from: LinkSource;
  anchorEn: string;
  anchorEs: string;
  placement: LinkPlacement;
}

/**
 * Calculator-to-calculator edges, authored once here rather than spread across
 * page templates. `relatedIds` in the registry stays as-is for the existing
 * related-tools strip; this graph is the richer layer that carries anchors and
 * intent.
 */
export const LINK_GRAPH: Record<CalculatorId, LinkEdge[]> = {
  "concrete-slab": [
    {
      to: "square-footage",
      anchorEn: "measure the slab area first",
      anchorEs: "medir primero el área de la losa",
      placement: "prereq",
    },
    {
      to: "gravel",
      anchorEn: "gravel for the compacted base course",
      anchorEs: "grava para la base compactada",
      placement: "prereq",
    },
    {
      to: "concrete-bags",
      anchorEn: "how many bags of concrete that is",
      anchorEs: "cuántas bolsas de concreto son",
      placement: "next-step",
    },
    {
      to: "tile",
      anchorEn: "tiling over the finished slab",
      anchorEs: "enchapar sobre la losa terminada",
      placement: "next-step",
    },
    {
      to: "project-waste-factor",
      anchorEn: "how much extra to order for spillage",
      anchorEs: "cuánto pedir de más por derrames",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "price the ready-mix order",
      anchorEs: "cotizar el pedido de premezclado",
      placement: "next-step",
    },
    {
      to: "project-budget",
      anchorEn: "fold it into a full project budget",
      anchorEs: "integrarlo a un presupuesto completo",
      placement: "next-step",
    },
  ],
  "concrete-bags": [
    {
      to: "concrete-slab",
      anchorEn: "slab volume in cubic yards",
      anchorEs: "volumen de losa en yardas cúbicas",
      placement: "prereq",
    },
    {
      to: "square-footage",
      anchorEn: "area of the pour",
      anchorEs: "área de la colada",
      placement: "prereq",
    },
    {
      to: "gravel",
      anchorEn: "base gravel under the pour",
      anchorEs: "grava de base bajo la colada",
      placement: "related",
    },
    {
      to: "project-waste-factor",
      anchorEn: "waste allowance on bagged mix",
      anchorEs: "margen de desperdicio en mezcla en saco",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "cost per bag across the whole order",
      anchorEs: "costo por saco en todo el pedido",
      placement: "next-step",
    },
  ],
  paint: [
    {
      to: "square-footage",
      anchorEn: "wall square footage",
      anchorEs: "pies cuadrados de muro",
      placement: "prereq",
    },
    {
      to: "drywall",
      anchorEn: "patch the board before painting",
      anchorEs: "repare el panel antes de pintar",
      placement: "prereq",
    },
    {
      to: "wallpaper",
      anchorEn: "wallpaper rolls instead of paint",
      anchorEs: "rollos de papel tapiz en vez de pintura",
      placement: "related",
    },
    {
      to: "room-volume",
      anchorEn: "room volume for ventilation and drying",
      anchorEs: "volumen del cuarto para ventilación y secado",
      placement: "related",
    },
    {
      to: "project-waste-factor",
      anchorEn: "extra paint for touch-ups",
      anchorEs: "pintura extra para retoques",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "price the paint and sundries",
      anchorEs: "cotizar la pintura y los insumos",
      placement: "next-step",
    },
    {
      to: "project-budget",
      anchorEn: "budget the whole repaint",
      anchorEs: "presupuestar todo el repintado",
      placement: "next-step",
    },
  ],
  flooring: [
    {
      to: "square-footage",
      anchorEn: "floor square footage",
      anchorEs: "pies cuadrados de piso",
      placement: "prereq",
    },
    {
      to: "tile",
      anchorEn: "tile instead of plank",
      anchorEs: "azulejo en vez de tabla",
      placement: "related",
    },
    {
      to: "project-waste-factor",
      anchorEn: "waste factor for diagonal layouts",
      anchorEs: "factor de desperdicio en tendido diagonal",
      placement: "related",
    },
    {
      to: "stair",
      anchorEn: "stair treads to match the floor",
      anchorEs: "huellas de escalera a juego con el piso",
      placement: "next-step",
    },
    {
      to: "material-cost",
      anchorEn: "cost the flooring order",
      anchorEs: "costear el pedido de piso",
      placement: "next-step",
    },
    {
      to: "project-budget",
      anchorEn: "the full remodel budget",
      anchorEs: "el presupuesto total de remodelación",
      placement: "next-step",
    },
  ],
  tile: [
    {
      to: "square-footage",
      anchorEn: "the area to be tiled",
      anchorEs: "el área a enchapar",
      placement: "prereq",
    },
    {
      to: "drywall",
      anchorEn: "backer board behind wet-area tile",
      anchorEs: "panel de respaldo tras el azulejo húmedo",
      placement: "prereq",
    },
    {
      to: "flooring",
      anchorEn: "plank flooring as an alternative",
      anchorEs: "piso de tabla como alternativa",
      placement: "related",
    },
    {
      to: "stair",
      anchorEn: "tiling stair treads and risers",
      anchorEs: "enchapar huellas y contrahuellas",
      placement: "related",
    },
    {
      to: "project-waste-factor",
      anchorEn: "how much extra tile to order",
      anchorEs: "cuánto azulejo extra pedir",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "price tile, thinset and grout",
      anchorEs: "cotizar azulejo, adhesivo y boquilla",
      placement: "next-step",
    },
  ],
  drywall: [
    {
      to: "square-footage",
      anchorEn: "wall and ceiling area",
      anchorEs: "área de muros y cielo",
      placement: "prereq",
    },
    {
      to: "insulation",
      anchorEn: "insulate before closing the wall",
      anchorEs: "aislar antes de cerrar el muro",
      placement: "prereq",
    },
    {
      to: "paint",
      anchorEn: "gallons to paint the finished walls",
      anchorEs: "galones para pintar los muros terminados",
      placement: "next-step",
    },
    {
      to: "wallpaper",
      anchorEn: "papering over new board",
      anchorEs: "empapelar sobre panel nuevo",
      placement: "next-step",
    },
    {
      to: "project-waste-factor",
      anchorEn: "cut waste on sheet goods",
      anchorEs: "desperdicio de corte en hojas",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "sheet, mud and tape pricing",
      anchorEs: "precio de hojas, pasta y cinta",
      placement: "next-step",
    },
  ],
  "roofing-shingle": [
    {
      to: "square-footage",
      anchorEn: "roof footprint area",
      anchorEs: "área en planta del techo",
      placement: "prereq",
    },
    {
      to: "project-waste-factor",
      anchorEn: "waste for hips, valleys and starter",
      anchorEs: "desperdicio en cumbreras, valles y arranque",
      placement: "related",
    },
    {
      to: "insulation",
      anchorEn: "attic insulation while the roof is open",
      anchorEs: "aislamiento de ático con el techo abierto",
      placement: "related",
    },
    {
      to: "dumpster-size",
      anchorEn: "a dumpster for the tear-off",
      anchorEs: "un contenedor para el retiro",
      placement: "next-step",
    },
    {
      to: "material-cost",
      anchorEn: "cost the shingle order",
      anchorEs: "costear el pedido de tejas",
      placement: "next-step",
    },
    {
      to: "project-budget",
      anchorEn: "budget a roof replacement",
      anchorEs: "presupuestar un cambio de techo",
      placement: "next-step",
    },
  ],
  mulch: [
    {
      to: "square-footage",
      anchorEn: "bed area in square feet",
      anchorEs: "área de la cama en pies cuadrados",
      placement: "prereq",
    },
    {
      to: "topsoil",
      anchorEn: "topsoil underneath the mulch",
      anchorEs: "tierra vegetal debajo del mantillo",
      placement: "prereq",
    },
    {
      to: "gravel",
      anchorEn: "gravel for paths instead of bark",
      anchorEs: "grava para senderos en vez de corteza",
      placement: "related",
    },
    {
      to: "project-waste-factor",
      anchorEn: "order extra for settling",
      anchorEs: "pedir extra por asentamiento",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "compare bulk against bagged pricing",
      anchorEs: "comparar precio a granel y en bolsa",
      placement: "next-step",
    },
  ],
  gravel: [
    {
      to: "square-footage",
      anchorEn: "driveway or path area",
      anchorEs: "área de entrada o sendero",
      placement: "prereq",
    },
    {
      to: "mulch",
      anchorEn: "bark mulch for planting beds",
      anchorEs: "mantillo de corteza para camas de siembra",
      placement: "related",
    },
    {
      to: "topsoil",
      anchorEn: "screened topsoil for the lawn",
      anchorEs: "tierra cribada para el césped",
      placement: "related",
    },
    {
      to: "concrete-slab",
      anchorEn: "concrete poured over the gravel base",
      anchorEs: "concreto colado sobre la base de grava",
      placement: "next-step",
    },
    {
      to: "material-cost",
      anchorEn: "tonnage and delivery pricing",
      anchorEs: "precio por tonelada y entrega",
      placement: "next-step",
    },
  ],
  topsoil: [
    {
      to: "square-footage",
      anchorEn: "lawn area to cover",
      anchorEs: "área de césped a cubrir",
      placement: "prereq",
    },
    {
      to: "mulch",
      anchorEn: "mulch on top once the soil is graded",
      anchorEs: "mantillo encima una vez nivelada la tierra",
      placement: "next-step",
    },
    {
      to: "gravel",
      anchorEn: "gravel where drainage is the problem",
      anchorEs: "grava donde el problema es el drenaje",
      placement: "related",
    },
    {
      to: "project-waste-factor",
      anchorEn: "extra soil because beds settle",
      anchorEs: "tierra extra porque las camas se asientan",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "cost per cubic yard delivered",
      anchorEs: "costo por yarda cúbica entregada",
      placement: "next-step",
    },
  ],
  "fence-material": [
    {
      to: "square-footage",
      anchorEn: "yard perimeter and area",
      anchorEs: "perímetro y área del patio",
      placement: "prereq",
    },
    {
      to: "concrete-bags",
      anchorEn: "concrete for the post holes",
      anchorEs: "concreto para los hoyos de postes",
      placement: "prereq",
    },
    {
      to: "deck-board",
      anchorEn: "deck boards for the same yard",
      anchorEs: "tablas de deck para el mismo patio",
      placement: "related",
    },
    {
      to: "board-foot",
      anchorEn: "board feet of fence lumber",
      anchorEs: "pies tablero de madera de cerca",
      placement: "related",
    },
    {
      to: "topsoil",
      anchorEn: "regrading along the fence line",
      anchorEs: "renivelar a lo largo de la cerca",
      placement: "next-step",
    },
    {
      to: "mulch",
      anchorEn: "mulching the fence line",
      anchorEs: "poner mantillo en la línea de cerca",
      placement: "next-step",
    },
    {
      to: "material-cost",
      anchorEn: "price posts, rails and pickets",
      anchorEs: "cotizar postes, travesaños y tablillas",
      placement: "next-step",
    },
  ],
  "deck-board": [
    {
      to: "square-footage",
      anchorEn: "deck square footage",
      anchorEs: "pies cuadrados de deck",
      placement: "prereq",
    },
    {
      to: "board-foot",
      anchorEn: "board feet of framing lumber",
      anchorEs: "pies tablero de madera de estructura",
      placement: "next-step",
    },
    {
      to: "stair",
      anchorEn: "steps down from the deck to grade",
      anchorEs: "escalones del deck al nivel del suelo",
      placement: "next-step",
    },
    {
      to: "fence-material",
      anchorEn: "railing and perimeter fencing",
      anchorEs: "barandal y cerca perimetral",
      placement: "related",
    },
    {
      to: "mulch",
      anchorEn: "beds framing the finished deck",
      anchorEs: "camas que enmarcan el deck terminado",
      placement: "next-step",
    },
    {
      to: "project-waste-factor",
      anchorEn: "waste on deck board cuts",
      anchorEs: "desperdicio en cortes de tabla",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "composite against pressure-treated pricing",
      anchorEs: "precio de compuesto contra madera tratada",
      placement: "next-step",
    },
  ],
  stair: [
    {
      to: "square-footage",
      anchorEn: "total run and landing area",
      anchorEs: "recorrido total y área de descanso",
      placement: "prereq",
    },
    {
      to: "deck-board",
      anchorEn: "the deck framing the stairs attach to",
      anchorEs: "la estructura de deck donde se fijan",
      placement: "prereq",
    },
    {
      to: "board-foot",
      anchorEn: "lumber for stringers and treads",
      anchorEs: "madera para largueros y huellas",
      placement: "next-step",
    },
    {
      to: "flooring",
      anchorEn: "flooring that matches the treads",
      anchorEs: "piso que combine con las huellas",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "cost the stair lumber",
      anchorEs: "costear la madera de la escalera",
      placement: "next-step",
    },
  ],
  wallpaper: [
    {
      to: "square-footage",
      anchorEn: "wall area to cover",
      anchorEs: "área de muro a cubrir",
      placement: "prereq",
    },
    {
      to: "drywall",
      anchorEn: "a smooth board surface before papering",
      anchorEs: "una superficie de panel lisa antes de empapelar",
      placement: "prereq",
    },
    {
      to: "paint",
      anchorEn: "painting instead of papering",
      anchorEs: "pintar en vez de empapelar",
      placement: "related",
    },
    {
      to: "project-waste-factor",
      anchorEn: "extra rolls for pattern repeat",
      anchorEs: "rollos extra por repetición del patrón",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "price the rolls and adhesive",
      anchorEs: "cotizar los rollos y el adhesivo",
      placement: "next-step",
    },
  ],
  insulation: [
    {
      to: "square-footage",
      anchorEn: "wall and attic area",
      anchorEs: "área de muros y ático",
      placement: "prereq",
    },
    {
      to: "room-volume",
      anchorEn: "room volume for the heat load",
      anchorEs: "volumen del cuarto para la carga térmica",
      placement: "prereq",
    },
    {
      to: "hvac-btu",
      anchorEn: "size the system after insulating",
      anchorEs: "dimensionar el sistema después de aislar",
      placement: "next-step",
    },
    {
      to: "drywall",
      anchorEn: "drywall over the finished batts",
      anchorEs: "tablaroca sobre las mantas terminadas",
      placement: "next-step",
    },
    {
      to: "material-cost",
      anchorEn: "price batts by R-value",
      anchorEs: "cotizar mantas por valor R",
      placement: "next-step",
    },
  ],
  "hvac-btu": [
    {
      to: "square-footage",
      anchorEn: "conditioned square footage",
      anchorEs: "pies cuadrados climatizados",
      placement: "prereq",
    },
    {
      to: "room-volume",
      anchorEn: "room volume in cubic feet",
      anchorEs: "volumen del cuarto en pies cúbicos",
      placement: "prereq",
    },
    {
      to: "insulation",
      anchorEn: "insulation level changes the load",
      anchorEs: "el nivel de aislamiento cambia la carga",
      placement: "prereq",
    },
    {
      to: "project-budget",
      anchorEn: "budget the equipment and install",
      anchorEs: "presupuestar el equipo y la instalación",
      placement: "next-step",
    },
  ],
  "moving-truck-size": [
    {
      to: "room-volume",
      anchorEn: "cubic feet room by room",
      anchorEs: "pies cúbicos cuarto por cuarto",
      placement: "prereq",
    },
    {
      to: "square-footage",
      anchorEn: "the home's square footage",
      anchorEs: "los pies cuadrados de la casa",
      placement: "prereq",
    },
    {
      to: "dumpster-size",
      anchorEn: "a dumpster for what you are not taking",
      anchorEs: "un contenedor para lo que no se lleva",
      placement: "related",
    },
  ],
  "dumpster-size": [
    {
      to: "project-waste-factor",
      anchorEn: "how much debris the waste factor implies",
      anchorEs: "cuánto escombro implica el factor de desperdicio",
      placement: "prereq",
    },
    {
      to: "moving-truck-size",
      anchorEn: "a moving truck for the same job",
      anchorEs: "un camión de mudanza para el mismo trabajo",
      placement: "related",
    },
    {
      to: "roofing-shingle",
      anchorEn: "tear-off debris from a reroof",
      anchorEs: "escombro de retiro en un retechado",
      placement: "related",
    },
    {
      to: "project-budget",
      anchorEn: "disposal as a budget line",
      anchorEs: "la disposición como partida del presupuesto",
      placement: "next-step",
    },
  ],
  "project-waste-factor": [
    {
      to: "flooring",
      anchorEn: "waste on a flooring order",
      anchorEs: "desperdicio en un pedido de piso",
      placement: "related",
    },
    {
      to: "tile",
      anchorEn: "waste on a tile order",
      anchorEs: "desperdicio en un pedido de azulejo",
      placement: "related",
    },
    {
      to: "drywall",
      anchorEn: "waste on sheet goods",
      anchorEs: "desperdicio en hojas",
      placement: "related",
    },
    {
      to: "roofing-shingle",
      anchorEn: "waste on a shingle order",
      anchorEs: "desperdicio en un pedido de tejas",
      placement: "related",
    },
    {
      to: "paint",
      anchorEn: "touch-up allowance on paint",
      anchorEs: "margen de retoque en pintura",
      placement: "related",
    },
    {
      to: "mulch",
      anchorEn: "settling allowance on bulk mulch",
      anchorEs: "margen de asentamiento en mantillo a granel",
      placement: "related",
    },
    {
      to: "topsoil",
      anchorEn: "settling allowance on bulk soil",
      anchorEs: "margen de asentamiento en tierra a granel",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "price the adjusted quantity",
      anchorEs: "cotizar la cantidad ajustada",
      placement: "next-step",
    },
    {
      to: "project-budget",
      anchorEn: "roll the allowance into the budget",
      anchorEs: "integrar el margen al presupuesto",
      placement: "next-step",
    },
  ],
  "board-foot": [
    {
      to: "deck-board",
      anchorEn: "decking counted by the piece",
      anchorEs: "tablas de deck contadas por pieza",
      placement: "related",
    },
    {
      to: "stair",
      anchorEn: "stringers and treads to cut",
      anchorEs: "largueros y huellas a cortar",
      placement: "related",
    },
    {
      to: "fence-material",
      anchorEn: "fence lumber counts",
      anchorEs: "conteo de madera de cerca",
      placement: "related",
    },
    {
      to: "material-cost",
      anchorEn: "price lumber per board foot",
      anchorEs: "precio de madera por pie tablero",
      placement: "next-step",
    },
  ],
  "square-footage": [
    {
      to: "room-volume",
      anchorEn: "add ceiling height for volume",
      anchorEs: "sumar la altura del cielo para el volumen",
      placement: "next-step",
    },
    {
      to: "flooring",
      anchorEn: "turn that area into flooring cartons",
      anchorEs: "convertir esa área en cajas de piso",
      placement: "next-step",
    },
    {
      to: "paint",
      anchorEn: "turn wall area into gallons",
      anchorEs: "convertir el área de muro en galones",
      placement: "next-step",
    },
    {
      to: "tile",
      anchorEn: "turn that area into a tile count",
      anchorEs: "convertir esa área en conteo de azulejos",
      placement: "next-step",
    },
    {
      to: "concrete-slab",
      anchorEn: "turn that area into cubic yards",
      anchorEs: "convertir esa área en yardas cúbicas",
      placement: "next-step",
    },
    {
      to: "drywall",
      anchorEn: "turn wall area into sheet counts",
      anchorEs: "convertir el área de muro en hojas",
      placement: "next-step",
    },
    {
      to: "roofing-shingle",
      anchorEn: "turn roof area into squares and bundles",
      anchorEs: "convertir el área de techo en cuadrados y paquetes",
      placement: "next-step",
    },
    {
      to: "mulch",
      anchorEn: "turn bed area into cubic yards",
      anchorEs: "convertir el área de cama en yardas cúbicas",
      placement: "next-step",
    },
    {
      to: "topsoil",
      anchorEn: "turn lawn area into soil volume",
      anchorEs: "convertir el área de césped en volumen de tierra",
      placement: "next-step",
    },
    {
      to: "stair",
      anchorEn: "stair run that eats into the floor",
      anchorEs: "el recorrido de escalera que ocupa piso",
      placement: "related",
    },
  ],
  "room-volume": [
    {
      to: "square-footage",
      anchorEn: "start from the floor area",
      anchorEs: "parta del área de piso",
      placement: "prereq",
    },
    {
      to: "hvac-btu",
      anchorEn: "size heating and cooling from it",
      anchorEs: "dimensionar calefacción y enfriamiento",
      placement: "next-step",
    },
    {
      to: "insulation",
      anchorEn: "insulation for that volume",
      anchorEs: "aislamiento para ese volumen",
      placement: "next-step",
    },
    {
      to: "moving-truck-size",
      anchorEn: "truck size from total volume",
      anchorEs: "tamaño de camión desde el volumen total",
      placement: "next-step",
    },
    {
      to: "paint",
      anchorEn: "paint for the walls of that room",
      anchorEs: "pintura para los muros de ese cuarto",
      placement: "related",
    },
  ],
  "labor-markup": [
    {
      to: "material-cost",
      anchorEn: "material cost before markup",
      anchorEs: "costo de material antes del margen",
      placement: "prereq",
    },
    {
      to: "project-waste-factor",
      anchorEn: "waste applied before pricing",
      anchorEs: "desperdicio aplicado antes del precio",
      placement: "prereq",
    },
    {
      to: "project-budget",
      anchorEn: "the full budget with labor in it",
      anchorEs: "el presupuesto completo con mano de obra",
      placement: "next-step",
    },
  ],
  "material-cost": [
    {
      to: "project-waste-factor",
      anchorEn: "adjust quantities for waste first",
      anchorEs: "ajuste primero las cantidades por desperdicio",
      placement: "prereq",
    },
    {
      to: "labor-markup",
      anchorEn: "add labor and markup on top",
      anchorEs: "sumar mano de obra y margen encima",
      placement: "next-step",
    },
    {
      to: "project-budget",
      anchorEn: "roll the costs into a budget",
      anchorEs: "integrar los costos a un presupuesto",
      placement: "next-step",
    },
    {
      to: "flooring",
      anchorEn: "flooring quantities to price",
      anchorEs: "cantidades de piso a cotizar",
      placement: "related",
    },
    {
      to: "paint",
      anchorEn: "paint quantities to price",
      anchorEs: "cantidades de pintura a cotizar",
      placement: "related",
    },
    {
      to: "tile",
      anchorEn: "tile quantities to price",
      anchorEs: "cantidades de azulejo a cotizar",
      placement: "related",
    },
    {
      to: "mulch",
      anchorEn: "bulk mulch quantities to price",
      anchorEs: "cantidades de mantillo a granel a cotizar",
      placement: "related",
    },
    {
      to: "topsoil",
      anchorEn: "bulk soil quantities to price",
      anchorEs: "cantidades de tierra a granel a cotizar",
      placement: "related",
    },
    {
      to: "stair",
      anchorEn: "stair lumber to price",
      anchorEs: "madera de escalera a cotizar",
      placement: "related",
    },
  ],
  "project-budget": [
    {
      to: "material-cost",
      anchorEn: "the material subtotal",
      anchorEs: "el subtotal de materiales",
      placement: "prereq",
    },
    {
      to: "labor-markup",
      anchorEn: "labor hours and markup",
      anchorEs: "horas de mano de obra y margen",
      placement: "prereq",
    },
    {
      to: "project-waste-factor",
      anchorEn: "waste on every line item",
      anchorEs: "desperdicio en cada partida",
      placement: "prereq",
    },
    {
      to: "concrete-slab",
      anchorEn: "the concrete line item",
      anchorEs: "la partida de concreto",
      placement: "related",
    },
    {
      to: "paint",
      anchorEn: "the painting line item",
      anchorEs: "la partida de pintura",
      placement: "related",
    },
    {
      to: "flooring",
      anchorEn: "the flooring line item",
      anchorEs: "la partida de piso",
      placement: "related",
    },
    {
      to: "roofing-shingle",
      anchorEn: "the roofing line item",
      anchorEs: "la partida de techo",
      placement: "related",
    },
    {
      to: "tile",
      anchorEn: "the tile line item",
      anchorEs: "la partida de azulejo",
      placement: "related",
    },
    {
      to: "topsoil",
      anchorEn: "the landscaping line item",
      anchorEs: "la partida de jardinería",
      placement: "related",
    },
    {
      to: "stair",
      anchorEn: "the stair line item",
      anchorEs: "la partida de escalera",
      placement: "related",
    },
  ],
};

/**
 * Money pages: the clusters where the Search Console export shows both real
 * impressions and a position worth attacking. These carry the inbound-link
 * budget, which is why the graph test holds them to a higher bar than the rest.
 *
 * `hvac-btu` is deliberately excluded despite having the most impressions (68).
 * It is a head-term cluster owned by far stronger domains, and links spent
 * there would not move it.
 */
export const MONEY_PAGE_IDS: readonly CalculatorId[] = [
  "paint",
  "stair",
  "flooring",
  "tile",
  "mulch",
  "topsoil",
  "square-footage",
  "project-waste-factor",
];

const MIN_INBOUND_MONEY_PAGE = 10;
const MIN_DISTINCT_ANCHORS_MONEY_PAGE = 5;
const MIN_INBOUND_ANY_PAGE = 3;

export const LINK_TARGETS = {
  minInboundMoneyPage: MIN_INBOUND_MONEY_PAGE,
  minDistinctAnchorsMoneyPage: MIN_DISTINCT_ANCHORS_MONEY_PAGE,
  minInboundAnyPage: MIN_INBOUND_ANY_PAGE,
} as const;

/**
 * Inverts `LINK_GRAPH` once at module load and folds in the structural links
 * that categories, workflow hubs and the site index pages contribute. Building
 * this by inversion rather than by hand is the whole point: adding one edge
 * updates both the outbound strip and the target page's "used by" list, and the
 * test catches a page that drops below the threshold.
 */
function buildInboundIndex(): Map<CalculatorId, InboundLink[]> {
  const index = new Map<CalculatorId, InboundLink[]>();

  for (const calc of CALCULATORS) {
    index.set(calc.id, []);
  }

  const push = (to: CalculatorId, link: InboundLink) => {
    const list = index.get(to);
    if (list) list.push(link);
  };

  for (const [fromId, edges] of Object.entries(LINK_GRAPH) as [
    CalculatorId,
    LinkEdge[],
  ][]) {
    for (const edge of edges) {
      push(edge.to, {
        from: { kind: "calculator", id: fromId },
        anchorEn: edge.anchorEn,
        anchorEs: edge.anchorEs,
        placement: edge.placement,
      });
    }
  }

  // Every calculator is listed on its category hub and on the calculators
  // index, and popular ones are also linked from the home page.
  for (const calc of CALCULATORS) {
    push(calc.id, {
      from: { kind: "category", id: calc.categoryId },
      anchorEn: `${calc.slugEn.replace(/-/g, " ")} calculator`,
      anchorEs: `calculadora de ${calc.slugEs.replace(/-/g, " ")}`,
      placement: "related",
    });

    push(calc.id, {
      from: { kind: "site", id: "calculators-index" },
      anchorEn: `${calc.slugEn.replace(/-/g, " ")} calculator`,
      anchorEs: `calculadora de ${calc.slugEs.replace(/-/g, " ")}`,
      placement: "related",
    });

    if (calc.popular) {
      push(calc.id, {
        from: { kind: "site", id: "home" },
        anchorEn: `popular: ${calc.slugEn.replace(/-/g, " ")}`,
        anchorEs: `populares: ${calc.slugEs.replace(/-/g, " ")}`,
        placement: "related",
      });
    }
  }

  for (const workflow of WORKFLOWS) {
    for (const step of workflow.steps) {
      push(step.calculatorId, {
        from: { kind: "workflow", id: workflow.id },
        anchorEn: step.purposeEn,
        anchorEs: step.purposeEs,
        placement: "next-step",
      });
    }
  }

  return index;
}

const inboundIndex = buildInboundIndex();

export function getOutboundLinks(id: CalculatorId): LinkEdge[] {
  return LINK_GRAPH[id] ?? [];
}

export function getInboundLinks(id: CalculatorId): InboundLink[] {
  return inboundIndex.get(id) ?? [];
}

export function getOutboundByPlacement(
  id: CalculatorId,
  placement: LinkPlacement,
): LinkEdge[] {
  return getOutboundLinks(id).filter((edge) => edge.placement === placement);
}

export function isMoneyPage(id: CalculatorId): boolean {
  return MONEY_PAGE_IDS.includes(id);
}

export interface LinkGraphAudit {
  id: CalculatorId;
  inbound: number;
  outbound: number;
  distinctAnchorsEn: number;
  isMoneyPage: boolean;
  categorySiblings: number;
}

/** Snapshot used by the graph test and useful for eyeballing coverage. */
export function auditLinkGraph(): LinkGraphAudit[] {
  return CALCULATORS.map((calc) => {
    const inbound = getInboundLinks(calc.id);
    return {
      id: calc.id,
      inbound: inbound.length,
      outbound: getOutboundLinks(calc.id).length,
      distinctAnchorsEn: new Set(inbound.map((link) => link.anchorEn)).size,
      isMoneyPage: isMoneyPage(calc.id),
      categorySiblings: getCalculatorsByCategory(calc.categoryId).length,
    };
  });
}

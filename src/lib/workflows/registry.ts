import type { CalculatorId } from "@/lib/calculators/types";

export type WorkflowId =
  "deck-build" | "room-repaint" | "bathroom-tile" | "driveway-concrete";

export interface WorkflowStep {
  calculatorId: CalculatorId;
  /** Why this step comes here, used as the step's supporting line. */
  purposeEn: string;
  purposeEs: string;
}

export interface WorkflowDefinition {
  id: WorkflowId;
  slugEn: string;
  slugEs: string;
  icon: string;
  order: number;
  /** Calculators in the order the work actually happens on site. */
  steps: WorkflowStep[];
}

/**
 * Project workflows chain existing calculators in build order.
 *
 * This is the one thing the large calculator sites structurally do not do:
 * they own individual head terms but nothing ties the tools together into the
 * sequence a real project follows. Each workflow is simultaneously a linking
 * hub, a retention surface, and a citable asset for outreach.
 *
 * Adding a workflow costs a registry entry plus bilingual copy. It adds no new
 * calculator engine, which is the expensive part.
 */
export const WORKFLOWS: readonly WorkflowDefinition[] = [
  {
    id: "deck-build",
    slugEn: "build-a-deck",
    slugEs: "construir-un-deck",
    icon: "Rows3",
    order: 1,
    steps: [
      {
        calculatorId: "square-footage",
        purposeEn: "Establish the deck footprint before pricing anything.",
        purposeEs: "Defina la superficie del deck antes de cotizar nada.",
      },
      {
        calculatorId: "concrete-bags",
        purposeEn: "Footings come first: concrete for the post holes.",
        purposeEs: "Las bases van primero: concreto para los hoyos de postes.",
      },
      {
        calculatorId: "deck-board",
        purposeEn: "Board count from the framed area, including the gap.",
        purposeEs: "Conteo de tablas desde el área estructurada, con la separación.",
      },
      {
        calculatorId: "board-foot",
        purposeEn: "Convert framing lumber to board feet for the quote.",
        purposeEs: "Convierta la madera de estructura a pies tablero para la cotización.",
      },
      {
        calculatorId: "stair",
        purposeEn: "Steps down to grade, with riser count and stringer length.",
        purposeEs: "Escalones hasta el nivel, con contrahuellas y largo de larguero.",
      },
      {
        calculatorId: "fence-material",
        purposeEn: "Railing and any fence closing the yard around it.",
        purposeEs: "Barandal y la cerca que cierre el patio alrededor.",
      },
      {
        calculatorId: "mulch",
        purposeEn: "Finish the beds that frame the finished deck.",
        purposeEs: "Termine las camas que enmarcan el deck terminado.",
      },
      {
        calculatorId: "material-cost",
        purposeEn: "Price every quantity above as one material list.",
        purposeEs: "Cotice todas las cantidades anteriores como una lista de materiales.",
      },
      {
        calculatorId: "project-budget",
        purposeEn: "Add labor, markup and contingency for the final number.",
        purposeEs: "Sume mano de obra, margen y contingencia para la cifra final.",
      },
    ],
  },
  {
    id: "room-repaint",
    slugEn: "repaint-a-room",
    slugEs: "repintar-una-habitacion",
    icon: "Paintbrush",
    order: 2,
    steps: [
      {
        calculatorId: "square-footage",
        purposeEn: "Wall area from the room perimeter and ceiling height.",
        purposeEs: "Área de muro desde el perímetro y la altura del cielo.",
      },
      {
        calculatorId: "room-volume",
        purposeEn: "Volume matters for ventilation and drying time.",
        purposeEs: "El volumen importa para la ventilación y el secado.",
      },
      {
        calculatorId: "drywall",
        purposeEn: "Patch or replace board before any paint goes on.",
        purposeEs: "Repare o cambie el panel antes de aplicar pintura.",
      },
      {
        calculatorId: "paint",
        purposeEn: "Gallons for the coats you actually plan to apply.",
        purposeEs: "Galones para las manos que realmente piensa aplicar.",
      },
      {
        calculatorId: "wallpaper",
        purposeEn: "Or rolls, if one wall is going to be papered instead.",
        purposeEs: "O rollos, si va a empapelar un muro en vez de pintarlo.",
      },
      {
        calculatorId: "project-waste-factor",
        purposeEn: "Touch-up allowance so you are not colour-matching later.",
        purposeEs: "Margen de retoque para no tener que igualar el color después.",
      },
      {
        calculatorId: "material-cost",
        purposeEn: "Paint, primer, sundries and board as one list.",
        purposeEs: "Pintura, sellador, insumos y panel en una sola lista.",
      },
      {
        calculatorId: "project-budget",
        purposeEn: "Total the room, with labor if you are hiring it out.",
        purposeEs: "Totalice el cuarto, con mano de obra si va a contratarla.",
      },
    ],
  },
  {
    id: "bathroom-tile",
    slugEn: "tile-a-bathroom",
    slugEs: "enchapar-un-bano",
    icon: "Grid2x2",
    order: 3,
    steps: [
      {
        calculatorId: "square-footage",
        purposeEn: "Floor and wall areas, counted separately.",
        purposeEs: "Áreas de piso y muro, contadas por separado.",
      },
      {
        calculatorId: "drywall",
        purposeEn: "Backer board behind wet-area tile, not standard board.",
        purposeEs: "Panel de respaldo tras el azulejo en zona húmeda.",
      },
      {
        calculatorId: "tile",
        purposeEn: "Tile count and coverage for floor and surround.",
        purposeEs: "Conteo y cobertura de azulejo para piso y muros.",
      },
      {
        calculatorId: "project-waste-factor",
        purposeEn: "Small rooms cut a lot: this is where 10% is not enough.",
        purposeEs: "Los cuartos pequeños cortan mucho: aquí 10% no alcanza.",
      },
      {
        calculatorId: "flooring",
        purposeEn: "Compare against plank if tile is still undecided.",
        purposeEs: "Compare contra tabla si el azulejo no está decidido.",
      },
      {
        calculatorId: "material-cost",
        purposeEn: "Tile, thinset, grout, board and trim as one list.",
        purposeEs: "Azulejo, adhesivo, boquilla, panel y remates en una lista.",
      },
      {
        calculatorId: "project-budget",
        purposeEn: "Bathrooms run over more than any other room. Budget it.",
        purposeEs: "Los baños se pasan de presupuesto más que otros cuartos.",
      },
    ],
  },
  {
    id: "driveway-concrete",
    slugEn: "pour-a-concrete-driveway",
    slugEs: "colar-una-entrada-de-concreto",
    icon: "SquareStack",
    order: 4,
    steps: [
      {
        calculatorId: "square-footage",
        purposeEn: "Driveway area, measured at the forms.",
        purposeEs: "Área de la entrada, medida en la cimbra.",
      },
      {
        calculatorId: "gravel",
        purposeEn: "Compacted base course under the slab.",
        purposeEs: "Base compactada de grava bajo la losa.",
      },
      {
        calculatorId: "concrete-slab",
        purposeEn: "Cubic yards for a ready-mix order.",
        purposeEs: "Yardas cúbicas para un pedido de premezclado.",
      },
      {
        calculatorId: "concrete-bags",
        purposeEn: "Or bag count, if the pour is small enough to mix.",
        purposeEs: "O conteo de sacos, si la colada es pequeña para mezclar.",
      },
      {
        calculatorId: "topsoil",
        purposeEn: "Regrade and reseed the edges once the forms come off.",
        purposeEs: "Renivele y resiembre los bordes al quitar la cimbra.",
      },
      {
        calculatorId: "dumpster-size",
        purposeEn: "Spoil and any demolished slab have to go somewhere.",
        purposeEs: "El material excavado y la losa demolida tienen que salir.",
      },
      {
        calculatorId: "material-cost",
        purposeEn: "Concrete, base, rebar and forms priced together.",
        purposeEs: "Concreto, base, varilla y cimbra cotizados juntos.",
      },
      {
        calculatorId: "project-budget",
        purposeEn: "Add pump or short-load fees before you commit.",
        purposeEs: "Sume cargos por bomba o carga corta antes de comprometerse.",
      },
    ],
  },
] as const;

const workflowById = new Map<WorkflowId, WorkflowDefinition>(
  WORKFLOWS.map((workflow) => [workflow.id, workflow]),
);

export function getAllWorkflows(): WorkflowDefinition[] {
  return [...WORKFLOWS].sort((a, b) => a.order - b.order);
}

export function getWorkflowById(id: WorkflowId): WorkflowDefinition | undefined {
  return workflowById.get(id);
}

export function getWorkflowBySlug(
  locale: "en" | "es",
  slug: string,
): WorkflowDefinition | undefined {
  const normalized = slug.trim().toLowerCase();
  return WORKFLOWS.find(
    (workflow) => (locale === "es" ? workflow.slugEs : workflow.slugEn) === normalized,
  );
}

/** Workflows that include a given calculator, for "used by" links on its page. */
export function getWorkflowsUsingCalculator(id: CalculatorId): WorkflowDefinition[] {
  return getAllWorkflows().filter((workflow) =>
    workflow.steps.some((step) => step.calculatorId === id),
  );
}

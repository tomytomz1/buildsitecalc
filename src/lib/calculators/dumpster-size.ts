import { round } from "@/lib/utils";
import { fail, ok, type CalcOutput } from "./types";

export type DumpsterProjectType =
  | "garageCleanout"
  | "bathroomRemodel"
  | "kitchenRemodel"
  | "deckRemoval"
  | "roofingShingles"
  | "wholeHouseCleanout"
  | "custom";

export interface DumpsterSizeInputs {
  projectType: DumpsterProjectType;
  /** Custom cubic-yard estimate when projectType is 'custom'. */
  cubicYards?: number;
}

export const defaultInputs: DumpsterSizeInputs = {
  projectType: "kitchenRemodel",
};

/** Preset debris volumes in cubic yards. */
const PROJECT_VOLUMES_YD3: Record<Exclude<DumpsterProjectType, "custom">, number> = {
  garageCleanout: 4,
  bathroomRemodel: 6,
  kitchenRemodel: 10,
  deckRemoval: 12,
  roofingShingles: 15,
  wholeHouseCleanout: 30,
};

const DUMPSTER_SIZES_YD3 = [10, 20, 30, 40] as const;

function recommendDumpster(volumeYd3: number): number {
  for (const size of DUMPSTER_SIZES_YD3) {
    if (volumeYd3 <= size) {
      return size;
    }
  }
  return DUMPSTER_SIZES_YD3[DUMPSTER_SIZES_YD3.length - 1];
}

export function calculate(inputs: DumpsterSizeInputs): CalcOutput<DumpsterSizeInputs> {
  const errors: Record<string, string> = {};

  if (inputs.projectType === "custom") {
    if (!Number.isFinite(inputs.cubicYards) || inputs.cubicYards! <= 0) {
      errors.cubicYards = "positive";
    }
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const volumeYd3 =
    inputs.projectType === "custom"
      ? inputs.cubicYards!
      : PROJECT_VOLUMES_YD3[inputs.projectType];

  const recommendedSizeYd3 = recommendDumpster(volumeYd3);
  const volumeM3 = volumeYd3 * 0.764554857984;

  return ok(
    inputs,
    [
      {
        key: "recommendedDumpster",
        value: `${recommendedSizeYd3} yd³`,
        primary: true,
      },
      {
        key: "recommendedSizeYd3",
        value: recommendedSizeYd3,
        unit: "yd³",
        primary: true,
        format: "integer",
      },
    ],
    [
      {
        key: "estimatedVolumeYd3",
        value: round(volumeYd3, 2),
        unit: "yd³",
        format: "number",
      },
      {
        key: "estimatedVolumeM3",
        value: round(volumeM3, 2),
        unit: "m³",
        format: "number",
      },
    ],
    {
      availableSizes: [...DUMPSTER_SIZES_YD3],
      projectPresets: PROJECT_VOLUMES_YD3,
    },
  );
}

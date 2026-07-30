import type { Dictionary } from "./types";

export const en: Dictionary = {
  common: {
    nav: {
      calculators: "Calculators",
      categories: "Categories",
      home: "Home",
    },
    buttons: {
      calculate: "Calculate",
      reset: "Reset",
      copy: "Copy results",
      print: "Print",
      share: "Share",
      copyLink: "Copy link",
      search: "Search",
      language: "Language",
      skipToContent: "Skip to main content",
      learnMore: "Learn more",
    },
    labels: {
      results: "Results",
      primaryResults: "Primary results",
      secondaryResults: "Additional details",
      assumptions: "Assumptions",
      formula: "Formula",
      workedExample: "Worked example",
      howToMeasure: "How to measure",
      commonMistakes: "Common mistakes",
      faqs: "Frequently asked questions",
      related: "Related calculators",
      advertisement: "Advertisement",
      recentlyViewed: "Recently viewed",
      popular: "Popular calculators",
      allCalculators: "All calculators",
      categories: "Categories",
      noResults: "No calculators match your search. Try a different term.",
    },
    errors: {
      required: "This field is required.",
      positive: "Enter a number greater than zero.",
      invalid: "Enter a valid value.",
    },
    resultLabels: {
      volumeYd3: "Volume (cubic yards)",
      volumeM3: "Volume (cubic meters)",
      volumeFt3: "Volume (cubic feet)",
      baseVolumeYd3: "Base volume (yd³, before waste)",
      gallons: "Gallons needed",
      gallonsExact: "Exact gallons (before rounding)",
      bags: "Bags",
      bagsNeeded: "Bags needed",
      bagVolumeFt3: "Volume per bag",
      tilesNeeded: "Tiles needed",
      tileAreaFt2: "Area per tile",
      sheetsNeeded: "Drywall sheets needed",
      sheetAreaFt2: "Area per sheet",
      squares: "Roofing squares",
      bundles: "Shingle bundles",
      sellingPrice: "Selling price",
      grandTotal: "Grand total",
      subtotal: "Subtotal",
      total: "Total",
      materialsSubtotal: "Materials subtotal",
      laborCost: "Labor cost",
      permitsCost: "Permits & fees",
      contingency: "Contingency allowance",
      contingencyPercent: "Contingency (%)",
      profit: "Profit",
      effectiveMarkup: "Effective markup",
      effectiveMargin: "Effective margin",
      jobCost: "Job cost",
      areaFt2: "Area (ft²)",
      areaM2: "Area (m²)",
      areaWithWasteFt2: "Area with waste (ft²)",
      areaWithWasteM2: "Area with waste (m²)",
      baseAreaFt2: "Base area (ft²)",
      baseAreaM2: "Base area (m²)",
      totalAreaFt2: "Total area (ft²)",
      totalAreaM2: "Total area (m²)",
      wastePercent: "Waste factor (%)",
      wasteAmount: "Waste allowance",
      baseQuantity: "Base quantity",
      adjustedQuantity: "Quantity with waste",
      wallAreaFt2: "Gross wall area",
      paintableAreaFt2: "Paintable area",
      coats: "Number of coats",
      packsNeeded: "Cartons / packs needed",
      posts: "Fence posts",
      rails: "Horizontal rails",
      pickets: "Pickets",
      sections: "Fence sections",
      fenceLengthM: "Fence length (m)",
      postSizeNote: "Post size note",
      roofAreaFt2: "Roof area (ft²)",
      roofAreaWithWasteFt2: "Roof area with waste (ft²)",
      boardsNeeded: "Deck boards needed",
      deckAreaFt2: "Deck surface (ft²)",
      deckAreaM2: "Deck surface (m²)",
      deckAreaYd2: "Deck surface (yd²)",
      rows: "Board rows",
      boardsPerRow: "Boards per row",
      recommendedDumpster: "Recommended dumpster",
      recommendedSizeYd3: "Recommended size (yd³)",
      estimatedVolumeYd3: "Estimated debris (yd³)",
      estimatedVolumeM3: "Estimated debris (m³)",
      rollsNeeded: "Wallpaper rolls",
      netWallArea: "Net wall area (ft²)",
      netWallAreaM2: "Net wall area (m²)",
      rollCoverageFt2: "Coverage per roll (ft²)",
      perimeter: "Wall perimeter",
      battsNeeded: "Insulation batts",
      areaWithWaste: "Area with waste",
      coveragePerBatt: "Coverage per batt",
      netArea: "Net area",
      rValue: "R-value (informational)",
      estimatedBtu: "Estimated BTU/hr",
      tonnage: "AC tonnage",
      floorAreaSqFt: "Floor area (ft²)",
      volumeCuFt: "Room volume (ft³)",
      baseBtu: "Base BTU before factors",
      recommendedTruck: "Recommended truck size",
      recommendedVolumeFt3: "Recommended cargo volume (ft³)",
      estimatedVolumeFt3: "Estimated load volume (ft³)",
      numberOfRisers: "Number of risers",
      numberOfTreads: "Number of treads",
      actualRiserHeight: "Actual riser height",
      totalRun: "Total horizontal run",
      totalRiseIn: "Total rise",
      treadDepthIn: "Tread depth",
      totalRunFt: "Total run (ft)",
      stringerLength: "Stringer length (approx.)",
      stairWidth: "Stair width",
      tons: "Weight (short tons)",
      massKg: "Weight (kg)",
      densityKgM3: "Material density",
      depthM: "Depth (m)",
      boardFeet: "Board feet",
      lengthIn: "Length (in)",
      volumeLiters: "Volume (liters)",
      boardFeetPerPiece: "Board feet per piece",
      tax: "Sales tax",
      taxPercent: "Tax rate (%)",
    },
    inputLabels: {
      length: "Length",
      width: "Width",
      height: "Height",
      thickness: "Thickness",
      area: "Area",
      depth: "Depth",
      wastePercent: "Waste / overage (%)",
      lengthUnit: "Length unit",
      widthUnit: "Width unit",
      heightUnit: "Height unit",
      thicknessUnit: "Thickness unit",
      areaUnit: "Area unit",
      depthUnit: "Depth unit",
      volume: "Volume",
      volumeUnit: "Volume unit",
      bagSize: "Bag size (lb)",
      bagVolumeFt3: "Bag volume (ft³)",
      wallArea: "Wall area",
      wallAreaUnit: "Wall area unit",
      doorArea: "Door area to deduct",
      doorAreaUnit: "Door area unit",
      windowArea: "Window area to deduct",
      windowAreaUnit: "Window area unit",
      doors: "Number of doors",
      windows: "Number of windows",
      coats: "Number of coats",
      coverageRate: "Coverage per gallon",
      coverageRateUnit: "Coverage unit",
      packCoverage: "Coverage per carton",
      packCoverageUnit: "Carton coverage unit",
      tileLength: "Tile length",
      tileWidth: "Tile width",
      tileLengthUnit: "Tile length unit",
      tileWidthUnit: "Tile width unit",
      groutGap: "Grout gap",
      groutGapUnit: "Grout gap unit",
      sheetSize: "Sheet size",
      roofArea: "Roof area",
      roofAreaUnit: "Roof area unit",
      pitchFactor: "Pitch factor",
      pitchRise: "Pitch rise",
      pitchRun: "Pitch run (horizontal)",
      bundlesPerSquare: "Bundles per square",
      densityKey: "Gravel type",
      customDensityKgM3: "Custom density (kg/m³)",
      fenceLength: "Fence length",
      postSpacing: "Post spacing",
      railsPerSection: "Rails per section",
      picketWidth: "Picket width",
      picketWidthUnit: "Picket width unit",
      picketGap: "Gap between pickets",
      picketGapUnit: "Picket gap unit",
      postSizeNote: "Post size (note)",
      deckLength: "Deck length",
      deckWidth: "Deck width",
      boardWidth: "Board width",
      boardWidthUnit: "Board width unit",
      boardLength: "Board length",
      gap: "Gap between boards",
      gapUnit: "Gap unit",
      totalRise: "Total rise (floor to floor)",
      riserHeight: "Target / max riser height",
      treadDepth: "Tread depth",
      stairWidth: "Stair width (optional)",
      lengthUnitHint:
        "All stair lengths share one unit. Changing the unit converts values so inches are never read as feet.",
      wallPerimeter: "Wall perimeter",
      wallHeight: "Wall height",
      openingsArea: "Openings to subtract",
      openingsAreaUnit: "Openings unit",
      rollCoverage: "Roll coverage",
      rollCoverageUnit: "Roll coverage unit",
      rollWidth: "Roll width",
      rollLength: "Roll length",
      rollLengthUnit: "Roll length unit",
      patternRepeat: "Pattern repeat",
      patternRepeatUnit: "Pattern repeat unit",
      battWidth: "Batt width",
      battWidthUnit: "Batt width unit",
      battLength: "Batt length",
      battLengthUnit: "Batt length unit",
      rValue: "R-value",
      btuPerSqFt: "BTU per ft²",
      climateFactor: "Climate factor",
      insulationFactor: "Insulation factor",
      sunFactor: "Sun exposure factor",
      bedrooms: "Number of bedrooms",
      cubicFeet: "Inventory volume (ft³)",
      projectType: "Project type",
      cubicYards: "Custom debris volume (yd³)",
      baseQuantity: "Base quantity",
      quantity: "Quantity (pieces)",
      jobCost: "Job cost ($)",
      mode: "Markup or margin",
      percent: "Percentage",
      lineItems: "Line items",
      taxPercent: "Sales tax (%)",
      materials: "Material line items",
      laborCost: "Labor cost ($)",
      permitsCost: "Permits & fees ($)",
      contingencyPercent: "Contingency (%)",
      entryMode: "Entry method",
      openings: "Openings to deduct",
      tileSize: "Tile size",
      pitch: "Roof pitch",
      pitchFactorHint: "Pitch multiplier applied to the footprint area",
      densityLoose: "Loose (uncompacted)",
      densityCompacted: "Compacted",
      densityCrushed: "Crushed stone",
      perimeterMode: "Perimeter entry",
      roll: "Roll",
      garageCleanout: "Garage cleanout",
      bathroomRemodel: "Bathroom remodel",
      kitchenRemodel: "Kitchen remodel",
      deckRemoval: "Deck removal",
      roofingShingles: "Roofing tear-off",
      wholeHouseCleanout: "Whole-house cleanout",
      custom: "Custom",
      modeMarkup: "Markup on cost",
      modeMargin: "Margin on price",
    },
    uiLabels: {
      emptyResults: "Enter values and calculate to see results.",
      addRow: "Add row",
      addRowRoom: "Add room",
      addRowWall: "Add wall",
      addRowLineItem: "Add line item",
      addRowMaterial: "Add material",
      removeRow: "Remove",
      room: "Room",
      wall: "Wall",
      lineItem: "Item",
      material: "Material",
      copied: "Copied",
      shareFailed:
        "Sharing is not available in this browser. The link was copied instead.",
      parsedValue: "Parsed value",
      modeVolume: "Volume",
      modeDimensions: "Dimensions",
      modeRoomDimensions: "Room dimensions",
      modeFootprintPitch: "Footprint + pitch",
      modeArea: "Area",
      modeWallArea: "Wall area",
      modeRoofArea: "Roof area",
      modePerimeter: "Total perimeter",
      modeWalls: "Individual walls",
      modeBedrooms: "Bedrooms",
      modeCubicFeet: "Cubic feet",
    },
  },

  home: {
    title: "Home improvement calculators that show their math",
    subtitle:
      "Estimate concrete, paint, flooring, roofing, landscaping, fencing, HVAC, moving, and project costs with transparent formulas — in US customary and metric units.",
    searchPlaceholder: "Search calculators (e.g., concrete, paint, shingles…)",
    howEstimatesWork: {
      title: "How our estimates work",
      body: "Every calculator uses published industry assumptions — coverage rates, bag yields, waste factors, and unit conversions — and shows the formula so you can verify the math. Results are planning estimates, not substitutes for on-site measurement, supplier quotes, or professional engineering.",
    },
    categoriesTitle: "Browse by category",
    popularTitle: "Popular calculators",
    recentlyTitle: "Recently viewed",
  },

  categories: {
    "concrete-masonry": {
      title: "Concrete & Masonry",
      description:
        "Slab volume, bag counts, and cubic-yard estimates for patios, driveways, footings, and post holes.",
    },
    "painting-walls": {
      title: "Painting & Walls",
      description:
        "Paint coverage, drywall sheets, and wallpaper rolls for interior and exterior wall projects.",
    },
    "flooring-tile": {
      title: "Flooring & Tile",
      description:
        "Square footage, waste allowance, and material counts for hardwood, laminate, vinyl, and ceramic tile.",
    },
    roofing: {
      title: "Roofing",
      description:
        "Shingle squares and bundle counts with pitch adjustment for asphalt roof replacement projects.",
    },
    landscaping: {
      title: "Landscaping",
      description:
        "Mulch, gravel, and topsoil volumes for garden beds, paths, driveways, and lawn grading.",
    },
    "fencing-decking": {
      title: "Fencing & Decking",
      description:
        "Fence posts, pickets, rails, deck boards, and stair geometry for outdoor structures.",
    },
    measurements: {
      title: "Measurements",
      description:
        "Square footage, room volume, and board-foot lumber calculations for layout and ordering.",
    },
    "heating-insulation": {
      title: "Heating & Insulation",
      description:
        "Insulation batts and HVAC BTU sizing helpers for comfort and energy-efficiency planning.",
    },
    "moving-cleanup": {
      title: "Moving & Cleanup",
      description:
        "Moving truck and dumpster size guides for relocations and renovation debris removal.",
    },
    "project-costs": {
      title: "Project Costs",
      description:
        "Material lists, labor markup, waste factors, and full project budget worksheets.",
    },
  },

  calculators: {
    "concrete-slab": {
      title: "Concrete Slab Calculator",
      description:
        "Estimate cubic yards of concrete for a rectangular slab, patio, driveway, or footing. Enter length, width, and thickness with an optional waste allowance for spillage and over-excavation.",
      shortDescription: "Cubic yards of concrete for slabs and patios.",
      formula:
        "Volume = length × width × thickness (converted to cubic yards). The result adds your waste percentage: ordered volume = base volume × (1 + waste% ÷ 100).",
      assumptions: [
        "Slab is a uniform rectangular prism with no steps or thickened edges.",
        "Thickness is consistent across the entire pour area.",
        "Default waste factor is 10% for typical residential pours.",
        "1 cubic yard = 27 cubic feet.",
        "Does not include gravel base, rebar, or pump truck fees.",
      ],
      workedExample: {
        title: "10 ft × 10 ft patio, 4 in thick",
        body: "Area = 10 × 10 = 100 ft². Thickness 4 in = 0.333 ft. Volume = 100 × 0.333 = 33.3 ft³ = 1.23 yd³. With 10% waste: 1.23 × 1.10 ≈ 1.36 yd³ to order.",
      },
      sections: [
        {
          heading: "How do you calculate concrete for a slab in cubic yards?",
          paragraphs: [
            "Multiply length, width, and thickness in consistent units, then convert. Thickness is almost always given in inches, so divide by 12 to get feet: a 4 in slab is 0.333 ft. Volume in cubic feet equals length times width times thickness in feet, and cubic yards equals that figure divided by 27, because one cubic yard contains 27 cubic feet. A 12 ft by 12 ft patio at 4 in works out to 144 × 0.333 = 48.0 ft³, or 1.78 yd³. A useful shortcut: at 4 in every square foot needs 0.333 ft³, and one cubic yard of concrete covers about 81 ft². The calculator then applies your waste percentage, so ordered volume = base volume × (1 + waste divided by 100).",
            "Measure the forms, not the finished room. Outdoors, run the tape along the inside face of the formwork at grade and record the dimension the concrete will actually occupy. Subtract only areas that receive no concrete, such as a planter cut into the middle of a patio. Remember that the formula treats the slab as a uniform rectangular prism: it does not know about steps, thickened perimeter beams, footings, or a subgrade that dips half an inch across part of the pour. Each of those quietly adds volume. The result also excludes gravel base, reinforcing steel, vapor retarder, and pump or short-load fees. Treat it as a planning estimate, not a structural design.",
          ],
        },
        {
          heading: "How thick does a concrete slab need to be?",
          paragraphs: [
            "IRC Section R506.1 requires concrete slab-on-ground floors to be designed and built in accordance with Section R506 or ACI 332, and to be a minimum of 3-1/2 in thick [1]. Section R506.2.2 calls for a 4 in base course of clean graded sand, gravel, crushed stone, crushed concrete, or slag passing a 2 in sieve where the slab sits below grade, and R506.2.3 requires a 6 mil polyethylene vapor retarder with joints lapped not less than 6 in between the slab and that base [1]. Bagged-mix makers set their own floor: Quikrete Concrete Mix is designed for pouring concrete 2 in thick or more [2], and Sakrete flatwork instructions tell you to excavate deep enough for gravel plus a minimum of 4 in of concrete [3].",
            "Thickness scales volume linearly, so the decision costs real money. Moving a 400 ft² pad from 4 in to 5 in raises the base volume from 4.94 yd³ to 6.17 yd³, a 25 percent jump before any waste is added. That is why patios and walkways usually stay at 4 in while driveways, garage floors, and pads under heavy equipment are commonly specified thicker. Those thicker cases are engineering decisions rather than estimating decisions: vehicle loads, frost depth, expansive soils under IRC Section R403.1.8, and local code amendments all matter, and any slab carrying walls or columns needs a designer. Use this calculator to price the thickness you have been given, not to choose it.",
          ],
        },
        {
          heading: "How much concrete do I need for a 12x12 patio?",
          paragraphs: [
            "Work the numbers once, in order. Area is 12 × 12 = 144 ft². Thickness of 4 in becomes 0.333 ft, so base volume is 144 × 0.333 = 48.0 ft³, and 48.0 divided by 27 is 1.78 yd³. Apply the default 10 percent allowance: 1.78 × 1.10 = 1.96 yd³, which you would order as 2 yd³. Now add the thickened edge the calculator ignores. A 48 ft perimeter with an extra 4 in of depth over an 8 in wide strip is 0.333 × 0.667 = 0.222 ft² of cross section, or 0.222 × 48 = 10.7 ft³, which is 0.40 yd³. The named total becomes about 2.36 yd³, so order 2.5 yd³.",
            "Compare that with bags before you commit. At 0.60 ft³ per 80 lb bag, 1.96 yd³ is 52.9 ft³ and needs 89 bags, roughly 7,100 lb of material to buy, carry, and mix in one continuous session. Raising the same patio to 5 in lifts base volume to 2.22 yd³, or 2.44 yd³ with waste. Notice that every intermediate figure stayed unrounded until the final step, because rounding thickness or area early is the most common way a slab estimate drifts by a quarter yard. Ready-mix suppliers usually sell in quarter-yard or half-yard increments and charge for short loads, so confirm the increment before you round.",
          ],
        },
        {
          heading: "Is it cheaper to order ready-mix or mix bags for a slab?",
          paragraphs: [
            "There is no universal break-even point, but the arithmetic is simple. One cubic yard is 27 ft³, so it takes 45 bags of 80 lb mix at 0.60 ft³ each, 60 bags of 60 lb at 0.45 ft³, or 90 bags of 40 lb at 0.30 ft³ [2]. Below roughly one cubic yard, bags usually win because ready-mix carries a minimum load and short-load surcharges. Above two or three cubic yards the truck almost always wins on both price and labor. Compare the delivered ready-mix quote, including short-load and waiting-time charges, against whole-bag count times current bag price plus mixer rental. Those are arithmetic scenarios, not market quotes.",
            "Quality and timing matter as much as price. Quikrete and Sakrete both list 4,000 psi at 28 days for their concrete mixes tested to ASTM C39, with a 2 in to 3 in slump range [2][3], so bagged material is not inherently weak, but consistency depends on whoever is adding the water. Both manufacturers also tell you to fill forms to full depth and work continuously from one end to the other, because partial-depth placement creates cold joints [2][3]. Ninety bags mixed by two people over an afternoon is a genuine cold-joint risk. This calculator estimates volume only; it does not price material, select a mix design, or schedule labor.",
          ],
        },
        {
          heading: "How much extra concrete should you order for waste?",
          paragraphs: [
            "The 10 percent default suits most residential flatwork. Use about 5 percent for a small, tightly formed rectangle on a screeded, well-compacted subgrade where you can measure everything twice. Use 12 to 15 percent for curves, multiple levels, sloped sites, or ground that has been over-excavated. The loss is real rather than theoretical: subgrade dips, forms that bow outward under the weight of fresh concrete, spillage from the chute and wheelbarrow, material clinging to the mixer drum, and test cylinders all take volume out of the load. Over-excavating by just half an inch across 400 ft² is 16.7 ft³ on its own, or 0.62 yd³.",
            "Running short is far more expensive than running long. A pour that stops while someone drives for more material leaves a cold joint that is both a structural and a cosmetic defect, and a second small delivery usually carries its own minimum charge. Add the allowance, then round up to the increment your supplier actually sells. Keep the allowance separate from thickness in your notes so that nobody later confuses a 10 percent buffer with a thicker slab. Finally, remember that the allowance covers estimating uncertainty only. It does not compensate for an unverified thickness, a missing base course, or reinforcement that was never designed.",
          ],
        },
      ],
      howToMeasure:
        "Measure the longest straight length and width of the pour area at grade. For thickness, use the specified slab depth from your plan — typical patios are 3.5–4 in and driveways 4–6 in. Deduct only areas that will not receive concrete.",
      commonMistakes: [
        "Measuring thickness in feet when the field is in inches (4 in ≠ 4 ft).",
        "Forgetting to add waste for spillage, uneven subgrade, or partial loads.",
        "Using interior room dimensions instead of the actual form or edge dimensions outdoors.",
      ],
      faqs: [
        {
          question:
            "How many cubic yards of concrete do I need for a 10x10 slab 4 inches thick?",
          answer:
            "**A 10 ft by 10 ft slab at 4 in thick needs 1.23 cubic yards of concrete before waste, or about 1.36 yd³ with a 10 percent allowance.** The math is 100 ft² times 0.333 ft, which is 33.3 ft³, divided by 27. Ready-mix suppliers usually sell in quarter-yard increments, so you would order 1.5 yd³.",
        },
        {
          question: "How much concrete do I need for a 20x20 slab?",
          answer:
            "**A 20 ft by 20 ft slab at 4 in thick takes 4.94 cubic yards, or about 5.44 yd³ once a 10 percent allowance is added.** At 5 in the base volume rises to 6.17 yd³ and at 6 in to 7.41 yd³. Confirm the specified thickness first, because each inch adds roughly 1.2 yd³.",
        },
        {
          question: "How thick should a concrete patio slab be?",
          answer:
            "**Four inches is the usual thickness for a residential patio, and IRC Section R506.1 sets 3-1/2 inches as the minimum for slab-on-ground floors.** Sakrete flatwork instructions likewise call for at least 4 in of concrete above the gravel base. Driveways, garage floors, and anything carrying vehicles or structure need a designer rather than a default.",
        },
        {
          question: "How many bags of concrete are in a cubic yard?",
          answer:
            "**It takes 45 bags of 80 lb premix to make one cubic yard of concrete.** One cubic yard is 27 ft³ and an 80 lb bag of Quikrete or Sakrete concrete mix yields about 0.60 ft³, so 27 divided by 0.60 is 45. The same yard needs 60 sixty-pound bags or 90 forty-pound bags.",
        },
        {
          question: "How many square feet does a yard of concrete cover?",
          answer:
            "**One cubic yard of concrete covers about 81 square feet at 4 inches thick.** The same yard covers 108 ft² at 3 in, 65 ft² at 5 in, and 54 ft² at 6 in. Divide 27 ft³ by the thickness expressed in feet to get coverage at any depth you are considering.",
        },
        {
          question: "Does a 4 inch concrete slab need rebar or wire mesh?",
          answer:
            "**This calculator estimates concrete volume only and does not decide whether reinforcement is required, because that is a code and design question.** IRC Section R506.2.4 does state that where reinforcement is provided in slabs-on-ground it must be supported to stay between the center and the upper third of the slab during placement.",
        },
        {
          question: "How far apart should control joints be in a concrete slab?",
          answer:
            "**Bagged-mix manufacturers specify close joint spacing: Quikrete calls for control joints 1 in deep every 6 to 8 feet, while Sakrete calls for grooved joints every 3 to 4 feet plus expansion joints every 8 by 12 feet through the full slab depth.** Follow the product instructions and your local code.",
        },
      ],
      dataTables: [
        {
          title: "How many cubic yards does a slab need at each thickness?",
          columns: ["Slab area", "4 in thick", "5 in thick", "6 in thick"],
          rows: [
            ["50 ft²", "0.62 yd³", "0.77 yd³", "0.93 yd³"],
            ["100 ft²", "1.23 yd³", "1.54 yd³", "1.85 yd³"],
            ["144 ft² (12 × 12)", "1.78 yd³", "2.22 yd³", "2.67 yd³"],
            ["200 ft²", "2.47 yd³", "3.09 yd³", "3.70 yd³"],
            ["400 ft² (20 × 20)", "4.94 yd³", "6.17 yd³", "7.41 yd³"],
            ["600 ft²", "7.41 yd³", "9.26 yd³", "11.11 yd³"],
          ],
          note: "Base volume before any waste allowance. Area times thickness in feet, divided by 27.",
        },
        {
          title: "What slab thicknesses do codes and manufacturers reference?",
          columns: ["Element", "Thickness", "ft³ per ft² of area", "Basis"],
          rows: [
            [
              "Slab-on-ground floor, code minimum",
              "3-1/2 in",
              "0.29",
              "IRC Section R506.1 minimum thickness",
            ],
            [
              "Minimum depth for bagged concrete mix",
              "2 in",
              "0.17",
              "Quikrete Concrete Mix is designed for pours 2 in or more",
            ],
            [
              "Residential patio or walkway",
              "4 in",
              "0.33",
              "Sakrete flatwork instructions call for at least 4 in of concrete",
            ],
            [
              "Base course under a below-grade slab",
              "4 in of gravel",
              "not concrete",
              "IRC Section R506.2.2 graded material passing a 2 in sieve",
            ],
            [
              "Driveway or parking pad",
              "5 in",
              "0.42",
              "Common residential practice; confirm locally",
            ],
            [
              "Slab under vehicle or equipment loads",
              "6 in",
              "0.50",
              "Engineering decision, not an estimating default",
            ],
          ],
          note: "Thickness is a code and design input. This calculator converts it to volume; it does not select it.",
        },
        {
          title: "How much does a waste allowance add to a concrete order?",
          columns: [
            "Base volume",
            "Plus 5 percent",
            "Plus 10 percent",
            "Plus 15 percent",
          ],
          rows: [
            ["1.00 yd³", "1.05 yd³", "1.10 yd³", "1.15 yd³"],
            ["1.23 yd³", "1.29 yd³", "1.35 yd³", "1.41 yd³"],
            ["1.78 yd³", "1.87 yd³", "1.96 yd³", "2.05 yd³"],
            ["2.47 yd³", "2.59 yd³", "2.72 yd³", "2.84 yd³"],
            ["4.94 yd³", "5.19 yd³", "5.43 yd³", "5.68 yd³"],
            ["7.41 yd³", "7.78 yd³", "8.15 yd³", "8.52 yd³"],
          ],
          note: "Round the final figure up to the increment your supplier sells, commonly a quarter or half yard.",
        },
      ],
      references: [
        {
          label:
            "2015 International Residential Code, Section R506 Concrete Floors (On Ground)",
          publisher:
            "International Code Council, excerpt published by the City of Richmond, Kentucky Building Inspection Division",
          year: "2015",
          url: "https://cms2.revize.com/revize/richmondky/Documents/Building%20Inspection/2015%20IRC%20Deck%20Section.pdf",
        },
        {
          label:
            "Concrete Mix product no. 1101 data sheet: bag yields, mixing water, strength, and joint spacing",
          publisher: "The Quikrete Companies",
          year: "2022",
          url: "https://www.quikrete.com/pdfs/data_sheet-concrete%20mix%201101.pdf",
        },
        {
          label:
            "High Strength Concrete Mix technical data sheet: yields, water, flatwork and joint instructions",
          publisher: "Sakrete of North America",
          year: "2016",
          url: "https://www.angelusblock.com/assets/docs-technical/SAKHighStrengthConcreteMixTDS.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        volumeYd3: "Concrete to order (yd³)",
      },
      inputLabels: {
        thickness: "Slab thickness",
      },
      metaTitle: "Concrete Slab Calculator — Cubic Yards | BuildSiteCalc",
      metaDescription:
        "Free concrete slab calculator. Enter length, width, and thickness to estimate cubic yards with waste factor. US and metric units.",
    },
    "concrete-bags": {
      title: "Concrete Bags Calculator",
      description:
        "Convert a slab, post hole, or patch volume into the number of premix concrete bags needed. Supports 40, 60, and 80 lb bag yields.",
      shortDescription: "How many premix concrete bags you need.",
      formula:
        "Volume (ft³) = length × width × thickness, or enter volume directly. Bags needed = ceil(volume with waste ÷ yield per bag). Standard yields: 40 lb ≈ 0.30 ft³, 60 lb ≈ 0.45 ft³, 80 lb ≈ 0.60 ft³.",
      assumptions: [
        "Bag yields follow typical manufacturer data for premixed concrete.",
        "Results round up to whole bags.",
        "Water added per manufacturer instructions; mix consistency is uniform.",
        "Does not account for aggregate-only mixes or custom high-strength designs.",
        "10% waste is applied when enabled.",
      ],
      workedExample: {
        title: "Post hole 12 in × 12 in × 36 in deep",
        body: "Volume = 1 ft × 1 ft × 3 ft = 3 ft³. With 10% waste = 3.3 ft³. Using 80 lb bags (0.60 ft³ each): 3.3 ÷ 0.60 = 5.5 → 6 bags.",
      },
      sections: [
        {
          heading: "How many bags of concrete do I need for a slab?",
          paragraphs: [
            "Convert the pour to cubic feet first, then divide by the yield printed on the bag. Volume in cubic feet equals length × width × thickness, all in feet, so a 4 in thickness enters the formula as 0.333 ft. Quikrete Concrete Mix yields approximately 0.30 ft³ for a 40 lb bag, 0.375 ft³ for 50 lb, 0.45 ft³ for 60 lb, 0.60 ft³ for 80 lb, and 0.675 ft³ for a 90 lb bag [1]. Sakrete High Strength Concrete Mix lists the same 0.30, 0.45, and 0.60 ft³ figures with 0.66 ft³ for its 90 lb bag [2]. Because bags are sold whole, the calculator always rounds the final count up.",
            "A worked slab makes the sequence concrete. A 4 ft × 6 ft equipment pad at 4 in thick is 24 ft² × 0.333 ft = 8.0 ft³. With the 10 percent allowance that becomes 8.8 ft³. Dividing by 0.60 ft³ gives 14.7, so buy 15 bags of 80 lb mix, which is 1,200 lb of material. The same pad in 60 lb bags is 8.8 divided by 0.45, or 19.6, so 20 bags. Pick one bag weight per order and stay with it, because mixing sizes in a single calculation produces a count that matches nothing on the pallet.",
          ],
        },
        {
          heading: "How much does an 80 lb bag of concrete cover?",
          paragraphs: [
            "Coverage depends entirely on thickness, because the bag holds a fixed volume. An 80 lb bag yields about 0.60 ft³, so at 4 in thick it covers 0.60 divided by 0.333, or 1.8 ft². At 2 in the same bag covers 3.6 ft², at 3 in it covers 2.4 ft², at 5 in it covers 1.44 ft², and at 6 in only 1.2 ft². Those numbers explain why bag counts climb so quickly on flatwork: a modest 10 ft × 10 ft patio at 4 in is 33.3 ft³, which is 56 bags of 80 lb mix before any waste allowance. Sakrete gives the same arithmetic in its own coverage instructions [2].",
            "Do not confuse bag weight with volume or with strength. The 80 lb figure is the shipping weight of dry material; the useful number for estimating is the cubic-foot yield. Quikrete lists a unit weight of roughly 140 lb per ft³ for cured concrete mix, which is why 0.60 ft³ of finished concrete comes from an 80 lb bag plus about 6 pints of water [1]. Both Quikrete Concrete Mix and Sakrete High Strength Concrete Mix are rated at 4,000 psi at 28 days when tested to ASTM C39, and both meet ASTM C387 for packaged dry combined materials [1][2].",
          ],
        },
        {
          heading: "How many bags of concrete for a fence post hole?",
          paragraphs: [
            "Post holes are where bag counts are most often wrong, because a hole is deeper than people picture. Take a square-sided hole 12 in × 12 in and 36 in deep: that is 1 ft × 1 ft × 3 ft = 3.0 ft³. With the 10 percent allowance the volume is 3.3 ft³, and 3.3 divided by 0.60 gives 5.5, so the named result is 6 bags of 80 lb mix per hole. Ten posts is 60 bags, or 4,800 lb. Quikrete recommends digging the hole about three times the post diameter with a depth of one third of the overall post height, which is what pushes these volumes up [1].",
            "Round holes take the cylinder formula, and the calculator accepts either equivalent square dimensions or a direct volume entry. A 10 in diameter sonotube 42 in deep is pi × (5 divided by 12)² × 3.5 ft = 1.91 ft³, so 2.1 ft³ with waste, which is 4 bags of 80 lb mix. A 12 in tube at the same depth is 2.75 ft³, or 3.02 ft³ with waste, needing 6 bags. Subtract the volume the post itself occupies only if the post is large relative to the hole; for a 4 × 4 in wood post in a 12 in hole the difference is small enough to leave in the allowance.",
          ],
        },
        {
          heading: "Is it cheaper to buy bags of concrete or ready-mix?",
          paragraphs: [
            "Bags win on small, scattered, or awkward pours. Anything under roughly one cubic yard, meaning fewer than about 45 bags of 80 lb mix, is usually cheaper and simpler in bags because ready-mix carries minimum-load and short-load charges. Bags also let you pour one post today and another next weekend, store leftovers dry, and reach places a truck chute cannot. The cost per cubic foot is higher, but you pay only for what you open, and Quikrete notes that you should allow at least 1 ft³ of mixer capacity for each 80 lb bag mixed at one time [1].",
            "Larger flatwork flips the comparison. Two cubic yards is 90 bags of 80 lb mix, about 7,200 lb, and both manufacturers instruct you to place concrete to the full depth of the form and work continuously to avoid cold joints [1][2]. Hand mixing that quantity in batches makes continuity hard. Water control is another factor: Sakrete warns that excess water reduces strength and durability and can cause cracking, dusting, or scaling [2]. This calculator converts volume to a bag count. It does not price bags, compare delivery quotes, or judge whether your crew can keep up with the pour.",
          ],
        },
        {
          heading: "How much water do you add to a bag of concrete?",
          paragraphs: [
            "Follow the label, because water content is a strength decision. Quikrete gives a starting water content of 6 pints for an 80 lb bag with a maximum expected content of 9 pints, and lists 3 pints starting for 40 lb, 3.5 pints for 50 lb, 4 pints for 60 lb, and 7 pints for 90 lb [1]. Sakrete lists 1.75 quarts for 40 lb, 2.5 quarts for 60 lb, 3.5 quarts for 80 lb, and 4.5 quarts for 90 lb [2]. If a slump cone is available, Quikrete says to adjust water to reach a 2 in to 3 in slump per ASTM C143 [1].",
            "Aim for a stiff, moldable consistency with no dry pockets and no standing puddles of water on the surface. Quikrete directs you to work the mix with a shovel, rake, or hoe and to add water only as needed [1]; Sakrete tells you to avoid a soupy mix outright [2]. Temperature matters too: both manufacturers want material, air, and substrate between roughly 40 and 90 degrees Fahrenheit, and both call for protecting fresh concrete from freezing for 48 hours [1][2]. None of that changes the bag count, but it decides whether the finished pour reaches the strength on the bag.",
          ],
        },
      ],
      howToMeasure:
        "For holes, measure diameter or square side and depth to the bottom of the excavation. For slabs, measure the formed area and thickness. When in doubt, measure each hole separately and sum volumes.",
      commonMistakes: [
        "Using the bag weight as volume (80 lb is weight, not 80 ft³).",
        "Ignoring waste on multiple small pours where spillage adds up.",
        "Mixing bag sizes within one calculation — pick one bag weight per order.",
      ],
      faqs: [
        {
          question: "How many 80 lb bags of concrete make a yard?",
          answer:
            "**It takes 45 bags of 80 lb concrete mix to make one cubic yard.** One cubic yard is 27 ft³ and an 80 lb bag yields about 0.60 ft³, so 27 divided by 0.60 equals exactly 45. The same yard needs 60 bags of 60 lb mix or 90 bags of 40 lb mix.",
        },
        {
          question:
            "How many bags of concrete do I need for a 10x10 slab 4 inches thick?",
          answer:
            "**A 10 ft by 10 ft slab at 4 in thick needs 56 bags of 80 lb concrete mix, or 62 bags once a 10 percent waste allowance is applied.** The volume is 33.33 ft³, and 33.33 divided by 0.60 is 55.6. At that size ready-mix delivery is usually cheaper and far faster.",
        },
        {
          question: "How many bags of concrete for a fence post?",
          answer:
            "**A 12 in by 12 in hole 36 in deep holds 3.0 ft³, which is 5 bags of 80 lb mix, or 6 bags with a 10 percent allowance.** Quikrete recommends a hole about three times the post diameter and one third of the total post height, so deeper posts need proportionally more.",
        },
        {
          question:
            "How much area does an 80 lb bag of concrete cover at 4 inches thick?",
          answer:
            "**One 80 lb bag covers about 1.8 square feet at 4 inches thick.** The bag yields 0.60 ft³, and 0.60 divided by 0.333 ft equals 1.8 ft². The same bag covers 3.6 ft² at 2 in, 2.4 ft² at 3 in, and only 1.2 ft² at 6 in thick.",
        },
        {
          question: "How much water do you put in an 80 lb bag of concrete?",
          answer:
            "**Quikrete lists about 6 pints, or 3 quarts, of water as the starting content for an 80 lb bag, with 9 pints as the maximum expected.** Sakrete lists 3.5 quarts for its 80 lb High Strength mix. Add water gradually to a stiff, moldable consistency and avoid a soupy mix.",
        },
        {
          question: "Is bagged concrete as strong as ready-mix concrete?",
          answer:
            "**Both Quikrete Concrete Mix and Sakrete High Strength Concrete Mix are rated at 4,000 psi at 28 days when tested to ASTM C39, and both comply with ASTM C387.** The variable is workmanship: too much mixing water, incomplete blending, or partial-depth placement will cost you strength no matter what the bag says.",
        },
        {
          question: "How many 60 lb bags equal an 80 lb bag of concrete?",
          answer:
            "**It takes 1.33 bags of 60 lb mix to match one 80 lb bag, so four 60 lb bags equal three 80 lb bags at 1.80 ft³ each.** Choose one bag weight for the whole order; 80 lb bags mean fewer bags to open, while 60 lb bags are easier to lift alone.",
        },
      ],
      dataTables: [
        {
          title: "How much does each concrete bag size yield?",
          columns: [
            "Bag weight",
            "Yield per bag",
            "Bags per ft³",
            "Bags per yd³ (27 ft³)",
          ],
          rows: [
            ["40 lb", "0.30 ft³", "3.34", "90"],
            ["50 lb", "0.375 ft³", "2.67", "72"],
            ["60 lb", "0.45 ft³", "2.23", "60"],
            ["80 lb", "0.60 ft³", "1.67", "45"],
            ["90 lb", "0.675 ft³", "1.49", "40"],
          ],
          note: "Yields from the Quikrete Concrete Mix data sheet. Sakrete High Strength lists 0.66 ft³ for its 90 lb bag, which is 41 bags per yd³.",
        },
        {
          title: "How much mixing water does each bag size need?",
          columns: [
            "Bag weight",
            "Quikrete starting water",
            "Quikrete maximum water",
            "Sakrete High Strength water",
          ],
          rows: [
            ["40 lb", "3 pt (1.5 qt)", "4.5 pt", "1.75 qt"],
            ["50 lb", "3.5 pt", "5.5 pt", "not listed"],
            ["60 lb", "4 pt (2 qt)", "7 pt", "2.5 qt"],
            ["80 lb", "6 pt (3 qt)", "9 pt", "3.5 qt"],
            ["90 lb", "7 pt", "10 pt", "4.5 qt"],
          ],
          note: "Manufacturer figures are approximate. Excess water reduces strength; target a 2 in to 3 in slump.",
        },
        {
          title: "How many 80 lb bags does a small pour need?",
          columns: [
            "Project",
            "Volume",
            "80 lb bags, no waste",
            "80 lb bags, plus 10 percent",
          ],
          rows: [
            ["Post hole 12 in × 12 in × 36 in deep", "3.00 ft³", "5", "6"],
            ["Sonotube 10 in diameter × 42 in deep", "1.91 ft³", "4", "4"],
            ["Sonotube 12 in diameter × 42 in deep", "2.75 ft³", "5", "6"],
            ["Landing 3 ft × 3 ft at 4 in", "3.00 ft³", "5", "6"],
            ["Equipment pad 4 ft × 6 ft at 4 in", "8.00 ft³", "14", "15"],
            ["Patio 10 ft × 10 ft at 4 in", "33.33 ft³", "56", "62"],
          ],
          note: "Counts round up to whole bags. At 56 bags a 10 × 10 patio is already past the point where ready-mix usually wins.",
        },
      ],
      references: [
        {
          label:
            "Concrete Mix product no. 1101 data sheet: bag yields, mixing water table, slump and strength",
          publisher: "The Quikrete Companies",
          year: "2022",
          url: "https://www.quikrete.com/pdfs/data_sheet-concrete%20mix%201101.pdf",
        },
        {
          label:
            "High Strength Concrete Mix technical data sheet: yield and water chart, coverage method",
          publisher: "Sakrete of North America",
          year: "2016",
          url: "https://www.angelusblock.com/assets/docs-technical/SAKHighStrengthConcreteMixTDS.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        bagsNeeded: "Premix bags to buy",
      },
      inputLabels: {
        bagSize: "Premix bag weight",
      },
      metaTitle: "Concrete Bags Calculator — How Many Bags? | BuildSiteCalc",
      metaDescription:
        "Calculate how many 40, 60, or 80 lb concrete bags you need for slabs, footings, and post holes. Free with waste factor.",
    },
    paint: {
      title: "Paint Calculator",
      description:
        "Estimate gallons of interior or exterior paint from room dimensions or direct wall area. Deducts doors and windows and applies coats and waste.",
      shortDescription: "Gallons of paint for walls and rooms.",
      formula:
        "Paintable area = wall area − openings (all converted to m² internally). Gallons = (paintable area × coats ÷ coverage rate) × (1 + waste%). Results round up to the nearest quarter gallon. Coverage and openings use the area units you select (ft² or m²).",
      assumptions: [
        "Default coverage is 350 ft² per gallon per coat (≈32.5 m²/gal) for quality latex on smooth surfaces.",
        "Default door deduction is 21 ft² (≈1.95 m²); window deduction is 15 ft² (≈1.39 m²) each.",
        "Two coats are assumed unless you change the setting.",
        "Does not include ceiling area unless included in wall area entry.",
        "Primer is calculated separately if coverage differs.",
      ],
      workedExample: {
        title: "12 × 10 ft room, 8 ft ceilings, 2 coats",
        body: "Perimeter = 2×(12+10) = 44 ft. Wall area = 44 × 8 = 352 ft². Minus 1 door (21) and 2 windows (30) = 301 ft² paintable. Two coats on 350 ft²/gal: (301×2)÷350 = 1.72 gal → 1.75 gal with quarter-gallon rounding, plus waste. Metric equivalent: enter lengths in m and openings/coverage in m² for the same physical result.",
      },
      sections: [
        {
          heading: "How much paint do I need for a room?",
          paragraphs: [
            "Paint is bought against wall surface area, never floor area. Start with the perimeter: for a rectangular room that is 2 × (length + width). Multiply the perimeter by the ceiling height to get gross wall area, then subtract the openings. This calculator deducts 21 ft² for each standard door and 15 ft² for each standard window by default, and it lets you enter custom opening areas in ft² or m² for patio doors and picture windows. Gallons then equal paintable area × number of coats divided by the coverage rate, multiplied by one plus your waste percentage, with the answer rounded up to the nearest quarter gallon because retail paint is sold in quart increments.",
            "Two settings decide almost everything. The first is coats: the default is two, and both Sherwin-Williams and Benjamin Moore recommend two coats on bare substrates for full color development and performance [1][2]. The second is the spread rate. The default of 350 ft² per gallon is the conservative end of a published range, and it assumes a smooth, primed, uniformly porous surface. The calculator does not include ceilings unless you add that area yourself, and it does not include primer, which should be figured as its own coat at its own coverage rate. Everything here is a planning estimate; the can label always governs.",
          ],
        },
        {
          heading: "How many square feet does a gallon of paint cover?",
          paragraphs: [
            "Manufacturer data sheets publish a spread rate tied to a specific wet film thickness. Sherwin-Williams ProMar 200 Zero V.O.C. Interior Latex Flat lists coverage of 350 to 400 ft² per gallon at 4 mils wet and 1.4 mils dry [1]. The matching ProMar 200 Zero V.O.C. primer lists 350 to 400 ft² per gallon at 4 mils wet and 1.0 mil dry [1]. Benjamin Moore Regal Select Semi-Gloss N551 publishes a higher spread rate of 400 to 450 ft² per gallon at a recommended 3.6 to 4.0 mils wet and 1.3 to 1.5 mils dry [2]. Those are per coat, not per project.",
            "Real walls usually deliver less. Benjamin Moore states plainly that spread rate depends on surface texture and porosity [2], and heavy texture, knockdown, sand finishes, bare masonry, and unprimed joint compound all absorb more material. For planning purposes many painters drop textured interior walls to 250 to 300 ft² per gallon. Application method matters as well: spraying deposits more material and generates overspray losses, while a 3/4 in nap roller cover carries more paint onto a rough surface than a 3/8 in cover. If you switch the coverage field to m² per gallon, remember that 350 ft² per gallon is about 32.5 m² per gallon.",
          ],
        },
        {
          heading: "How much paint do I need for a 12x10 room with 8 foot ceilings?",
          paragraphs: [
            "Run it step by step. Perimeter is 2 × (12 + 10) = 44 ft. Gross wall area is 44 × 8 = 352 ft². Deduct one standard door at 21 ft² and two standard windows at 15 ft² each, which is 51 ft² of openings, leaving 301 ft² paintable. Two coats at 350 ft² per gallon is 301 × 2 divided by 350, or 1.72 gallons. Rounded up to the nearest quarter gallon that is 1.75 gallons, and adding a 5 percent allowance pushes it to 1.81, which still rounds to 2 gallons purchased. The named result is one gallon plus three quarts.",
            "Now add the pieces the wall calculation leaves out. The ceiling is 12 × 10 = 120 ft², and two coats of ceiling paint at 350 ft² per gallon is 0.69 gallons, so one gallon. Primer on new drywall is a separate coat: 301 ft² divided by 350 is 0.86 gallons, so one gallon. Trim, doors, and the window casings are usually bought by the quart. The metric route gives the same physical answer: enter dimensions in meters and set both the opening and coverage units to m², and 28.0 m² of paintable wall at 32.5 m² per gallon over two coats is the same 1.72 gallons.",
          ],
        },
        {
          heading: "Do I need one coat or two coats of paint?",
          paragraphs: [
            "Plan on two. Sherwin-Williams specifies one coat of ProMar 200 Zero V.O.C. primer followed by two coats of finish over drywall, and notes that priming plus two coats at the recommended film thickness helps where hiding a previous coating or painting new drywall is a factor [1]. Benjamin Moore says that although the quality of its products sometimes makes one-coat coverage achievable, two coats are recommended to achieve full color development and optimize performance, and two coats are recommended on bare substrates [2]. Colour changes make this decisive: going from a saturated red to off-white in one coat is not realistic.",
            "Coats multiply gallons linearly, so the setting matters more than most people expect. On the 301 ft² room above, one coat is 0.86 gallons, two coats is 1.72, and three coats is 2.58. Sherwin-Williams also notes that where repainting involves a drastic color change, a coat of primer improves the hiding performance of the topcoat [1], which is usually cheaper than a third finish coat. Recoat windows matter too: ProMar 200 Flat lists a 4 hour recoat time and Regal Select lists 3 hours, both temperature and humidity dependent [1][2], so a two-coat room is realistically a full day.",
          ],
        },
        {
          heading: "How much primer do I need on new drywall?",
          paragraphs: [
            "Treat primer as its own coat with its own coverage rate. The Sherwin-Williams drywall specification is one coat of ProMar 200 Zero V.O.C. Latex Primer plus two coats of finish, and the primer is published at 350 to 400 ft² per gallon [1]. On 301 ft² of paintable wall that is 0.86 gallons, so one gallon. Primer is not optional on new board: Gypsum Association finishing guidance recommends that the painting specification include a priming material applied over the entire prepared gypsum panel surface before decoration, because the primer equalizes the difference in porosity between face paper and joint compound.",
            "Skipping it produces joint photographing, the shadowing of finished joints through the decoration. Sherwin-Williams also lists specific primers for other substrates, such as a block filler on concrete block and a masonry primer on plaster or masonry that has cured about 30 days [1]. Benjamin Moore markets Regal Select as self-priming on properly prepared drywall, cured plaster, and smooth concrete, while still recommending two coats on bare substrates [2]. Read the specification for your product rather than assuming. This calculator sizes one product at one coverage rate at a time, so run primer as a separate calculation.",
          ],
        },
      ],
      howToMeasure:
        "Measure room length and width along the floor. Measure ceiling height at a corner. Count doors and standard windows, or enter custom opening areas with matching ft² or m² units for large patio doors or picture windows.",
      commonMistakes: [
        "Using floor square footage instead of wall surface area.",
        "Forgetting the second coat on new drywall or bold color changes.",
        "Using manufacturer best-case coverage on textured or porous walls.",
        "Entering metric opening areas while leaving the unit on ft² (or the reverse).",
      ],
      faqs: [
        {
          question: "How many gallons of paint do I need for a 12x12 room?",
          answer:
            "**A 12 ft by 12 ft room with 8 ft ceilings needs about 2 gallons for two coats on the walls.** Gross wall area is 384 ft², less 51 ft² for one door and two windows, leaving 333 ft². Two coats at 350 ft² per gallon is 1.90 gallons, which rounds up to 2.00.",
        },
        {
          question: "How much paint do I need for 1000 square feet of wall?",
          answer:
            "**One thousand square feet of wall takes 5.75 gallons for two coats at 350 ft² per gallon.** The calculation is 1,000 × 2 divided by 350, which is 5.71 gallons, rounded up to the nearest quarter gallon. At a 400 ft² per gallon spread rate the same job needs 5.00 gallons.",
        },
        {
          question: "How many square feet does a gallon of paint cover?",
          answer:
            "**Most quality interior latex paints cover 350 to 400 square feet per gallon per coat on smooth primed walls.** Sherwin-Williams ProMar 200 Interior Latex Flat lists 350 to 400 ft² per gallon at 4 mils wet, and Benjamin Moore Regal Select lists 400 to 450 ft² per gallon. Textured walls deliver less.",
        },
        {
          question: "Do I need to prime new drywall before painting?",
          answer:
            "**Yes. The Sherwin-Williams drywall specification is one coat of primer followed by two coats of finish, and Gypsum Association finishing guidance recommends priming the entire prepared panel surface before decoration.** Primer equalizes porosity between face paper and joint compound, which is what prevents joints from shadowing through the paint.",
        },
        {
          question: "How much paint do I need for a ceiling?",
          answer:
            "**Ceiling area is simply length times width, so a 12 ft by 12 ft ceiling is 144 ft² and needs 0.82 gallons for two coats at 350 ft² per gallon, meaning one gallon.** This calculator does not add ceilings automatically; either include the area in your wall entry or run it as a separate rectangle.",
        },
        {
          question: "Why does my paint cover less than the label says?",
          answer:
            "**Published spread rates assume a smooth, primed, uniformly porous surface at a specific wet film thickness, typically about 4 mils.** Benjamin Moore notes coverage depends on surface texture and porosity. Texture, bare joint compound, unprimed board, spray overspray, and a thicker roller nap all reduce the area a gallon actually covers.",
        },
        {
          question: "How many coats of paint do I need over a dark color?",
          answer:
            "**Plan on primer plus two finish coats when covering a dark or saturated color.** Sherwin-Williams notes that where repainting involves a drastic color change, a coat of primer improves the hiding performance of the topcoat, which is usually cheaper and flatter-looking than adding a third finish coat.",
        },
      ],
      dataTables: [
        {
          title: "How many square feet does a gallon of paint cover?",
          columns: [
            "Product or surface",
            "Published spread rate",
            "Film thickness",
            "Area covered by 1 gallon in 2 coats",
          ],
          rows: [
            [
              "Sherwin-Williams ProMar 200 Zero V.O.C. Interior Latex Flat",
              "350 to 400 ft² per gallon",
              "4 mils wet, 1.4 mils dry",
              "175 to 200 ft²",
            ],
            [
              "Sherwin-Williams ProMar 200 Zero V.O.C. Latex Primer",
              "350 to 400 ft² per gallon",
              "4 mils wet, 1.0 mil dry",
              "one coat only, 350 to 400 ft²",
            ],
            [
              "Benjamin Moore Regal Select Semi-Gloss N551",
              "400 to 450 ft² per gallon",
              "3.6 to 4.0 mils wet, 1.3 to 1.5 mils dry",
              "200 to 225 ft²",
            ],
            [
              "Calculator default for smooth primed walls",
              "350 ft² per gallon",
              "not specified",
              "175 ft²",
            ],
            [
              "Textured or porous walls, planning figure",
              "250 to 300 ft² per gallon",
              "not specified",
              "125 to 150 ft²",
            ],
          ],
          note: "Published rates assume smooth, primed, uniformly porous surfaces. 350 ft² per gallon is about 32.5 m² per gallon.",
        },
        {
          title: "How much paint does each room size need for two coats?",
          columns: [
            "Room with 8 ft ceilings",
            "Gross wall area",
            "After 1 door and 2 windows",
            "Gallons at 350 ft² per gallon",
            "Purchase to nearest quarter gallon",
          ],
          rows: [
            ["10 ft × 10 ft", "320 ft²", "269 ft²", "1.54", "1.75 gal"],
            ["12 ft × 10 ft", "352 ft²", "301 ft²", "1.72", "1.75 gal"],
            ["12 ft × 12 ft", "384 ft²", "333 ft²", "1.90", "2.00 gal"],
            ["14 ft × 12 ft", "416 ft²", "365 ft²", "2.09", "2.25 gal"],
            ["16 ft × 14 ft", "480 ft²", "429 ft²", "2.45", "2.50 gal"],
            ["20 ft × 16 ft", "576 ft²", "525 ft²", "3.00", "3.00 gal"],
          ],
          note: "Openings deducted are 21 ft² for the door and 15 ft² each for two windows, a total of 51 ft². Ceilings not included.",
        },
        {
          title: "How much do doors and windows reduce paintable area?",
          columns: [
            "Opening",
            "Area deducted",
            "Paint saved on 2 coats at 350 ft² per gallon",
            "How to enter it",
          ],
          rows: [
            [
              "Standard interior door, about 3 ft × 7 ft",
              "21 ft²",
              "0.12 gal",
              "Calculator default per door",
            ],
            [
              "Standard window, about 3 ft × 5 ft",
              "15 ft²",
              "0.09 gal",
              "Calculator default per window",
            ],
            ["Picture window, 6 ft × 5 ft", "30 ft²", "0.17 gal", "Custom opening area"],
            [
              "Sliding patio door, 5 ft × 8 ft",
              "40 ft²",
              "0.23 gal",
              "Custom opening area",
            ],
            [
              "Garage door opening, 16 ft × 7 ft",
              "112 ft²",
              "0.64 gal",
              "Custom opening area",
            ],
          ],
          note: "Deduct openings, not trim. Casings, jambs, and doors themselves are usually bought separately by the quart.",
        },
      ],
      references: [
        {
          label:
            "ProMar 200 Zero V.O.C. Interior Latex Flat B30 Series product data sheet: coverage 350 to 400 sq ft per gallon",
          publisher: "The Sherwin-Williams Company",
          year: "2023",
          url: "https://www.paintdocs.com/docs/webPDF.jsp?SITEID=STORECAT&prodno=650946627&doctype=PDS&lang=E",
        },
        {
          label:
            "Regal Select Premium Interior Paint and Primer Semi-Gloss N551 technical data sheet: spread rate 400 to 450 sq ft per gallon",
          publisher: "Benjamin Moore and Co.",
          year: "2025",
          url: "https://media.benjaminmoore.com/WebServices/prod/assets/stage/datasheets/TDS_0551/N551%20TDS%20US%20OKF.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        gallons: "Gallons to purchase",
      },
      inputLabels: {
        coverageRate: "Paint coverage per gallon",
        coverageRateUnit: "Coverage unit",
        doorAreaUnit: "Door area unit",
        windowAreaUnit: "Window area unit",
      },
      metaTitle: "Paint Calculator — Gallons Needed | BuildSiteCalc",
      metaDescription:
        "Free paint calculator for rooms and walls. Estimate gallons with door/window deductions, coats, and waste. Interior and exterior. US and metric units.",
    },
    flooring: {
      title: "Flooring Calculator",
      description:
        "Calculate square footage and carton counts for hardwood, laminate, vinyl plank, and other flooring with a configurable waste allowance.",
      shortDescription: "Flooring square footage and cartons needed.",
      formula:
        "Floor area = length × width (or enter area directly). Order area = area × (1 + waste%). Cartons = ceil(order area ÷ coverage per carton).",
      assumptions: [
        "Room is rectangular or area is entered directly.",
        "Default waste is 10% for straight layouts; use 12–15% for diagonal installs.",
        "Carton coverage comes from your product label (often 20–30 ft²).",
        "Does not include underlayment, transitions, or adhesive.",
        "Stair treads and closets should be added separately if not in the room dimensions.",
      ],
      workedExample: {
        title: "12 × 14 ft bedroom, 10% waste",
        body: "Area = 168 ft². With 10% waste = 184.8 ft². If each carton covers 24 ft²: 184.8 ÷ 24 = 7.7 → 8 cartons.",
      },
      sections: [
        {
          heading: "How do you calculate how much flooring you need?",
          paragraphs: [
            "Measure length × width at floor level and multiply for square feet, or enter the area directly if you already have it from a plan. Break L-shaped rooms into rectangles, add the pieces, and include closets, alcoves, and the strip of floor under a swinging door. Then apply a waste allowance: order area = net area × (1 + waste%). Finally divide by the coverage printed on the carton and round up, because flooring is sold in whole boxes. A 12 × 14 ft bedroom is 168 ft²; at 10% waste that is 184.8 ft²; at 24 ft² per carton, 184.8 ÷ 24 = 7.7, so you buy 8 cartons.",
            "The same three steps work for solid hardwood, engineered wood, laminate, luxury vinyl plank, and click-lock vinyl tile. What changes is the carton coverage and the waste you should plan. Never mix carton coverage between SKUs — a 7-inch-wide LVP box and a 5-inch oak box can differ by 10 ft² even within one brand. Measure the widest dimension of each wall rather than an average, and check for out-of-square rooms by comparing the two diagonals. If they differ by more than an inch, expect tapered cuts along one wall and plan waste at the higher end of the range.",
          ],
        },
        {
          heading: "How many boxes of laminate or vinyl plank flooring do I need?",
          paragraphs: [
            "Divide your order area by the square footage each carton covers, then round up to the next whole box. Cartons commonly cover between 18 and 30 ft², and the exact figure is printed on the label along with the plank count. For 500 ft² of net floor at 10% waste, order area is 550 ft²: that is 28 cartons at 20 ft² each, 23 cartons at 24 ft², or 19 cartons at 30 ft². The nine-box spread between the smallest and largest carton is exactly why you should never estimate box count from area alone without reading the label on the product you are actually buying.",
            "Rounding up almost always leaves partial material, and that is useful. Keep one full spare carton when the budget allows: dye lots, gloss levels, and embossing shift between production runs, and product lines are discontinued regularly, so a plank pulled from storage matches better than a replacement bought later. Store it flat, indoors, in the same conditions as the installed floor. Confirm what is not in the box as well. Underlayment, moisture barrier, adhesive, transition strips, stair nose, and quarter round are separate line items, and a flooring calculator does not count any of them.",
          ],
        },
        {
          heading: "How much waste should you add for hardwood, laminate, and LVP?",
          paragraphs: [
            "Eight to ten percent covers a straight-lay floor running the long direction of one rectangular room. Move to 10–12% when the run crosses several rooms and a hallway, because each doorway forces a cut and the offcut is often too short to start the next row. Diagonal layouts at 45 degrees need 12–15%. Herringbone runs 15–18%, and true chevron, which requires mitered plank ends, can reach 20%. On a 500 ft² job those percentages mean ordering 540, 550, 560, 575, 590, or 600 ft² — a 60 ft² spread between the simplest and the most demanding layout, or roughly two extra cartons.",
            "Waste is not only about pattern. Plank length matters: long boards produce longer, more reusable offcuts, while a short-plank product wastes more at every wall. Grade matters too, since character-grade and rustic hardwood ship with knots and defects the installer will cut out. Stairs are their own calculation — a tread, a riser, and a stair nose per step — and should be tallied separately rather than buried in a floor percentage. Underestimating waste costs a second delivery and a possible dye-lot mismatch; overestimating costs one box you keep for repairs. That asymmetry favors rounding up.",
          ],
        },
        {
          heading: "Do I need to acclimate flooring before installing it?",
          paragraphs: [
            "Follow the manufacturer's written instructions, because they control the warranty. Acclimation exists because wood and wood-based cores move with the moisture in the surrounding air. The National Wood Flooring Association publishes Installation Guidelines along with a Moisture & Wood technical publication and a jobsite checklist that cover site conditions, subfloor moisture testing, and expansion allowances for solid and engineered wood [1]. EPA guidance is a useful sanity check on the environment itself: indoor relative humidity should be kept below 60 percent, ideally between 30 and 50 percent [2]. A house sitting at 70% relative humidity during construction is not ready for a wood floor.",
            "Practically, that means the HVAC system should be running at normal living conditions before delivery, the slab or subfloor should be tested rather than eyeballed, and expansion gaps at walls and around columns must be left open and covered by trim rather than filled. Click-lock laminate and rigid-core LVP move less than solid wood but still need perimeter gaps and, on long runs, transition profiles. None of this changes the square footage or carton count the calculator returns — it changes whether the floor you ordered stays flat, tight, and quiet after its first heating season.",
          ],
        },
        {
          heading: "How much flooring do I need for a 12 by 14 foot bedroom?",
          paragraphs: [
            "The room is 12 × 14 = 168 ft². A 2 × 5 ft closet adds 10 ft², so the net area is 178 ft², or 16.54 m². The layout is straight-lay luxury vinyl plank in one room with two doorways, so 10% waste is appropriate: 178 × 1.10 = 195.8 ft². The label states 24 ft² per carton, so 195.8 ÷ 24 = 8.16, which rounds to 9 cartons — 216 ft² delivered. That is 38 ft² more than the net floor, enough to cover the closet cuts, the two thresholds, and a spare row set aside for a future repair.",
            "A larger open plan follows the same path. A great room measuring 20 × 16 ft plus a 10 × 12 ft dining extension is 320 + 120 = 440 ft². Subtract a 3 × 5 ft tiled hearth for 425 ft² net. The planks run diagonally, so use 12%: 425 × 1.12 = 476 ft². At 30 ft² per carton, 476 ÷ 30 = 15.87, so order 16 cartons, or 480 ft². Note that the diagonal allowance alone added 51 ft² — nearly two cartons — which is the whole reason to settle the layout direction before placing the order.",
          ],
        },
      ],
      howToMeasure:
        "Measure the longest wall lengths at the floor level. For L-shaped rooms, break into rectangles and sum areas, or measure total area from a floor plan.",
      commonMistakes: [
        "Ordering exact net area with zero waste — cuts always produce scrap.",
        "Using box coverage from a different SKU or plank width.",
        "Forgetting closet floors and alcoves attached to the room.",
      ],
      faqs: [
        {
          question: "How much extra flooring should I order?",
          answer:
            "**Add 8–10% for a straight layout in a simple rectangular room, 12–15% for a diagonal, and 15–20% for herringbone or chevron.** On a 500 ft² floor that is 540–550 ft² for straight lay and up to 600 ft² for chevron. Round up to whole cartons after applying the allowance.",
        },
        {
          question: "How many boxes of flooring do I need for 500 square feet?",
          answer:
            "**About 23 cartons if each box covers 24 ft², after adding 10% waste to reach 550 ft².** The same 550 ft² is 28 boxes at 20 ft² per carton or 19 boxes at 30 ft². Always read the coverage printed on the label before placing the order.",
        },
        {
          question: "Should I buy an extra box of flooring for future repairs?",
          answer:
            "**Yes — keep one full spare carton whenever the budget allows.** Dye lots, gloss levels, and embossing change between production runs, and product lines get discontinued, so a later replacement plank rarely matches. Store the spare flat and indoors in the same conditions as the installed floor.",
        },
        {
          question: "Does laminate or vinyl plank flooring need to acclimate?",
          answer:
            "**Follow the manufacturer's written instructions, because those instructions control the warranty.** Wood and wood-core products move with ambient moisture, so site conditions matter. EPA advises keeping indoor relative humidity below 60 percent, ideally 30 to 50 percent, which is a sensible target before and after installation.",
        },
        {
          question: "Can I use a flooring calculator for tile?",
          answer:
            "**Use a tile calculator instead, because tile counts depend on grout joint width.** This calculator returns square footage and carton counts, which is how plank and sheet goods are sold. Tile is sold by the piece and by the box, and every joint enlarges each tile's effective footprint.",
        },
        {
          question: "How do I measure an L-shaped room for flooring?",
          answer:
            "**Split the floor into rectangles, calculate each area, and add them together before applying any waste allowance.** A 20 × 16 ft room with a 10 × 12 ft extension is 320 + 120 = 440 ft². Subtract hearths and permanent cabinets, then add closets and doorway thresholds.",
        },
        {
          question: "How many square meters is 200 square feet of flooring?",
          answer:
            "**200 square feet equals 18.58 square meters, because one square foot is 0.0929 m².** With a 10% waste allowance the order becomes 220 ft², or 20.44 m². Going the other way, one square meter is 10.7639 ft², so a 25 m² room is 269 ft².",
        },
      ],
      dataTables: [
        {
          title: "How many cartons of flooring does each room size need?",
          columns: [
            "Room size",
            "Net area",
            "Order area at 10% waste",
            "Cartons at 20 ft²",
            "Cartons at 24 ft²",
            "Cartons at 30 ft²",
          ],
          rows: [
            ["10 × 10 ft", "100 ft²", "110 ft²", "6", "5", "4"],
            ["12 × 12 ft", "144 ft²", "158.4 ft²", "8", "7", "6"],
            ["12 × 14 ft", "168 ft²", "184.8 ft²", "10", "8", "7"],
            ["14 × 16 ft", "224 ft²", "246.4 ft²", "13", "11", "9"],
            ["16 × 20 ft", "320 ft²", "352 ft²", "18", "15", "12"],
            ["20 × 24 ft", "480 ft²", "528 ft²", "27", "22", "18"],
          ],
          note: "Carton counts are rounded up to whole boxes. Use the coverage printed on your product label, not a generic figure.",
        },
        {
          title: "How much waste should you plan for each flooring layout?",
          columns: [
            "Layout or condition",
            "Waste allowance",
            "Order area for 500 ft²",
            "Extra area vs net",
          ],
          rows: [
            ["Straight lay, one rectangular room", "8%", "540 ft²", "40 ft²"],
            ["Straight lay across rooms and a hallway", "10%", "550 ft²", "50 ft²"],
            ["Diagonal at 45 degrees", "12%", "560 ft²", "60 ft²"],
            ["Diagonal on a complex plan", "15%", "575 ft²", "75 ft²"],
            ["Herringbone", "18%", "590 ft²", "90 ft²"],
            ["Chevron with mitered plank ends", "20%", "600 ft²", "100 ft²"],
          ],
          note: "Add short-plank product, rustic grades, and out-of-square rooms at the higher end of each range. Stairs are counted separately.",
        },
        {
          title: "How do square feet convert to square meters for a flooring order?",
          columns: [
            "Net area (ft²)",
            "Net area (m²)",
            "Order at 10% waste (ft²)",
            "Order at 10% waste (m²)",
          ],
          rows: [
            ["100", "9.29", "110", "10.22"],
            ["150", "13.94", "165", "15.33"],
            ["200", "18.58", "220", "20.44"],
            ["300", "27.87", "330", "30.66"],
            ["500", "46.45", "550", "51.10"],
            ["1,000", "92.90", "1,100", "102.19"],
          ],
          note: "One square foot is exactly 0.09290304 m²; one square meter is 10.7639 ft². Metric product is often sold by the m² carton.",
        },
      ],
      references: [
        {
          label:
            "Technical Guidelines and Publications: Installation Guidelines, Moisture & Wood, Jobsite Checklist",
          publisher: "National Wood Flooring Association",
          year: "2026",
          url: "https://nwfa.org/technical-guidelines/",
        },
        {
          label:
            "Mold Course Chapter 2: Why and Where Mold Grows — indoor relative humidity guidance",
          publisher: "U.S. Environmental Protection Agency",
          year: "2025",
          url: "https://www.epa.gov/mold/mold-course-chapter-2",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        areaWithWasteFt2: "Flooring to order (ft²)",
      },
      inputLabels: {},
      metaTitle: "Flooring Calculator — Square Feet & Cartons | BuildSiteCalc",
      metaDescription:
        "Calculate flooring square footage, waste, and cartons needed for hardwood, laminate, and vinyl plank. Free calculator.",
    },
    tile: {
      title: "Tile Calculator",
      description:
        "Count ceramic, porcelain, or mosaic tiles needed for floors, showers, and backsplashes. Accounts for tile size, grout gaps, and waste.",
      shortDescription: "Tile count for floors and backsplashes.",
      formula:
        "Effective tile area = (tile length + gap) × (tile width + gap). Tiles needed = ceil(floor area with waste ÷ effective tile area).",
      assumptions: [
        "Tiles are laid on a flat plane with uniform grout gaps.",
        "Default waste is 10%; use 15% for diagonal or intricate patterns.",
        "Tile dimensions are nominal face size before grout.",
        "Does not include trim pieces, bullnose, or Schluter profiles.",
        "Partial tiles at edges count as full tiles in the rounded-up total.",
      ],
      workedExample: {
        title: "10 × 8 ft floor, 12 × 12 in tiles",
        body: "Area = 80 ft² = 11,520 in². Each 12×12 tile = 144 in². Base tiles = 80. With 10% waste = 88 tiles → order 88 (or full boxes per your supplier).",
      },
      sections: [
        {
          heading: "How many tiles do I need for 100 square feet?",
          paragraphs: [
            "Divide the area you are covering by the effective face area of one tile. A 12 × 12 in tile measures 144 in², or exactly 1 ft², so 100 ft² of floor takes 100 tiles before any allowance. Smaller formats multiply fast: 4 × 4 in ceramic tile covers 16 in², so the same 100 ft² — 14,400 in² — needs 900 pieces. Large-format porcelain works the other way. A 24 × 24 in tile covers 576 in², or 4 ft², so 25 tiles cover 100 ft². Always work in one unit system: convert the printed tile size to inches, convert your area to square inches, divide, then round up to whole pieces.",
            "Measure the net tiled surface, not the room. For a floor, subtract the footprint of a tub, a shower base, or built-in cabinets that sit on the subfloor rather than on finished tile. For a shower wall or backsplash, measure each plane separately: wall length × height to the underside of the cabinets or to the ceiling, minus window and niche openings. Add the planes together before applying waste. Curbs, benches, and jambs are small but real, so list them rather than discovering them mid-install. This calculator counts field tile only, so keep a separate linear-foot tally for bullnose, pencil trim, and metal edge profiles.",
          ],
        },
        {
          heading: "Does grout joint width change how many tiles you need?",
          paragraphs: [
            "Yes, slightly, and the direction surprises people. Each tile occupies its own face plus half a joint on every side, so its effective footprint grows and the piece count falls. A 12 × 12 in tile with a 1/8 in joint occupies 12.125 × 12.125 = 147.02 in², about 2.1% more than 144 in². Across 100 ft² that trims the count from 100 tiles to 98. The effect scales with how small the tile is: a 2 × 2 in mosaic chip with the same 1/8 in joint occupies 4.52 in² instead of 4.00 — a 13% jump — which drops the count for 100 ft² from 3,600 pieces to 3,189.",
            "That is why joint width matters enormously on mosaic, subway, and other small formats and barely at all on 24 × 24 in porcelain. It cuts the other way too: a narrow 1/16 in joint on 3 × 6 in subway tile leaves an effective 18.57 in², so 100 ft² takes 753 tiles instead of the 800 you would count with no joint at all. Enter the joint you actually intend to install. Grout width is also a performance decision — rectified large-format tile tolerates tight joints, pressed tile with variable edges usually does not, and wider joints help absorb small differences in tile height.",
          ],
        },
        {
          heading: "What is the difference between porcelain and ceramic tile?",
          paragraphs: [
            "The Tile Council of North America explains that porcelain tile is defined as an impervious tile with water absorption of 0.5% or less measured by ASTM C373, while non-porcelain ceramic tile absorbs more than 0.5% [1]. Because absorption is low, porcelain is usually — though not always — frost resistant, and the Porcelain Tile Certification Agency mark identifies tile that has actually been certified against the standard [1]. TCNA also notes that non-porcelain tile is generally easier to bond and easier to cut, while porcelain is harder on both counts [1]. None of this changes the piece count the calculator returns; it changes the mortar, the blade, and the labor hours behind that count.",
            "Slip resistance is a separate specification. ANSI A326.3 is the American National Standard test method for the dynamic coefficient of friction (DCOF) of hard surface flooring materials, and since 2022 the standard also requires manufacturers to publish a product use classification based on slip resistance [4]. Ask for the DCOF value and the classification for the exact SKU, particularly for a shower floor, an entry, or a pool surround; TCNA notes that unglazed porcelain often has better slip resistance than the glazed version of the same body [1]. The tile count is identical either way, but the specification decides whether the finished floor is appropriate for the space.",
          ],
        },
        {
          heading: "How much extra tile should you buy for waste?",
          paragraphs: [
            "Ten percent is the working default for a straight grid or running-bond layout in a simple rectangular room. Push to 15% for a 45-degree diagonal, because every perimeter tile becomes a triangle and the offcuts rarely pair up, and to 18–20% for herringbone or chevron, where each course starts with a half or mitered piece. Small bathrooms with a toilet flange, a vanity, a door casing, and a threshold inside ten linear feet of perimeter justify 15% even on a straight layout. Applied to 100 ft² of 12 × 12 in tile with 1/8 in joints, those allowances give 108 tiles at 10%, 113 at 15%, and 118 at 20%.",
            "Buy in whole cartons and keep the leftovers. Tile is fired in batches, and shade variation between production runs is normal, so a replacement tile bought two years later may not match. One spare carton stored flat and dry is inexpensive insurance against a cracked tile over a floor joist or a plumbing repair through the slab. Check the carton's stated coverage and piece count rather than assuming, because the same nominal size can ship 8, 10, or 12 pieces depending on thickness. Treat the result as a planning estimate for field tile — it is not a substitute for a layout drawing or an installer's take-off.",
          ],
        },
        {
          heading: "How much tile do I need for a 10 by 12 foot bathroom floor?",
          paragraphs: [
            "Start with 10 × 12 = 120 ft². Subtract an 8 ft² footprint for the tub and the vanity toe base that will not be tiled, leaving 112 ft² net. This bathroom has a threshold, a toilet flange, and a curb, so use 12% waste: 112 × 1.12 = 125.44 ft², which is 18,063 in². The tile is 12 × 24 in porcelain plank set with a 3/16 in joint, so each piece occupies 12.1875 × 24.1875 = 294.79 in². Dividing gives 61.3, so order 62 field tiles. At eight pieces per carton that is 7.75 cartons — buy 8 cartons, or 64 tiles, and keep the two spares.",
            "The matching backsplash uses the same sequence. A 12 ft run of wall 18 in high is 12 × 1.5 = 18 ft², minus a 3 ft² window opening, for 15 ft² net. Add 15% for the outlet cuts and end returns: 17.25 ft², or 2,484 in². The tile is 3 × 6 in ceramic subway with a 1/16 in joint, so each piece occupies 3.0625 × 6.0625 = 18.57 in². That works out to 133.8 pieces, so order 134 tiles. Keep the two totals separate — 62 floor tiles and 134 wall tiles — because they are different SKUs, different thicknesses, and usually different grout.",
          ],
        },
      ],
      howToMeasure:
        "Measure the tile area length and width. For backsplashes, measure wall length and height to the cabinet line. Note tile size printed on the box.",
      commonMistakes: [
        "Ignoring grout joint width on small-format tile (adds up over hundreds of tiles).",
        "Using net area without waste — cuts around toilets and doorways need extras.",
        "Mixing up inches and centimeters on imported tile labels.",
      ],
      faqs: [
        {
          question: "How many 12x12 tiles are in 100 square feet?",
          answer:
            "**One hundred 12 × 12 inch tiles cover exactly 100 square feet, or 98 tiles once a 1/8-inch grout joint is included.** A 12-inch tile measures 144 in², which is 1 ft². With the joint each piece occupies 147.02 in², so the count drops slightly. Add 10% waste and order 108 tiles.",
        },
        {
          question: "How much extra tile should I order for waste?",
          answer:
            "**Add 10% for a straight or running-bond layout, 15% for a 45-degree diagonal, and 18–20% for herringbone or chevron.** Small rooms with many perimeter cuts deserve 15% even on a straight grid. On 100 ft² of 12 × 12 inch tile with 1/8-inch joints those allowances give 108, 113, and 118 tiles.",
        },
        {
          question: "Does grout joint width change how many tiles I need?",
          answer:
            "**Yes — a wider grout joint enlarges each tile's effective footprint, so slightly fewer tiles cover the same area.** A 12-inch tile with a 1/8-inch joint occupies 147.02 in² instead of 144, cutting 100 tiles to 98. On 2 × 2 inch mosaic the same joint drops 3,600 pieces to 3,189.",
        },
        {
          question: "How many tiles do I need for a 5 by 8 foot bathroom floor?",
          answer:
            "**A 5 × 8 foot bathroom floor is 40 ft² and takes about 44 twelve-inch tiles with 1/8-inch joints and a 12% allowance.** The math is 40 × 1.12 = 44.8 ft², or 6,451 in², divided by 147.02 in² per tile. Round up and then buy whole cartons.",
        },
        {
          question: "What is the difference between porcelain and ceramic tile?",
          answer:
            "**Porcelain is defined as an impervious tile with water absorption of 0.5% or less measured by ASTM C373; ceramic tile above that threshold is non-porcelain.** TCNA notes porcelain is usually frost resistant but harder to cut and bond. The Porcelain Tile Certification Agency mark confirms a tile actually meets the standard.",
        },
        {
          question: "Do I need bullnose or trim tile in addition to field tile?",
          answer:
            "**Yes, wherever a tile edge will be exposed — this calculator counts field tile only.** Measure exposed edges in linear feet and convert to bullnose, pencil trim, or metal profile pieces using the trim length. Curbs, niches, and window returns are where people most often run short.",
        },
        {
          question: "How stiff does a floor need to be before tiling?",
          answer:
            "**The traditional minimum for a floor that will be tiled is L/360, measured before the tile underlayment is installed.** TCNA notes a 10-foot joist span should deflect no more than about 1/3 inch, and that failures have been observed even at L/600, so recommendations rely on tested assemblies rather than deflection numbers alone.",
        },
      ],
      dataTables: [
        {
          title: "How many tiles are in 100 square feet?",
          columns: [
            "Tile size",
            "Face area",
            "Tiles per 100 ft² (no joint)",
            "Tiles per 100 ft² with 1/8 in joint",
          ],
          rows: [
            ["2 × 2 in mosaic", "4.00 in²", "3,600", "3,189"],
            ["3 × 6 in subway", "18.00 in²", "800", "753"],
            ["4 × 4 in", "16.00 in²", "900", "847"],
            ["8 × 8 in", "64.00 in²", "225", "219"],
            ["12 × 12 in", "144.00 in²", "100", "98"],
            ["12 × 24 in", "288.00 in²", "50", "50"],
            ["24 × 24 in", "576.00 in²", "25", "25"],
          ],
          note: "100 ft² = 14,400 in². Counts are rounded up to whole tiles and exclude any waste allowance.",
        },
        {
          title: "How much extra tile should you order for each layout?",
          columns: [
            "Layout or condition",
            "Waste allowance",
            "Area ordered for 100 ft²",
            "12 × 12 in tiles at 1/8 in joint",
          ],
          rows: [
            ["Straight grid, simple rectangle", "10%", "110 ft²", "108"],
            ["Offset / running bond", "10%", "110 ft²", "108"],
            ["Backsplash with outlets and returns", "12%", "112 ft²", "110"],
            ["Small bath with many perimeter cuts", "15%", "115 ft²", "113"],
            ["Diagonal at 45 degrees", "15%", "115 ft²", "113"],
            ["Herringbone or chevron", "20%", "120 ft²", "118"],
          ],
          note: "Waste is applied to net area before dividing by the effective tile footprint. Buy whole cartons and keep one spare.",
        },
        {
          title: "What tile tolerances and standards should you check before ordering?",
          columns: [
            "Item",
            "Standard",
            "Published requirement",
            "Why it affects your order",
          ],
          rows: [
            [
              "Porcelain definition",
              "ASTM C373 absorption test",
              "Water absorption of 0.5% or less",
              "Decides mortar, blade, and freeze-thaw suitability",
            ],
            [
              "Paver tile warpage",
              "ANSI A137.1 §5.3.1.2.6",
              "Not more than 1.0% along any edge nor 0.75% on either diagonal",
              "Warped tile consumes the lippage allowance",
            ],
            [
              "Lippage",
              "ANSI A108.02 §4.3.7",
              "Differences in elevation between edges of adjacent tile modules",
              "Joint width and lighting change how visible it is",
            ],
            [
              "Slip resistance",
              "ANSI A326.3",
              "DCOF test method plus a published product use classification",
              "Determines whether a SKU suits wet areas",
            ],
            [
              "Floor rigidity",
              "Traditional L/360 minimum",
              "A 10 ft joist span should deflect no more than about 1/3 in",
              "A springy floor cracks tile and grout regardless of quantity",
            ],
          ],
          note: "Requirements are quoted from TCNA's published summaries of the ANSI standards. Consult the current standard and the TCNA Handbook for full text.",
        },
      ],
      references: [
        {
          label: "FAQ: Porcelain vs. Non-Porcelain tile",
          publisher: "Tile Council of North America",
          year: "2025",
          url: "https://tcnatile.com/resource-center/faq/porcelain-vs-non-porcelain/",
        },
        {
          label: "FAQ: Lippage and allowable tile warpage (ANSI A108.02, A137.1)",
          publisher: "Tile Council of North America",
          year: "2023",
          url: "https://tcnatile.com/resource-center/faq/lippage/",
        },
        {
          label: "FAQ: Acceptable deflection for a floor that will be tiled",
          publisher: "Tile Council of North America",
          year: "2023",
          url: "https://tcnatile.com/resource-center/faq/deflection/",
        },
        {
          label: "Dynamic Coefficient of Friction and ANSI A326.3",
          publisher: "Tile Council of North America",
          year: "2025",
          url: "https://tcnatile.com/resource-center/dynamic-coefficient-of-friction/",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        tilesNeeded: "Field tiles to order",
      },
      inputLabels: {},
      metaTitle: "Tile Calculator — How Many Tiles? | BuildSiteCalc",
      metaDescription:
        "Free tile calculator for floors and walls. Enter room size and tile dimensions to count tiles with grout gap and waste.",
    },
    drywall: {
      title: "Drywall Calculator",
      description:
        "Estimate 4×8 or 4×12 drywall sheets for walls and ceilings. Includes waste for cuts around doors, windows, and corners.",
      shortDescription: "Drywall sheet count for walls and ceilings.",
      formula:
        "Sheets needed = ceil(wall/ceiling area with waste ÷ sheet area). Standard sheets: 4×8 = 32 ft², 4×12 = 48 ft².",
      assumptions: [
        "Standard 1/2 in gypsum board on walls; adjust sheet size to your selection.",
        "Default waste is 10% for simple rooms, 15% for many openings.",
        "Does not include moisture-resistant (green) board unless you order separately.",
        "Ceiling and wall areas are combined in one total area entry.",
        "No deduction for areas receiving other finishes unless you subtract them.",
      ],
      workedExample: {
        title: "12 × 10 ft room, 8 ft walls, 4×8 sheets",
        body: "Wall area ≈ 352 ft² (same as paint calc). With 10% waste = 387 ft². 387 ÷ 32 = 12.1 → 13 sheets of 4×8.",
      },
      sections: [
        {
          heading: "How many sheets of drywall do I need for a room?",
          paragraphs: [
            "Total the surface area first, then divide by the area of one sheet. A 4 ft × 8 ft panel is 32 ft² and a 4 ft × 12 ft panel is 48 ft², so the count is the area with waste divided by 32 or 48, rounded up to whole sheets. For a room, wall area is perimeter × ceiling height, and ceiling area is length × width. A 12 ft × 12 ft room with 8 ft walls gives a 48 ft perimeter, so walls are 384 ft², the ceiling adds 144 ft², and the combined total is 528 ft². The same arithmetic works for gypsum board, sheetrock, plasterboard, and wallboard, because the calculator only cares about panel dimensions.",
            "Then decide what to subtract. Small windows and standard doors are usually left in the area because the offcuts rarely reassemble into usable pieces, and the default 10 percent allowance is meant to absorb them. Deduct only openings that occupy a full floor-to-ceiling bay, a large picture window wall, or a stair opening. Nominal panel width is 4 ft with standard lengths from 8 ft to 16 ft, and 54 in wide board is available in 1/2 in thickness for 9 ft walls [3]. Choosing a length that matches the wall reduces butt joints, which is the real driver of finishing labor.",
          ],
        },
        {
          heading: "Should I use 4x8 or 4x12 drywall sheets?",
          paragraphs: [
            "Longer panels mean fewer joints. On a 12 ft wall a single 4 × 12 sheet hung horizontally spans the whole run with no butt joint, while 4 × 8 sheets leave one butt joint per course. Gypsum Association guidance is to use boards of maximum practical length so the minimum number of end joints occur, and to keep joints at least 12 in away from the corners of window and door openings unless a control joint is placed there [3]. Butt joints are the hardest to hide because they sit on the flat rather than in a tapered recess, so cutting their number is worth real money at the finishing stage.",
            "Weight is the counterargument. At the nominal 1.6 lb per ft² for 1/2 in regular board, a 4 × 8 sheet weighs about 51 lb and a 4 × 12 sheet about 77 lb [3]. Ceilings in particular are a two-person job with 12 ft panels, and 5/8 in Type X board of the same size is heavier still, commonly around 2.2 lb per ft². Access matters too: a 12 ft panel will not turn a tight stair. Many DIY jobs land on 4 × 8 for handling and 4 × 12 only on long, straight, ground-floor walls. The sheet count changes accordingly, since 48 ft² per panel covers 50 percent more than 32 ft².",
          ],
        },
        {
          heading: "How much drywall do I need for a 12x12 room?",
          paragraphs: [
            "Take a 12 ft × 12 ft room with 8 ft ceilings and hang walls plus ceiling. Perimeter is 2 × (12 + 12) = 48 ft, so wall area is 48 × 8 = 384 ft². The ceiling is 12 × 12 = 144 ft². Combined area is 528 ft². Apply the 10 percent default: 528 × 1.10 = 580.8 ft². Divide by 32 ft² for 4 × 8 panels and you get 18.15, so the named result is 19 sheets. In 4 × 12 panels the same 580.8 ft² divided by 48 is 12.1, so 13 sheets. Notice the rounding happens once, at the very end.",
            "Now stress-test the assumptions. If the room has a full-height opening to a hallway, subtract that bay before applying waste. If the ceiling is vaulted or coffered, expect 15 percent rather than 10 because angled cuts generate scrap that cannot be reused. If part of the bathroom side will receive tile, the panel count does not change but the board type does, and the calculator does not choose product type. Finally, order in the pallet quantity your supplier sells; buying 19 sheets often means taking 20, and the spare is genuinely useful for patches during trim-out.",
          ],
        },
        {
          heading: "How much does a sheet of drywall weigh?",
          paragraphs: [
            "Weight scales directly with area and thickness. Nominal weights for standard gypsum board are about 1.1 lb per ft² at 1/4 in, 1.3 lb per ft² at 3/8 in, and 1.6 lb per ft² at 1/2 in [3]. That makes a 4 × 8 sheet roughly 35 lb in 1/4 in, 42 lb in 3/8 in, and 51 lb in 1/2 in, while a 4 × 12 sheet of 1/2 in board runs about 77 lb. Lightweight 1/2 in panels are sold at reduced weights, and 5/8 in Type X is heavier, commonly near 2.2 lb per ft², which puts a 4 × 12 sheet around 106 lb.",
            "Weight has planning consequences beyond your back. A 500 ft² order of 1/2 in board is roughly 800 lb of material that has to be delivered, stacked flat, and supported along its full length so panels do not sag [3]. Ceiling assemblies have their own limits: gypsum board manufacturers publish maximum weights of overlaid unsupported insulation, such as 1.3 lb per ft² over 1/2 in regular board on framing at 24 in on center and 2.2 lb per ft² at 16 in on center [3]. The calculator counts panels; it does not check framing capacity, deflection, or fire-rated assembly requirements.",
          ],
        },
        {
          heading: "How much joint compound and tape do I need for drywall?",
          paragraphs: [
            "Compound and tape scale with linear feet of joint, not with sheet count, which is why this calculator deliberately stops at panels. A rough planning figure many estimators use is one gallon of ready-mix compound and about 40 to 50 linear feet of tape per 100 ft² of board for a standard three-coat, Level 4 finish. The number of joints depends on panel length, so the same room finished with 4 × 12 board needs measurably less tape than one finished with 4 × 8. Count your actual joints from the layout rather than trusting a rule of thumb on a complex ceiling.",
            "The finish level drives the rest. GA-214 defines Level 4 as two separate coats of compound over flat joints, one over interior angles, and three coats over fastener heads and accessories, which suits smooth walls with flat paint, light texture, or wallcoverings [2]. Level 5 adds a skim coat of compound over the entire surface and is specified for non-flat or dark paints and critical lighting [2]. Level 5 can easily double compound consumption. Level 2 is enough where board is a tile substrate [2]. Decide the level before you buy compound, because it changes the quantity far more than the sheet count does.",
          ],
        },
      ],
      howToMeasure:
        "Calculate total square footage of surfaces to be drywalled. For rooms, sum all walls plus ceiling. Subtract large openings only if they occupy full floor-to-ceiling space.",
      commonMistakes: [
        "Forgetting the ceiling when hanging a full room.",
        "Using 4×8 sheet count math on 4×12 sheets (48 ft² vs 32 ft²).",
        "Ordering too little for vaulted or angled ceilings with extra cuts.",
      ],
      faqs: [
        {
          question: "How many sheets of drywall do I need for a 12x12 room?",
          answer:
            "**A 12 ft by 12 ft room with 8 ft ceilings needs 19 sheets of 4 × 8 drywall, or 13 sheets of 4 × 12, including a 10 percent waste allowance.** Walls are 384 ft² and the ceiling adds 144 ft², giving 528 ft², which becomes 581 ft² with waste before dividing by sheet area.",
        },
        {
          question: "How many 4x8 sheets of drywall is 1000 square feet?",
          answer:
            "**One thousand square feet takes 32 sheets of 4 × 8 drywall with no waste, or 35 sheets with a 10 percent allowance.** Each 4 × 8 panel covers 32 ft², so 1,000 divided by 32 is 31.25. In 4 × 12 panels at 48 ft² each, the same area needs 21 sheets, or 23 with waste.",
        },
        {
          question: "How much does a 4x8 sheet of 1/2 inch drywall weigh?",
          answer:
            "**A 4 ft by 8 ft sheet of 1/2 in regular gypsum board weighs about 51 pounds, based on a nominal 1.6 lb per square foot.** A 4 × 12 sheet of the same board is roughly 77 lb. Thinner 3/8 in board is about 1.3 lb per ft², and 1/4 in board about 1.1 lb per ft².",
        },
        {
          question: "Should drywall be hung horizontally or vertically?",
          answer:
            "**Hang the ceiling first at right angles to the framing members, then the walls, using boards of maximum practical length so the fewest end joints occur.** Gypsum Association guidance also says to keep panel joints at least 12 in from the corners of window and door openings and to stagger vertical end joints.",
        },
        {
          question: "How far apart should drywall screws be?",
          answer:
            "**With framing at 16 in on center, screws go no more than 12 in on center on ceilings and 16 in on center on walls; with framing at 24 in on center, use 12 in on center for both.** Drive fasteners from the center of the panel outward and set heads slightly below the surface.",
        },
        {
          question: "What thickness of drywall should I use on walls and ceilings?",
          answer:
            "**Half-inch board is the usual choice for residential walls and ceilings, while 5/8 in is used where fire-resistance or sag performance requires it.** Framing spacing limits matter: 3/8 in board is limited to framing no more than 16 in on center, and 1/4 in board is only for application over existing surfaces.",
        },
        {
          question: "How much waste should I add when ordering drywall?",
          answer:
            "**Ten percent is a reasonable allowance for a simple rectangular room, rising to 12 to 15 percent where there are many openings, angled or vaulted ceilings, or short walls.** The allowance covers offcuts that cannot be reused, damaged edges, and mis-cuts. It does not cover a forgotten ceiling or soffit.",
        },
      ],
      dataTables: [
        {
          title: "How many square feet does each drywall sheet size cover?",
          columns: [
            "Sheet size",
            "Area per sheet",
            "Sheets per 500 ft²",
            "Weight at 1/2 in (1.6 lb per ft²)",
          ],
          rows: [
            ["4 ft × 8 ft", "32 ft²", "16", "51 lb"],
            ["4 ft × 9 ft", "36 ft²", "14", "58 lb"],
            ["4 ft × 10 ft", "40 ft²", "13", "64 lb"],
            ["4 ft × 12 ft", "48 ft²", "11", "77 lb"],
            ["4 ft × 14 ft", "56 ft²", "9", "90 lb"],
            ["54 in × 12 ft", "54 ft²", "10", "86 lb"],
          ],
          note: "Nominal width is 4 ft with standard lengths of 8 ft to 16 ft; 54 in wide board is offered in 1/2 in thickness.",
        },
        {
          title: "How much drywall does a room need by size?",
          columns: [
            "Room with 8 ft ceilings",
            "Walls plus ceiling",
            "Area with 10 percent waste",
            "4 × 8 sheets",
            "4 × 12 sheets",
          ],
          rows: [
            ["10 ft × 10 ft", "420 ft²", "462 ft²", "15", "10"],
            ["12 ft × 10 ft", "472 ft²", "519 ft²", "17", "11"],
            ["12 ft × 12 ft", "528 ft²", "581 ft²", "19", "13"],
            ["14 ft × 12 ft", "584 ft²", "642 ft²", "21", "14"],
            ["16 ft × 14 ft", "704 ft²", "774 ft²", "25", "17"],
            ["20 ft × 16 ft", "896 ft²", "986 ft²", "31", "21"],
          ],
          note: "No deduction taken for standard doors or windows. Counts round up to whole sheets.",
        },
        {
          title: "What level of drywall finish should you specify?",
          columns: [
            "Level",
            "Typical use",
            "Coats over flat joints",
            "Coats over fasteners",
          ],
          rows: [
            [
              "Level 0",
              "Temporary construction or final decoration undetermined",
              "None",
              "None",
            ],
            [
              "Level 1",
              "Plenums, attics, concealed areas, smoke barriers",
              "Tape embedded only",
              "Not required",
            ],
            [
              "Level 2",
              "Tile substrate, garages, warehouse storage",
              "Tape plus thin wipe coat",
              "1",
            ],
            [
              "Level 3",
              "Medium or heavy texture, heavy-duty commercial wallcovering",
              "1 separate coat",
              "2",
            ],
            [
              "Level 4",
              "Smooth walls with flat paint, light texture, wallcoverings",
              "2 separate coats",
              "3",
            ],
            [
              "Level 5",
              "Non-flat or dark paint, critical lighting",
              "2 coats plus full skim coat",
              "3",
            ],
          ],
          note: "Summarized from GA-214-2021. Interior angles receive one separate coat at Levels 4 and 5.",
        },
      ],
      references: [
        {
          label:
            "GA-216 Application and Finishing of Gypsum Panel Products: framing spacing and fastener spacing",
          publisher: "Gypsum Association",
          year: "2010",
          url: "https://www.gypsum.org/wp-content/uploads/2011/11/GA-216-2010.pdf",
        },
        {
          label: "GA-214 Levels of Finish for Gypsum Panel Products",
          publisher: "Gypsum Association",
          year: "2021",
          url: "https://www.buildsite.com/pdf/americangypsum/Levels-of-Finish-for-Gypsum-Panel-Products-2108977.pdf",
        },
        {
          label:
            "Gold Bond Brand Gypsum Board submittal sheet: panel widths, lengths, weights and installation notes",
          publisher: "National Gypsum Company",
          year: "2015",
          url: "https://constructioninstruction.com/wp-content/uploads/2020/11/Gold-Bond-Gypsum-Board-Submittal.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        sheetsNeeded: "Drywall sheets",
      },
      inputLabels: {
        sheetSize: "Drywall sheet size",
      },
      metaTitle: "Drywall Calculator — Sheets Needed | BuildSiteCalc",
      metaDescription:
        "Calculate how many 4×8 or 4×12 drywall sheets you need. Free calculator with waste factor for walls and ceilings.",
    },
    "roofing-shingle": {
      title: "Roofing Shingle Calculator",
      description:
        "Estimate roofing squares and shingle bundles from roof footprint dimensions and pitch. Adjusts for roof slope and waste.",
      shortDescription: "Shingle squares and bundles for your roof.",
      formula:
        "Footprint area = length × width. Roof area = footprint × pitch factor. Squares = roof area ÷ 100. Bundles = squares × bundles per square (typically 3). Waste is added to roof area before converting.",
      assumptions: [
        "Simple gable or hip roof approximated from rectangular footprint × pitch multiplier.",
        "One roofing square = 100 ft² of roof area.",
        "Three bundles per square is standard for many architectural shingles.",
        "Default waste is 10%; use 12–15% for complex roofs or starter strips.",
        "Does not include ridge cap, underlayment, or drip edge.",
      ],
      workedExample: {
        title: "40 × 30 ft footprint, 4/12 pitch",
        body: "Footprint = 1,200 ft². Pitch factor for 4/12 ≈ 1.054. Roof area ≈ 1,265 ft². Squares = 12.65 → 13 squares. At 3 bundles/square ≈ 39 bundles, plus waste.",
      },
      sections: [
        {
          heading: "How many bundles of shingles are in a square?",
          paragraphs: [
            "A roofing square is 100 ft² of finished roof surface, and for most asphalt shingle products three bundles cover one square — roughly 33.3 ft² per bundle. That is the ratio this calculator uses by default. Heavier designer, luxury, and some impact-rated profiles are packaged four or even five bundles per square, which lowers coverage to 25 ft² or 20 ft² per bundle. The coverage chart printed on the bundle wrapper is the only authoritative figure for the product you are buying, so read it before converting squares to bundles. Squares are the estimating unit; bundles are the purchasing unit, and confusing the two is the most common ordering error.",
            "Bundles are counted from sloped roof area, never from the building footprint. A 2,000 ft² roof surface is 20 squares, which is 60 bundles at three per square or 80 bundles at four. Add the waste allowance to the roof area first, then divide by 100: 2,000 ft² plus 10% is 2,200 ft², or 22 squares and 66 bundles. Field shingles are only part of the order. Starter strip, hip and ridge cap, underlayment, ice barrier, drip edge, valley metal, pipe boots, and nails are all sold separately and estimated in linear feet, rolls, or pieces rather than squares.",
          ],
        },
        {
          heading: "What is the roof pitch multiplier and how do you use it?",
          paragraphs: [
            "The pitch multiplier converts the flat footprint you can measure from the ground into the sloped surface you actually shingle. It is pure geometry: multiplier = √(rise² + 12²) ÷ 12, where rise is the vertical inches per 12 inches of horizontal run. A 4/12 roof gives √160 ÷ 12 = 1.054, so the roof surface is 5.4% larger than the footprint. A 6/12 gives 1.118, an 8/12 gives 1.202, and a 12/12 gives exactly √2, or 1.414 — a 41% increase. Skipping this step is the single biggest source of short shingle orders on steeper roofs.",
            "Apply it before anything else: roof area = footprint × multiplier. On a 1,200 ft² footprint, 4/12 yields 1,265 ft² while 12/12 yields 1,697 ft² — a difference of more than four squares from the same building. FEMA classifies sloped roofs as those with a pitch of 3 feet vertical to 12 feet horizontal (3:12) or greater [1]. Below that, asphalt shingles enter low-slope territory where manufacturer instructions and code require additional underlayment or a different roof covering entirely, so confirm the minimum slope for your product. Measure rise and run with a level and a tape, or use a pitch gauge.",
          ],
        },
        {
          heading: "How do you measure a roof from the ground?",
          paragraphs: [
            "Measure the building footprint at the eaves, outside edge to outside edge, including the overhang — that overhang is shingled, so leaving it out understates the order. Tape the length and width along the walls, then add the projection on each side. A 36 × 26 ft building with a 12-inch overhang all around is effectively 38 × 28 ft, or 1,064 ft² rather than 936 ft², an increase of about 1.3 squares before the pitch factor is even applied. Sketch the plan and label every rectangle, including porches, dormer roofs, garage wings, and bay projections that carry their own pitch.",
            "For the pitch, hold a level horizontally against the rake board, measure 12 inches out along it, then measure straight down to the roof surface; that vertical distance in inches is the rise. Do this from a ladder or an upstairs window rather than walking the roof. Complex roofs with multiple planes and pitches are better handled section by section, or with an aerial measurement report. This calculator approximates a simple gable or hip from one rectangle and one pitch, so treat the output as a budgeting and ordering estimate — not a structural evaluation or a substitute for a contractor's take-off.",
          ],
        },
        {
          heading: "How much waste should you add for hips, valleys, and ridge?",
          paragraphs: [
            "Ten percent is a reasonable default for a straightforward gable roof with a couple of vent penetrations. Hip roofs cut every course at the hips and typically justify 12%, while a cut-up roof with several valleys, dormers, skylights, and a chimney can warrant 15–18%. On a 2,000 ft² roof surface those allowances translate to 21.0, 22.0, 22.4, 23.0, and 23.6 squares at 5%, 10%, 12%, 15%, and 18% — which at three bundles per square is 63, 66, 68, 69, and 71 bundles. Because bundles round up, one extra percentage point sometimes costs nothing and sometimes costs a full bundle.",
            "Waste is added to the sloped roof area before dividing by 100, which is how this calculator handles it. Note what waste does not cover: starter course, a separate product run along eaves and rakes, and hip and ridge cap, sold by the linear foot. FEMA's mitigation guidance for sloped roofs recommends ring-shank nails for wood nailing, fasteners placed inside the manufacturer's nailing zone, and upgraded underlayment beneath shingles in high-wind regions [1]. FEMA's Homebuilder's Guide to Coastal Construction devotes a dedicated fact sheet to asphalt shingle roofing for high-wind regions [2]. Those are installation requirements, not quantity inputs.",
          ],
        },
        {
          heading:
            "How many bundles of shingles do I need for a 40 by 30 foot house at 4/12 pitch?",
          paragraphs: [
            "The footprint is 40 × 30 = 1,200 ft². The 4/12 pitch multiplier is √(4² + 12²) ÷ 12 = √160 ÷ 12 = 1.0541, so the roof surface is 1,200 × 1.0541 = 1,265 ft². That alone is 12.65 squares. This is a simple gable with two plumbing vents, so add 10%: 1,265 × 1.10 = 1,391 ft², or 13.91 squares. Round up to 14 squares. At three bundles per square, order 42 bundles of field shingles. Before waste the same roof is 13 squares and 39 bundles, so the allowance costs exactly three bundles.",
            "A steeper example shows why pitch dominates. A 28 × 36 ft footprint is 1,008 ft². At 8/12 the multiplier is √208 ÷ 12 = 1.2019, giving 1,212 ft² of roof surface. This one is a hip roof with two dormers, so use 12%: 1,212 × 1.12 = 1,357 ft², or 13.57 squares, which is 40.7 bundles — order 41 bundles. The footprint is 16% smaller than the first example, yet the bundle count is nearly identical, entirely because of slope. Separately, measure ridge and hip lengths in linear feet for cap, and eaves and rakes for starter strip.",
          ],
        },
      ],
      howToMeasure:
        "Measure the building footprint at the eaves from outside edge to outside edge. For pitch, use rise and run from the roof surface or a pitch gauge (e.g., 4 in rise per 12 in run = 4/12).",
      commonMistakes: [
        "Using flat footprint area without pitch adjustment.",
        "Confusing bundles with squares (1 square ≠ 1 bundle).",
        "Forgetting waste for ridge, valley, and starter course cuts.",
      ],
      faqs: [
        {
          question: "How many bundles of shingles are in a square?",
          answer:
            "**Three bundles cover one roofing square for most asphalt shingles, or about 33.3 ft² per bundle.** Heavier designer and impact-rated profiles are often packaged four or five bundles per square, dropping coverage to 25 or 20 ft². The chart on the bundle wrapper is the only reliable figure for your product.",
        },
        {
          question: "What is a roofing square?",
          answer:
            "**One roofing square is 100 square feet of finished, sloped roof surface — not building footprint.** Divide the pitch-adjusted roof area by 100 to get squares, then multiply by bundles per square for the purchase quantity. A 2,000 ft² roof surface is 20 squares, or 60 bundles.",
        },
        {
          question: "What is the pitch multiplier for a 6/12 roof?",
          answer:
            "**A 6/12 roof has a pitch multiplier of 1.118, so the roof surface is 11.8% larger than the footprint.** The formula is √(rise² + 144) ÷ 12, here √180 ÷ 12. A 1,200 ft² footprint becomes 1,342 ft², which is 13.4 roofing squares before waste.",
        },
        {
          question: "How many shingles do I need for a 1,500 square foot roof?",
          answer:
            "**A 1,500 ft² roof surface is 15 squares, or 45 bundles at three bundles per square.** With a 10% waste allowance the area becomes 1,650 ft², which is 16.5 squares and 50 bundles. Confirm bundles per square on the wrapper before ordering, because heavier designer profiles change that ratio.",
        },
        {
          question: "Do I add waste before or after converting to squares?",
          answer:
            "**Add waste to the sloped roof area first, then divide by 100 to get squares.** Adding it afterward compounds two roundings and usually overstates the order. For a 2,000 ft² roof at 10%, use 2,200 ft², which is 22 squares and 66 bundles at three per square.",
        },
        {
          question:
            "Does the calculator include ridge cap, starter strip, and underlayment?",
          answer:
            "**No — it counts field shingles only, expressed as roofing squares and bundles.** Starter strip and hip and ridge cap are estimated in linear feet along eaves, rakes, hips, and ridges. Underlayment, ice barrier, drip edge, valley metal, pipe boots, and nails are separate line items.",
        },
        {
          question: "How steep does a roof have to be for asphalt shingles?",
          answer:
            "**FEMA classifies a roof as sloped when the pitch is 3 feet vertical to 12 feet horizontal (3:12) or greater.** Below that, asphalt shingles are in low-slope territory where code and manufacturer instructions require added underlayment or a different covering. Confirm the minimum slope in the product's application instructions.",
        },
      ],
      dataTables: [
        {
          title: "What is the roof pitch multiplier for each slope?",
          columns: [
            "Pitch (rise per 12 in run)",
            "Slope angle",
            "Pitch multiplier",
            "Roof area from a 1,200 ft² footprint",
            "Roofing squares",
          ],
          rows: [
            ["3/12", "14.0°", "1.031", "1,237 ft²", "12.4"],
            ["4/12", "18.4°", "1.054", "1,265 ft²", "12.7"],
            ["5/12", "22.6°", "1.083", "1,300 ft²", "13.0"],
            ["6/12", "26.6°", "1.118", "1,342 ft²", "13.4"],
            ["8/12", "33.7°", "1.202", "1,442 ft²", "14.4"],
            ["10/12", "39.8°", "1.302", "1,562 ft²", "15.6"],
            ["12/12", "45.0°", "1.414", "1,697 ft²", "17.0"],
          ],
          note: "Multiplier = √(rise² + 12²) ÷ 12. Apply it to footprint area before adding waste or dividing by 100.",
        },
        {
          title: "How many bundles of shingles do you need for each roof size?",
          columns: [
            "Sloped roof area",
            "Squares",
            "Bundles at 3 per square",
            "Bundles at 4 per square",
            "Bundles at 3 per square with 10% waste",
          ],
          rows: [
            ["1,000 ft²", "10", "30", "40", "33"],
            ["1,500 ft²", "15", "45", "60", "50"],
            ["2,000 ft²", "20", "60", "80", "66"],
            ["2,500 ft²", "25", "75", "100", "83"],
            ["3,000 ft²", "30", "90", "120", "99"],
            ["4,000 ft²", "40", "120", "160", "132"],
          ],
          note: "One square = 100 ft² of finished roof. Confirm bundles per square on the wrapper; heavier profiles ship 4 or 5 per square.",
        },
        {
          title: "How does the waste allowance change a shingle order?",
          columns: [
            "Waste allowance",
            "Area used from a 2,000 ft² roof",
            "Squares",
            "Bundles at 3 per square",
            "When it applies",
          ],
          rows: [
            ["5%", "2,100 ft²", "21.0", "63", "Simple gable, few penetrations"],
            ["10%", "2,200 ft²", "22.0", "66", "Default for most gable roofs"],
            ["12%", "2,240 ft²", "22.4", "68", "Hip roof with a couple of valleys"],
            ["15%", "2,300 ft²", "23.0", "69", "Dormers, skylights, many cuts"],
            ["18%", "2,360 ft²", "23.6", "71", "Cut-up roof with multiple valleys"],
          ],
          note: "Waste is applied to sloped roof area before converting to squares. Starter strip and ridge cap are estimated separately in linear feet.",
        },
      ],
      references: [
        {
          label: "Fact Sheet 3.3.1: Roof Systems—Sloped Roofs (FEMA P-2181)",
          publisher: "Federal Emergency Management Agency",
          year: "2022",
          url: "https://www.fema.gov/sites/default/files/documents/fema_p-2181-fact-sheet-3-3-1-roof-systems-sloped-roofs.pdf",
        },
        {
          label:
            "FEMA P-499, Homebuilder's Guide to Coastal Construction (Fact Sheet 7.3, Asphalt Shingle Roofing for High-Wind Regions)",
          publisher: "Federal Emergency Management Agency",
          year: "2010",
          url: "https://www.fema.gov/sites/default/files/2020-08/fema499_2010_edition.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        squares: "Roofing squares",
        bundles: "Shingle bundles",
      },
      inputLabels: {},
      metaTitle: "Roofing Shingle Calculator — Squares & Bundles | BuildSiteCalc",
      metaDescription:
        "Free roofing calculator. Estimate shingle squares and bundles from roof dimensions and pitch with waste factor.",
    },
    mulch: {
      title: "Mulch Calculator",
      description:
        "Calculate cubic yards of mulch for garden beds and tree rings. Optional bag count when you know bag volume.",
      shortDescription: "Cubic yards of mulch for garden beds.",
      formula:
        "Volume = area × depth (converted to consistent units). Cubic yards = volume ÷ 27 (from ft³). Ordered volume includes waste percentage.",
      assumptions: [
        "Mulch is spread at a uniform depth across the bed.",
        "Typical decorative depth is 2–4 inches; refresh layers may be 1–2 in.",
        "Bag volume defaults to 2 ft³ per bag when enabled.",
        "Settled volume is less than fluffed delivery — order by installed depth.",
        "Does not include edging or weed barrier materials.",
      ],
      workedExample: {
        title: "200 ft² bed, 3 in depth",
        body: "Depth 3 in = 0.25 ft. Volume = 200 × 0.25 = 50 ft³. Cubic yards = 50 ÷ 27 ≈ 1.85 yd³. With 10% waste ≈ 2.0 yd³.",
      },
      sections: [
        {
          heading: "How do you calculate how much mulch you need?",
          paragraphs: [
            "Start with the net surface area, convert the mulch depth to feet, and multiply: area × depth = cubic feet. Divide cubic feet by 27 for cubic yards because one cubic yard contains 27 cubic feet. For example, 300 ft² at 3 in deep is 300 × 0.25 = 75 ft³, or 2.78 yd³ before an allowance. The same volume method works for bark mulch, arborist wood chips, shredded hardwood, pine bark, and other loose ground cover. Weight is not part of the formula because moisture, particle size, and wood species can change density.",
            "Measure only the soil that will receive material. Subtract patios, stepping stones, ponds, and large unmulched planting zones. Add an allowance after finding net area: 5% can cover a clean rectangle, while 10–15% is more practical for sweeping curves, uneven grade, hand spreading, or uncertain depth. This allowance covers estimating uncertainty; it is not permission to pile material deeper than plants can tolerate.",
          ],
        },
        {
          heading: "How many bags of mulch are in a yard?",
          paragraphs: [
            "A cubic yard equals 27 ft³, so it contains 27 one-ft³ bags, 18 bags of 1.5 ft³, 14 bags of 2 ft³ when rounded up, or 9 bags of 3 ft³. Always use the volume printed on the bag. A 2-ft³ bag covers 24 ft² at 1 in, 12 ft² at 2 in, 8 ft² at 3 in, or 6 ft² at 4 in. Fourteen 2-ft³ bags provide 28 ft³, which is one cubic foot more than a yard.",
            "Bagged mulch is easy to stage in small or inaccessible beds; bulk material avoids opening dozens of bags. Compare the delivered total, delivery minimum, and usable leftovers. At a hypothetical $2–$7 per 2-ft³ bag, a 14-bag cubic-yard equivalent costs about $28–$98 before tax. That is an arithmetic scenario, not a current market quote, so use local prices for the purchase decision.",
          ],
        },
        {
          heading: "How deep should mulch be around trees and plants?",
          paragraphs: [
            "EPA WaterSense says 3–4 inches provides suitable coverage for most plants and warns that excessive amounts can restrict water flow to roots [1]. USDA NRCS guidance for wood products specifies a 2-inch minimum in conservation applications where particles need to remain through heavy rain or wind [2]. Those figures serve different purposes. Plant type, existing material, drainage, climate, and mulch texture still matter.",
            "Leave a clear gap around trunks and woody stems, keep the root flare visible, and spread a consistent layer instead of building a mulch volcano. If 2 inches remain and the target is 3 inches, calculate a 1-inch refresh, not another full 3-inch layer. Loosen matted mulch before topping it up so water can reach the soil. EPA also advises leaving space between organic mulch and woody plants to help prevent rot [1].",
          ],
        },
        {
          heading: "Is bulk mulch cheaper than bags?",
          paragraphs: [
            "Bulk often becomes attractive once a job reaches several cubic yards, but there is no universal break-even point. Compare bulk quote + delivery + tax against rounded-up bag count × current bag price. Ask whether the landscape yard sells half-yard increments, whether the quoted yard is a loose loading measurement, and where the truck can legally and safely dump.",
            "Bags can still be the better workflow when a truck cannot reach the site, storage is limited, exact color matching matters, or the work spans several weekends. Bulk wood chips need a clean drop area and may need weather protection. This calculator estimates volume only; it does not select a horticultural product, predict decomposition, or guarantee that separate batches match.",
          ],
        },
        {
          heading: "How much mulch does an irregular 420 square foot yard need?",
          paragraphs: [
            "Split the yard into a 24 ft × 12 ft rectangle and a 12 ft × 11 ft rectangle: 288 + 132 = 420 ft². Subtract a 6 ft × 3 ft stone landing: 420 − 18 = 402 ft². At 3 in deep, depth is 0.25 ft, so volume is 402 × 0.25 = 100.5 ft³. Divide by 27 to get 3.72 yd³. With 12% for curves and low spots, 3.72 × 1.12 = 4.17 yd³. Order about 4.25–4.5 yd³ depending on supplier increments, or 57 whole 2-ft³ bags. This named result keeps the allowance separate and rounds only once at the end.",
            "For a circular tree ring, use the same sequence with circle area. A ring with an outer radius of 6 ft and an unmulched inner radius of 1 ft has π × (6² − 1²) = about 110 ft². At 3 in deep that is 27.5 ft³, or 1.02 yd³ before an allowance. Measure radius from the center, not the diameter from edge to edge, and never count the protected opening around the trunk as mulched area.",
          ],
        },
      ],
      howToMeasure:
        "Outline the bed and measure length × width, or break irregular beds into rectangles. Depth is the thickness you will spread after settling — not the piled height from the truck.",
      commonMistakes: [
        "Confusing inches of depth with feet.",
        "Underestimating irregular curved beds — break into sections.",
        "Ordering by bag count without checking bag cubic feet (2 vs 3 ft³ bags differ).",
      ],
      faqs: [
        {
          question: "How deep should mulch be for flower beds?",
          answer:
            "**Three to four inches is a practical finished depth for many newly mulched flower beds.** EPA WaterSense recommends 3–4 inches for most plants and warns that excessive mulch can restrict water flow to roots. If sound mulch already remains, measure it and calculate only the top-up needed to reach the target.",
        },
        {
          question: "How many bags of mulch are in a cubic yard?",
          answer:
            "**Fourteen standard 2-cubic-foot bags provide at least one cubic yard of mulch.** One cubic yard equals 27 ft³, so the exact calculation is 27 ÷ 2 = 13.5 bags; because bags are sold whole, round up to 14. For 1.5-ft³ bags, buy 18; for 3-ft³ bags, buy 9.",
        },
        {
          question: "How many square feet does one cubic yard of mulch cover?",
          answer:
            "**One cubic yard covers about 108 square feet at a 3-inch depth.** The same yard covers 324 ft² at 1 inch, 162 ft² at 2 inches, or 81 ft² at 4 inches. These yields assume a uniform layer before adding an allowance for curves, low spots, or supplier rounding.",
        },
        {
          question: "How much does a bag of mulch weigh?",
          answer:
            "**A bag of mulch has no single standard weight, so order it by the cubic-foot volume printed on the package.** Moisture content, wood species, particle size, and product type can make equal-volume bags weigh very differently. Use weight only for handling or vehicle-load planning, and use volume for the coverage calculation.",
        },
        {
          question: "How much mulch do I need for 100 square feet?",
          answer:
            "**You need about 0.93 cubic yard, or 13 two-cubic-foot bags, to cover 100 ft² at 3 inches deep before waste.** The calculation is 100 × 0.25 ÷ 27 = 0.926 yd³. With a 10% allowance, plan about 1.02 yd³, which rounds to 14 two-ft³ bags.",
        },
        {
          question: "Is it cheaper to buy mulch in bags or by the cubic yard?",
          answer:
            "**Bulk mulch is often cheaper for multi-yard projects, but delivery charges determine the real break-even point.** Compare the delivered bulk total with the whole-bag count multiplied by the current bag price. Bags may still be preferable for small beds, limited storage, difficult access, or work spread across several weekends.",
        },
        {
          question: "How often should you replace or refresh mulch?",
          answer:
            "**Refresh mulch when the existing layer has decomposed or settled below the intended depth, not automatically on a fixed calendar.** Measure several locations with a ruler and add only the missing depth. Rake apart matted material first, keep the finished layer away from trunks and woody stems, and remove unsuitable material when site conditions require it.",
        },
      ],
      dataTables: [
        {
          title: "How many mulch bags equal one cubic yard?",
          columns: [
            "Bag volume",
            "Exact bags per yd³",
            "Whole bags to reach 1 yd³",
            "Volume purchased",
          ],
          rows: [
            ["1 ft³", "27", "27", "27 ft³"],
            ["1.5 ft³", "18", "18", "27 ft³"],
            ["2 ft³", "13.5", "14", "28 ft³"],
            ["2.5 ft³", "10.8", "11", "27.5 ft³"],
            ["3 ft³", "9", "9", "27 ft³"],
          ],
          note: "One cubic yard equals exactly 27 cubic feet. Round up only when buying individual bags.",
        },
        {
          title: "How much area does mulch cover at each depth?",
          columns: [
            "Installed depth",
            "1 yd³ covers",
            "2-ft³ bag covers",
            "Mulch for 100 ft²",
          ],
          rows: [
            ["1 in", "324 ft²", "24 ft²", "0.31 yd³"],
            ["2 in", "162 ft²", "12 ft²", "0.62 yd³"],
            ["3 in", "108 ft²", "8 ft²", "0.93 yd³"],
            ["4 in", "81 ft²", "6 ft²", "1.23 yd³"],
          ],
          note: "Coverage assumes an even installed layer before a project allowance or supplier rounding.",
        },
        {
          title: "How much could bagged mulch cost per cubic yard?",
          columns: [
            "Price per 2-ft³ bag",
            "14-bag equivalent",
            "Cost per ft³",
            "Scenario",
          ],
          rows: [
            ["$2", "$28", "$1.00", "Budget sale example"],
            ["$4", "$56", "$2.00", "Midrange example"],
            ["$7", "$98", "$3.50", "Premium example"],
          ],
          note: "Illustrative arithmetic, not a market quote. Compare current local bag and delivered-bulk prices.",
        },
      ],
      references: [
        {
          label: "Landscaping Tips: mulch depth and plant protection",
          publisher: "U.S. Environmental Protection Agency WaterSense",
          year: "2026",
          url: "https://www.epa.gov/watersense/landscaping-tips",
        },
        {
          label: "Conservation Practice Standard: Mulching (Code 484)",
          publisher: "USDA Natural Resources Conservation Service",
          year: "2017",
          url: "https://www.nrcs.usda.gov/sites/default/files/2022-09/Mulching_CPS_484_Oct_2017.pdf",
        },
      ],
      lastUpdated: "2026-07-29",
      resultLabels: {
        volumeYd3: "Mulch to order (yd³)",
      },
      inputLabels: {},
      metaTitle: "Mulch Calculator — Cubic Yards | BuildSiteCalc",
      metaDescription:
        "Calculate cubic yards of mulch for landscaping beds. Free calculator with depth, area, waste, and optional bag count.",
    },
    gravel: {
      title: "Gravel Calculator",
      description:
        "Estimate cubic yards and tons of gravel or crushed stone for driveways, paths, and drainage layers. Select material density or enter custom.",
      shortDescription: "Gravel volume and weight for driveways and paths.",
      formula:
        "Volume = area × depth. Weight = volume × material density. Tons (US short) = weight in pounds ÷ 2,000. Waste factor increases ordered volume.",
      assumptions: [
        "Crushed stone density defaults near 1,600 kg/m³ (≈ 100 lb/ft³) depending on type.",
        "Compaction reduces volume after placement — depth is target compacted thickness.",
        "Driveways often use 4–6 in base layers; paths may use 2–3 in.",
        "Delivery is quoted in tons or cubic yards depending on supplier.",
        "Does not include geotextile or edging.",
      ],
      workedExample: {
        title: "100 ft² path, 4 in crushed gravel",
        body: "Volume = 100 × (4/12) = 33.3 ft³ = 1.23 yd³. At ~100 lb/ft³ ≈ 3,330 lb ≈ 1.67 tons before waste.",
      },
      sections: [
        {
          heading: "How do you calculate gravel in cubic yards and tons?",
          paragraphs: [
            "Multiply net area by compacted depth to get volume, keeping units consistent. A 600 ft² driveway at 4 in is 600 × 0.333 = about 200 ft³; divide by 27 for 7.41 yd³. Weight is volume × bulk density. Using the calculator's crushed-stone planning density of 1,600 kg/m³ (about 100 lb/ft³), that volume weighs roughly 20,000 lb or 10 US short tons before waste. Supplier scale tickets are more accurate because quarry source, grading, moisture, and compaction change bulk density.",
            "Volume and weight answer different ordering questions. Cubic yards describe the space the aggregate occupies; tons describe mass. A landscape yard may quote pea gravel by the yard while a quarry quotes #57 stone, crusher run, or road base by the ton. Keep short tons (2,000 lb) separate from metric tonnes (1,000 kg, about 2,205 lb), and never convert between yards and tons without a stated density.",
          ],
        },
        {
          heading: "What depth of gravel do you need for a driveway or path?",
          paragraphs: [
            "A decorative path may use a 2–3 in surface layer, while a residential driveway commonly starts with a deeper compacted base and a separate surface course. The correct section depends on soil support, drainage, frost, vehicle loading, aggregate grading, and local practice. FHWA describes granular base as the load-bearing layer below pavement and notes that base materials are commonly spread in 6–8 in lifts before compaction on larger pavement work [3]. That is construction guidance, not a universal driveway prescription.",
            "Calculate each layer separately when the design uses different materials. Four inches of compactable road base plus 2 inches of decorative gravel is not one 6-inch layer with one density. Run the base area and depth with its density, then run the surface course separately. ASTM D2940 covers quality-controlled graded aggregate for highway and airport bases and emphasizes spreading and compaction on prepared grade [1]; a local supplier or designer should specify the residential product.",
          ],
        },
        {
          heading: "What is the difference between gravel, crushed stone, and road base?",
          paragraphs: [
            "Natural gravel usually has rounded particles; crushed stone has angular fractured faces; road base or crusher run blends coarse particles with fines so the layer can knit together under compaction. Pea gravel drains and feels comfortable on paths but moves under tires. Clean #57 stone is a common washed or open-graded product name, yet gradations vary by region. Ask for the supplier's sieve specification and intended use instead of relying only on a nickname.",
            "USGS reports that 1.5 billion metric tons of crushed stone were produced in the United States in 2024 and that about 72% was used as construction aggregate, mostly for roads [2]. The scale explains why aggregate is sold through local quarries with local names. Material type changes density and performance, not the geometric volume required to fill a measured space.",
          ],
        },
        {
          heading: "How much extra gravel should you order for compaction?",
          paragraphs: [
            "Enter the finished compacted depth, then use an allowance that reflects how the supplier quotes loose material. Five percent may cover a clean, contained area with reliable dimensions; 10–15% may be appropriate for irregular excavation, low spots, edge loss, and uncertain subgrade. Do not blindly add a generic compaction percentage if the supplier has already converted your compacted target to loose tons.",
            "Prepare and verify the subgrade before delivery. Soft pockets and ruts can consume much more aggregate than a normal waste factor. Geotextile, drainage, edging, excavation, and unsuitable-soil replacement are separate design decisions and are not included. For load-bearing work, follow the project specification and compact in suitable lifts rather than placing the full depth at once.",
          ],
        },
        {
          heading: "How much gravel is needed for an irregular 750 square foot driveway?",
          paragraphs: [
            "Treat a 60 ft × 12 ft drive as 720 ft² and add a triangular flare 10 ft wide by 6 ft long: 10 × 6 ÷ 2 = 30 ft², for 750 ft² total. At a 4 in compacted depth, 750 × 0.333 = 250 ft³ = 9.26 yd³. At 100 lb/ft³, the estimate is 25,000 lb = 12.5 short tons. Add 10% for grade variation and handling: 10.19 yd³ or 13.75 tons. Ask the quarry whether to round to 14 tons and whether its product density changes the conversion.",
            "If the quarry quotes 1.45 tons per cubic yard instead of the planning value of about 1.35, then 10.19 yd³ converts to 14.78 tons. The geometry did not change; the density input improved. Confirm truck payload, split-load fees, minimum charges, access width, overhead clearance, and a stable dump location. A large order may require several trucks.",
            "For two layers, repeat the calculation at each depth. A 6 in base over 750 ft² equals 13.89 yd³ before allowance; a 2 in surface layer equals 4.63 yd³. Do not average densities when products are sold separately. Record material, compacted depth, allowance, density, and rounded order for each delivery.",
          ],
        },
      ],
      howToMeasure:
        "Measure the paved area length and width. Depth should reflect the compacted layer specified for your use — ask your supplier for driveway base recommendations.",
      commonMistakes: [
        "Using loose-fill depth without accounting for compaction (order slightly high).",
        "Mixing metric density with US area units without conversion.",
        "Confusing short tons with metric tonnes on international quotes.",
      ],
      faqs: [
        {
          question: "What is the difference between pea gravel and crushed stone?",
          answer:
            "**Pea gravel is rounded and mobile, while crushed stone is angular and interlocks more effectively.** Pea gravel commonly suits contained decorative paths; crushed stone or a graded road-base product is generally more appropriate where compaction and load distribution matter. Confirm the locally available gradation and intended use with the supplier.",
        },
        {
          question: "Should I order gravel by the ton or cubic yard?",
          answer:
            "**Order in the unit used by your supplier, using its product-specific density to compare tons with cubic yards.** Cubic yards measure volume; US short tons measure 2,000 lb of mass. The calculator shows both, but the quarry's scale ticket and stated tons-per-yard conversion are more reliable than a generic planning density.",
        },
        {
          question: "How deep should gravel be for a driveway?",
          answer:
            "**A driveway often uses multiple compacted aggregate layers rather than one universal gravel depth.** Soil strength, drainage, frost, vehicle loads, and local specifications determine the required section. Calculate the compactable base and surface course separately, and follow the project design or local supplier guidance instead of treating a general planning depth as structural approval.",
        },
        {
          question: "How much does one cubic yard of gravel weigh?",
          answer:
            "**One cubic yard of crushed stone weighs about 1.35 US short tons at this calculator's planning density of 1,600 kg/m³.** Loose gravel is estimated near 1.28 tons per yard and compacted gravel near 1.48. Actual weight changes with moisture, source, and gradation, so replace the default with supplier data when available.",
        },
        {
          question: "How much gravel do I need for 100 square feet?",
          answer:
            "**At 4 inches deep, 100 square feet requires about 1.23 cubic yards or 1.67 tons of crushed stone before waste.** At 2 inches the volume is about 0.62 yd³; at 6 inches it is about 1.85 yd³. Add an allowance only after confirming the compacted target depth and supplier conversion.",
        },
        {
          question: "How many tons of gravel do I need for a 12-by-50-foot driveway?",
          answer:
            "**A 12-by-50-foot area at 4 inches deep needs about 10 tons at the calculator's crushed-stone density before waste.** The area is 600 ft², volume is about 200 ft³ or 7.41 yd³, and weight is approximately 20,000 lb. Verify density and layer design before ordering.",
        },
        {
          question: "How much extra gravel should I order for compaction and waste?",
          answer:
            "**Five to fifteen percent is a practical estimating range when dimensions, subgrade, and supplier yield are not exact.** Use less for a contained, verified excavation and more for irregular edges or low spots. Do not add a generic compaction percentage if the quarry has already converted your compacted requirement to a loose delivered quantity.",
        },
      ],
      dataTables: [
        {
          title: "How many cubic yards of gravel cover 100 square feet?",
          columns: ["Compacted depth", "Volume", "At 100 lb/ft³", "With 10% allowance"],
          rows: [
            ["2 in", "0.62 yd³", "0.83 tons", "0.68 yd³"],
            ["3 in", "0.93 yd³", "1.25 tons", "1.02 yd³"],
            ["4 in", "1.23 yd³", "1.67 tons", "1.36 yd³"],
            ["6 in", "1.85 yd³", "2.50 tons", "2.04 yd³"],
            ["8 in", "2.47 yd³", "3.33 tons", "2.72 yd³"],
          ],
          note: "Weight uses the calculator's crushed-stone planning density; confirm actual tons per yard with the supplier.",
        },
        {
          title: "How much does a cubic yard of gravel weigh?",
          columns: [
            "Calculator density choice",
            "kg/m³",
            "Approx. lb/ft³",
            "Approx. tons/yd³",
          ],
          rows: [
            ["Loose gravel", "1,520", "94.9", "1.28"],
            ["Crushed stone", "1,600", "99.9", "1.35"],
            ["Compacted gravel", "1,760", "109.9", "1.48"],
          ],
          note: "Planning values used by this calculator, not quarry certifications. Moisture and gradation change bulk density.",
        },
        {
          title: "Which gravel should you use for each project?",
          columns: [
            "Material term",
            "Particle behavior",
            "Typical role",
            "Ordering check",
          ],
          rows: [
            ["Pea gravel", "Rounded; shifts", "Decorative paths", "Confirm containment"],
            [
              "#57 stone",
              "Clean, angular",
              "Drainage or surface",
              "Confirm local gradation",
            ],
            [
              "Crusher run / road base",
              "Angular with fines",
              "Compactable base",
              "Ask for compacted yield",
            ],
            [
              "Riprap",
              "Large angular rock",
              "Erosion protection",
              "Requires engineered sizing",
            ],
          ],
        },
      ],
      references: [
        {
          label: "ASTM D2940/D2940M-20: Graded Aggregate for Bases or Subbases",
          publisher: "ASTM International",
          year: "2020",
          url: "https://store.astm.org/d2940_d2940m-20.html",
        },
        {
          label: "Mineral Commodity Summaries 2025: Stone (Crushed)",
          publisher: "U.S. Geological Survey",
          year: "2025",
          url: "https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-stone-crushed.pdf",
        },
        {
          label: "Granular Base Application Description",
          publisher: "Federal Highway Administration",
          year: "2016",
          url: "https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/97148/073.cfm",
        },
      ],
      lastUpdated: "2026-07-29",
      resultLabels: {
        tons: "Estimated weight (tons)",
      },
      inputLabels: {
        densityKey: "Stone type",
      },
      metaTitle: "Gravel Calculator — Cubic Yards & Tons | BuildSiteCalc",
      metaDescription:
        "Free gravel calculator for driveways and paths. Estimate cubic yards and tons with material density and waste factor.",
    },
    topsoil: {
      title: "Topsoil Calculator",
      description:
        "Calculate cubic yards of topsoil or garden fill for lawn grading, raised beds, and new landscaping.",
      shortDescription: "Topsoil volume for lawns and garden beds.",
      formula:
        "Volume = area × depth, converted to cubic yards with optional waste allowance.",
      assumptions: [
        "Soil is spread at uniform depth after rough grading.",
        "4–6 in is common for lawn establishment; raised beds may need 12+ in.",
        "Settling reduces volume 10–20% after watering — depth is finished grade target.",
        "Does not include compost amendment ratios.",
        "Bulk topsoil density varies with moisture content.",
      ],
      workedExample: {
        title: "500 ft² lawn area, 4 in topsoil",
        body: "Depth = 4 in = 0.333 ft. Volume = 500 × 0.333 = 167 ft³ = 6.2 yd³. With 10% waste ≈ 6.8 yd³.",
      },
      sections: [
        {
          heading: "How do you calculate how much topsoil you need?",
          paragraphs: [
            "Multiply area by depth in consistent units, then convert to cubic yards. Convert inches of depth to feet by dividing by 12, so 4 inches is 0.3333 ft. Area × depth gives cubic feet, and dividing by 27 gives cubic yards, because one cubic yard contains 27 ft³. A 1,000 ft² lawn area at 4 inches is 1,000 × 0.3333 = 333.3 ft³, or 12.35 yd³. Add an allowance — commonly 10% — for uneven grade, settling, and spillage, which brings the order to about 13.6 yd³. Order topsoil, screened loam, and garden soil blends by volume, never by weight.",
            "Measure the net area you will actually cover. Subtract driveways, walks, decks, and mature planting beds you are not touching, and break irregular lawns into rectangles, triangles, and circle segments. For grading work, use average depth rather than the deepest point: if a low area runs from 1 inch to 5 inches below finished grade, use 3 inches across that zone, not 5. Estimating from the deepest measurement is the fastest way to order twice the soil you need. Stake the perimeter, sketch the shape, and write each sub-area down so that nothing gets counted twice.",
          ],
        },
        {
          heading: "How many cubic yards of topsoil do I need for 1,000 square feet?",
          paragraphs: [
            "At 1 inch deep, 1,000 ft² takes 3.09 yd³. At 2 inches it is 6.17 yd³, at 3 inches 9.26 yd³, at 4 inches 12.35 yd³, at 6 inches 18.52 yd³, and at 12 inches 37.04 yd³. Read the arithmetic from the other end and one cubic yard of garden soil covers 324 ft² at 1 inch, 162 ft² at 2 inches, 108 ft² at 3 inches, 81 ft² at 4 inches, 54 ft² at 6 inches, and 27 ft² at 12 inches. Those two sets of numbers are the same relationship viewed from opposite directions, and both are worth memorizing.",
            "Suppliers sell bulk soil in yard or half-yard increments and usually enforce a delivery minimum, so a 12.35 yd³ requirement with 10% added becomes an order of 13.5 or 14 yd³ depending on how they load. Bagged garden soil is priced per bag: a 1.5 ft³ bag covers 4.5 ft² at 4 inches deep, so 1,000 ft² at that depth would take 223 bags — which is why anything past a few cubic yards goes bulk. Ask whether the quoted yard is a loose loading measurement, where the truck can safely dump, and whether they screen the product.",
          ],
        },
        {
          heading: "What is the difference between topsoil, fill dirt, and garden soil?",
          paragraphs: [
            "Topsoil is the surface layer that carries organic matter, structure, and biological activity. USDA NRCS calls soil organic matter the most important indicator of soil health and notes that it increases available water capacity and moisture retention, helps minimize compaction and surface crusting, increases water infiltration, and holds soil aggregates together [1]. Organic matter can absorb and hold as much as 90 percent of its weight in water, and NRCS reports that organic matter content can be maintained at current levels in soils holding 2 to 5 percent [1]. Fill dirt, by contrast, is mineral subsoil sold for grading and backfill; it compacts well and grows very little.",
            "Screened loam is topsoil run through a mesh to remove stones and debris, which makes it far easier to rake to a uniform depth. Garden soil and raised-bed blends are manufactured mixes of soil, compost, and sometimes bark or peat, so they are lighter, richer, and settle more than native topsoil — NRCS lists the average bulk density of organic matter itself at just 0.22 g/cm³ against 1.45 for loam [1]. NRCS also notes that soils and soil properties in urban areas are more variable than in undeveloped landscapes, and publishes urban soil surveys to roughly 2 meters of depth free through Web Soil Survey [2]. Look up your own lot before assuming what is under the lawn.",
          ],
        },
        {
          heading: "How deep should topsoil be for a new lawn or raised bed?",
          paragraphs: [
            "Four to six inches of loose topsoil over decompacted subsoil is a common target when establishing a new lawn from seed or sod. Where the existing grade is already reasonable, 2 to 4 inches tilled into it often does the job instead. Raised beds are different because roots have nowhere else to go: 10 to 12 inches of fill is a practical minimum for most vegetables, and 16 to 18 inches suits deep-rooted crops. A 4 × 8 ft bed filled 12 inches deep holds 32 ft³, which is 1.19 yd³ or 22 bags of 1.5 ft³ — a useful benchmark for pricing bagged versus bulk.",
            "Depth alone does not fix compaction underneath. NRCS reports that bulk density above roughly 1.80 g/cm³ in sandy soils, 1.65 g/cm³ in silty soils, and 1.47 g/cm³ in clayey soils restricts root growth, while ideal densities for plant growth are below 1.60, 1.40, and 1.10 respectively [3]. Spreading rich topsoil over a compacted construction pad creates a shallow perched root zone that alternately dries out and puddles. Loosen the subgrade first, blend the interface rather than leaving a sharp layer boundary, and expect the finished surface to settle 10 to 20 percent after the first thorough watering.",
          ],
        },
        {
          heading: "How much topsoil does a 60 by 40 foot lawn area need at 4 inches?",
          paragraphs: [
            "The area is 60 × 40 = 2,400 ft². Four inches of depth is 0.3333 ft, so the volume is 2,400 × 0.3333 = 800 ft³. Dividing by 27 gives 29.63 yd³. This is an open, freshly graded area spread by machine, so add 10%: 29.63 × 1.10 = 32.6 yd³. Order 33 cubic yards. As a hauling sanity check, loam at a bulk density of 1.45 g/cm³ weighs about 2,444 lb per dry cubic yard, so 33 yd³ is roughly 80,600 lb — about 40 short tons dry, and appreciably more when the soil is wet [3].",
            "A repair job runs much smaller. A settled 300 ft² strip along a driveway varies from 1 inch to 5 inches below finished grade, so use the 3-inch average: 300 × 0.25 = 75 ft³, which is 2.78 yd³. Hand spreading around a curved edge justifies 15%: 2.78 × 1.15 = 3.19 yd³, so order 3.25 or 3.5 yd³ depending on the supplier's increments. In bags, 3.19 yd³ is 86.1 ft³, or 58 bags of 1.5 ft³ — a clear signal that bulk delivery is the sensible route even at this modest size.",
          ],
        },
      ],
      howToMeasure:
        "Stake the area to be covered and measure length × width. For grading, estimate average depth between high and low points across the zone.",
      commonMistakes: [
        "Ordering fill dirt when nutrient-rich topsoil was needed for planting.",
        "Using maximum depth at low spots only — use average depth.",
        "Ignoring that truck measurements are loose volume before spreading.",
      ],
      faqs: [
        {
          question: "How many cubic yards of topsoil do I need for 1,000 square feet?",
          answer:
            "**About 12.35 cubic yards at 4 inches deep, or roughly 13.6 yd³ once a 10% allowance is added.** The math is 1,000 × 0.3333 ft = 333.3 ft³, divided by 27. At 2 inches the same area takes 6.17 yd³; at 6 inches it takes 18.52 yd³.",
        },
        {
          question: "How much does a cubic yard of topsoil weigh?",
          answer:
            "**Roughly 2,000 to 2,600 pounds dry, or about 1.0 to 1.3 short tons.** Using USDA NRCS bulk densities, silt loam at 1.20 g/cm³ works out to 2,022 lb per cubic yard and sand at 1.56 g/cm³ to 2,630 lb. Wet soil weighs considerably more than these dry figures.",
        },
        {
          question: "How deep should topsoil be for grass seed or sod?",
          answer:
            "**Four to six inches of loose topsoil over decompacted subsoil is a common target for establishing a new lawn.** Where the existing grade is already reasonable, 2 to 4 inches tilled into it is often enough. Loosen compacted subgrade first so roots are not trapped in a shallow layer.",
        },
        {
          question: "What is the difference between topsoil and fill dirt?",
          answer:
            "**Topsoil carries the organic matter that supports plant growth; fill dirt is mineral subsoil used for grading and backfill.** USDA NRCS calls soil organic matter the most important indicator of soil health because it holds water, resists surface crusting, and binds aggregates. Fill dirt compacts well and grows very little.",
        },
        {
          question: "Will topsoil settle after I spread it?",
          answer:
            "**Yes — expect the finished surface to settle roughly 10 to 20 percent after the first thorough watering.** Spread slightly above the target grade or plan to top-dress low spots afterward. Truck and loader measurements are loose volume, so a delivered yard occupies less once raked and watered in.",
        },
        {
          question: "How much soil does a 4 by 8 foot raised bed need?",
          answer:
            "**A 4 × 8 ft bed filled 12 inches deep needs 32 cubic feet, which is 1.19 cubic yards or 22 bags of 1.5 ft³.** At a 10-inch fill depth the same bed takes 26.67 ft³, about 0.99 yd³. Measure inside dimensions and leave an inch or two below the rim.",
        },
        {
          question: "Should I order topsoil by the cubic yard or by the ton?",
          answer:
            "**Order by the cubic yard, because this calculation produces volume and soil weight swings with moisture and texture.** The same yard can weigh 2,000 lb or 2,600 lb dry depending on texture, and much more when wet. If a supplier quotes tons, ask for the conversion factor they use.",
        },
      ],
      dataTables: [
        {
          title: "How many cubic yards of topsoil do you need at each depth?",
          columns: [
            "Finished depth",
            "ft³ per 100 ft²",
            "yd³ per 100 ft²",
            "yd³ for 1,000 ft²",
            "Area covered by 1 yd³",
          ],
          rows: [
            ["1 in", "8.33", "0.31", "3.09", "324 ft²"],
            ["2 in", "16.67", "0.62", "6.17", "162 ft²"],
            ["3 in", "25.00", "0.93", "9.26", "108 ft²"],
            ["4 in", "33.33", "1.23", "12.35", "81 ft²"],
            ["6 in", "50.00", "1.85", "18.52", "54 ft²"],
            ["8 in", "66.67", "2.47", "24.69", "40.5 ft²"],
            ["12 in", "100.00", "3.70", "37.04", "27 ft²"],
          ],
          note: "One cubic yard equals exactly 27 ft³. Figures are before any waste allowance and assume a uniform spread depth.",
        },
        {
          title: "How much does a cubic yard of topsoil weigh?",
          columns: [
            "Material",
            "Bulk density (g/cm³)",
            "lb per ft³",
            "lb per yd³ (dry)",
            "Short tons per yd³",
          ],
          rows: [
            ["Sand", "1.56", "97.4", "2,630", "1.32"],
            ["Sandy loam", "1.50", "93.6", "2,528", "1.26"],
            ["Loam", "1.45", "90.5", "2,444", "1.22"],
            ["Silt loam", "1.20", "74.9", "2,022", "1.01"],
            [
              "Ideal medium-textured soil (~50% pore space)",
              "1.33",
              "83.0",
              "2,242",
              "1.12",
            ],
            ["Organic matter alone", "0.22", "13.7", "371", "0.19"],
          ],
          note: "Dry bulk densities are published by USDA NRCS; 1 g/cm³ = 62.43 lb/ft³. Moist or wet soil weighs considerably more, so order by volume.",
        },
        {
          title: "How much soil does a raised bed need?",
          columns: [
            "Bed size (inside)",
            "Fill depth",
            "Volume (ft³)",
            "Volume (yd³)",
            "Bags of 1.5 ft³",
          ],
          rows: [
            ["4 × 4 ft", "12 in", "16.00", "0.59", "11"],
            ["2 × 8 ft", "12 in", "16.00", "0.59", "11"],
            ["4 × 8 ft", "10 in", "26.67", "0.99", "18"],
            ["4 × 8 ft", "12 in", "32.00", "1.19", "22"],
            ["3 × 6 ft", "18 in", "27.00", "1.00", "18"],
            ["4 × 12 ft", "16 in", "64.00", "2.37", "43"],
          ],
          note: "Measure inside dimensions and leave one to two inches below the rim. Compost-rich blends settle noticeably after the first watering.",
        },
      ],
      references: [
        {
          label:
            "Soil Health – Organic Matter (Guides for Educators), including average bulk density by soil texture",
          publisher: "USDA Natural Resources Conservation Service",
          year: "2014",
          url: "https://www.nrcs.usda.gov/sites/default/files/2022-10/Soil%20Organic%20Matter.pdf",
        },
        {
          label: "Urban Soil Survey fact sheet",
          publisher: "USDA Natural Resources Conservation Service",
          year: "2025",
          url: "https://www.nrcs.usda.gov/sites/default/files/2024-11/Urban-Soil-Survey-Fact-Sheet.pdf",
        },
        {
          label:
            "Soil Quality Indicators: Bulk Density, including root-restricting thresholds by texture",
          publisher: "USDA Natural Resources Conservation Service",
          year: "2008",
          url: "https://www.nrcs.usda.gov/sites/default/files/2023-01/Soil%20Quality-Indicators-Bulk%20Density.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        volumeYd3: "Topsoil to order (yd³)",
      },
      inputLabels: {},
      metaTitle: "Topsoil Calculator — Cubic Yards | BuildSiteCalc",
      metaDescription:
        "Calculate cubic yards of topsoil for lawns and gardens. Free calculator with US and metric units.",
    },
    "fence-material": {
      title: "Fence Material Calculator",
      description:
        "Count posts, rails, and pickets for a straight fence run. Based on length, post spacing, and picket dimensions.",
      shortDescription: "Posts, rails, and pickets for your fence line.",
      formula:
        "Sections = ceil(fence length ÷ post spacing). Posts = sections + 1. Pickets = ceil(section length ÷ (picket width + gap)) × sections. Rails = sections × rails per section.",
      assumptions: [
        "Straight fence line on flat ground.",
        "Posts at each end and every spacing interval.",
        "Pickets are uniform width with consistent gap.",
        "Corner, gate, and terminal posts may need extra hardware not counted here.",
        "Post spacing typically 6–8 ft for wood privacy fence.",
      ],
      workedExample: {
        title: "100 ft fence, 8 ft post spacing, 5.5 in pickets",
        body: "Sections = 100 ÷ 8 = 12.5 → 13 sections. Posts = 14. Picket spacing ≈ 5.625 in each. ~17 pickets per 8 ft section × 13 ≈ 221 pickets. Rails = 13 × 3 = 39.",
      },
      sections: [
        {
          heading: "How do you calculate fence posts, rails, and pickets?",
          paragraphs: [
            "Divide each straight run by the maximum post spacing and round up to get sections; add one post at the end. Count each direction separately because a corner post can serve two runs. Rails equal sections × rails per section. Pickets depend on the clear section length divided by actual picket width plus the intended gap, rounded up. The calculator applies that layout consistently, but field-built end sections may be shorter than the selected maximum spacing.",
            "Create a line-by-line takeoff instead of entering the entire perimeter as one straight run. Mark end, corner, gate, and change-of-grade posts on a sketch. Shared corner posts should appear once in the final total, while both gate jambs must be present. Preassembled panels use their specified post-center dimension, which may differ from the nominal panel width because brackets and posts occupy space.",
          ],
        },
        {
          heading: "How far apart should fence posts be?",
          paragraphs: [
            "Six to eight feet on center is common for component-built wood privacy fences, and Lowe's current installation guidance gives that typical range [1]. Product instructions, panel width, rail length, fence height, soil, wind exposure, frost depth, and locally adopted rules can require a different spacing. Closer posts can reduce rail span but do not by themselves prove the fence is adequate for wind.",
            "Measure spacing horizontally and from post center to post center unless the product says otherwise. Do not lay out every hole before confirming the actual gate frame and panel dimensions. On slopes, a stepped panel fence is measured horizontally; a component fence that follows grade may use sloped rails. This calculator assumes one spacing and a straight, level run, so calculate slope segments separately.",
          ],
        },
        {
          heading: "How many pickets do you need for a privacy fence?",
          paragraphs: [
            "For a 96 in section using actual 5.5 in pickets with a 1/8 in gap, each module is 5.625 in and 96 ÷ 5.625 = 17.07. Rounding up gives 18 pickets if the full clear width truly is 96 in. In practice, posts occupy part of an 8 ft center-to-center bay, so measure the clear rail span or use the calculator's resulting section length consistently. A board-on-board fence needs a separate overlap layout and more boards than a single flat row.",
            "Use actual measured picket width, not the nominal label. For a spaced decorative fence, the chosen gap changes privacy and count. For a solid privacy line, allow the movement recommended for the wood or composite product instead of forcing wet boards tightly together. Count caps, trim boards, kick boards, lattice, and fasteners separately because they are not pickets.",
          ],
        },
        {
          heading: "How do gates and corners change a fence material estimate?",
          paragraphs: [
            "A gate replaces part of the ordinary picket-and-rail run and normally needs dedicated hinge and latch posts, framing, hinges, latch, stop, and clearance. Subtract the planned gate opening from the fence length before calculating ordinary sections, then add the gate assembly from its manufacturer's schedule. Wide or double gates may need engineered posts or hardware and should not be inferred from standard line posts.",
            "Every change in direction needs a corner or terminal condition. End posts, corner posts, and gate posts may be larger or differently reinforced than line posts. Before digging, confirm property boundaries, easements, permits, setbacks, height restrictions, and utility marking. The national 811 service directs excavators to request utility marks before digging [2]; private lines may require separate locating.",
          ],
        },
        {
          heading: "How many materials are needed for a 164 foot fence with one gate?",
          paragraphs: [
            "Suppose the total line is 164 ft with one 4 ft gate, leaving 160 ft of ordinary fence. At an 8 ft maximum spacing, 160 ÷ 8 = 20 sections. A simple straight run needs 21 structural post positions, but the gate layout may replace two of them with specified gate posts; reconcile the sketch instead of adding blindly. With three rails per section, order 60 rails before waste. At 17 pickets per 8 ft section, the field needs 340 pickets; with 7% for damage and selection, round up to 364 pickets. Add the complete gate kit and hardware separately.",
            "If the line turns one corner, calculate both legs and share the corner post once. Legs of 96 ft and 68 ft at 8 ft maximum produce 12 and 9 sections. Separately they suggest 13 and 10 posts, but the shared corner makes 22 unique positions before gate adjustments. Geometry determines which posts serve more than one section.",
            "Convert the takeoff to a purchase list only after selecting products. Rails may come in 8 or 16 ft lengths, posts in different treatment categories, and pickets by piece or bundle. Add approved fasteners, specified concrete or backfill, caps, field-cut preservative, and temporary bracing. Those quantities cannot be inferred safely from post count alone.",
          ],
        },
      ],
      howToMeasure:
        "Measure the fence line along the planned post centerline from end post to end post, following grade. Confirm post spacing matches your design and local wind-load habits.",
      commonMistakes: [
        "Forgetting gate posts and latch-side spacing.",
        "Using nominal picket width without adding gap.",
        "Not adding extra posts for changes in elevation or direction.",
      ],
      faqs: [
        {
          question: "How far apart should wood fence posts be?",
          answer:
            "**Six to eight feet on center is a common planning range for component-built wood privacy fences.** Product instructions, panel width, rail length, height, soil, frost, wind exposure, and local rules can require closer spacing. Measure horizontally from post center to post center unless the selected system specifies another layout.",
        },
        {
          question: "How many fence posts do I need for 100 feet of fence?",
          answer:
            "**A straight 100-foot run needs 14 posts when the maximum spacing is 8 feet.** Divide 100 by 8, round 12.5 up to 13 sections, and add one end post. At a 6-foot maximum, it needs 17 sections and 18 posts. Corners and gates must be reconciled from the actual layout.",
        },
        {
          question: "How many fence pickets fit in an 8-foot section?",
          answer:
            "**About 18 actual 5.5-inch pickets fit across 96 inches with a 1/8-inch gap.** The module is 5.625 inches, and 96 ÷ 5.625 = 17.07, which rounds up. Because an 8-foot on-center bay has posts occupying part of that width, measure the clear section before purchasing.",
        },
        {
          question: "How many rails do I need for a privacy fence?",
          answer:
            "**Multiply the number of fence sections by the specified rails per section.** A 100-foot run divided into 13 sections needs 39 rails when each section uses three. Convert that count to purchasable rail lengths only after checking where joints land, because longer rails may span multiple posts in an approved layout.",
        },
        {
          question: "Does the fence calculator include a gate?",
          answer:
            "**No—the ordinary post, rail, and picket totals do not include a complete gate assembly.** Subtract the planned gate opening from the standard fence run, then add the specified hinge post, latch post, frame, hinges, latch, stop, clearance, and bracing. Wide or double gates may need a design beyond standard line-post assumptions.",
        },
        {
          question: "How do I calculate fence materials for a corner?",
          answer:
            "**Calculate each straight leg separately and count the shared corner post only once.** For 96-foot and 68-foot legs at 8-foot spacing, the runs produce 12 and 9 sections. Their separate post totals are 13 and 10, but sharing the corner leaves 22 unique post positions before gate adjustments.",
        },
        {
          question: "How do I calculate fence materials on a slope?",
          answer:
            "**Divide the slope into separately measured sections and choose either a stepped or racked layout before counting materials.** Stepped panels are measured horizontally and can leave varying ground gaps; racked or component-built fences follow grade and change rail and picket cuts. The calculator's flat straight-run result remains a planning baseline, not a slope design.",
        },
      ],
      dataTables: [
        {
          title: "How many fence posts are needed by length?",
          columns: [
            "Straight run",
            "6 ft max spacing",
            "8 ft max spacing",
            "Posts at 8 ft",
          ],
          rows: [
            ["50 ft", "9 sections", "7 sections", "8 posts"],
            ["100 ft", "17 sections", "13 sections", "14 posts"],
            ["150 ft", "25 sections", "19 sections", "20 posts"],
            ["200 ft", "34 sections", "25 sections", "26 posts"],
          ],
          note: "Simple straight run only: posts = rounded-up sections + 1. Add or reconcile corners and gates from a plan.",
        },
        {
          title: "How many pickets fit in an 8 foot section?",
          columns: [
            "Actual picket width",
            "Gap",
            "Width per picket",
            "Count across 96 in",
          ],
          rows: [
            ["3.5 in", "0.125 in", "3.625 in", "27"],
            ["3.5 in", "0.5 in", "4.0 in", "24"],
            ["5.5 in", "0.125 in", "5.625 in", "18"],
            ["5.5 in", "0.25 in", "5.75 in", "17"],
          ],
          note: "The clear space between posts may be less than 96 in on an 8 ft on-center layout; measure the actual section.",
        },
        {
          title: "What fence materials should be counted separately?",
          columns: ["Condition", "Extra count", "Why", "Verify"],
          rows: [
            ["End", "Terminal post", "Finishes a run", "Cap and bracing"],
            ["Corner", "Corner post", "Serves two directions", "Rail attachment"],
            ["Gate", "Two gate posts + kit", "Hinge/latch loads", "Opening clearance"],
            ["Slope", "Segment-specific rails", "Step or rack geometry", "Post length"],
          ],
        },
      ],
      references: [
        {
          label: "How to Build a Wood Fence",
          publisher: "Lowe's",
          year: "2025",
          url: "https://www.lowes.com/n/how-to/install-a-wood-fence",
        },
        {
          label: "811 Before You Dig",
          publisher: "Common Ground Alliance",
          year: "2026",
          url: "https://call811.com/Before-You-Dig",
        },
      ],
      lastUpdated: "2026-07-29",
      resultLabels: {
        posts: "Posts",
        pickets: "Pickets",
        rails: "Rails",
      },
      inputLabels: {},
      metaTitle: "Fence Material Calculator — Posts & Pickets | BuildSiteCalc",
      metaDescription:
        "Calculate fence posts, rails, and pickets for a straight run. Free material estimator for privacy and picket fences.",
    },
    "deck-board": {
      title: "Deck Board Calculator",
      description:
        "Estimate deck boards needed for a rectangular deck surface, accounting for board width, gap, and waste.",
      shortDescription: "Deck boards for a rectangular deck.",
      formula:
        "Rows = ceil(deck width ÷ (board width + gap)). Boards per row = ceil(deck length ÷ board length). Total boards = rows × boards per row × (1 + waste%).",
      assumptions: [
        "Rectangular deck surface; stairs and picture frames excluded.",
        "Boards run parallel to the long dimension unless you adjust dimensions.",
        "Typical gap is 1/8 in for drainage on wood decking.",
        "Board length is usable length (often 12 ft or 16 ft).",
        "Does not include joists, beams, or hardware.",
      ],
      workedExample: {
        title: "16 × 12 ft deck, 5.5 in boards, 12 ft lengths",
        body: "Rows = 12 ft ÷ (5.5/12 + 0.125/12) ≈ 25 rows. Boards per row = 16 ÷ 12 → 2 boards. Base = 50 boards. With 10% waste = 55 boards.",
      },
      sections: [
        {
          heading: "How do you calculate how many deck boards you need?",
          paragraphs: [
            "Choose the direction the boards will run. Divide the deck dimension perpendicular to the boards by actual board width plus the side gap, then round up for the number of rows. Divide the parallel dimension by purchasable board length and round up for pieces per row. Multiply rows × pieces per row, then add waste once. A nominal 2×6 wood board is commonly about 5.5 in wide, so using the nominal 6 in understates the row count.",
            "This piece-count method is more useful than dividing square footage by board face area because it exposes butt joints. A 16 ft run made from 12 ft stock needs two pieces in every row even though four feet of the second piece remains. Efficient cut planning may reuse offcuts in staggered rows, but that depends on joist positions, minimum bearing, fastener zones, and the approved layout.",
          ],
        },
        {
          heading: "What gap should you leave between deck boards?",
          paragraphs: [
            "Use the decking manufacturer's current installation instructions. Trex specifies 3/16 in side-to-side spacing for its composite boards and temperature-dependent end gaps, including 1/8 in above 40°F and 3/16 in below 40°F [1]. Those dimensions apply to that product system, not every wood, PVC, or composite board. Hidden-fastener clips may establish their own gap.",
            "Wood moisture content changes after installation, so green pressure-treated boards may shrink while dry boards can swell when wet. Species, treatment, season, ventilation, and exposure all matter. The calculator treats the entered gap as uniform across the width and does not model expansion at butt joints or against walls. Confirm both side and end spacing before ordering or fastening.",
          ],
        },
        {
          heading: "How much waste should you add for deck boards?",
          paragraphs: [
            "For straight boards on a simple rectangle, 5–10% is a common planning range for end trimming, defects, and layout. Complex borders, short stock, many penetrations, or selective color blending may justify more. A 45-degree diagonal pattern creates repeated angled offcuts at both edges and often needs 15% or a project-specific cut plan. Waste is not a substitute for counting picture-frame boards separately.",
            "Check available lengths before choosing the percentage. Stock that spans the full deck length can eliminate field butt joints but may cost more, require special delivery, and be difficult to carry. Compare 12, 16, and 20 ft purchase plans by whole pieces, not just price per linear foot. Keep a few full-length spares only if future color and product availability matter to the owner.",
          ],
        },
        {
          heading: "Do deck boards run parallel or perpendicular to the house?",
          paragraphs: [
            "Decking normally crosses joists, so board direction follows framing rather than appearance alone. The American Wood Council's DCA 6 guide provides prescriptive residential wood-deck framing information and emphasizes code-compliant structural connections [2]. This calculator counts surface boards only and cannot verify joist span, spacing, cantilever, ledger, beam, footing, guard, or fastening design.",
            "If boards run diagonally, the joist spacing allowed by the decking manufacturer may be tighter than for perpendicular installation. Picture-frame borders also require blocking and change field dimensions. Enter the clear field width and length for one orientation, count border and fascia boards separately by linear feet, and have the framing reviewed under the locally adopted code.",
          ],
        },
        {
          heading: "How many boards are needed for a 20 by 14 foot deck?",
          paragraphs: [
            "Assume 5.5 in boards with a 1/8 in gap running along the 20 ft direction, purchased in 12 ft lengths. Each row occupies 5.625 in, and the 14 ft width is 168 in: 168 ÷ 5.625 = 29.87, so use 30 rows. Each 20 ft row requires two 12 ft pieces, giving 60 pieces. Add 10% and round up: 60 × 1.10 = 66 deck boards. The order represents 792 linear feet; a cut layout may reuse some 4 ft remainders, but do not reduce the count until joint locations and offcut reuse are proven.",
            "With 20 ft stock, 30 pieces span the field; with 10% the order is 33 boards, or 660 linear feet. That appears more efficient, but price, freight, handling, crown, and availability may offset reduced waste. A mixed-length plan works only when joints land on approved framing. Sketch every row and label reusable offcuts before reducing the conservative count.",
            "A picture-frame border consumes separate pieces, reduces both field dimensions, and needs blocking and approved fastening. Calculate the inside field after fixing the border, then add border linear feet, fascia, stair treads, risers, breaker boards, and bench cladding separately. Surface square footage alone cannot capture these details.",
          ],
        },
      ],
      howToMeasure:
        "Measure deck frame length and width at the outer joists. Use actual board width (5.5 in for a 2×6) and planned gap. Confirm board lengths available from your supplier.",
      commonMistakes: [
        "Using nominal 6 in instead of actual 5.5 in board width.",
        "Ignoring butt joints — rows may need more pieces when board length < deck length.",
        "Forgetting waste on diagonal decking patterns.",
      ],
      faqs: [
        {
          question: "What gap should I leave between composite deck boards?",
          answer:
            "**Use the current spacing specified by the exact decking manufacturer and fastener system.** Trex, for example, specifies a 3/16-inch side gap for its composite boards and temperature-dependent end gaps. Those dimensions do not automatically apply to every composite, PVC, or wood product, and hidden fasteners may establish their own spacing.",
        },
        {
          question: "How many deck boards do I need for a 12x16 deck?",
          answer:
            "**A 12-by-16-foot deck needs about 52 twelve-foot boards before waste when 5.5-inch boards run across the 12-foot direction.** A 1/8-inch gap produces 26 rows, and each 16-foot row needs two 12-foot pieces. With a 10% allowance, the calculator rounds the purchase to 58 boards.",
        },
        {
          question: "Should deck boards run parallel or perpendicular to the house?",
          answer:
            "**Deck boards must follow the approved framing layout and normally run across the joists.** Their relationship to the house is therefore determined by joist direction, not appearance alone. If a different direction or diagonal pattern is desired, verify joist spacing, blocking, spans, fasteners, and manufacturer requirements before using that orientation.",
        },
        {
          question: "Should I buy 12-foot or 16-foot deck boards?",
          answer:
            "**Choose the length that minimizes unusable offcuts while keeping every butt joint on approved framing.** Sixteen-foot boards can eliminate joints on a 16-foot run, while 12-foot boards may be easier to transport but require two pieces per row. Compare whole-board counts, freight, handling, availability, and a drawn cut plan—not price per linear foot alone.",
        },
        {
          question: "How much waste should I add for deck boards?",
          answer:
            "**Plan roughly 5–10% for straight decking on a simple rectangle and about 15% or more for diagonal or complex layouts.** Borders, posts, openings, defects, color selection, and short stock can increase waste. Expensive composite decking deserves a row-by-row cut plan before reducing or increasing the allowance.",
        },
        {
          question: "Does the deck board calculator include fascia and stairs?",
          answer:
            "**No—the result covers the rectangular deck field only.** Count picture-frame borders, fascia, stair treads, risers, breaker boards, benches, and skirting separately by their actual layout. These features also change the field dimensions and may require blocking, so define them before finalizing the surface-board order.",
        },
        {
          question: "How many deck boards fit across a 12-foot-wide deck?",
          answer:
            "**Twenty-six rows of 5.5-inch boards fit across a 12-foot width when the side gap is 1/8 inch.** The width is 144 inches and each row occupies 5.625 inches; 144 ÷ 5.625 = 25.6, which rounds up. The last board may need to be ripped for the exact finished width.",
        },
      ],
      dataTables: [
        {
          title: "How many deck-board rows fit each deck width?",
          columns: [
            "Deck width",
            "5.5 in board + 1/8 in gap",
            "5.5 in board + 3/16 in gap",
            "Actual covered width at 1/8 in",
          ],
          rows: [
            ["8 ft", "18 rows", "17 rows", "101.25 in"],
            ["10 ft", "22 rows", "22 rows", "123.75 in"],
            ["12 ft", "26 rows", "26 rows", "146.25 in"],
            ["14 ft", "30 rows", "30 rows", "168.75 in"],
            ["16 ft", "35 rows", "34 rows", "196.88 in"],
          ],
          note: "Rows are rounded up; the last board may need ripping to fit the exact frame width.",
        },
        {
          title: "How many deck boards are needed by deck size?",
          columns: ["Deck size", "Board direction", "Rows", "12-ft pieces before waste"],
          rows: [
            ["10 × 10 ft", "Along 10 ft", "22", "22"],
            ["12 × 12 ft", "Along 12 ft", "26", "26"],
            ["16 × 12 ft", "Along 16 ft", "26", "52"],
            ["20 × 14 ft", "Along 20 ft", "30", "60"],
            ["24 × 16 ft", "Along 24 ft", "35", "70"],
          ],
          note: "Uses 5.5 in boards, 1/8 in side gap, and 12 ft stock. Add the chosen waste factor afterward.",
        },
        {
          title: "What waste factor should you use for deck boards?",
          columns: ["Layout", "Planning range", "Why waste changes", "Count separately"],
          rows: [
            ["Straight rectangle", "5–10%", "End cuts and defects", "Fascia"],
            ["Many posts or openings", "10–15%", "More short cuts", "Blocking"],
            ["45° diagonal", "About 15%+", "Angled edge offcuts", "Extra framing"],
            [
              "Picture frame",
              "Project cut plan",
              "Borders shorten field",
              "Border boards",
            ],
          ],
          note: "Planning ranges are not manufacturer guarantees; create a cut list for expensive composite decking.",
        },
      ],
      references: [
        {
          label: "How to Space Deck Boards",
          publisher: "Trex Company",
          year: "2025",
          url: "https://www.trex.com/deck-ideas/how-to-space-deck-boards/",
        },
        {
          label: "DCA 6 Prescriptive Residential Wood Deck Construction Guide",
          publisher: "American Wood Council",
          year: "2015",
          url: "https://awc.org/topic/decks/",
        },
      ],
      lastUpdated: "2026-07-29",
      resultLabels: {
        boardsNeeded: "Deck boards",
      },
      inputLabels: {},
      metaTitle: "Deck Board Calculator — How Many Boards? | BuildSiteCalc",
      metaDescription:
        "Calculate deck boards needed for a rectangular deck. Free estimator with gap, board size, and waste factor.",
    },
    stair: {
      title: "Stair Calculator",
      description:
        "Calculate riser count, tread count, total run, and approximate stringer length from total rise and target riser height. One shared length unit for all stair dimensions. Basic geometry only — verify local code.",
      shortDescription: "Riser and tread counts for stairs.",
      formula:
        "Number of risers = ceil(total rise ÷ target riser height). Actual riser = total rise ÷ risers. Treads = risers − 1. Total run = treads × tread depth. Stringer ≈ √(rise² + run²). All lengths use your selected unit (converted via meters/inches internally).",
      assumptions: [
        "Straight flight with uniform risers and treads.",
        "Target riser near 7 in (≈178 mm) is common in US residential work.",
        "Does not verify IRC or local code compliance.",
        "Landing platforms and headroom are not calculated.",
        "Total rise is floor-to-floor vertical distance.",
        "Stair width is optional and informational only.",
      ],
      workedExample: {
        title: "9 ft total rise, 7 in target riser",
        body: "Enter total rise as 108 in (or 9 ft with unit Feet — values convert). Risers = 108 ÷ 7 ≈ 15.4 → 16 risers (ceil). Actual riser = 108 ÷ 16 = 6.75 in. Treads = 15. Run = 15 × 10 in tread = 150 in. Stringer ≈ √(108² + 150²) ≈ 184.9 in.",
      },
      sections: [
        {
          heading: "What is the maximum stair riser height allowed by code?",
          paragraphs: [
            "Under International Residential Code Section R311.7.5.1 the maximum riser height in a dwelling is 7-3/4 inches (196 mm), measured vertically between the leading edges of adjacent treads, and the greatest riser height within any flight may not exceed the smallest by more than 3/8 inch (9.5 mm) [1]. Minimum tread depth is 10 inches (254 mm) under R311.7.5.2, measured horizontally between the vertical planes of the foremost projection of adjacent treads and at a right angle to the leading edge, with the same 3/8-inch uniformity limit [1]. Those two figures define the steepest legal residential stair: 7-3/4 up, 10 across.",
            "Local codes govern. Jurisdictions adopt different IRC editions and amend them, some states permit or require different riser and tread limits, and commercial stairways under the IBC are shallower and wider than residential ones. This calculator is pure geometry: it divides your total rise into equal risers, subtracts one for the tread count, and multiplies treads by the depth you enter. It does not verify code compliance and does not check handrails, guards, landings, headroom, illumination, or stringer structure. Confirm the adopted code edition and any local amendments with your building department before cutting a stringer.",
          ],
        },
        {
          heading: "How do you calculate the number of steps for a given total rise?",
          paragraphs: [
            "Divide the total rise by your target riser height and round up to the next whole number, then divide the total rise by that count to get the actual riser. For a 108-inch floor-to-floor rise with a 7-inch target: 108 ÷ 7 = 15.43, round up to 16 risers, and 108 ÷ 16 = 6.75 inches per riser. Rounding up always pushes the actual riser below your target, which is the safe direction against the 7-3/4-inch maximum. Treads number one fewer than risers on a straight flight, because the upper floor serves as the final tread, so 16 risers give 15 treads.",
            "Multiply treads by tread depth for the total horizontal run. Fifteen treads at 10 inches is 150 inches, or 12 ft 6 in of floor space — often the binding constraint in a remodel. Widen the tread to 11 inches and the same flight needs 165 inches. Measure total rise from finished floor to finished floor, including underlayment, tile, and hardwood on both levels; an unplanned 3/4-inch flooring buildup at the top is the most common cause of one odd riser. Enter every dimension in the same unit and let the tool convert when you change the unit selector.",
          ],
        },
        {
          heading: "How much headroom does a staircase need?",
          paragraphs: [
            "IRC R311.7.2 requires minimum headroom of 6 feet 8 inches (2,032 mm) in all parts of the stairway, measured vertically from the sloped plane adjoining the tread nosing or from the floor surface of the landing or platform [1]. Spiral stairs are treated separately: R311.7.10.1 permits a 26-inch minimum width with each tread having a 7-1/2-inch minimum depth measured 12 inches from the narrower edge, a rise of no more than 9-1/2 inches, and reduced headroom of 6 feet 6 inches [1]. Stairways must also be at least 36 inches (914 mm) in clear width above the permitted handrail height and below the required headroom height [1].",
            "Two more dimensions constrain layout. A flight of stairs may not have a vertical rise greater than 12 feet (3,658 mm) between floor levels or landings, and every landing must measure at least 36 inches (914 mm) in the direction of travel and be no narrower than the stairway it serves [1]. The American Wood Council's prescriptive deck guide repeats both rules for exterior stairs and requires an intermediate landing once the total vertical height of a stairway exceeds 12 ft 0 in [2]. Handrails are required on any flight with four or more risers and must sit 34 to 38 inches above the sloped nosing plane [1][2].",
          ],
        },
        {
          heading: "How long does a stair stringer need to be for a 9 foot rise?",
          paragraphs: [
            "Use the Pythagorean theorem on rise and run. A 9-foot (108-inch) total rise divided into 16 risers of 6.75 inches gives 15 treads; at a 10-inch tread depth the total run is 150 inches. Stringer length is the square root of 108² + 150² = 11,664 + 22,500 = 34,164, so the stringer measures about 184.8 inches — 15 ft 5 in, the named result. Buy 16-foot stock and expect to trim. The pitch is arctan(108 ÷ 150) ≈ 35.8° from horizontal, comfortably inside the range most people read as a normal house stair.",
            "That calculated diagonal is a minimum. Add length for the plumb cut at the top, the level cut at the bottom, any bearing block, and the notch geometry if you are cutting a sawtooth or housed stringer. The American Wood Council's deck guide requires exterior stair stringers of at least 2×12 nominal stock, limits stringer span, and allows a notched-and-bolted 4×4 post or an intermediate landing to shorten a long span [2]. Cutting a sawtooth notch removes material at the throat of the stringer, which is exactly why those span limits exist — have anything unusual verified by a designer.",
          ],
        },
        {
          heading: "Why must all stair risers be the same height?",
          paragraphs: [
            "Because people climb stairs by rhythm, not by sight. The IRC limits the difference between the largest and smallest riser in a flight to 3/8 inch (9.5 mm), and applies the same 3/8-inch limit to tread depth, to winder tread depth measured at the 12-inch walk line, and to nosing projection between two stories including the nosing at floors and landings [1]. A single riser outside tolerance is a recognized trip hazard and one of the most frequently cited stair defects at inspection. Uniformity is also why this calculator divides the rise into equal parts instead of letting you absorb a remainder in one step.",
            "The remainder usually shows up at the bottom. If you frame from the top down and forget that the lowest riser sits on a slab that will later receive 1/2-inch tile, that riser finishes 1/2 inch short of every other one. The fix is to recompute the whole flight from finished floor to finished floor, not to shave one tread. Related uniformity details: nosing must project not less than 3/4 inch and not more than 1-1/4 inches on stairways with solid risers, is not required where tread depth is at least 11 inches, and the leading-edge radius may not exceed 9/16 inch [1].",
          ],
        },
      ],
      howToMeasure:
        "Measure vertical distance from finished floor to finished floor (or landing). Enter rise, riser, and tread in the same unit — inches for framing precision, or feet/meters for whole-story heights. Switching the unit converts all fields so 108 inches never becomes 108 feet.",
      commonMistakes: [
        "Measuring to subfloor instead of finished floor height.",
        "Unequal risers after adjusting only the bottom step.",
        "Ignoring maximum riser height and minimum tread depth in local code.",
        "Changing the length unit without converting values (this tool converts automatically).",
      ],
      faqs: [
        {
          question: "What is the maximum riser height for residential stairs?",
          answer:
            "**The IRC caps residential riser height at 7-3/4 inches (196 mm), measured vertically between the leading edges of adjacent treads.** The tallest riser in a flight may not exceed the shortest by more than 3/8 inch. Local amendments and different adopted code editions apply, so confirm the limit with your building department.",
        },
        {
          question: "What is the minimum tread depth for stairs?",
          answer:
            "**Minimum tread depth is 10 inches (254 mm), measured horizontally between the foremost projections of adjacent treads.** The same 3/8-inch uniformity limit applies across the flight. Winder treads must still measure 10 inches at a point 12 inches from the narrow side, and at least 6 inches anywhere.",
        },
        {
          question: "How much headroom is required above a staircase?",
          answer:
            "**At least 6 feet 8 inches (2,032 mm) in all parts of the stairway, measured from the sloped plane adjoining the tread nosings or from a landing surface.** Spiral stairways are allowed a reduced 6 feet 6 inches. Measure to the finished ceiling or to the lowest projecting obstruction, whichever is lower.",
        },
        {
          question: "How many stairs do I need for a 9 foot rise?",
          answer:
            "**A 108-inch rise with a 7-inch target gives 16 risers of 6.75 inches and 15 treads.** At a 10-inch tread depth that flight occupies 150 inches — 12 ft 6 in — of horizontal run. Always round the riser count up rather than down, so the actual riser stays below your target.",
        },
        {
          question: "Can stair risers be different heights?",
          answer:
            "**No — the code allows no more than 3/8 inch (9.5 mm) between the tallest and shortest riser in a flight.** Uneven risers are a trip hazard and a common inspection failure. If finished flooring changes a floor or landing height, recalculate the entire flight rather than adjusting one step.",
        },
        {
          question: "How do you calculate stair stringer length?",
          answer:
            "**Take the square root of total rise squared plus total run squared.** For a 108-inch rise and a 150-inch run that is the square root of 34,164, about 184.8 inches or 15 ft 5 in. Add material for the top plumb cut, bottom level cut, bearing block, and notch depth before buying stock.",
        },
        {
          question: "Is this stair calculator code compliant?",
          answer:
            "**No — it is geometry only and does not verify code compliance.** It divides your total rise into equal risers and multiplies treads by the depth you enter. Handrails, guards, landings, headroom, illumination, and stringer structure each need separate review against your locally adopted code.",
        },
      ],
      dataTables: [
        {
          title: "What are the IRC stair dimension limits for homes?",
          columns: ["Requirement", "IRC limit", "Metric", "Section"],
          rows: [
            ["Maximum riser height", "7-3/4 in", "196 mm", "R311.7.5.1"],
            ["Minimum tread depth", "10 in", "254 mm", "R311.7.5.2"],
            [
              "Maximum variation within a flight",
              "3/8 in",
              "9.5 mm",
              "R311.7.5.1 and R311.7.5.2",
            ],
            ["Minimum headroom", "6 ft 8 in", "2,032 mm", "R311.7.2"],
            ["Minimum clear stairway width", "36 in", "914 mm", "R311.7.1"],
            ["Maximum vertical rise per flight", "12 ft", "3,658 mm", "R311.7.6"],
            [
              "Handrail height above nosing plane",
              "34 in to 38 in",
              "864 mm to 965 mm",
              "R311.7.8.1",
            ],
          ],
          note: "Values from a building-department guide to the 2018 IRC. Locally adopted editions and amendments govern the actual project.",
        },
        {
          title: "How many risers do you need for common floor-to-floor heights?",
          columns: [
            "Total rise",
            "Risers at a 7 in target",
            "Actual riser height",
            "Treads",
            "Total run at 10 in tread",
          ],
          rows: [
            ["96 in (8 ft)", "14", "6.86 in", "13", "130 in"],
            ["105 in", "15", "7.00 in", "14", "140 in"],
            ["108 in (9 ft)", "16", "6.75 in", "15", "150 in"],
            ["112 in", "16", "7.00 in", "15", "150 in"],
            ["120 in (10 ft)", "18", "6.67 in", "17", "170 in"],
            ["126 in", "18", "7.00 in", "17", "170 in"],
            ["132 in (11 ft)", "19", "6.95 in", "18", "180 in"],
          ],
          note: "Riser count is rounded up, which keeps the actual riser below the target and below the 7-3/4 in code maximum.",
        },
        {
          title: "How does stringer length change with rise and run?",
          columns: [
            "Total rise",
            "Total run",
            "Stringer diagonal",
            "Pitch from horizontal",
          ],
          rows: [
            ["84 in", "110 in", "138.4 in", "37.4°"],
            ["96 in", "130 in", "161.6 in", "36.4°"],
            ["108 in", "150 in", "184.8 in", "35.8°"],
            ["120 in", "170 in", "208.1 in", "35.2°"],
            ["132 in", "180 in", "223.2 in", "36.3°"],
            ["144 in", "200 in", "246.4 in", "35.8°"],
          ],
          note: "Diagonal is the square root of rise squared plus run squared. Add material for end cuts, bearing blocks, and notch depth.",
        },
      ],
      references: [
        {
          label:
            "2018 Residential Stair Guide, IRC Section R311.7 (riser, tread, headroom, width, landing, handrail requirements)",
          publisher: "Town of Timnath, Colorado Building Department",
          year: "2018",
          url: "https://timnath.org/wp-content/uploads/2022/03/2018-RESIDENTIAL-STAIR-GUIDE.pdf",
        },
        {
          label:
            "DCA 6: Prescriptive Residential Wood Deck Construction Guide (stair, stringer, landing, and handrail requirements)",
          publisher: "American Wood Council",
          year: "2015",
          url: "https://awc.org/wp-content/uploads/2021/12/AWC-DCA62015-DeckGuide-1804.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        numberOfRisers: "Risers",
        numberOfTreads: "Treads",
        totalRunFt: "Total horizontal run (ft)",
        stringerLength: "Stringer length (approx.)",
      },
      inputLabels: {
        totalRise: "Total rise (floor to floor)",
        riserHeight: "Target / max riser height",
        treadDepth: "Tread depth",
        stairWidth: "Stair width (optional)",
        lengthUnit: "Length unit (shared)",
      },
      metaTitle: "Stair Calculator — Rise, Run & Treads | BuildSiteCalc",
      metaDescription:
        "Calculate stair risers, treads, total run, and stringer length from floor-to-floor rise. Free geometry helper — verify local code separately.",
    },
    wallpaper: {
      title: "Wallpaper Calculator",
      description:
        "Estimate wallpaper rolls from wall perimeter, height, openings, and pattern repeat. Accounts for waste and pattern matching.",
      shortDescription: "Wallpaper rolls for your room.",
      formula:
        "Net wall area = (perimeter × height) − openings. Rolls = ceil(area with waste ÷ roll coverage). Pattern repeat increases waste per drop.",
      assumptions: [
        "Walls are vertical with uniform height.",
        "Roll coverage defaults from roll dimensions or manual entry.",
        "Pattern repeat adds waste for matching at each drop.",
        "Default waste is 10% plus repeat adjustment.",
        "Does not include border or mural panels sold by piece.",
      ],
      workedExample: {
        title: "48 ft perimeter, 8 ft height, 28 ft² per roll",
        body: "Gross area = 384 ft². Minus 40 ft² openings = 344 ft² net. With 10% waste = 378 ft². Rolls = 378 ÷ 28 = 13.5 → 14 rolls.",
      },
      sections: [
        {
          heading: "How many rolls of wallpaper do I need?",
          paragraphs: [
            "Start from net wall area and divide by the coverage of one roll. Gross area is perimeter × ceiling height; subtract the total area of doors and windows to get the net figure. Rolls equal net area with waste divided by roll coverage, rounded up to whole rolls, and pattern repeat increases the waste per drop. The number that ruins estimates is roll coverage, because it varies enormously. According to the Wallcovering Installers Association, an American single roll contains 34 to 36 ft² regardless of whether it is 18 in or 36 in wide, while a metric or euro roll contains only 28 to 30 ft² per single roll [1].",
            "Almost nothing is actually sold as a single roll. A bolt, also called a double roll, is two single rolls in one continuous strip, priced as two singles but packaged as one length specifically to reduce waste [1]. So an American bolt is roughly 68 to 72 ft² gross and a metric bolt roughly 56 to 60 ft². Usable coverage is always less than gross coverage because the top and bottom of every drop is trimmed and pattern matching consumes more. Enter the usable square footage from the label if the manufacturer publishes it, and treat this calculator as a planning estimate rather than a cutting list.",
          ],
        },
        {
          heading: "How many square feet are in a roll of wallpaper?",
          paragraphs: [
            "The industry uses two different roll systems and they are not interchangeable. American single rolls range from 18 to 36 in wide and from four to eight yards long, but each single roll contains 34 to 36 ft² whatever the dimensions [1]. Metric or euro rolls, also called euro rolls, contain 28 to 30 ft² per single roll and are usually 21 in wide by 16 ft long, or sometimes 27 in wide by 13 ft long [1]. Commercial contract wallcoverings are a third system entirely, generally 54 in wide and specified by ounces per 54 in linear yard, with Type II covering the majority of commercial interiors [2].",
            "This is why buying by roll count rather than by area goes wrong. Fourteen metric single rolls at 28 ft² is 392 ft²; fourteen American single rolls at 36 ft² is 504 ft², nearly 30 percent more material for the same nominal quantity. Check the label for width, length, and stated square footage before you use any roll number in the calculator, and confirm whether the price you were quoted was per single roll while the product ships as bolts. When a supplier lists both gross and usable coverage, always estimate with the usable figure.",
          ],
        },
        {
          heading: "How much wallpaper do I need for a 12x14 room?",
          paragraphs: [
            "Work a full example. A 12 ft × 14 ft room has a perimeter of 2 × (12 + 14) = 52 ft. With 8 ft ceilings, gross wall area is 52 × 8 = 416 ft². Deduct 45 ft² for one standard door and one large window, leaving 371 ft² net. This is a straight-match print with a 14 in repeat, so use 15 percent waste rather than 10: 371 × 1.15 = 426.7 ft². At 56 ft² of usable coverage per metric bolt, 426.7 divided by 56 is 7.6, so the named result is 8 bolts. Buy a ninth for future repairs.",
            "Change one input and the answer moves. The same room with 9 ft ceilings is 468 ft² gross, 423 ft² net, and 486.5 ft² with 15 percent waste, which is 9 bolts. The same room papered in American bolts at 68 ft² usable needs only 7. And the same room in a 26 in multiple-drop pattern at 30 percent waste is 482 ft², or 9 metric bolts. Always work from the specific product, and remember the calculator estimates area coverage only. It does not lay out drops, place seams at inside corners, or plan how a pattern will land at the ceiling line.",
          ],
        },
        {
          heading: "How does pattern repeat affect how much wallpaper you need?",
          paragraphs: [
            "The repeat is the vertical distance from one point on the pattern to the next identical point, and it can range from an inch or less up to the full width of the roll [2]. Every drop has to start at the same point in the pattern, so each strip is cut longer than the wall and the surplus is scrap. A random match has no specific match point, so each strip can be positioned freely, which produces the least waste of any pattern type [2]. Stripes, textures, and grasscloths typically fall into this category and are usually installed with a reverse hang.",
            "Drop matches cost the most material. In a half-drop match each adjoining strip aligns halfway through the vertical repeat, so it takes three strips before the vertical design repeats, and odd-numbered strips match one another while even-numbered strips match each other [2]. A multiple-drop match takes four or more strips before the design repeats [2]. Practically, that means adding roughly 10 percent for random match, 15 percent for a moderate straight match, and 20 to 30 percent for large drop matches. Enter your repeat distance in inches so the calculator can carry that allowance instead of you guessing at the register.",
          ],
        },
        {
          heading: "Do you need to prime walls before wallpaper?",
          paragraphs: [
            "Prepare the substrate to the right level of finish first. GA-214 places wallcoverings at Level 4 for smooth wall designs, which is two separate coats of joint compound over flat joints, one over interior angles, and three over fastener heads, and it reserves Level 3 for heavy-duty commercial wallcoverings only [3]. It also warns that the weight, texture, and sheen of the wallcovering must be evaluated, that joints and fasteners must be adequately concealed for lightweight or low-pattern products, and that unbacked vinyl wallcoverings are not recommended over a Level 4 finish [3]. Priming is recommended before decoration at these levels [3].",
            "Adhesive choice follows the product, not habit. Cellulose pastes hold about 97 percent water and are intended for lightweight materials such as murals, grasscloths, paper-backed corks, and silks; clear starch-based adhesives at 60 to 70 percent water are the general-purpose option and many are strippable for use over bare sheetrock; clay adhesives at 40 to 50 percent water are made for fabric-backed commercial vinyls that need high wet tack [2]. Also record the pattern and dye lot number from each roll, because dye lots change with every print run and color can shift between batches [2]. Buy all your material at once.",
          ],
        },
      ],
      howToMeasure:
        "Measure each wall length and sum for perimeter, or enter total perimeter. Height is floor to ceiling. Subtract doors and windows as total opening area.",
      commonMistakes: [
        "Ignoring pattern repeat on large prints (can add 15–25% extra).",
        "Using bolt coverage from a different roll width (20.5 in vs 27 in).",
        "Forgetting inside corners consume partial roll widths.",
      ],
      faqs: [
        {
          question: "How many rolls of wallpaper do I need for a 12x12 room?",
          answer:
            "**A 12 ft by 12 ft room with 8 ft ceilings needs 7 metric bolts at 56 ft² of usable coverage.** Gross wall area is 384 ft², less 45 ft² of openings leaves 339 ft², and adding 15 percent for pattern matching gives 390 ft². Buy one extra bolt from the same dye lot.",
        },
        {
          question: "How many square feet are in a double roll of wallpaper?",
          answer:
            "**A double roll, or bolt, is two single rolls in one continuous strip, so an American bolt holds about 68 to 72 ft² gross and a metric bolt about 56 ft².** An American single roll contains 34 to 36 ft² and a metric single roll only 28 to 30 ft², so always check the label.",
        },
        {
          question: "Should I buy an extra roll of wallpaper?",
          answer:
            "**Yes, buy at least one extra bolt from the same dye lot at the time of the original order.** The dye lot or run number changes every time the printing process changes, and different lots can vary in tonal color, vinyl coating, or embossing consistency. Record the pattern and dye lot numbers for future reference.",
        },
        {
          question: "How much extra wallpaper do I need for a pattern repeat?",
          answer:
            "**Allow about 10 percent for a random match, 15 percent for a straight match with a 12 to 18 in repeat, and 20 to 30 percent for large drop-match patterns.** The repeat is the vertical distance between identical points in the design, and every strip must be cut to start at the same point.",
        },
        {
          question: "What is a half drop match in wallpaper?",
          answer:
            "**In a half-drop match each adjoining strip aligns halfway through the vertical repeat, so it takes three strips before the vertical design repeats itself.** Odd-numbered strips are identical to each other and even-numbered strips match one another, and the design elements run in a diagonal direction across the wall.",
        },
        {
          question: "Do walls need to be primed before wallpaper?",
          answer:
            "**Yes. GA-214 places wallcoverings at a Level 4 drywall finish for smooth wall designs and recommends that the decoration specification include a priming material over the entire prepared panel surface.** Level 3 is reserved for heavy-duty commercial wallcoverings, and unbacked vinyl is not recommended over Level 4.",
        },
        {
          question: "Can you wallpaper over textured walls?",
          answer:
            "**Texture telegraphs through most wallcoverings and reduces effective coverage, so skim coat the wall to a Level 4 or Level 5 finish first.** If you paper over texture anyway, increase the waste allowance because strips will not lie flat and seams need more trimming and rework than a smooth substrate.",
        },
      ],
      dataTables: [
        {
          title: "How many square feet are in a roll of wallpaper?",
          columns: [
            "Roll type",
            "Typical dimensions",
            "Gross coverage",
            "Plan on usable",
          ],
          rows: [
            [
              "American single roll",
              "18 to 36 in wide, 4 to 8 yd long",
              "34 to 36 ft²",
              "about 28 to 30 ft²",
            ],
            [
              "American bolt, two single rolls",
              "continuous strip of two singles",
              "68 to 72 ft²",
              "about 56 to 60 ft²",
            ],
            [
              "Metric or euro single roll",
              "21 in wide × 16 ft long",
              "28 to 30 ft²",
              "about 24 to 25 ft²",
            ],
            [
              "Metric or euro single roll, alternate",
              "27 in wide × 13 ft long",
              "28 to 30 ft²",
              "about 24 to 25 ft²",
            ],
            [
              "Metric bolt, two single rolls",
              "commonly 20.5 in × 33 ft",
              "about 56 ft²",
              "about 46 to 50 ft²",
            ],
            [
              "Commercial contract wallcovering",
              "54 in wide, bolt length varies by mill",
              "confirm on the label",
              "confirm on the label",
            ],
          ],
          note: "Single and bolt definitions per the Wallcovering Installers Association. Usable coverage is after trimming and pattern matching.",
        },
        {
          title: "How much wallpaper does each room size need?",
          columns: [
            "Room with 8 ft ceilings",
            "Perimeter",
            "Net area after 45 ft² of openings",
            "Plus 15 percent waste",
            "Bolts at 56 ft² usable",
          ],
          rows: [
            ["10 ft × 10 ft", "40 ft", "275 ft²", "316 ft²", "6"],
            ["12 ft × 10 ft", "44 ft", "307 ft²", "353 ft²", "7"],
            ["12 ft × 12 ft", "48 ft", "339 ft²", "390 ft²", "7"],
            ["12 ft × 14 ft", "52 ft", "371 ft²", "427 ft²", "8"],
            ["14 ft × 16 ft", "60 ft", "435 ft²", "500 ft²", "9"],
            ["16 ft × 20 ft", "72 ft", "531 ft²", "611 ft²", "11"],
          ],
          note: "Assumes 45 ft² of doors and windows. Add one extra bolt from the same dye lot for future repairs.",
        },
        {
          title: "How much extra wallpaper does pattern repeat add?",
          columns: [
            "Repeat",
            "Match type",
            "Practical waste allowance",
            "Bolts for 400 ft² net at 56 ft²",
          ],
          rows: [
            ["No repeat", "Random match", "10 percent", "8"],
            ["Up to 6 in", "Straight match", "12 percent", "8"],
            ["12 to 18 in", "Straight match", "15 percent", "9"],
            ["19 to 24 in", "Half-drop match", "20 percent", "9"],
            ["Over 24 in", "Multiple drop match", "25 to 30 percent", "9 to 10"],
          ],
          note: "Random match produces the least waste because there is no repeat distance to align. A half-drop takes three strips to repeat; a multiple drop takes four or more.",
        },
      ],
      references: [
        {
          label:
            "Wallcovering Dictionary: single roll, bolt, double roll, and metric roll coverage",
          publisher: "Wallcovering Installers Association",
          year: "2021",
          url: "https://www.wallcoveringinstallers.org/consumers/wallcovering-resources/wallcovering-dictionary/",
        },
        {
          label:
            "Wallcovering 101: pattern matches, repeats, dye lots, adhesives, and Type I to III widths",
          publisher: "Wolf-Gordon",
          year: "2026",
          url: "https://www.wolfgordon.com/resources/wallcovering-101",
        },
        {
          label:
            "GA-214 Levels of Finish for Gypsum Panel Products: substrate preparation for wallcoverings",
          publisher: "Gypsum Association",
          year: "2021",
          url: "https://www.buildsite.com/pdf/americangypsum/Levels-of-Finish-for-Gypsum-Panel-Products-2108977.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        rollsNeeded: "Wallpaper rolls",
      },
      inputLabels: {},
      metaTitle: "Wallpaper Calculator — Rolls Needed | BuildSiteCalc",
      metaDescription:
        "Calculate wallpaper rolls from room perimeter and height. Pattern repeat and waste included. Free estimator.",
    },
    insulation: {
      title: "Insulation Calculator",
      description:
        "Estimate fiberglass batt count for walls, floors, or attics from net area and batt width. R-value is informational only.",
      shortDescription: "Insulation batts for walls and attics.",
      formula:
        "Coverage per batt = batt width × standard batt length (typically 48 in for walls). Batts needed = ceil(net area with waste ÷ coverage per batt).",
      assumptions: [
        "Standard 15 in or 23 in wide batts for stud spacing.",
        "Batt length assumed 48 in unless product differs.",
        "R-value does not change quantity — it reflects product choice.",
        "Default waste is 10% for cuts around obstructions.",
        "Does not include blown-in density calculations.",
      ],
      workedExample: {
        title: "500 ft² wall area, 15 in batts",
        body: "Each batt covers 15 in × 48 in = 5 ft². Base batts = 500 ÷ 5 = 100. With 10% waste = 110 batts.",
      },
      sections: [
        {
          heading: "How many insulation batts do I need?",
          paragraphs: [
            "Divide net insulated area by the area one batt covers, then round up. Coverage is simply batt width × batt length. A 15-inch-wide batt 48 inches long covers 15 × 48 = 720 in², exactly 5.0 ft², so 500 ft² of wall takes 100 batts before any allowance. A 23-inch batt of the same length covers 1,104 in², or 7.67 ft², so the same 500 ft² needs 66. Precut lengths change the arithmetic sharply: a 15 × 93 in batt sized for an 8-foot wall covers 9.69 ft², dropping the count to 52. Read the width and the length printed on the bag before dividing anything.",
            "Add roughly 10% for cuts around outlets, pipes, blocking, and the odd bay that is not full width. Match batt width to framing spacing rather than the reverse: 15-inch batts are made for studs or joists 16 inches on center, 23-inch batts for 24 inches on center. Forcing a wide batt into a narrow bay compresses it, and DOE notes that insulation which is compressed will not provide its full rated R-value [1]. Fiberglass, mineral wool, and cotton batts are all counted the same way. Blown-in cellulose and loose-fill fiberglass are not — those are ordered by bag coverage at a target settled depth.",
          ],
        },
        {
          heading: "What R-value do I need for my attic?",
          paragraphs: [
            "It depends on your climate zone. The DOE Energy Saver recommendations, keyed to the 2021 International Energy Conservation Code climate zones, call for R30–R49 in an uninsulated attic in zone 1, R49–R60 in zones 2 and 3, and R60 in zones 4 through 8 [1]. Where 3 to 4 inches of attic insulation already exist, the recommended amount to add drops to R19–R38 in zone 1, R38–R49 in zones 2 and 3, and R49 in zones 4 through 8 [1]. Uninsulated floors run R13 in zones 1 and 2, R19 in zone 3 and non-marine zone 4, R30 in marine zone 4 and zone 5, and R38 in zones 7 and 8 [1].",
            "ENERGY STAR publishes a separate, less aggressive retrofit table for existing wood-framed buildings — R30 to R49 for an uninsulated attic in zone 1 and R49 to R60 for zones 5 through 8 [2]. The two tables differ because they were written for different purposes, so check which one your utility rebate, weatherization program, or code official actually references. Walls are stated as assemblies rather than single numbers: DOE lists options such as R20, or R13 plus R5 continuous insulation, or R0 plus R15 continuous insulation for zone 3, where continuous insulation is applied to the exterior of the wall just inside the cladding [1].",
          ],
        },
        {
          heading: "Does a higher R-value change how many batts you need?",
          paragraphs: [
            "No. Batt count is driven by area and batt size, not by thermal performance, which is why R-value is informational in this calculator. An R-13 and an R-21 batt of the same width and length cover the same square footage; the R-21 is simply denser or thicker and costs more per piece. What R-value does change is whether the batt fits the cavity depth. R-13 and R-15 are made for 2×4 walls, R-19 and R-21 for 2×6 walls, and high-R attic batts are thick enough that they must sit above the ceiling joists rather than only between them.",
            "That distinction matters because compression destroys performance. DOE notes that insulation which is compressed will not provide its full rated R-value, and that the overall R-value of a wall or ceiling differs from the insulation's own rating because heat moves more readily through studs and joists — a phenomenon known as thermal bridging [1]. Stuffing an R-21 batt into a 3.5-inch cavity buys almost nothing. If you want more R-value than the cavity allows, add continuous insulation outside the framing or increase the framing depth. DOE also stresses that air sealing and moisture control are important to home energy efficiency, health, and comfort [1].",
          ],
        },
        {
          heading: "How do you measure net area for wall and attic insulation?",
          paragraphs: [
            "For walls, multiply the length of each insulated wall by its height, then subtract window and door openings. Forty linear feet of 8-foot exterior wall is 320 ft² gross; two 3 × 5 ft windows and one 3 × 6.67 ft door remove 50 ft², leaving 270 ft² net. For attics, use the attic floor footprint over the conditioned space, not the roof area. Then add the pieces people forget: rim and band joists, kneewalls behind finished attic rooms, sloped ceiling sections, the attic access hatch, cantilevered floors over garages, and the band between floors in a two-story house.",
            "Subtract only genuine openings. Do not deduct studs and joists, because batts are installed between them and the framing is already accounted for by the bay-by-bay fit. Keep separate area totals for each assembly, since attic joists 24 inches on center take 23-inch batts while walls 16 inches on center take 15-inch batts, and mixing them corrupts the count. Finally, treat the result as a materials estimate. It is not a Manual J load calculation, an energy model, or a code-compliance check, and it does not decide whether a vapor retarder is required in your climate zone and assembly.",
          ],
        },
        {
          heading: "How many batts do I need to insulate a 1,200 square foot attic?",
          paragraphs: [
            "The attic floor over the conditioned space is 1,200 ft², framed with joists 24 inches on center, so the product is 23-inch-wide batts 48 inches long. Coverage per batt is 23 × 48 = 1,104 in², which is 7.67 ft². Add 10% for cuts around the chimney chase, the bath fan, and the access hatch: 1,200 × 1.10 = 1,320 ft². Dividing gives 1,320 ÷ 7.67 = 172.2, so order 173 batts. If that attic sits in climate zone 5 with no existing insulation, DOE's target is R60, which will require layered batts or a batt-plus-blown combination to reach [1].",
            "A wall run shows the other common case. Forty linear feet of 8-foot-tall exterior wall is 320 ft² gross; subtracting two 3 × 5 ft windows and one 3 × 6.67 ft door leaves 270 ft² net. With studs 16 inches on center, use 15-inch batts. At 10% waste the order area is 297 ft². Precut 15 × 93 in batts cover 9.69 ft² each, so 297 ÷ 9.69 = 30.7 — order 31 batts. The same wall in 15 × 48 in batts needs 297 ÷ 5.0 = 59.4, so 60 batts. That is nearly double the piece count for identical coverage, which is why bag size belongs in the estimate.",
          ],
        },
      ],
      howToMeasure:
        "Calculate net insulated area — wall area minus windows and doors, or attic floor footprint. Match batt width to stud or joist spacing (16 in OC → 15 in batts).",
      commonMistakes: [
        "Using batts too wide for stud spacing (compression reduces R-value).",
        "Forgetting attic kneewalls and rim joists in the total area.",
        "Confusing R-value with square footage needed.",
      ],
      faqs: [
        {
          question: "What R-value do I need for my attic?",
          answer:
            "**DOE recommends R60 for an uninsulated attic in climate zones 4 through 8, R49–R60 in zones 2 and 3, and R30–R49 in zone 1.** Where 3 to 4 inches already exist, the recommended addition falls to R49 in zones 4 through 8. Check which table your rebate program references.",
        },
        {
          question: "How many batts of insulation do I need for 500 square feet?",
          answer:
            "**One hundred batts if they are 15 × 48 inches, or 110 once you add a 10% allowance for cuts.** Each 15 × 48 in batt covers exactly 5.0 ft². Switching to 23 × 48 in batts drops the count to 66, and precut 15 × 93 in batts drop it to 52.",
        },
        {
          question: "Should I use 15-inch or 23-inch insulation batts?",
          answer:
            "**Use 15-inch batts for framing 16 inches on center and 23-inch batts for framing 24 inches on center.** Measure the actual bay width before ordering. A batt that has to be compressed to fit will not deliver its rated R-value, so width should follow the framing rather than the reverse.",
        },
        {
          question: "Does a higher R-value mean I need fewer batts?",
          answer:
            "**No — batt count depends on area and batt dimensions, not on R-value.** An R-13 and an R-21 batt of the same size cover identical square footage. R-value determines whether the batt fits the cavity depth: R-13 to R-15 for 2×4 walls, R-19 to R-21 for 2×6 walls.",
        },
        {
          question: "Can I add new batts over existing attic insulation?",
          answer:
            "**Often yes, and DOE's recommended amount to add is lower when 3 to 4 inches of insulation already exist.** In zones 4 through 8 that recommendation is R49 added rather than R60 from bare. Lay new unfaced batts across the joists and do not compress the existing layer.",
        },
        {
          question: "Does compressing insulation reduce its R-value?",
          answer:
            "**Yes. DOE states that insulation which is compressed will not provide its full rated R-value.** Compression also tends to leave gaps at the edges of the bay. Split a batt behind wiring and pipes rather than forcing the full thickness past the obstruction, and cut to width instead of folding.",
        },
        {
          question: "Do I still need air sealing and a vapor retarder with batts?",
          answer:
            "**Air sealing is a separate task, and DOE calls air sealing and moisture control important to home energy efficiency, health, and comfort.** Batts slow conductive heat flow but do not stop air leakage. Vapor retarder requirements depend on climate zone and assembly, so confirm them against local code.",
        },
      ],
      dataTables: [
        {
          title: "What R-value do you need in each climate zone?",
          columns: [
            "Climate zone",
            "Uninsulated attic",
            "Attic with 3–4 in existing",
            "Uninsulated floor",
            "Uninsulated wood-frame wall",
          ],
          rows: [
            ["1", "R30–R49", "R19–R38", "R13", "R13, or R0 + R10 CI"],
            ["2", "R49–R60", "R38–R49", "R13", "R13, or R0 + R10 CI"],
            ["3", "R49–R60", "R38–R49", "R19", "R20, or R13 + R5 CI, or R0 + R15 CI"],
            [
              "4 except Marine",
              "R60",
              "R49",
              "R19",
              "R20 + R5 CI, or R13 + R10 CI, or R0 + R15 CI",
            ],
            [
              "4 Marine and 5",
              "R60",
              "R49",
              "R30",
              "R20 + R5 CI, or R13 + R10 CI, or R0 + R15 CI",
            ],
            ["6", "R60", "R49", "R30", "R20 + R5 CI, or R13 + R10 CI, or R0 + R20 CI"],
            [
              "7 and 8",
              "R60",
              "R49",
              "R38",
              "R20 + R5 CI, or R13 + R10 CI, or R0 + R20 CI",
            ],
          ],
          note: "DOE Energy Saver recommendations keyed to 2021 IECC climate zones. CI means continuous insulation applied outside the wall framing, just inside the cladding.",
        },
        {
          title: "How much area does one insulation batt cover?",
          columns: [
            "Batt width",
            "Batt length",
            "Coverage per batt",
            "Batts for 500 ft² net",
            "Batts with 10% allowance",
          ],
          rows: [
            ["15 in", "48 in", "5.00 ft²", "100", "110"],
            ["15 in", "93 in", "9.69 ft²", "52", "57"],
            ["15 in", "96 in", "10.00 ft²", "50", "55"],
            ["23 in", "48 in", "7.67 ft²", "66", "72"],
            ["23 in", "93 in", "14.85 ft²", "34", "37"],
            ["23 in", "96 in", "15.33 ft²", "33", "36"],
          ],
          note: "Use 15-inch batts for framing 16 inches on center and 23-inch batts for 24 inches on center. Counts round up to whole batts.",
        },
        {
          title: "What does ENERGY STAR recommend when adding attic insulation?",
          columns: [
            "Zone",
            "Add to an uninsulated attic",
            "Add over existing 3–4 in",
            "Floor",
          ],
          rows: [
            ["1", "R30 to R49", "R25 to R30", "R13"],
            ["2", "R30 to R60", "R25 to R38", "R13 to R19"],
            ["3", "R30 to R60", "R25 to R38", "R19 to R25"],
            ["4", "R38 to R60", "R38", "R25 to R30"],
            ["5 to 8", "R49 to R60", "R38 to R49", "R25 to R30"],
          ],
          note: "ENERGY STAR retrofit levels for existing wood-framed buildings. These differ from the DOE Energy Saver table above, so confirm which one your program or rebate uses.",
        },
      ],
      references: [
        {
          label:
            "Insulation: recommended R-values by climate zone, compression, and thermal bridging",
          publisher: "U.S. Department of Energy, Energy Saver",
          year: "2026",
          url: "https://www.energy.gov/energysaver/insulation",
        },
        {
          label:
            "Recommended Home Insulation R-Values for retrofitting existing wood-framed buildings",
          publisher: "ENERGY STAR (U.S. EPA and U.S. DOE)",
          year: "2026",
          url: "https://www.energystar.gov/campaign/seal_insulate/identify_problems_you_want_fix/diy_checks_inspections/insulation_r_values",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        battsNeeded: "Insulation batts",
      },
      inputLabels: {},
      metaTitle: "Insulation Calculator — Batts Needed | BuildSiteCalc",
      metaDescription:
        "Calculate fiberglass insulation batts for walls and attics. Free calculator with batt width and waste factor.",
    },
    "hvac-btu": {
      title: "HVAC BTU Calculator",
      description:
        "Rough-size heating and cooling load in BTU/hr from room dimensions and adjustment factors. Starting point only — not a Manual J replacement.",
      shortDescription: "BTU and tonnage sizing estimate.",
      formula:
        "Base BTU = floor area (ft²) × BTU per ft². Adjusted BTU = base × climate × insulation × sun factors. Tonnage = BTU ÷ 12,000.",
      assumptions: [
        "Default 20 BTU/ft² for moderate mixed climates.",
        "Single zone, standard ceiling height near 8 ft.",
        "Adjustment factors are user-selected multipliers.",
        "Does not replace ACCA Manual J or professional load calculations.",
        "Infiltration, duct losses, and appliance loads are not modeled.",
      ],
      workedExample: {
        title: "20 × 15 ft room, 20 BTU/ft²",
        body: "Floor area = 300 ft². Base = 300 × 20 = 6,000 BTU/hr. At 1.0 factors = 6,000 BTU ≈ 0.5 tons. Large open plans need whole-house analysis.",
      },
      sections: [
        {
          heading: "How many BTUs do I need per square foot?",
          paragraphs: [
            "Rules of thumb cluster between 15 and 25 BTU per hour per square foot, and this calculator uses 20 BTU/ft² as its default for a moderate mixed climate. But the ratio is not constant with room size. ENERGY STAR's cooling capacity chart pairs 100 up to 150 ft² with 5,000 BTU/h — about 33 BTU/ft² at the top of that band — then 450 up to 550 ft² with 12,000 BTU/h (about 22), 700 up to 1,000 ft² with 18,000 BTU/h (18), and 2,000 up to 2,500 ft² with 34,000 BTU/h (about 14) [1]. Small rooms carry proportionally more envelope and infiltration per square foot, so no single BTU/ft² figure serves every space.",
            "Climate, insulation, glazing area, air leakage, orientation, occupancy, and internal gains all move the number, which is why this tool exposes climate, insulation, and sun multipliers instead of hiding them inside one constant. Hot-humid zones sit at the top of the range; tight, well-insulated envelopes in mild climates sit at the bottom. Be honest about insulation — the most common error is claiming a good envelope on a house with 1980s wall assemblies and then oversizing the equipment to compensate. Treat the output as a planning estimate for a single zone, not as an equipment selection.",
          ],
        },
        {
          heading: "What size air conditioner do I need for a 500 square foot room?",
          paragraphs: [
            "ENERGY STAR's chart places 450 up to 550 square feet at 12,000 BTU/h — exactly one ton of cooling [1]. A 500 ft² room at this calculator's 20 BTU/ft² default returns 10,000 BTU/h, which lands one band lower on ENERGY STAR's table (400 up to 450 ft²). That gap is instructive: rule-of-thumb multipliers and published sizing charts routinely disagree by one equipment size, which is why neither should be the last word. Both figures assume the 8-foot ceiling ENERGY STAR's capacities are calculated on [1], and a 10-foot ceiling over the same footprint holds 25% more air.",
            "Then apply the adjustments ENERGY STAR publishes: reduce capacity by 10 percent for a heavily shaded room, increase it by 10 percent for a very sunny one, add 600 BTU for each occupant beyond two, and add 4,000 BTU when the unit is used in a kitchen [1]. A very sunny 500 ft² kitchen regularly occupied by four people goes from 12,000 to 12,000 × 1.10 + 4,000 + 1,200 = 18,400 BTU/h — half again the starting figure. ENERGY STAR is blunt that bigger is not always better: an oversized air conditioner costs more to purchase, wastes energy, and does not provide better cooling [1].",
          ],
        },
        {
          heading: "How many BTUs is a ton of air conditioning?",
          paragraphs: [
            "One ton of cooling equals 12,000 BTU per hour, so tonnage is simply BTU/h ÷ 12,000. Common residential sizes follow directly: 18,000 BTU/h is 1.5 tons, 24,000 BTU/h is 2 tons, 36,000 BTU/h is 3 tons, and 60,000 BTU/h is 5 tons. In SI units, 12,000 BTU/h is about 3.52 kW of thermal capacity, using the conversion 1 BTU/h = 0.293 W. The unit is historical — it descends from the rate of cooling produced by melting one short ton of ice over 24 hours — but it remains how North American equipment is catalogued and how contractors talk about capacity.",
            "Nominal tonnage is a label, not a guarantee. Real capacity varies with outdoor temperature, indoor wet-bulb temperature, airflow across the coil, and refrigerant charge, and in humid climates the sensible-versus-latent split matters as much as the total. That is what ACCA Manual S addresses: it explains how to choose heating and cooling equipment for a home based on the local climate and construction specifications, covering eleven equipment types and how to use the manufacturer's performance data [2]. Sizing on nominal tons alone is how a technically correct system ends up short on humidity control.",
          ],
        },
        {
          heading: "How do you calculate the cooling load for a 20 by 15 foot room?",
          paragraphs: [
            "Start with the footprint: 20 ft × 15 ft = 300 ft². At the 20 BTU/ft² default the base load is 300 × 20 = 6,000 BTU/h, which is 0.5 tons. Now apply the multipliers. A sun-exposed room with mediocre insulation in a warm climate might carry a 1.10 sun factor and a 1.15 insulation factor: 6,000 × 1.10 × 1.15 = 7,590 BTU/h, or 0.63 tons — the named result. ENERGY STAR's chart independently places 300 up to 350 ft² at 8,000 BTU/h [1], so both routes point at the same 7,500 to 8,000 BTU/h class of equipment.",
            "Then sanity-check against volume and occupancy. If that same 300 ft² room has a 10-foot ceiling it contains 3,000 ft³ instead of 2,400 ft³, and ENERGY STAR notes its capacities are calculated based on an 8-foot ceiling [1]. Four regular occupants add 1,200 BTU under ENERGY STAR's rule, pushing 8,000 to 9,200 BTU/h; if the room is a kitchen, add another 4,000 [1]. Nothing here models duct losses, measured infiltration, window U-factors, or shading geometry. A real load calculation does, and that is the next step for anything larger than a single room.",
          ],
        },
        {
          heading: "Why is an oversized air conditioner a problem?",
          paragraphs: [
            "ENERGY STAR states the mechanism plainly: if the unit is too large it will cool the room before it has a chance to remove the humidity, which can lead to discomfort because cool, moist air makes the room feel damp and clammy, and an oversized air conditioner costs more to purchase, wastes energy, and does not provide better cooling [1]. Short cycling is the visible symptom — the compressor satisfies the thermostat within a few minutes, shuts off before the coil has done meaningful dehumidification, and restarts soon after. Frequent starts also raise electrical demand and wear on the compressor and contactor.",
            "Undersizing has its own failure mode: the system runs continuously and never reaches setpoint on design days. The way out of the dilemma is a load calculation rather than a bigger number. ACCA Manual J is the ANSI-approved national standard for residential load calculation covering single-family detached homes, small multi-unit structures, condominiums, town houses, and manufactured homes, and ACCA states that proper load calculation as defined by the manual is required by national building codes and by most states and municipalities [2]. Use this calculator to scope and budget a project; use Manual J and Manual S to select equipment.",
          ],
        },
      ],
      howToMeasure:
        "Measure room length and width at the floor. For sizing a whole floor, sum rooms or use building footprint. Note sun exposure and insulation quality honestly in the factors.",
      commonMistakes: [
        "Sizing only by bedroom count for an entire house.",
        "Oversizing AC (short cycling) by ignoring insulation factor.",
        "Using this result as final equipment selection without Manual J.",
      ],
      faqs: [
        {
          question: "How many BTUs per square foot do I need for cooling?",
          answer:
            "**Plan on roughly 15 to 25 BTU per hour per square foot, with 20 BTU/ft² as a mixed-climate default.** ENERGY STAR's chart implies more per square foot in small rooms — about 33 at 150 ft² — and less in large ones, near 14 at 2,500 ft². Climate and insulation move the figure either way.",
        },
        {
          question: "What size air conditioner do I need for 500 square feet?",
          answer:
            "**ENERGY STAR lists 12,000 BTU/h — one ton — for 450 up to 550 square feet.** Its capacities assume an 8-foot ceiling. Add 10 percent for a very sunny room, subtract 10 percent for heavy shade, add 600 BTU per occupant beyond two, and add 4,000 BTU for kitchen use.",
        },
        {
          question: "How many BTUs is 1 ton of air conditioning?",
          answer:
            "**One ton of cooling equals 12,000 BTU per hour, or about 3.52 kilowatts.** So 24,000 BTU/h is 2 tons and 36,000 BTU/h is 3 tons. Nominal tonnage is a catalogue label; actual capacity shifts with outdoor temperature, coil airflow, and indoor humidity.",
        },
        {
          question: "How many BTUs do I need for a 1,000 square foot space?",
          answer:
            "**ENERGY STAR's chart puts 700 up to 1,000 square feet at 18,000 BTU/h, which is 1.5 tons.** A 20 BTU/ft² rule of thumb gives 20,000 BTU/h for the same area. Anything covering multiple rooms or a whole floor needs a room-by-room load calculation instead.",
        },
        {
          question: "Is it bad to oversize an air conditioner?",
          answer:
            "**Yes — ENERGY STAR warns that an oversized unit cools the room before it can remove humidity, leaving cool, moist air that feels damp and clammy.** It also costs more to purchase and wastes energy. Short cycling shortens compressor life without improving comfort.",
        },
        {
          question: "Does ceiling height affect BTU sizing?",
          answer:
            "**Yes — published sizing charts are calculated for 8-foot ceilings, and taller rooms hold proportionally more air.** A 300 ft² room is 2,400 ft³ at 8 feet but 3,000 ft³ at 10 feet, 25 percent more. Increase capacity or move up one band for high ceilings.",
        },
        {
          question: "Do I still need a Manual J load calculation?",
          answer:
            "**Yes, for equipment selection.** ACCA states that proper load calculation as defined by Manual J is required by national building codes and by most states and municipalities. Use this calculator to scope and budget a project, then have a contractor run Manual J and Manual S.",
        },
      ],
      dataTables: [
        {
          title: "What BTU capacity does ENERGY STAR recommend for each room size?",
          columns: [
            "Area to be cooled",
            "Capacity needed",
            "Approximate tons",
            "Implied BTU per ft² at top of band",
          ],
          rows: [
            ["100 up to 150 ft²", "5,000 BTU/h", "0.42 tons", "33 BTU/ft²"],
            ["250 up to 300 ft²", "7,000 BTU/h", "0.58 tons", "23 BTU/ft²"],
            ["400 up to 450 ft²", "10,000 BTU/h", "0.83 tons", "22 BTU/ft²"],
            ["450 up to 550 ft²", "12,000 BTU/h", "1.00 tons", "22 BTU/ft²"],
            ["700 up to 1,000 ft²", "18,000 BTU/h", "1.50 tons", "18 BTU/ft²"],
            ["1,500 up to 2,000 ft²", "30,000 BTU/h", "2.50 tons", "15 BTU/ft²"],
            ["2,000 up to 2,500 ft²", "34,000 BTU/h", "2.83 tons", "14 BTU/ft²"],
          ],
          note: "ENERGY STAR capacities are calculated based on an 8-foot ceiling. Higher ceilings need more capacity than the chart shows.",
        },
        {
          title: "How do the ENERGY STAR adjustments change required capacity?",
          columns: [
            "Condition",
            "Adjustment",
            "Applied to an 8,000 BTU/h base",
            "Adjusted capacity",
          ],
          rows: [
            ["Heavily shaded room", "Reduce 10%", "8,000 × 0.90", "7,200 BTU/h"],
            ["Very sunny room", "Increase 10%", "8,000 × 1.10", "8,800 BTU/h"],
            ["Third regular occupant", "Add 600 BTU", "8,000 + 600", "8,600 BTU/h"],
            [
              "Fourth regular occupant",
              "Add 1,200 BTU total",
              "8,000 + 1,200",
              "9,200 BTU/h",
            ],
            ["Used in a kitchen", "Add 4,000 BTU", "8,000 + 4,000", "12,000 BTU/h"],
            [
              "Very sunny kitchen, four occupants",
              "+10%, +4,000, +1,200",
              "8,800 + 5,200",
              "14,000 BTU/h",
            ],
          ],
          note: "Adjustments are stated by ENERGY STAR for room air conditioners. Combine them in sequence, not by picking the largest one.",
        },
        {
          title: "How do BTU per hour, tons, and kilowatts compare?",
          columns: [
            "Capacity (BTU/h)",
            "Tons of cooling",
            "Kilowatts (thermal)",
            "Typical application",
          ],
          rows: [
            ["5,000 BTU/h", "0.42 tons", "1.47 kW", "Small bedroom window unit"],
            ["8,000 BTU/h", "0.67 tons", "2.34 kW", "Room of 300 to 350 ft²"],
            [
              "12,000 BTU/h",
              "1.00 tons",
              "3.52 kW",
              "Room of 450 to 550 ft², or a 1-ton mini-split",
            ],
            ["18,000 BTU/h", "1.50 tons", "5.28 kW", "Open area of 700 to 1,000 ft²"],
            ["24,000 BTU/h", "2.00 tons", "7.03 kW", "2-ton central system"],
            ["36,000 BTU/h", "3.00 tons", "10.55 kW", "3-ton central system"],
            ["60,000 BTU/h", "5.00 tons", "17.58 kW", "5-ton central system"],
          ],
          note: "Conversion uses 1 BTU/h = 0.293 W. Nominal tonnage is a catalogue label; verify capacity at design conditions.",
        },
      ],
      references: [
        {
          label: "Room Air Conditioners: cooling capacity chart and sizing adjustments",
          publisher: "ENERGY STAR, U.S. Environmental Protection Agency",
          year: "2026",
          url: "https://www.energystar.gov/products/room_air_conditioners",
        },
        {
          label:
            "Technical Manuals: Manual J Residential Load Calculation and Manual S Residential Equipment Selection",
          publisher: "Air Conditioning Contractors of America (ACCA)",
          year: "2026",
          url: "https://www.acca.org/standards/technical-manuals",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        estimatedBtu: "Estimated load (BTU/hr)",
        tonnage: "Cooling tons",
      },
      inputLabels: {},
      metaTitle: "HVAC BTU Calculator — AC Sizing Estimate | BuildSiteCalc",
      metaDescription:
        "Estimate HVAC BTU and tonnage from room size and climate factors. Free rough-sizing tool — not a Manual J substitute.",
    },
    "moving-truck-size": {
      title: "Moving Truck Size Calculator",
      description:
        "Recommend a moving truck or cargo van size from bedroom count or total inventory cubic feet.",
      shortDescription: "Moving truck size recommendation.",
      formula:
        "Estimated volume = bedrooms × 400 ft³ (default) or direct cubic feet entry. Truck tier is the smallest standard size that fits the load.",
      assumptions: [
        "400 ft³ per bedroom is a rough average for furnished rooms.",
        "Garage, patio, and basement contents are not included unless reflected in cubic feet.",
        "Truck tiers follow common rental fleet sizes (cargo van through 26 ft).",
        "Professional packing reduces void space; DIY moves need headroom.",
        "Long-distance moves may need smaller loads per trip.",
      ],
      workedExample: {
        title: "3-bedroom home estimate",
        body: "3 × 400 = 1,200 ft³ estimated. Recommended tier: 20 ft truck (≈1,000 ft³ cargo) may be tight — consider 26 ft or a second trip for a fully furnished home.",
      },
      sections: [
        {
          heading: "What size moving truck do I need for a 3 bedroom house?",
          paragraphs: [
            "At this calculator's default of 400 cubic feet per bedroom, a three-bedroom home estimates at 3 × 400 = 1,200 ft³. A 20-foot box truck usually publishes about 1,000 ft³ of cargo space, so 1,200 ft³ does not fit — a 26-foot truck at roughly 1,600 to 1,700 ft³ is the realistic single-load choice, and it leaves 400 to 500 ft³ of working room for awkward shapes and a mattress standing on edge. If the house is lightly furnished, a 20-footer plus one short second trip can work. If it has a full garage or a workshop, take the 26.",
            "The 400 ft³ per bedroom figure is a whole-home proxy, not a bedroom-only measurement — it is meant to absorb the living room, kitchen, dining, and hallway contents that scale with house size. What it does not absorb is a garage full of tools, patio furniture, gym equipment, or long-term basement storage. Those are the items that turn a comfortable load into an overflow on the driveway. Enter your own cubic-foot total to override the bedroom estimate any time you have made an actual inventory, because a measured list always beats a per-bedroom average.",
          ],
        },
        {
          heading: "How many cubic feet does a moving truck hold?",
          paragraphs: [
            "Consumer rental fleets run in fairly consistent tiers. A cargo van holds roughly 245 to 260 ft³, a 10-foot box truck about 380 to 400 ft³, a 15-footer around 760 to 800 ft³, a 17-footer near 860 to 880 ft³, a 20-footer about 1,000 ft³, and a 26-footer between 1,600 and 1,700 ft³. Step up one tier and you typically gain 200 to 600 ft³, so the difference between a 20-footer and a 26-footer is roughly a full bedroom's worth of goods. Exact figures vary by rental company, body manufacturer, and model year, so read the published cargo volume and payload rating for the specific truck you are reserving instead of trusting a generic chart you found online.",
            "Length alone does not tell you volume, because interior height and width differ between fleets and because over-cab compartments add usable space that is only good for light, soft items. FMCSA's moving glossary calls a single cab-and-body vehicle a straight truck and describes it as generally one half the size and capacity of a tractor-trailer [2] — useful context when a professional mover quotes a shuttle or a smaller vehicle for a narrow street or a low bridge. Before booking, also confirm ramp versus liftgate, door opening height, and tie-down rail spacing.",
          ],
        },
        {
          heading: "How do you estimate the cubic feet of your household goods?",
          paragraphs: [
            "There are two methods and they answer different questions. The fast method is bedroom count × 400 ft³, which is what this calculator does by default; it is good enough for choosing between truck tiers. The accurate method is an inventory: list major furniture, estimate each piece in cubic feet, count cartons by size, and total the list. A medium carton is about 3.0 ft³ and a large carton about 4.5 ft³; a three-seat sofa runs near 50 ft³ and a queen mattress set near 45 ft³. Build the list once and you can price every moving option against the same number.",
            "Professional movers do the same thing with a survey. FMCSA defines a survey as the booking or origin agent examining — visually inspecting — the shipper's goods to develop a cost estimate [2], and requires that when your origin is within a 50-mile radius of the mover's or its agent's place of business, the estimate must be based on a physical survey of your goods unless you waive that in a written agreement signed before loading [1]. Whether you rent a truck or hire a carrier, the inventory is the document that makes every later number checkable.",
          ],
        },
        {
          heading: "How do you calculate cubic feet for a 3 bedroom move with a garage?",
          paragraphs: [
            "Build the estimate in layers. Three bedrooms at the 400 ft³ default is 1,200 ft³. Add a moderately full one-car garage at about 150 ft³ of tools, bikes, and bins, plus 60 ft³ of patio furniture and a grill: 1,200 + 150 + 60 = 1,410 ft³ — the named result. Now compare against the tiers. A 20-foot truck at 1,000 ft³ is 410 ft³ short, while a 26-footer at about 1,650 ft³ leaves 240 ft³ of spare capacity, roughly 17% headroom. Book the 26 and enter 1,410 as your cubic-foot override instead of relying on the bedroom default.",
            "Headroom is not waste. Leaving 15% to 20% covers the volume lost to irregular shapes, the mattress that will not lie flat, the box that cannot be stacked, and the items you find in the attic on loading day. Loading dense goods low and light goods high costs some usable volume too, and blankets, straps, and dollies take up space of their own. On a 1,410 ft³ load, 17% headroom is 240 ft³ — about the capacity of a cargo van. If spare capacity drops below roughly 10%, either move up a tier or plan a deliberate second trip, rather than discovering the shortfall with a half-loaded truck and a closing deadline.",
          ],
        },
        {
          heading: "Is it cheaper to rent one big truck or make two trips?",
          paragraphs: [
            "Run the arithmetic on both. A 26-foot rental usually costs more per day than a 20-footer and burns more fuel per mile, but a second trip doubles the distance driven and adds hours of loading and unloading. For a 30-mile local move, two round trips in a 20-footer means about 120 miles of driving against 60 miles in a 26-footer, plus a whole extra load-and-unload cycle. Multiply your rental's per-mile charge and estimated fuel by both totals, then add the value of the extra half-day. Beyond roughly 50 miles one way, second trips almost always lose.",
            "The professional-mover comparison uses different arithmetic. FMCSA requires your mover to prepare a written estimate on every shipment and entitles you to a copy when the mover prepares it [1]. Under a non-binding estimate you should be prepared to pay ten percent more than the estimated amount at delivery — the 110 percent rule — while a binding estimate guarantees the total cost for the quantities and services shown [1][2]. FMCSA also defines overflow as articles left behind due to insufficient space on a van, to be loaded on a second van [2]: the professional version of the problem this calculator exists to prevent.",
          ],
        },
      ],
      howToMeasure:
        "Count bedrooms plus consider dining, office, and garage storage. For precision, list major furniture with approximate dimensions and sum cubic feet, or use a home inventory app.",
      commonMistakes: [
        "Underestimating garage tools, outdoor furniture, and boxed storage.",
        "Choosing the smallest truck to save money — second trips cost more.",
        "Ignoring weight limits on large trucks with dense items (books, tools).",
      ],
      faqs: [
        {
          question: "What size moving truck do I need for a 3 bedroom house?",
          answer:
            "**Plan on a 26-foot truck, about 1,600 to 1,700 cubic feet, for a typical furnished three-bedroom home.** At 400 ft³ per bedroom the estimate is 1,200 ft³, which will not fit a 20-footer's roughly 1,000 ft³. A lightly furnished house may fit a 20-footer plus one short trip.",
        },
        {
          question: "How many cubic feet is a 26 foot moving truck?",
          answer:
            "**Roughly 1,600 to 1,700 cubic feet of cargo space, depending on the rental company and body model.** That covers a three- to five-bedroom load with headroom. Always check the published cargo volume and payload rating for the exact truck you reserve, since specs vary by fleet and model year.",
        },
        {
          question: "How many cubic feet should I estimate per bedroom?",
          answer:
            "**About 400 cubic feet per bedroom, used as a whole-home proxy rather than a bedroom-only measurement.** It absorbs living room, kitchen, dining, and hallway contents that scale with house size. It does not include garage, patio, workshop, or basement storage — add those volumes separately.",
        },
        {
          question: "What size truck do I need for a 2 bedroom apartment?",
          answer:
            "**A 15- to 17-foot truck, roughly 760 to 880 cubic feet, fits most two-bedroom apartments.** The 400 ft³ per bedroom estimate gives 800 ft³, which is tight in a 17-footer and comfortable in a 20-footer. A sparsely furnished apartment can often go in a 10-footer.",
        },
        {
          question: "How much spare capacity should I leave in the truck?",
          answer:
            "**Leave 15% to 20% of the cargo volume unbooked.** Irregular shapes, mattresses that will not lie flat, and last-minute attic finds all consume more space than a cubic-foot list predicts. If spare capacity falls under about 10%, move up a size or plan a second trip deliberately.",
        },
        {
          question: "Do I need a special license to drive a 26 foot rental truck?",
          answer:
            "**Consumer truck rentals are generally offered to drivers holding an ordinary license, but that is set by the rental company and state law, not by this calculator.** Confirm age, license, and insurance terms with the rental company before booking, and check weight or height restrictions on your route.",
        },
        {
          question: "Should I hire a mover instead of renting a truck?",
          answer:
            "**Hire a mover when the load, distance, or stairs outweigh the savings — and get the estimate in writing.** FMCSA requires a written estimate on every shipment and a physical survey when your origin is within 50 miles of the mover's place of business. Under a non-binding estimate, be ready to pay 110% at delivery.",
        },
      ],
      dataTables: [
        {
          title: "How much cargo volume does each rental truck size hold?",
          columns: [
            "Vehicle",
            "Typical cargo volume",
            "Bedrooms it usually covers",
            "Best fit",
          ],
          rows: [
            [
              "Cargo van",
              "245 to 260 ft³",
              "studio or partial load",
              "Dorm room, single-room move",
            ],
            [
              "10 ft box truck",
              "380 to 400 ft³",
              "1 bedroom, lightly furnished",
              "Studio or small 1-bedroom",
            ],
            [
              "15 ft box truck",
              "760 to 800 ft³",
              "1 to 2 bedrooms",
              "Furnished 2-bedroom apartment",
            ],
            [
              "17 ft box truck",
              "860 to 880 ft³",
              "2 bedrooms",
              "2-bedroom plus modest storage",
            ],
            [
              "20 ft box truck",
              "1,000 to 1,020 ft³",
              "2 to 3 bedrooms",
              "Small 3-bedroom, tight fit",
            ],
            [
              "26 ft box truck",
              "1,600 to 1,700 ft³",
              "3 to 5 bedrooms",
              "Fully furnished 3- to 4-bedroom house",
            ],
          ],
          note: "Fleet specifications vary by rental company and model year. Confirm published cargo volume and payload rating before booking.",
        },
        {
          title: "How does bedroom count convert to cubic feet and truck size?",
          columns: [
            "Home size",
            "Estimated volume at 400 ft³ per bedroom",
            "Smallest truck that fits",
            "Spare capacity",
          ],
          rows: [
            ["Studio (partial load)", "200 ft³", "Cargo van, about 250 ft³", "50 ft³"],
            ["1 bedroom", "400 ft³", "15 ft truck, about 760 ft³", "360 ft³"],
            ["2 bedrooms", "800 ft³", "17 ft truck, about 870 ft³", "70 ft³"],
            ["3 bedrooms", "1,200 ft³", "26 ft truck, about 1,650 ft³", "450 ft³"],
            ["4 bedrooms", "1,600 ft³", "26 ft truck, about 1,650 ft³", "50 ft³"],
            ["5 bedrooms", "2,000 ft³", "26 ft truck plus a second load", "-350 ft³"],
          ],
          note: "Matches the calculator's 400 ft³ per bedroom default. Enter your own cubic-foot total whenever you have a real inventory.",
        },
        {
          title: "How much might a load weigh at common cubic-foot totals?",
          columns: [
            "Load volume",
            "At 6 lb per ft³",
            "At 7 lb per ft³",
            "At 8 lb per ft³",
          ],
          rows: [
            ["400 ft³", "2,400 lb", "2,800 lb", "3,200 lb"],
            ["800 ft³", "4,800 lb", "5,600 lb", "6,400 lb"],
            ["1,200 ft³", "7,200 lb", "8,400 lb", "9,600 lb"],
            ["1,600 ft³", "9,600 lb", "11,200 lb", "12,800 lb"],
            ["2,000 ft³", "12,000 lb", "14,000 lb", "16,000 lb"],
          ],
          note: "Illustrative density arithmetic, not a mover's tariff conversion. Dense loads can exceed a truck's payload before the box is full.",
        },
      ],
      references: [
        {
          label:
            "Estimating Charges (Subpart D): written estimates, physical survey requirement, binding and non-binding estimates, 110 percent rule",
          publisher:
            "Federal Motor Carrier Safety Administration, U.S. Department of Transportation",
          year: "2015",
          url: "https://www.fmcsa.dot.gov/protect-your-move/how-to/subpartD",
        },
        {
          label:
            "Protect Your Move Glossary (straight truck, survey, overflow, shuttle service, valuation)",
          publisher:
            "Federal Motor Carrier Safety Administration, U.S. Department of Transportation",
          year: "2024",
          url: "https://www.fmcsa.dot.gov/protect-your-move/glossary",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        recommendedTruck: "Suggested truck",
      },
      inputLabels: {},
      metaTitle: "Moving Truck Size Calculator | BuildSiteCalc",
      metaDescription:
        "Find the right moving truck size from bedrooms or cubic feet. Free guide for cargo van through 26 ft trucks.",
    },
    "dumpster-size": {
      title: "Dumpster Size Calculator",
      description:
        "Recommend a roll-off dumpster size in cubic yards for common renovation and cleanout projects.",
      shortDescription: "Roll-off dumpster size for your project.",
      formula:
        "Select a project preset or enter custom debris volume in cubic yards. Recommended dumpster is the smallest standard size (10, 20, 30, or 40 yd³) that holds the estimate.",
      assumptions: [
        "Preset volumes are typical ranges for residential projects.",
        "Debris is loosely piled, not compacted demolition rubble unless noted.",
        "Local haulers may use slightly different capacity ratings.",
        "Weight limits apply — heavy materials (concrete, dirt) may fill weight before volume.",
        "Recycling separation may require multiple smaller pulls.",
      ],
      workedExample: {
        title: "Kitchen remodel preset",
        body: "Preset ≈ 10 yd³ debris. Recommended dumpster: 10 yd³ roll-off. If cabinets are heavy or include plaster, consider 20 yd³ for weight headroom.",
      },
      sections: [
        {
          heading: "What size dumpster do I need for a bathroom remodel?",
          paragraphs: [
            "Debris volume, not room size, decides the container. Strip a bathroom to the studs and the pile is a tub or shower surround, wall tile and backer board, a vanity, a toilet, a mirror, floor covering, and the drywall behind all of it. Estimate it the way you would estimate any pile: length × width × average loose height in feet, then divide by 27, because one cubic yard contains 27 cubic feet. If the loose pile measures 8 ft × 6 ft × 2.5 ft, that is 120 ft³, or 4.44 yd³. This calculator recommends the smallest standard roll-off that holds your estimate, so 4.44 yd³ lands in a 10 yd³ container with room left for the odd surprise.",
            "Two things can push a small bathroom into a larger container. The first is weight. Wall tile, mortar bed, cast iron, and plaster are dense, and haulers publish a debris weight allowance for each size: one national hauler lists under 5,000 lb for its mini roll-offs and 5,000–8,000 lb for a 20-yard box [3]. The second is scope creep, because once a wall opens, subfloor, lath, or a second vanity often join the pile. If you are close to the edge of a size, price the next size up against the cost of a second pull, and remember that a larger box loaded partway is usually cheaper than two hauls of a small one.",
          ],
        },
        {
          heading:
            "How many cubic yards is a 20 yard dumpster and what are its dimensions?",
          paragraphs: [
            "A 20-yard roll-off is rated at 20 cubic yards of loose debris, which is 540 cubic feet, since 20 × 27 = 540. Published dimensions vary by hauler and by the roll-off truck that carries the box. One national hauler lists 22 ft long × 8 ft wide × 3.5 ft high for its 20-yard container, 22 × 8 × 6 ft for a 30-yard, and 22 × 8 × 8 ft for a 40-yard [3]. Multiply the 20-yard figures and you get 616 ft³, slightly above the nominal rating, which is normal: nominal capacity describes usable loose volume below the rim, not the geometric volume of the steel box. Plan to the rating, never to the tape measure.",
            "Footprint matters as much as capacity. A 22-foot container needs a straight approach considerably longer than the box itself so the truck can winch it off and reload it, plus overhead clearance for the hoist arm. Ask the hauler for the exact delivery footprint, because trucks and cable systems differ. Measure driveway width, note low branches and utility drops, and check whether your city requires a permit for placement in the street or right of way. A container you cannot legally set is worse than one that is slightly small. Put plywood under the rails to protect a finished driveway, and point the swing door toward where the heaviest pieces will be loaded.",
          ],
        },
        {
          heading: "How much does a cubic yard of construction debris weigh?",
          paragraphs: [
            "It depends entirely on the material, which is why volume alone never settles the question. EPA's standard volume-to-weight conversion factors put rock and gravel at 999 lb per cubic yard, dirt and sand at 929 lb, concrete at 860 lb, asphalt paving at 773 lb, composition roofing at 731 lb, gypsum board at 467 lb, mixed construction and demolition remainder at 417 lb, and clean dimensional lumber at only 169 lb [2]. That is a spread of nearly six to one across materials that all measure the same cubic yard. Ten cubic yards of concrete therefore weighs 10 × 860 = 8,600 lb, or 4.3 tons, while the same ten cubic yards of clean framing lumber weighs just 1,690 lb.",
            "Compare that arithmetic against the container's published debris allowance and the limiting factor becomes obvious. Fill a 20-yard box with composition roofing tear-off and EPA's factor gives 20 × 731 = 14,620 lb, well past the 5,000–8,000 lb range one hauler publishes for that size [2][3]. Fill the same box with mixed C&D remainder and you get 8,340 lb, right at the top of the range. Fill a 30-yard with clean dimensional lumber and you reach only 5,070 lb, comfortably inside an 8,000–12,000 lb allowance. Dense material fills a container by weight long before it fills by volume, which is why haulers often send a small box for concrete, dirt, and shingles.",
          ],
        },
        {
          heading: "What can you not put in a rented dumpster?",
          paragraphs: [
            "Acceptance rules are set by your hauler and by the receiving landfill or transfer station, so the definitive list is local. In practice, liquids, paints and solvents, fuels, pesticides, batteries, tires, refrigerant-bearing appliances, medical waste, and anything containing asbestos are commonly excluded from general roll-off service and routed to a separate program. Household hazardous waste collection events, appliance recovery programs, and licensed abatement contractors exist precisely because those streams cannot ride in a mixed load. Ask for the prohibited-items list in writing before the box arrives, and post it where the crew loads, because a single contaminated load can trigger a special-handling charge against the whole pull.",
            "Separation can also work in your favor. EPA reports that 600 million tons of construction and demolition debris were generated in the United States in 2018, more than twice the amount of municipal solid waste, and that roughly 143.8 million tons of it went to landfill while the remainder went to aggregate, manufactured products, fuel, compost and mulch, or soil amendment [1]. Clean concrete, clean wood, metal, and cardboard often have their own outlets, sometimes at a lower tip fee than mixed debris. If your project produces a large single-material stream, ask whether a dedicated container beats one mixed box. This calculator sizes a single container, so run it once per stream if you separate.",
          ],
        },
        {
          heading:
            "How do you estimate debris volume in cubic yards for a demolition project?",
          paragraphs: [
            "Build the estimate from components instead of guessing a size. Drywall: wall and ceiling area in square feet × thickness in feet, then multiply by a break-up factor because broken board does not stack flat. Roofing: tear-off area divided by 100 gives squares, which you convert to volume using the loose pile you actually expect. Framing lumber: count linear feet and convert to a measured stacked volume, remembering that EPA's 169 lb per cubic yard means lumber is bulky but light [2]. Flooring, cabinets, and fixtures are easiest to estimate as a measured pile. Add the component volumes in cubic feet, then divide the total by 27 once, at the end, rather than rounding at every step.",
            "Work a kitchen. Wall and ceiling drywall of 320 ft² at 1/2 inch is 320 × 0.0417 = 13.3 ft³ solid, but broken board stacks loosely, so at a 3× break-up factor plan about 40 ft³. Cabinets and countertops measured as a pile of 10 ft × 4 ft × 3 ft add 120 ft³. Flooring and underlayment at 200 ft² × 0.1 ft loose is 20 ft³. Appliances and jobsite trash add another 60 ft³. Total 240 ft³, and 240 ÷ 27 = 8.9 yd³. That fits a 10-yard box on volume, but if the countertops are stone, check weight first: 8.9 yd³ of aggregate at 999 lb per cubic yard would be 8,891 lb [2].",
          ],
        },
      ],
      howToMeasure:
        "For custom projects, estimate piled debris length × width × average height in feet, convert to cubic yards (÷ 27), or ask your contractor for a comparable past job.",
      commonMistakes: [
        "Ordering too small and paying for a second pull.",
        "Filling a dumpster with concrete or dirt — weight limits trigger overage fees fast.",
        "Blocking the container placement area — confirm driveway clearance.",
      ],
      faqs: [
        {
          question: "What size dumpster do I need for a bathroom remodel?",
          answer:
            "**A 10-cubic-yard roll-off handles most single-bathroom gut remodels.** Measure the loose debris pile: an 8 ft × 6 ft × 2.5 ft heap is 120 ft³, or 4.44 yd³, which fits with room to spare. Step up to 20 yd³ if the tear-out includes cast iron, mortar-bed tile, or plaster, because dense debris reaches the weight allowance first.",
        },
        {
          question: "How many cubic yards is a 20 yard dumpster?",
          answer:
            "**A 20-yard dumpster holds 20 cubic yards, which is 540 cubic feet of loose debris.** One national hauler publishes dimensions of 22 ft long × 8 ft wide × 3.5 ft high for that size. Nominal capacity describes usable loose volume below the rim, so plan to the rating rather than to the tape measure.",
        },
        {
          question: "How much weight can a 20 yard dumpster hold?",
          answer:
            "**Published debris allowances for a 20-yard roll-off commonly run in the 5,000–8,000 lb range, but the real limit is set by your hauler and local road rules.** EPA factors put mixed construction and demolition debris at 417 lb per cubic yard, so a full 20-yard box works out to 8,340 lb. Confirm the allowance in writing.",
        },
        {
          question: "Is it cheaper to rent a bigger dumpster or pay for two pulls?",
          answer:
            "**One larger container is usually cheaper than two hauls of a smaller one, because every pull carries its own transport and disposal charge.** Compare the delivered price of the next size up against a full second pickup plus the schedule delay. Ask what weight allowance the quote includes and what the per-ton overage rate is.",
        },
        {
          question: "What can you not put in a dumpster?",
          answer:
            "**Liquids, paints and solvents, fuels, pesticides, batteries, tires, refrigerant-bearing appliances, and asbestos-containing material are commonly excluded from general roll-off service.** The definitive list comes from your hauler and the receiving facility, so request it in writing before delivery. One contaminated load can trigger a special-handling charge on the entire pull.",
        },
        {
          question: "How do you estimate construction debris in cubic yards?",
          answer:
            "**Measure the loose pile's length, width, and average height in feet, multiply them, and divide by 27.** One cubic yard equals 27 cubic feet. For a demolition estimate, total the component volumes first — drywall, framing, flooring, fixtures — then divide once at the end so rounding errors do not accumulate.",
        },
        {
          question: "How long is a dumpster rental period?",
          answer:
            "**Rental terms are set by your contract, not by a national standard, so confirm the included days before delivery.** Ask three questions: how many days are included, what a per-day extension costs, and how much notice a pickup requires. Scheduling the pull for the day after demolition ends avoids paying for idle days.",
        },
      ],
      dataTables: [
        {
          title: "What are the standard roll-off dumpster sizes and dimensions?",
          columns: [
            "Nominal size",
            "Published dimensions",
            "Loose volume",
            "Debris weight allowance",
            "Typical fit",
          ],
          rows: [
            [
              "10 yd³ mini",
              "10 ft × 8.5 ft",
              "270 ft³",
              "Under 5,000 lb",
              "Single-room strip-out, small concrete or dirt load",
            ],
            [
              "14 yd³ mini",
              "14 ft × 8.5 ft",
              "378 ft³",
              "Under 5,000 lb",
              "Garage or basement cleanout, driveway repair",
            ],
            [
              "20 yd³",
              "22 ft × 8 ft × 3.5 ft",
              "540 ft³",
              "5,000–8,000 lb",
              "Bath or kitchen remodel, light demolition",
            ],
            [
              "30 yd³",
              "22 ft × 8 ft × 6 ft",
              "810 ft³",
              "8,000–12,000 lb",
              "Whole-floor remodel, mid-to-heavy demolition",
            ],
            [
              "40 yd³",
              "22 ft × 8 ft × 8 ft",
              "1,080 ft³",
              "12,000–16,000 lb",
              "Large or commercial demolition, bulky light debris",
            ],
          ],
          note: "Dimensions and weight allowances are one national hauler's published figures [3]; both vary by hauler and by local road weight limits. Loose volume is nominal size × 27 ft³. This calculator recommends from the 10, 20, 30, and 40 yd³ sizes.",
        },
        {
          title: "How much does a cubic yard of each debris type weigh?",
          columns: [
            "Debris type",
            "Pounds per cubic yard",
            "Weight of 10 yd³",
            "Weight of 20 yd³",
            "Tons in 20 yd³",
          ],
          rows: [
            ["Rock and gravel", "999", "9,990 lb", "19,980 lb", "9.99"],
            ["Dirt and sand", "929", "9,290 lb", "18,580 lb", "9.29"],
            ["Concrete", "860", "8,600 lb", "17,200 lb", "8.60"],
            ["Composition roofing", "731", "7,310 lb", "14,620 lb", "7.31"],
            ["Gypsum board", "467", "4,670 lb", "9,340 lb", "4.67"],
            ["Mixed C&D remainder", "417", "4,170 lb", "8,340 lb", "4.17"],
            ["Clean dimensional lumber", "169", "1,690 lb", "3,380 lb", "1.69"],
          ],
          note: "Densities from EPA's standard volume-to-weight conversion factors [2]. One ton equals 2,000 lb. Real loads vary with moisture, particle size, and how tightly material is packed.",
        },
        {
          title: "Does a dumpster fill up on weight or on volume first?",
          columns: [
            "Container",
            "Debris filled to capacity",
            "Calculated weight",
            "Published allowance",
            "Limiting factor",
          ],
          rows: [
            [
              "10 yd³",
              "Concrete at 860 lb/yd³",
              "8,600 lb",
              "Under 5,000 lb",
              "Weight — load it partway only",
            ],
            [
              "20 yd³",
              "Composition roofing at 731 lb/yd³",
              "14,620 lb",
              "5,000–8,000 lb",
              "Weight — expect overage or a smaller box",
            ],
            [
              "20 yd³",
              "Gypsum board at 467 lb/yd³",
              "9,340 lb",
              "5,000–8,000 lb",
              "Weight — over the top of the range",
            ],
            [
              "20 yd³",
              "Mixed C&D at 417 lb/yd³",
              "8,340 lb",
              "5,000–8,000 lb",
              "Weight — just over the range",
            ],
            [
              "30 yd³",
              "Mixed C&D at 417 lb/yd³",
              "12,510 lb",
              "8,000–12,000 lb",
              "Weight — marginal",
            ],
            [
              "30 yd³",
              "Clean lumber at 169 lb/yd³",
              "5,070 lb",
              "8,000–12,000 lb",
              "Volume — fill it up",
            ],
            [
              "40 yd³",
              "Clean lumber at 169 lb/yd³",
              "6,760 lb",
              "12,000–16,000 lb",
              "Volume — fill it up",
            ],
          ],
          note: "Calculated weight = container yd³ × EPA density factor [2]; allowances are one hauler's published ranges [3]. Bulky light debris fills by volume; dense demolition rubble fills by weight.",
        },
      ],
      references: [
        {
          label: "Construction and Demolition Debris: Material-Specific Data",
          publisher: "U.S. Environmental Protection Agency",
          year: "2025",
          url: "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/construction-and-demolition-debris-material",
        },
        {
          label: "Standard Volume-to-Weight Conversion Factors",
          publisher:
            "U.S. Environmental Protection Agency, Office of Resource Conservation and Recovery",
          year: "2016",
          url: "https://www.epa.gov/sites/default/files/2016-04/documents/volume_to_weight_conversion_factors_memorandum_04192016_508fnl.pdf",
        },
        {
          label:
            "Roll-Off Dumpster Rental: published sizes, dimensions and debris weights",
          publisher: "Texas Disposal Systems",
          year: "2026",
          url: "https://www.texasdisposal.com/your-business/roll-off-dumpsters/",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        recommendedDumpster: "Recommended dumpster size",
      },
      inputLabels: {
        projectType: "Project type",
      },
      metaTitle: "Dumpster Size Calculator — Roll-Off Guide | BuildSiteCalc",
      metaDescription:
        "Choose the right roll-off dumpster size for remodels and cleanouts. Free preset and custom volume calculator.",
    },
    "project-waste-factor": {
      title: "Project Waste Factor Calculator",
      description:
        "Apply a waste or overage percentage to any base material quantity for ordering lumber, tile, flooring, or other supplies.",
      shortDescription: "Add waste percentage to material quantities.",
      formula:
        "Waste amount = base quantity × (waste% ÷ 100). Adjusted quantity = base + waste amount.",
      assumptions: [
        "Waste is a straight percentage on top of net quantity.",
        "Does not compound multiple waste stages — enter one combined factor.",
        "Typical flooring/tile waste is 10–15%.",
        "Complex cuts or diagonal layouts need higher percentages.",
        "Supplier minimum order quantities are not enforced here.",
      ],
      workedExample: {
        title: "100 ft² flooring, 12% waste",
        body: "Waste = 100 × 0.12 = 12 ft². Adjusted order = 112 ft².",
      },
      sections: [
        {
          heading: "What is a waste factor in construction?",
          paragraphs: [
            "A waste factor is the percentage you add to a net material quantity to cover what will never end up installed. It is also called overage, an allowance, or an ordering factor, and it exists because material gets cut, mis-cut, damaged in transit, culled for defects, and consumed as end pieces too short to use. The arithmetic is deliberately simple: waste amount = base quantity × waste percentage ÷ 100, and the quantity to order = base + waste amount. Take off 100 ft² of flooring with a 12% factor and you get 100 × 0.12 = 12 ft² of waste, for 112 ft² ordered. This calculator uses that add-on convention on a single combined percentage.",
            "A waste factor is not a price contingency, a shrinkage allowance, or cover for sloppy measuring. Contingency covers unknown scope and cost; shrinkage describes concrete curing or wood losing moisture; waste covers cutting loss and cull. Keeping them separate makes an estimate auditable, because the client sees net takeoff, overage, and reserve as three lines instead of one padded number. It also has a disposal consequence: material ordered and not installed becomes debris, and EPA estimates 600 million tons of construction and demolition debris were generated in the United States in 2018, with roughly 143.8 million tons landfilled [1]. Show the factor explicitly on the material list so nobody applies it twice.",
          ],
        },
        {
          heading: "How much waste should you add for tile and flooring?",
          paragraphs: [
            "Conventional planning allowances used across the flooring trades run about 10% for a straight-lay installation in a simple rectangular room, 12–15% when the pattern runs diagonally or the planks are wide, and higher again for herringbone, chevron, or a floor broken up by many closets and offsets. These are trade conventions rather than measured constants: the honest driver is the ratio of cut edges to field area. A long, narrow hallway wastes more per square foot than an open room of the same area, because almost every piece meets a wall. Always read the manufacturer's installation instructions, because some warranties specify a minimum overage and require blending cartons from different lots.",
            "Two adjustments matter more than the headline percentage. First, add attic stock separately if you want spare material for future repairs. That is inventory, not waste, and burying it inside a waste factor hides it. Second, respect the purchase increment. Tile ships by the carton and flooring by the box, so a 112 ft² requirement in 15.5 ft² cartons becomes 112 ÷ 15.5 = 7.23, rounded up to 8 cartons, or 124 ft² actually purchased. The effective overage on that order is 24%, not 12%. Compute the factor first, then round to the increment, and record the real delivered quantity on the bill of materials.",
          ],
        },
        {
          heading:
            "Is waste factor calculated on the net quantity or the ordered quantity?",
          paragraphs: [
            "This is the most common arithmetic error in material ordering, and it mirrors the markup-versus-margin confusion in pricing. An add-on factor is a percentage of the net quantity: order = net × (1 + w). A yield-based factor is a percentage of the delivered quantity that becomes scrap: order = net ÷ (1 − w). They are not the same number. If 10% of everything coming off the truck becomes scrap and you need 100 ft² installed, ordering 110 ft² leaves you short, because 10% of 110 is 11 and 110 − 11 = 99 ft² usable. The correct order is 100 ÷ 0.90 = 111.1 ft², which is an 11.1% add-on rather than 10%.",
            'This calculator uses the add-on convention, which is what suppliers, manufacturers, and takeoff sheets normally mean by "add 10% for waste." If your loss data is expressed as a share of the delivered load instead, convert it before entering: add-on = w ÷ (1 − w). A 10% delivered loss becomes an 11.1% add-on, 15% becomes 17.6%, and 20% becomes 25%. The gap widens fast at higher percentages, which is why the distinction matters most on expensive, high-cull material such as character-grade hardwood or natural stone. Enter one number, know which convention it follows, and write that convention on the material list.',
          ],
        },
        {
          heading: "How do you calculate a 10 percent waste factor?",
          paragraphs: [
            "Multiply the net quantity by 0.10 to get the waste amount, then add it: 10% of 240 linear feet is 24 lf, so order 264 lf. Equivalently, multiply the net by 1.10 in a single step. The percentage is unitless, so the same arithmetic works on square feet of drywall, board feet of lumber, linear feet of trim, pieces of tile, bags of thinset, or rolls of underlayment. Run the calculation on each material separately, because a single project rarely deserves one factor: 5% may be right for full sheets of subfloor while 15% is right for the mitered casing in the same house.",
            "A worked multi-line example ends in named numbers. Suppose the takeoff shows 640 ft² of drywall, 240 lf of baseboard, and 38 studs. Apply 8% to the drywall: 640 × 1.08 = 691.2 ft², which is 691.2 ÷ 32 = 21.6, rounded up to 22 sheets. Apply 15% to the baseboard: 240 × 1.15 = 276 lf. Apply 10% to the studs: 38 × 1.10 = 41.8, rounded to 42. Three different factors, one method, and every rounding step happens once, at the purchase increment. The bill of materials reads 22 sheets, 276 lf, and 42 studs — quantities a supplier can quote without interpretation.",
          ],
        },
        {
          heading: "Should you add waste twice if two calculators already include it?",
          paragraphs: [
            "No, and double-counting is easy to do without noticing. Many area and count calculators already apply an allowance internally, so feeding their output into a second waste calculator compounds the factors. Compounding is multiplicative, not additive: 100 units at 10% and then 5% is 100 × 1.10 × 1.05 = 115.5, not 115. At 10% and then 10% you reach 121 rather than 120. The error looks trivial on one line and stops looking trivial on a 4,000 ft² order, where the surplus also has to be hauled away — EPA's factors put clean dimensional lumber at 169 lb per cubic yard and gypsum board at 467 lb per cubic yard [2].",
            "If you genuinely have two independent loss stages, combine them deliberately. The exact combined add-on for stages a and b is (1 + a)(1 + b) − 1, so a 10% cutting loss plus a 5% cull is 1.10 × 1.05 − 1 = 15.5%, which you enter as a single 15.5%. That is honest compounding, entered once. What you must not do is let one stage hide inside an upstream tool and then add another here out of habit. Print the net takeoff, the factor, and the ordered quantity side by side, and have a second person confirm that the net column contains no allowance at all.",
          ],
        },
      ],
      howToMeasure:
        "Start with net quantity from a area or count calculator, then apply waste based on layout complexity and your trade experience.",
      commonMistakes: [
        "Adding waste twice (once in area calc and again here).",
        "Using 5% on diagonal tile (usually too low).",
        "Confusing waste with price contingency — they serve different purposes.",
      ],
      faqs: [
        {
          question: "What is a good waste factor for flooring?",
          answer:
            "**Around 10% is the conventional allowance for a straight-lay floor in a simple rectangular room, and 12–15% for diagonal or wide-plank layouts.** Raise it for herringbone patterns, many small rooms, or high-cull material. Check the manufacturer's installation instructions first, because some warranties specify a minimum overage and require blending cartons.",
        },
        {
          question: "How do you calculate a 10 percent waste factor?",
          answer:
            "**Multiply the net quantity by 1.10, or add 10% of the net to the net — both give the same answer.** For 240 linear feet, 240 × 0.10 = 24 lf of waste, so order 264 lf. The percentage is unitless, so the identical step works on square feet, board feet, pieces, or bags.",
        },
        {
          question: "Is a waste factor the same as contingency?",
          answer:
            "**No. A waste factor covers material that gets cut off, damaged, or culled; contingency covers unknown scope and cost.** Waste is applied to quantities before pricing, while contingency is applied to money after the subtotal. Blending them hides both, so show each as its own line on the estimate.",
        },
        {
          question: "Should I add waste before or after rounding to full cartons?",
          answer:
            "**Apply the waste factor first, then round up to the supplier's purchase increment.** A 112 ft² requirement in 15.5 ft² cartons is 112 ÷ 15.5 = 7.23, rounded to 8 cartons, or 124 ft² delivered. That makes the real overage 24%, so record the delivered quantity, not just the factor.",
        },
        {
          question: "Does a 10% waste factor mean 10% of what I order gets thrown away?",
          answer:
            "**Not in this calculator — the 10% is added on top of the net quantity, not taken out of the delivered load.** If 10% of delivered material truly becomes scrap, the correct add-on is 10 ÷ 90 = 11.1%. Convert first, then enter one combined percentage.",
        },
        {
          question: "Can I apply two waste factors to the same quantity?",
          answer:
            "**You can, but combine them into one number instead of stacking them, because percentages compound.** Ten percent and then five percent is 1.10 × 1.05 = 1.155, a 15.5% combined factor rather than 15%. Enter 15.5% once; this calculator does not compound stages for you.",
        },
        {
          question: "What waste factor should I use for framing lumber?",
          answer:
            "**Five to ten percent is the common allowance for cuts, blocking, and cull on typical wall framing, with more on complex roofs and stairs.** Judge it by the ratio of cut ends to full-length members. Buying lengths that divide cleanly into your stud and header sizes keeps the offcut pile small.",
        },
      ],
      dataTables: [
        {
          title: "How much do you order at each waste percentage?",
          columns: [
            "Waste factor",
            "Multiplier",
            "Waste on 100 units",
            "Order for 100 units",
            "Order for 1,000 units",
          ],
          rows: [
            ["5%", "1.050", "5.0", "105.0", "1,050"],
            ["7.5%", "1.075", "7.5", "107.5", "1,075"],
            ["10%", "1.100", "10.0", "110.0", "1,100"],
            ["12%", "1.120", "12.0", "112.0", "1,120"],
            ["15%", "1.150", "15.0", "115.0", "1,150"],
            ["20%", "1.200", "20.0", "120.0", "1,200"],
            ["25%", "1.250", "25.0", "125.0", "1,250"],
          ],
          note: "Add-on convention: order = base × (1 + waste ÷ 100). Units are whatever your takeoff uses — ft², linear feet, board feet, or pieces. Round to the supplier's purchase increment after this step, never before.",
        },
        {
          title: "How do you convert a delivered-loss percentage into an add-on factor?",
          columns: [
            "Loss as a share of delivered material",
            "Divisor (1 − loss)",
            "Equivalent add-on factor",
            "Order to install 100 units",
          ],
          rows: [
            ["5%", "0.95", "5.3%", "105.3"],
            ["8%", "0.92", "8.7%", "108.7"],
            ["10%", "0.90", "11.1%", "111.1"],
            ["12%", "0.88", "13.6%", "113.6"],
            ["15%", "0.85", "17.6%", "117.6"],
            ["20%", "0.80", "25.0%", "125.0"],
            ["25%", "0.75", "33.3%", "133.3"],
          ],
          note: "Add-on = loss ÷ (1 − loss). Enter the add-on column in this calculator, not the loss column. The two conventions diverge quickly above 15%.",
        },
        {
          title: "What does compounding two waste stages actually cost?",
          columns: [
            "Two stages",
            "Naive sum",
            "Order using the sum",
            "True compounded factor",
            "Order when compounded",
            "Extra units",
          ],
          rows: [
            ["5% then 5%", "10%", "110.00", "10.25%", "110.25", "0.25"],
            ["10% then 5%", "15%", "115.00", "15.50%", "115.50", "0.50"],
            ["12% then 5%", "17%", "117.00", "17.60%", "117.60", "0.60"],
            ["10% then 10%", "20%", "120.00", "21.00%", "121.00", "1.00"],
            ["15% then 10%", "25%", "125.00", "26.50%", "126.50", "1.50"],
            ["15% then 15%", "30%", "130.00", "32.25%", "132.25", "2.25"],
          ],
          note: "True combined factor = (1 + a)(1 + b) − 1, on a base of 100 units. Enter one combined percentage here; this calculator does not stack stages for you. A percentage of a percentage always exceeds the simple sum.",
        },
      ],
      references: [
        {
          label: "Construction and Demolition Debris: Material-Specific Data",
          publisher: "U.S. Environmental Protection Agency",
          year: "2025",
          url: "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/construction-and-demolition-debris-material",
        },
        {
          label: "Standard Volume-to-Weight Conversion Factors",
          publisher:
            "U.S. Environmental Protection Agency, Office of Resource Conservation and Recovery",
          year: "2016",
          url: "https://www.epa.gov/sites/default/files/2016-04/documents/volume_to_weight_conversion_factors_memorandum_04192016_508fnl.pdf",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        adjustedQuantity: "Quantity to order",
      },
      inputLabels: {},
      metaTitle: "Waste Factor Calculator — Material Overage | BuildSiteCalc",
      metaDescription:
        "Apply a waste percentage to any material quantity. Free overage calculator for flooring, tile, lumber, and more.",
    },
    "board-foot": {
      title: "Board Foot Calculator",
      description:
        "Calculate board feet of lumber from nominal thickness, width, and length. Standard formula for hardwood and rough lumber ordering.",
      shortDescription: "Board feet for lumber ordering.",
      formula:
        "Board feet per piece = (thickness in × width in × length in) ÷ 144. Total = board feet per piece × quantity.",
      assumptions: [
        "Thickness and width are nominal inches (traditional board-foot convention).",
        "Length is measured along the grain in inches unless a length unit is selected.",
        "Board foot is a volume measure — 1 BF = 144 in³ of lumber.",
        "Does not account for planing loss or defect culling.",
        "Hardwood is often sold by the board foot; softwood dimensional lumber by the piece.",
      ],
      workedExample: {
        title: "1×6 × 8 ft, 10 pieces",
        body: "Thickness 1 in, width 6 in, length 96 in. BF per piece = (1×6×96)÷144 = 4 BF. Ten pieces = 40 board feet.",
      },
      sections: [
        {
          heading: "How do you calculate board feet of lumber?",
          paragraphs: [
            "A board foot is a volume unit equal to 144 cubic inches, so the arithmetic is thickness in inches × width in inches × length in inches ÷ 144. A board 1 in thick, 12 in wide, and 12 in long is exactly one board foot. If the length is easier in feet, the equivalent form is thickness (in) × width (in) × length (ft) ÷ 12. The American Softwood Lumber Standard states the same rule in trade form: the number of board feet is obtained by multiplying nominal thickness in inches by nominal width in feet by length in feet [1]. Multiply the per-piece figure by the number of identical pieces, then total each size group separately. Never mix nominal and surfaced dimensions inside one tally.",
            "Work size group by size group. A cut list of 10 pieces of 1×6 at 8 ft plus 6 pieces of 2×8 at 10 ft is two calculations, not one average: 40 BF plus 80 BF equals 120 board feet. Round only at the end and keep at least two decimals while you work, because 0.333 BF per lineal foot compounds quickly across a large order. Add a defect and planing allowance on top of the net tally — 15% to 30% is common for random-width, random-length rough hardwood, and more when you need long clear rips. This calculator returns net geometric volume; it does not deduct planing loss, cull defect, or saw kerf.",
          ],
        },
        {
          heading: "What is the difference between nominal and actual lumber dimensions?",
          paragraphs: [
            "Nominal size is the trade name — 1×6, 2×4, 2×10 — and actual (dressed) size is what you measure after the mill surfaces the piece. Under the American Softwood Lumber Standard, a nominal 1-inch board is dressed to 3/4 in (19 mm) dry, and nominal 2-inch dimension lumber is dressed to 1-1/2 in (38 mm). Widths shrink more: nominal 4 in becomes 3-1/2 in (89 mm), 6 in becomes 5-1/2 in (140 mm), 8 in becomes 7-1/4 in (184 mm), and 12 in becomes 11-1/4 in (286 mm) [1]. The standard is explicit that no inference should be drawn that nominal sizes are dressed sizes [1].",
            "Board measure uses nominal dimensions, which is why a 2×4 that actually measures 1-1/2 × 3-1/2 in is still tallied as 2 × 4. Using actual dimensions would understate that 2×4 by about 34%: 1.5 × 3.5 = 5.25 in² of cross section against 8 in² nominal. Cubic measure is the exception — the standard specifies dressed sizes when lumber is measured in cubic meters [1]. Keep two habits separate: order and price by nominal board measure, and lay out joinery, rip widths, and clearances from the actual dressed dimensions you measure with a tape.",
          ],
        },
        {
          heading: "What does 4/4, 6/4, and 8/4 mean in lumber?",
          paragraphs: [
            "Quarter notation is hardwood shorthand for rough thickness in quarter-inches before surfacing. 4/4 (four-quarter) is 1 in, 5/4 is 1-1/4 in, 6/4 is 1-1/2 in, 8/4 is 2 in, 10/4 is 2-1/2 in, and 12/4 is 3 in. The numerator counts quarter-inches, so 8/4 = 8 × 1/4 = 2 in. Board-foot tallies use that quarter thickness, not the surfaced thickness: 20 square feet of 8/4 walnut is 40 board feet, because 2 in of nominal thickness doubles the one-inch base. That is also why 4/4 is the easy case — one square foot of surface equals exactly one board foot.",
            "Surfaced-two-sides (S2S) hardwood arrives thinner than its quarter call. 4/4 is commonly supplied near 13/16 in and 8/4 near 1-3/4 in, though the exact surfaced thickness varies by mill and by the grading rules in force, so confirm it before planning a 3/4-in finished part. You still buy and pay for the full 4/4 or 8/4 thickness. If you need a finished 1-in component, order 5/4 or 6/4 and build the extra board feet into the budget. Enter the quarter thickness in this calculator — 1 for 4/4, 1.5 for 6/4, 2 for 8/4 — with the width and length you actually have.",
          ],
        },
        {
          heading: "How many board feet are in a 1x6 board 8 feet long?",
          paragraphs: [
            "One 1×6 at 8 ft is 4 board feet. Convert the length to inches (8 ft = 96 in), then compute (1 × 6 × 96) ÷ 144 = 576 ÷ 144 = 4.00 BF. Ten identical pieces are 40 board feet — the named result for a typical shelving or fencing order. The shortcut form gives the same answer: 1 × 6 × 8 ÷ 12 = 4. Because a 1×6 delivers exactly 0.5 BF per lineal foot, a mixed pile of 1×6 tallies fast: total lineal feet ÷ 2. Eighty lineal feet of 1×6 is 40 board feet no matter how the lengths are cut.",
            "Now price it. At a hypothetical $4.50 per board foot for kiln-dried hardwood, 40 BF is $180 before tax; at $7.25 per board foot it is $290. Those are arithmetic scenarios, not quotes. Add the waste allowance before ordering rather than after: 40 BF plus 20% for defect and planing is 48 BF, which is twelve 1×6 × 8 ft pieces instead of ten. If the supplier sells random-width rough stock, ask whether the tally is taken before or after surfacing, and whether short lengths are counted at full or reduced footage.",
          ],
        },
        {
          heading: "Is hardwood priced by the board foot or the linear foot?",
          paragraphs: [
            "Hardwood is normally priced by the board foot, softwood dimensional lumber by the piece or the linear foot, and sheet goods by the sheet. Those units are not interchangeable. A linear (lineal) foot counts only length; a board foot counts volume. One linear foot of 1×4 is 0.333 BF, one linear foot of 2×6 is 1.00 BF, and one linear foot of 2×10 is 1.667 BF — three very different amounts of wood for the same single foot of length. When a quote reads $3.20 per foot, find out whether that foot is lineal or board measure before you compare suppliers.",
            "Two more conversions come up constantly. One cubic foot of solid lumber contains 12 board feet (1,728 in³ ÷ 144), so a 500-BF order is about 41.7 ft³ of wood. Log and standing-timber conversions are a different animal: USDA Forest Service planning documents have used roughly 6.0 board feet per cubic foot for log scaling, because saw kerf and slabbing waste are built into that ratio [2]. Use 12 BF per ft³ for finished lumber volume and never mix the two. Plywood, MDF, and other panels stay on a per-sheet basis; this calculator is for solid lumber.",
          ],
        },
      ],
      howToMeasure:
        "Use nominal size from the lumber tag (1×6, 2×8, etc.). Measure length in feet or inches consistently. Count pieces of each size separately.",
      commonMistakes: [
        "Using actual milled dimensions instead of nominal for board-foot pricing.",
        "Forgetting to multiply by quantity of identical pieces.",
        "Mixing up linear feet with board feet.",
      ],
      faqs: [
        {
          question: "What is a board foot?",
          answer:
            "**A board foot is 144 cubic inches of lumber — the volume of a board 1 inch thick, 12 inches wide, and 12 inches long.** The USDA Forest Service defines it as the amount of wood in an unfinished board 1 inch thick and 12 inches square. It is a volume unit, so thickness, width, and length all matter.",
        },
        {
          question: "How do you calculate board feet?",
          answer:
            "**Multiply thickness in inches × width in inches × length in inches, then divide by 144.** If the length is in feet, divide by 12 instead. Multiply the per-piece result by the quantity of identical pieces, and total each nominal size separately rather than averaging mixed sizes together.",
        },
        {
          question: "How many board feet are in a 2x4x8?",
          answer:
            "**One 2×4 that is 8 feet long contains 5.33 board feet.** The calculation is (2 × 4 × 96) ÷ 144 = 768 ÷ 144 = 5.33 BF. A 2×4 yields 0.667 board feet per lineal foot, so a bundle of twenty eight-footers works out to about 107 board feet.",
        },
        {
          question: "Do you use nominal or actual dimensions for board feet?",
          answer:
            "**Use nominal dimensions — board measure is defined on nominal thickness and width, not on the dressed size.** The American Softwood Lumber Standard computes board feet from nominal thickness in inches times nominal width in feet times length in feet. Using actual dressed sizes would understate a 2×4 by about 34%.",
        },
        {
          question: "What does 4/4 mean in lumber?",
          answer:
            "**4/4 means one inch of nominal thickness — four quarter-inches — before the board is surfaced.** By the same logic 6/4 is 1-1/2 inches and 8/4 is 2 inches. Surfaced 4/4 hardwood often measures about 13/16 inch, but you still buy and pay for the full 4/4 thickness.",
        },
        {
          question: "What is the difference between a board foot and a linear foot?",
          answer:
            "**A board foot measures volume; a linear foot measures only length.** One linear foot of 1×4 is 0.333 board feet, while one linear foot of 2×10 is 1.667 board feet. Always confirm whether a quoted price is per board foot or per lineal foot before comparing suppliers.",
        },
        {
          question: "How many board feet are in a cubic foot?",
          answer:
            "**A cubic foot of solid lumber holds 12 board feet, because 1,728 cubic inches divided by 144 equals 12.** Log-scaling ratios are different: Forest Service planning documents have used about 6.0 board feet per cubic foot for standing timber, since kerf and slabbing losses are built in.",
        },
      ],
      dataTables: [
        {
          title: "How many board feet are in common lumber sizes?",
          columns: [
            "Nominal size",
            "Board feet per lineal foot",
            "8 ft piece",
            "10 ft piece",
            "12 ft piece",
          ],
          rows: [
            ["1×4", "0.333", "2.67 BF", "3.33 BF", "4.00 BF"],
            ["1×6", "0.500", "4.00 BF", "5.00 BF", "6.00 BF"],
            ["1×8", "0.667", "5.33 BF", "6.67 BF", "8.00 BF"],
            ["2×4", "0.667", "5.33 BF", "6.67 BF", "8.00 BF"],
            ["2×6", "1.000", "8.00 BF", "10.00 BF", "12.00 BF"],
            ["2×8", "1.333", "10.67 BF", "13.33 BF", "16.00 BF"],
            ["2×10", "1.667", "13.33 BF", "16.67 BF", "20.00 BF"],
          ],
          note: "Board measure uses nominal thickness and width. Multiply by quantity and add a separate waste allowance.",
        },
        {
          title: "What are the actual dimensions of nominal lumber sizes?",
          columns: [
            "Nominal size",
            "Minimum dressed dry thickness",
            "Minimum dressed dry width",
            "Cross section used for board feet",
          ],
          rows: [
            ["1×4", "3/4 in (19 mm)", "3-1/2 in (89 mm)", "1 × 4 nominal"],
            ["1×6", "3/4 in (19 mm)", "5-1/2 in (140 mm)", "1 × 6 nominal"],
            ["1×8", "3/4 in (19 mm)", "7-1/4 in (184 mm)", "1 × 8 nominal"],
            ["1×12", "3/4 in (19 mm)", "11-1/4 in (286 mm)", "1 × 12 nominal"],
            ["2×4", "1-1/2 in (38 mm)", "3-1/2 in (89 mm)", "2 × 4 nominal"],
            ["2×6", "1-1/2 in (38 mm)", "5-1/2 in (140 mm)", "2 × 6 nominal"],
            ["2×10", "1-1/2 in (38 mm)", "9-1/4 in (235 mm)", "2 × 10 nominal"],
          ],
          note: "Dressed sizes from the American Softwood Lumber Standard. The standard states that nominal sizes are not dressed sizes.",
        },
        {
          title: "What do hardwood quarter thicknesses mean in board feet?",
          columns: [
            "Quarter call",
            "Nominal thickness",
            "Typical surfaced thickness (varies by mill)",
            "Board feet per ft² of surface",
          ],
          rows: [
            ["4/4", "1 in", "about 13/16 in", "1.00"],
            ["5/4", "1-1/4 in", "about 1-1/16 in", "1.25"],
            ["6/4", "1-1/2 in", "about 1-5/16 in", "1.50"],
            ["8/4", "2 in", "about 1-3/4 in", "2.00"],
            ["10/4", "2-1/2 in", "about 2-1/4 in", "2.50"],
            ["12/4", "3 in", "about 2-3/4 in", "3.00"],
          ],
          note: "Tally and pricing use the quarter thickness, not the surfaced thickness. Confirm surfaced dimensions with your supplier.",
        },
      ],
      references: [
        {
          label:
            "Voluntary Product Standard PS 20-15, American Softwood Lumber Standard (2.2 board measure, 3.4.4 nominal vs dressed, dressed size tables)",
          publisher:
            "U.S. Department of Commerce / National Institute of Standards and Technology",
          year: "2015",
          url: "https://www.nist.gov/system/files/documents/2017/06/13/doc_ps_20-15_american_softwood_lumber_standard-final-2-25-15.pdf",
        },
        {
          label:
            "Land and Resource Management Plan, Appendix J Glossary (board foot definition and board-foot to cubic-foot conversion)",
          publisher: "USDA Forest Service, Wayne National Forest",
          year: "2006",
          url: "https://www.fs.usda.gov/sites/nfs/files/r09/wayne/publication/fsm9_005688.pdf",
        },
        {
          label:
            "Wood Handbook: Wood as an Engineering Material (General Technical Report FPL-GTR-282)",
          publisher: "USDA Forest Service, Forest Products Laboratory",
          year: "2021",
          url: "https://www.fs.usda.gov/research/treesearch/62200",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        boardFeet: "Total board feet",
      },
      inputLabels: {},
      metaTitle: "Board Foot Calculator — Lumber Volume | BuildSiteCalc",
      metaDescription:
        "Calculate board feet from lumber dimensions. Free calculator for hardwood and rough lumber ordering.",
    },
    "square-footage": {
      title: "Square Footage Calculator",
      description:
        "Add up square footage for multiple rooms or areas. Supports optional waste factor for flooring and material ordering.",
      shortDescription: "Total square footage for multiple rooms.",
      formula:
        "Room area = length × width (each room). Total = sum of rooms. With waste: total × (1 + waste%).",
      assumptions: [
        "Each room is rectangular.",
        "Waste defaults to 0% unless ordering materials.",
        "Results show ft² and m².",
        "Irregular rooms should be split into rectangles.",
        "Ceiling and wall areas are not included unless entered as floor-like rectangles.",
      ],
      workedExample: {
        title: "Two rooms: 12×10 and 10×10",
        body: "Room 1 = 120 ft². Room 2 = 100 ft². Total = 220 ft². With 10% waste = 242 ft².",
      },
      sections: [
        {
          heading: "How do you calculate square footage?",
          paragraphs: [
            "For a rectangle, multiply length by width in the same unit. A room 12 ft 6 in by 10 ft is 12.5 × 10 = 125 ft², not 12.6 × 10; six inches is 0.5 ft, not 0.6 ft. Add each nonoverlapping area once. The calculator also converts the total to square meters using the exact NIST factor: 1 ft² = 0.09290304 m² [1].",
            "Square footage is two-dimensional area. Linear feet measure length, and cubic feet measure volume. Flooring, roofing, paint, heating loads, rentable area, appraisals, and permit plans can all use different surfaces or definitions, so a mathematically correct floor area is not automatically the right quantity for another purpose.",
          ],
        },
        {
          heading: "How do you measure an L-shaped or irregular room?",
          paragraphs: [
            "Divide an L shape into two rectangles along an inside corner, measure each, and add them. For a triangle use base × perpendicular height ÷ 2; for a circle use π × radius². Avoid creating overlapping shapes. A quick check is to calculate the large bounding rectangle and subtract the missing corner; both methods should agree when measurements are correct.",
            "Measure at floor level from consistent finished surfaces for a material takeoff. Sketch doors, alcoves, cabinets, islands, fireplaces, stairs, and closets, then decide which receive the same finish. For curved walls, split the area into manageable shapes or use plan/CAD dimensions. Record dimensions to at least the nearest inch, convert once, and round the final area rather than every intermediate rectangle.",
          ],
        },
        {
          heading: "How much extra square footage should you add for flooring?",
          paragraphs: [
            "A simple straight-laid floor may use 5–10% planning waste; diagonal layouts, patterned tile, herringbone, many small rooms, or selective boards can require 10–20% or a manufacturer-specific amount. Waste covers cuts, breakage, defects, and future repairs. It should be applied to the net installed area once, then the purchase must be rounded to full cartons using the coverage printed on the package.",
            "Example: 520 ft² × 1.10 = 572 ft². If each carton covers 23.5 ft², 572 ÷ 23.5 = 24.34, so buy 25 cartons providing 587.5 ft². Do not add 10% in this calculator and another 10% in a flooring calculator. Also confirm whether the seller accepts unopened returns and whether dye-lot matching justifies keeping spare material.",
          ],
        },
        {
          heading: "Is room square footage the same as appraisal square footage?",
          paragraphs: [
            "No. This tool totals user-entered rectangles for planning materials. ANSI Z765-2021 is a formal method for calculating and reporting square footage of detached and attached single-family houses; Home Innovation Research Labs describes its purpose as uniform residential reporting [2]. Fannie Mae adopted that standard for relevant appraisals and distinguishes above-grade and below-grade finished areas [3].",
            "An appraiser may use exterior dimensions, ceiling-height rules, level classifications, and separate reporting that differ from an interior flooring takeoff. Condominiums, local tax records, builders, listing services, and permits may follow other definitions. Do not use this calculator to certify gross living area, property value, occupancy, egress, or code compliance.",
          ],
        },
        {
          heading: "What is the square footage of an irregular three-room project?",
          paragraphs: [
            "Room A is 15 ft × 12 ft = 180 ft². Room B is an L shape made from 11 ft × 10 ft plus 5 ft × 4 ft: 110 + 20 = 130 ft². Room C is 9 ft 6 in × 8 ft; convert 9 ft 6 in to 9.5 ft, so area is 76 ft². Add a 6 ft × 3 ft closet = 18 ft². The named net result is 180 + 130 + 76 + 18 = 404 ft². With 12% pattern waste, order for 452.48 ft² before carton rounding. In metric, 404 ft² is about 37.53 m².",
            "At 22.4 ft² per carton, 452.48 ÷ 22.4 = 20.2 cartons. Round up to 21, supplying 470.4 ft². Effective overage becomes 66.4 ft², or 16.4% above net, because carton rounding follows the 12% allowance. Record net area and purchased coverage so the difference is explainable.",
            "Wall area is separate. A 12 × 10 ft room with an 8 ft ceiling has a 44 ft perimeter and 352 ft² of gross wall before openings; its ceiling is 120 ft². Adding those faces to floor area creates a meaningless ordering total. Identify material and surface first.",
            "Exterior footprint also differs from interior room totals because walls and shafts occupy space. Use interior measurements for finish takeoffs; use the applicable standard and a qualified professional for appraisal reporting. Preserve the sketch, date, instrument, rounding convention, and inclusions so another person can reproduce the result.",
            "Check each room independently and compare the sum with a rough overall bounding rectangle. A large unexplained difference can reveal a missing closet, duplicated hallway, transposed dimension, or inches entered as decimal feet. Recheck the sketch before applying waste because a percentage allowance magnifies every measurement error. Keep the original measurements beside the rounded ordering total for later review.",
          ],
        },
      ],
      howToMeasure:
        "Measure each room at the longest points on the floor. For open floor plans, divide visually at logical boundaries or use plan dimensions.",
      commonMistakes: [
        "Double-counting overlapping areas in open plans.",
        "Measuring wall-to-wall including unusable niches inconsistently.",
        "Forgetting closets that will receive the same flooring.",
      ],
      faqs: [
        {
          question: "How do I calculate square footage for an L-shaped room?",
          answer:
            "**Divide the L-shaped room into two nonoverlapping rectangles, calculate each area, and add the results.** You can verify the number by calculating the large outer rectangle and subtracting the missing corner. Both methods should agree when the measurements and shape boundaries are correct.",
        },
        {
          question: "How do I convert square meters to square feet?",
          answer:
            "**Multiply square meters by approximately 10.7639 to convert them to square feet.** For example, 20 m² × 10.7639 = about 215.28 ft². To convert the other direction, multiply square feet by the exact NIST factor 0.09290304; the calculator displays both units from the same dimensions.",
        },
        {
          question: "How much extra square footage should I add for flooring waste?",
          answer:
            "**Add about 5–10% for a straightforward layout and 10–20% or more for diagonal, herringbone, or complex patterns.** Product instructions and a room-specific cut plan take priority over general ranges. Apply the allowance once to net area, then round up to complete cartons using the coverage printed on the exact product.",
        },
        {
          question: "Is flooring square footage the same as appraisal square footage?",
          answer:
            "**No—an interior flooring takeoff is not a certified appraisal measurement.** ANSI Z765-2021 uses formal rules for calculating and reporting residential square footage, including distinctions that may not match room-by-room material measurements. Use this calculator for planning surfaces, and use the applicable standard and a qualified professional for appraisal reporting.",
        },
        {
          question: "How many square feet is a 12x12 room?",
          answer:
            "**A 12-by-12-foot room contains 144 square feet.** Multiply 12 ft × 12 ft to get the net rectangular floor area. With a 10% material allowance, plan for 158.4 ft² before rounding to full cartons, boards, tiles, or other purchasable units.",
        },
        {
          question: "How do I convert feet and inches to decimal feet for area?",
          answer:
            "**Divide the inches by 12 and add that decimal to the whole feet.** For example, 12 ft 6 in becomes 12 + 6 ÷ 12 = 12.5 ft, not 12.6 ft. Multiply the converted decimal dimensions, retain precision through the calculation, and round the final area rather than each dimension.",
        },
        {
          question: "Should closets and hallways be included in square footage?",
          answer:
            "**Include every closet and hallway that will receive the same material, and exclude surfaces that will not.** Sketch each space so it is counted once and decide whether flooring runs beneath cabinets, islands, or appliances. Formal living-area reporting follows different rules, so do not transfer a material inclusion decision into an appraisal calculation.",
        },
      ],
      dataTables: [
        {
          title: "How do feet and inches convert for square footage?",
          columns: ["Dimension", "Decimal feet", "Example multiplied by 10 ft", "Area"],
          rows: [
            ["6 in", "0.5 ft", "0.5 × 10", "5 ft²"],
            ["9 ft 3 in", "9.25 ft", "9.25 × 10", "92.5 ft²"],
            ["10 ft 6 in", "10.5 ft", "10.5 × 10", "105 ft²"],
            ["12 ft 9 in", "12.75 ft", "12.75 × 10", "127.5 ft²"],
          ],
          note: "Divide inches by 12, then add the whole feet. Do not write 6 inches as 0.6 feet.",
        },
        {
          title: "How many square feet are common room sizes?",
          columns: ["Room dimensions", "Square feet", "Square meters", "With 10% waste"],
          rows: [
            ["8 × 10 ft", "80", "7.43", "88 ft²"],
            ["10 × 12 ft", "120", "11.15", "132 ft²"],
            ["12 × 15 ft", "180", "16.72", "198 ft²"],
            ["15 × 20 ft", "300", "27.87", "330 ft²"],
            ["20 × 25 ft", "500", "46.45", "550 ft²"],
          ],
          note: "Metric values use 0.09290304 m² per ft² and are rounded for display.",
        },
        {
          title: "What waste factor should you use for flooring?",
          columns: [
            "Layout",
            "Planning range",
            "Main source of waste",
            "Before ordering",
          ],
          rows: [
            ["Straight plank, simple room", "5–10%", "End cuts", "Check board defects"],
            ["Tile grid", "10%", "Edge cuts/breakage", "Check tile caliber"],
            [
              "Diagonal plank/tile",
              "10–15%",
              "Angled perimeter cuts",
              "Dry-layout pattern",
            ],
            [
              "Herringbone/complex",
              "15–20%+",
              "Pattern matching",
              "Use manufacturer plan",
            ],
          ],
          note: "General planning ranges only. Product instructions and a room-specific cut plan take priority.",
        },
      ],
      references: [
        {
          label: "NIST Guide to the SI: Area Conversion Factors",
          publisher: "National Institute of Standards and Technology",
          year: "2026",
          url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9",
        },
        {
          label: "Selling Guide Announcement SEL-2021-11",
          publisher: "Fannie Mae",
          year: "2021",
          url: "https://singlefamily.fanniemae.com/media/30296/display",
        },
      ],
      lastUpdated: "2026-07-29",
      resultLabels: {
        totalAreaFt2: "Combined area (ft²)",
      },
      inputLabels: {
        rooms: "Room dimensions",
      },
      metaTitle: "Square Footage Calculator — Multi-Room Area | BuildSiteCalc",
      metaDescription:
        "Calculate total square footage for multiple rooms. Free area calculator with US and metric output.",
    },
    "room-volume": {
      title: "Room Volume Calculator",
      description:
        "Calculate cubic feet and cubic meters of a room from length, width, and height. Useful for HVAC, ventilation, and air purifier sizing.",
      shortDescription: "Room volume in cubic feet and meters.",
      formula: "Volume = length × width × height (converted to consistent units).",
      assumptions: [
        "Room is a rectangular box.",
        "Height is floor to ceiling.",
        "Does not deduct furniture volume.",
        "Sloped ceilings need average height or segmented calculation.",
        "Open doorways to other spaces change effective volume for HVAC.",
      ],
      workedExample: {
        title: "12 × 10 × 8 ft room",
        body: "Volume = 12 × 10 × 8 = 960 ft³ ≈ 27.2 m³.",
      },
      sections: [
        {
          heading: "How do you calculate the volume of a room in cubic feet?",
          paragraphs: [
            "Multiply length × width × height with every dimension in the same unit. A 12 ft × 10 ft room with an 8 ft ceiling holds 12 × 10 × 8 = 960 cubic feet. Measure floor length and width wall to wall at the baseboard, and take ceiling height from finished floor to finished ceiling — not to the top of the drywall or the underside of a joist. Convert inches to decimal feet first: 8 ft 6 in is 8.5 ft, not 8.6. Cubic feet divided by 27 gives cubic yards and multiplied by 0.0283168 gives cubic meters, so that same 960 ft³ is 35.6 yd³ or 27.2 m³.",
            "Volume answers different questions than floor area. Area drives paint coverage, flooring quantity, and most published air-conditioner sizing charts; volume drives air changes per hour, duct and fan sizing, dust collection, radon mitigation, and the quantity of conditioned air a space actually contains. Two rooms with the same 300 ft² footprint hold 2,400 ft³ under an 8-foot ceiling and 3,000 ft³ under a 10-foot ceiling — a 25% difference the floor plan never shows. This calculator treats the room as a rectangular box and does not deduct furniture, cabinets, or soffits, which is the correct convention for air-volume work.",
          ],
        },
        {
          heading: "How do you convert cubic feet to cubic meters?",
          paragraphs: [
            "Multiply cubic feet by 0.0283168 to get cubic meters, or divide by 35.3147. The factor is not arbitrary: one inch is exactly 2.54 cm, so one foot is exactly 0.3048 m and one cubic foot is 0.3048³ = 0.028316846592 m³ exactly. Going the other way, 1 m³ = 35.3147 ft³. A 960 ft³ bedroom is 27.2 m³; a 2,700 ft³ living room is 76.5 m³. For cubic yards divide cubic feet by 27, and for US gallons multiply by 7.48052 — that 960 ft³ bedroom holds roughly 7,181 gallons of air.",
            "Metric room work usually runs the other direction: measure in metres and multiply. A 3.6 m × 3.0 m room with a 2.4 m ceiling is 25.9 m³, which converts to about 916 ft³. Watch the classic unit trap, because cubing amplifies small linear errors: a 1% error in each of three dimensions compounds to roughly 3% in volume, and mixing feet with metres in a single multiplication produces an answer wrong by a factor of about 35. This tool converts every field to one internal unit before multiplying, so switching the unit selector rescales your values instead of reinterpreting them.",
          ],
        },
        {
          heading: "How do you calculate air changes per hour from room volume?",
          paragraphs: [
            "Air changes per hour (ACH) equals airflow in cubic feet per minute × 60 ÷ room volume in cubic feet. A 300 cfm supply into a 2,400 ft³ room delivers 300 × 60 ÷ 2,400 = 7.5 ACH. Run it backwards to size equipment: to reach 5 ACH in a 2,700 ft³ room you need 2,700 × 5 ÷ 60 = 225 cfm of delivered clean air. This is why volume, not floor area, is the honest denominator for ventilation and filtration questions, and why a vaulted room with the same footprint as a flat-ceiling room needs more airflow to hit the same air change rate.",
            "EPA's portable air cleaner sizing chart rests on the same relationship. It pairs 100 ft² with a minimum clean air delivery rate of 65 cfm, 300 ft² with 195 cfm, and 600 ft² with 390 cfm, and states that the CADRs are calculated based on an 8-foot ceiling [1]. Convert each pair to a volume and every row lands at about 4.9 air changes per hour: 65 × 60 ÷ 800 = 4.88. EPA adds that with ceilings above 8 feet you should consider a unit sized for a larger area [1]. Once you know your real volume you can check any manufacturer's room-size claim in one line of arithmetic.",
          ],
        },
        {
          heading: "What size air purifier do I need for a 15 by 20 foot room?",
          paragraphs: [
            "Start with the geometry. A 15 ft × 20 ft room is 300 ft² of floor; with a 9 ft ceiling its volume is 15 × 20 × 9 = 2,700 ft³, or 76.5 m³. EPA's chart puts 300 ft² at a minimum CADR of 195 cfm, but that figure assumes an 8-foot ceiling [1]. Scale it by the height ratio: 195 × 9 ÷ 8 = 219 cfm. Rounding up, a unit rated at 220 to 250 cfm smoke CADR is the named target for this room, which works out to 219 × 60 ÷ 2,700 = 4.9 air changes per hour — the same rate EPA's own table implies.",
            "If you want a higher target, solve for it directly: 2,700 ft³ × 8 ACH ÷ 60 = 360 cfm. Two smaller units can share the load, and EPA notes that where no single available product will serve the area you could consider using multiple air cleaners [1]. For an open plan, measure the whole connected space rather than the nominal room; a 2,700 ft³ living room that opens into an 1,800 ft³ dining area is a 4,500 ft³ problem. Remember that CADR is typically measured at the air cleaner's highest speed, so a quiet setting delivers fewer air changes than the label suggests [1].",
          ],
        },
        {
          heading:
            "How do you find the volume of a room with a sloped or vaulted ceiling?",
          paragraphs: [
            "Split the space into simple solids. For a shed-slope ceiling, average the low and high wall heights: a 14 ft × 16 ft room sloping from 8 ft to 12 ft has an average height of 10 ft and a volume of 14 × 16 × 10 = 2,240 ft³. For a symmetric cathedral ceiling, compute the box up to the wall plate and add the triangular prism above it, which is base area × (ridge height − plate height) ÷ 2. A 14 ft × 16 ft room with 8 ft walls and a 13 ft ridge is 1,792 ft³ plus 14 × 16 × 5 ÷ 2 = 560 ft³, for 2,352 ft³ total.",
            "Tray ceilings, dormers, bay windows, and stairwell openings are the same exercise: measure each block, sum the pieces, and note which ones you counted so nothing appears twice. Enter the average or total-equivalent height in this calculator rather than the peak, because peak height would overstate a vaulted room by a third or more. Closets and alcoves that stay open to the room count; sealed soffits and dropped bulkheads do not. For HVAC and ventilation planning, include stairwells and open lofts in the connected zone, since air moves freely between them.",
          ],
        },
      ],
      howToMeasure:
        "Measure length and width on the floor and ceiling height at the center. For vaulted ceilings, measure average height or divide into sections.",
      commonMistakes: [
        "Using wall height minus baseboard inconsistently.",
        "Treating whole-house volume as one room without zoning.",
        "Confusing cubic feet with square feet.",
      ],
      faqs: [
        {
          question: "How do you calculate the volume of a room?",
          answer:
            "**Multiply length × width × ceiling height with all three dimensions in the same unit.** A 12 by 10 foot room with an 8-foot ceiling holds 960 cubic feet. Convert inches to decimal feet first — 8 ft 6 in is 8.5 ft — and measure ceiling height from finished floor to finished ceiling.",
        },
        {
          question: "How many cubic feet is a 12x12 room?",
          answer:
            "**A 12 by 12 foot room holds 1,152 cubic feet with an 8-foot ceiling and 1,440 cubic feet with a 10-foot ceiling.** The floor area is 144 ft² either way, which is exactly why volume and area answer different questions. Multiply 144 ft² by your measured ceiling height.",
        },
        {
          question: "How do you convert cubic feet to cubic meters?",
          answer:
            "**Multiply cubic feet by 0.0283168, or divide by 35.3147.** The factor is exact because one foot is exactly 0.3048 metre, making one cubic foot 0.028316846592 m³. A 960 ft³ bedroom is 27.2 m³, and a 2,700 ft³ living room is 76.5 m³.",
        },
        {
          question: "What is air changes per hour and how do I calculate it?",
          answer:
            "**ACH equals airflow in cfm × 60 divided by room volume in cubic feet.** A 300 cfm supply into a 2,400 ft³ room gives 7.5 air changes per hour. To design toward a target instead, multiply the room volume by the target ACH and divide by 60 to get the cfm you need.",
        },
        {
          question: "What CADR do I need for a 300 square foot room?",
          answer:
            "**EPA lists a minimum CADR of 195 cfm for 300 square feet, calculated for an 8-foot ceiling.** With a 9-foot ceiling, scale that to about 219 cfm. EPA advises choosing an air cleaner sized for a larger area whenever ceilings are above 8 feet.",
        },
        {
          question: "Does ceiling height change the room volume calculation?",
          answer:
            "**Yes — height is a direct multiplier, so a 10-foot ceiling holds 25% more air than an 8-foot ceiling over the same floor.** A 300 ft² room is 2,400 ft³ at 8 feet and 3,000 ft³ at 10 feet. Sizing charts published in square feet usually assume 8 feet.",
        },
        {
          question: "How do I measure volume in an open floor plan?",
          answer:
            "**Measure the entire connected space rather than the nominal room, then add the blocks together.** A 2,700 ft³ living room open to an 1,800 ft³ dining area behaves as one 4,500 ft³ zone. Leave out sealed soffits and closed closets, but include open stairwells and lofts.",
        },
      ],
      dataTables: [
        {
          title: "What is the volume of common room sizes?",
          columns: [
            "Room dimensions",
            "Floor area",
            "Volume at 8 ft ceiling",
            "Volume at 9 ft ceiling",
            "Volume at 10 ft ceiling",
          ],
          rows: [
            ["10 ft × 10 ft", "100 ft²", "800 ft³", "900 ft³", "1,000 ft³"],
            ["12 ft × 12 ft", "144 ft²", "1,152 ft³", "1,296 ft³", "1,440 ft³"],
            ["12 ft × 15 ft", "180 ft²", "1,440 ft³", "1,620 ft³", "1,800 ft³"],
            ["15 ft × 20 ft", "300 ft²", "2,400 ft³", "2,700 ft³", "3,000 ft³"],
            ["20 ft × 25 ft", "500 ft²", "4,000 ft³", "4,500 ft³", "5,000 ft³"],
            ["20 ft × 30 ft", "600 ft²", "4,800 ft³", "5,400 ft³", "6,000 ft³"],
          ],
          note: "Rectangular rooms only. Use average height for sloped ceilings and add dormers or bays as separate blocks.",
        },
        {
          title: "How do cubic feet convert to cubic meters, cubic yards, and gallons?",
          columns: ["Volume (ft³)", "Cubic meters", "Cubic yards", "US gallons"],
          rows: [
            ["100 ft³", "2.83 m³", "3.70 yd³", "748 gal"],
            ["500 ft³", "14.16 m³", "18.52 yd³", "3,740 gal"],
            ["960 ft³", "27.18 m³", "35.56 yd³", "7,181 gal"],
            ["1,440 ft³", "40.78 m³", "53.33 yd³", "10,772 gal"],
            ["2,700 ft³", "76.46 m³", "100.00 yd³", "20,197 gal"],
            ["5,000 ft³", "141.58 m³", "185.19 yd³", "37,403 gal"],
          ],
          note: "Factors: 1 ft³ = 0.028316846592 m³ exactly, ÷27 for cubic yards, ×7.48052 for US gallons.",
        },
        {
          title: "What CADR does EPA list for each room area?",
          columns: [
            "Room area (ft²)",
            "Minimum CADR (cfm)",
            "Volume at 8 ft ceiling",
            "Implied air changes per hour",
          ],
          rows: [
            ["100 ft²", "65 cfm", "800 ft³", "4.9 ACH"],
            ["200 ft²", "130 cfm", "1,600 ft³", "4.9 ACH"],
            ["300 ft²", "195 cfm", "2,400 ft³", "4.9 ACH"],
            ["400 ft²", "260 cfm", "3,200 ft³", "4.9 ACH"],
            ["500 ft²", "325 cfm", "4,000 ft³", "4.9 ACH"],
            ["600 ft²", "390 cfm", "4,800 ft³", "4.9 ACH"],
          ],
          note: "EPA states its CADRs are calculated for an 8-foot ceiling; with higher ceilings choose a unit sized for a larger area.",
        },
      ],
      references: [
        {
          label:
            "Guide to Air Cleaners in the Home, 2nd edition (portable air cleaner sizing table and ceiling-height note)",
          publisher: "U.S. Environmental Protection Agency, Indoor Air Quality",
          year: "2018",
          url: "https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home",
        },
        {
          label:
            "Room Air Conditioners: determining room square footage and cooling capacity",
          publisher: "ENERGY STAR, U.S. Environmental Protection Agency",
          year: "2026",
          url: "https://www.energystar.gov/products/room_air_conditioners",
        },
        {
          label: "Air Cleaners and Air Filters in the Home (publication index)",
          publisher: "U.S. Environmental Protection Agency, Indoor Air Quality",
          year: "2026",
          url: "https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        volumeFt3: "Room volume (ft³)",
      },
      inputLabels: {},
      metaTitle: "Room Volume Calculator — Cubic Feet | BuildSiteCalc",
      metaDescription:
        "Calculate room volume in cubic feet and meters. Free tool for HVAC and ventilation planning.",
    },
    "labor-markup": {
      title: "Labor Markup Calculator",
      description:
        "Convert job cost to selling price using markup or margin percentage. Shows profit and effective markup/margin relationship.",
      shortDescription: "Markup or margin on labor and job costs.",
      formula:
        "Markup mode: selling price = job cost × (1 + markup%). Margin mode: selling price = job cost ÷ (1 − margin%). Profit = selling price − job cost.",
      assumptions: [
        "Job cost includes direct labor and allocated job expenses you choose to include.",
        "Markup and margin are not interchangeable — mode matters.",
        "Does not include sales tax unless you add it separately.",
        "Overhead and profit targets vary by trade and region.",
        "Results are planning figures, not accounting advice.",
      ],
      workedExample: {
        title: "$1,000 job cost, 25% markup",
        body: "Selling price = $1,000 × 1.25 = $1,250. Profit = $250. Effective margin = 250 ÷ 1,250 = 20%.",
      },
      sections: [
        {
          heading: "What is the difference between markup and margin?",
          paragraphs: [
            "Markup and margin describe the same dollar of gross profit measured against two different bases. Markup is that profit as a percentage of cost: markup = (price − cost) ÷ cost. Margin, also called gross margin, is the same profit as a percentage of price: margin = (price − cost) ÷ price. Because price is always larger than cost, the margin percentage is always the smaller of the two on any given job. A $1,000 job cost sold for $1,250 carries $250 of gross profit, which is a 25% markup on cost and a 20% margin on price. IRS Publication 334 defines gross profit for a small business as sales minus cost of goods sold, which is exactly the dollar figure both percentages describe [1].",
            "The confusion is expensive because the error always runs one direction. A contractor who wants a 30% margin and multiplies cost by 1.30 collects a 23.1% margin instead, giving away 6.9 percentage points of gross profit on every job. On $1,000 of job cost that is $128.57 left on the table, every time. This calculator keeps the two modes separate on purpose: markup mode computes price = cost × (1 + markup), and margin mode computes price = cost ÷ (1 − margin). Choose the mode that matches how your target is stated, and write the target and its mode on your estimate template so the next person does not have to guess.",
          ],
        },
        {
          heading: "How do you convert markup to margin?",
          paragraphs: [
            "Two formulas cover every case. To go from markup to margin: margin = markup ÷ (1 + markup). To go from margin to markup: markup = margin ÷ (1 − margin). Both are exact, both are unitless, and both work in any currency. A 50% markup converts to 0.50 ÷ 1.50 = 33.3% margin, which is the pair most often quoted wrongly online. A 100% markup is a 50% margin, not a 100% one. Going the other direction, a 40% margin target requires 0.40 ÷ 0.60 = 66.7% markup on cost, and a 25% margin target requires a 33.3% markup. Memorize the 50/33.3 and 100/50 pairs and you will catch most errors by eye.",
            "Real-world anchors help. NAHB's 2024 Construction Cost Survey reports that builder profit averaged 11.0% of the sales price of a new single-family home, with overhead and general expenses at 5.7%, sales commission at 2.8%, financing at 1.5%, and marketing at 0.8% [2]. Profit at 11.0% of price is a margin figure; the equivalent markup on the remaining 89.0% of cost is 0.11 ÷ 0.89 = 12.4%. NAHB also notes the long-run average pre-tax profit share since 1998 is 9.8% [2]. Those are national survey averages for new-home builders, not a target for a remodeling company, but they show how narrow the markup-margin gap looks at low percentages.",
          ],
        },
        {
          heading: "What is a burdened labor rate and why does it change your price?",
          paragraphs: [
            "A burdened labor rate is the hourly cost of putting a worker on your job, not the wage printed on the pay stub. It adds employer payroll taxes, workers' compensation, general liability, benefits, paid time off, training, small tools, and unproductive hours such as travel, loading, and clean-up. If you price from the unburdened wage, every one of those costs eats into what you thought was profit. The arithmetic is a single multiplier: burdened rate = base wage × (1 + burden). A base wage of $30.00 per hour with a 35% burden is $40.50 per hour, so ten hours of that work is $405.00 of job cost, not $300.00.",
            "Watch what the omission does to a target. Price ten hours at the unburdened $300.00 with a 25% markup and you charge $375.00 — less than the $405.00 the labor actually costs, so the job loses $30.00 before overhead is even considered. Price the burdened $405.00 with the same 25% markup and you charge $506.25, keeping $101.25 of gross profit. IRS Publication 334 treats employment taxes and business insurance as expenses that must be recorded, which is precisely why they belong inside job cost rather than being discovered at year end [1]. Build the burden multiplier once from your own payroll and insurance records, then reuse it on every estimate.",
          ],
        },
        {
          heading: "What markup should a contractor charge on labor?",
          paragraphs: [
            "There is no correct national number, and any page that hands you one is guessing. The markup you need is set by your own overhead and your own profit target, not by an industry rumor. Work it backwards: if annual overhead is O and you expect to sell C dollars of job cost in a year, the markup that merely covers overhead is O ÷ C. Any profit target sits on top of that. As an arithmetic illustration, a shop with $120,000 of overhead expecting $600,000 of job cost needs a 20% markup just to break even; adding a 10% profit-on-cost target brings the required markup to 30%, which prices $1,000 of cost at $1,300.",
            "Two structural choices then matter. First, decide whether you mark up labor and materials at the same rate or separately. Many contractors apply a lower factor to large material purchases and a higher one to labor, because labor carries the supervision, rework, and warranty risk. Second, decide whether you quote a single fixed price or an itemized cost-plus-fee. Both are defensible; switching between them mid-project is not. Treat all of this as planning arithmetic rather than financial, tax, or legal advice — the SBA recommends working with a CPA or bookkeeper so overhead, payroll, and cost of goods sold stay properly recorded [3].",
          ],
        },
        {
          heading: "How do you price a job to hit a 30 percent gross margin?",
          paragraphs: [
            "Divide, do not multiply. To hit a 30% gross margin, price = cost ÷ (1 − 0.30) = cost ÷ 0.70. On $1,000 of job cost the price is $1,428.57, gross profit is $428.57, and 428.57 ÷ 1,428.57 = 30.0%, which confirms the target. The equivalent markup on cost is 0.30 ÷ 0.70 = 42.9%, so multiplying cost by 1.429 gives the same answer by the other route. Multiplying by 1.30 instead gives $1,300 and only a 23.1% margin, missing the target by 6.9 points. Do the check every time: divide the profit by the price you just quoted and see whether it equals the margin you promised.",
            "Then verify that the target is survivable. Gross margin pays overhead before anything reaches net profit, so a 30% gross margin against overhead running at 25% of revenue leaves roughly 5% net. Get that overhead percentage from your own books — a full year of rent, insurance, vehicles, software, admin wages, and marketing — rather than from a benchmark, and re-derive it after any large change in fixed cost. Treat the output of this calculator as a planning estimate: it converts job cost into price using the arithmetic above, and it does not know your tax position, contract terms, insurance, or local licensing requirements.",
          ],
        },
      ],
      howToMeasure:
        "Sum labor hours × burdened rate plus job-specific costs (permits, subs, materials if included in your pricing model).",
      commonMistakes: [
        "Applying margin formula to a markup target (25% markup ≠ 25% margin).",
        "Excluding employer taxes and insurance from job cost.",
        "Underpricing by using unburdened hourly wage only.",
      ],
      faqs: [
        {
          question: "What is the difference between markup and margin?",
          answer:
            "**Markup measures gross profit against cost; margin measures the same gross profit against price.** A $1,000 job sold for $1,250 has $250 of gross profit — a 25% markup and a 20% margin. Margin is always the smaller percentage, so state which one your target refers to before you price anything.",
        },
        {
          question: "Is a 50% markup the same as a 50% margin?",
          answer:
            "**No. A 50% markup on cost equals a 33.3% margin on price.** Convert with margin = markup ÷ (1 + markup): 0.50 ÷ 1.50 = 0.333. Reaching an actual 50% margin requires a 100% markup, which doubles cost. This single mix-up is the most common pricing error in the trades.",
        },
        {
          question: "How do you calculate the price for a target margin?",
          answer:
            "**Divide cost by (1 − margin) instead of multiplying by (1 + margin).** For a 30% margin on $1,000 of job cost, price = 1,000 ÷ 0.70 = $1,428.57 and gross profit is $428.57. Multiplying by 1.30 would give $1,300 and only a 23.1% margin.",
        },
        {
          question: "What should be included in job cost?",
          answer:
            "**Everything you spend to deliver the work: burdened labor, materials, subcontractors, permits, equipment, and job-specific consumables.** Burdened labor means the wage plus payroll taxes, insurance, benefits, and unproductive hours. Leaving the burden out makes your markup look generous while the job quietly loses money. Build the multiplier once from your own payroll and insurance records.",
        },
        {
          question: "What is a typical contractor markup?",
          answer:
            "**There is no reliable national figure, so derive yours from your own overhead and profit target.** Divide annual overhead by expected annual job cost to find the markup that merely breaks even, then add profit on top. NAHB's 2024 survey reports builder profit averaging 11.0% of new-home sales price, which is a margin, not a markup.",
        },
        {
          question: "Does gross margin include overhead?",
          answer:
            "**No. Gross margin is what remains after direct job cost, and overhead is paid out of it.** A 30% gross margin with overhead consuming 25% of revenue leaves roughly 5% net. Compute your overhead percentage from a full year of your own fixed costs rather than from an industry benchmark.",
        },
        {
          question: "Is this calculator financial or tax advice?",
          answer:
            "**No. It is a planning tool that converts job cost into price using markup or margin arithmetic.** It does not account for your tax position, contract terms, insurance, or licensing. The SBA recommends working with a CPA or bookkeeper so overhead, payroll, and cost of goods sold are recorded correctly.",
        },
      ],
      dataTables: [
        {
          title: "How does a markup on cost convert to a margin on price?",
          columns: [
            "Markup on cost",
            "Multiplier (1 + markup)",
            "Price on $1,000 cost",
            "Gross profit",
            "Resulting margin on price",
          ],
          rows: [
            ["10%", "1.100", "$1,100.00", "$100.00", "9.1%"],
            ["15%", "1.150", "$1,150.00", "$150.00", "13.0%"],
            ["20%", "1.200", "$1,200.00", "$200.00", "16.7%"],
            ["25%", "1.250", "$1,250.00", "$250.00", "20.0%"],
            ["33.3%", "1.333", "$1,333.00", "$333.00", "25.0%"],
            ["50%", "1.500", "$1,500.00", "$500.00", "33.3%"],
            ["100%", "2.000", "$2,000.00", "$1,000.00", "50.0%"],
          ],
          note: "Margin = markup ÷ (1 + markup). The margin percentage is always lower than the markup percentage on the same job. The $1,000 job cost is an arithmetic illustration, not a price quote.",
        },
        {
          title: "What markup do you need to hit a target margin?",
          columns: [
            "Target margin on price",
            "Divisor (1 − margin)",
            "Required markup on cost",
            "Price on $1,000 cost",
            "Gross profit",
          ],
          rows: [
            ["10%", "0.90", "11.1%", "$1,111.11", "$111.11"],
            ["15%", "0.85", "17.6%", "$1,176.47", "$176.47"],
            ["20%", "0.80", "25.0%", "$1,250.00", "$250.00"],
            ["25%", "0.75", "33.3%", "$1,333.33", "$333.33"],
            ["30%", "0.70", "42.9%", "$1,428.57", "$428.57"],
            ["40%", "0.60", "66.7%", "$1,666.67", "$666.67"],
            ["50%", "0.50", "100.0%", "$2,000.00", "$1,000.00"],
          ],
          note: "Markup = margin ÷ (1 − margin); price = cost ÷ (1 − margin). Multiplying cost by (1 + margin) is the classic error and always underprices the job.",
        },
        {
          title: "What happens when you use the markup formula on a margin target?",
          columns: [
            "Stated target",
            "Price using cost × (1 + target)",
            "Price using cost ÷ (1 − target)",
            "Margin actually achieved by the wrong formula",
            "Gross profit given up",
          ],
          rows: [
            ["10%", "$1,100.00", "$1,111.11", "9.1%", "$11.11"],
            ["20%", "$1,200.00", "$1,250.00", "16.7%", "$50.00"],
            ["25%", "$1,250.00", "$1,333.33", "20.0%", "$83.33"],
            ["30%", "$1,300.00", "$1,428.57", "23.1%", "$128.57"],
            ["40%", "$1,400.00", "$1,666.67", "28.6%", "$266.67"],
            ["50%", "$1,500.00", "$2,000.00", "33.3%", "$500.00"],
          ],
          note: "Both price columns describe the same $1,000 of job cost. The gap is pure lost gross profit and widens as the target rises. Illustrative arithmetic only, not a pricing recommendation.",
        },
      ],
      references: [
        {
          label:
            "Publication 334, Tax Guide for Small Business: figuring cost of goods sold and gross profit",
          publisher: "Internal Revenue Service",
          year: "2025",
          url: "https://www.irs.gov/publications/p334",
        },
        {
          label: "Cost of Constructing a Home — 2024: sales price breakdown",
          publisher: "National Association of Home Builders",
          year: "2025",
          url: "https://www.nahb.org/news-and-economics/housing-economics-plus/special-studies/special-studies-pages/cost-of-constructing-a-home-in-2024",
        },
        {
          label: "Manage your finances: accounting methods and cost-benefit analysis",
          publisher: "U.S. Small Business Administration",
          year: "2025",
          url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        sellingPrice: "Price to charge",
      },
      inputLabels: {},
      metaTitle: "Labor Markup Calculator — Margin vs Markup | BuildSiteCalc",
      metaDescription:
        "Calculate selling price from job cost using markup or margin. Free contractor pricing helper.",
    },
    "material-cost": {
      title: "Material Cost Calculator",
      description:
        "Sum line-item material quantities and unit costs with optional sales tax. Quick supply list total for bids and shopping.",
      shortDescription: "Total material cost from line items.",
      formula:
        "Line total = quantity × unit cost. Subtotal = sum of lines. Total = subtotal × (1 + tax%).",
      assumptions: [
        "Unit costs exclude tax unless you itemize tax separately.",
        "Quantities match the units on your price list (each, lf, sf, etc.).",
        "No automatic waste factor — add it to quantities first.",
        "Delivery fees are not included unless added as line items.",
        "Currency is USD for display formatting.",
      ],
      workedExample: {
        title: "20 studs at $4.50, 5 lb screws at $8.99, 8% tax",
        body: "Subtotal = (20×4.50) + (5×8.99) = 90 + 44.95 = $134.95. Tax = $10.80. Total ≈ $145.75.",
      },
      sections: [
        {
          heading: "How do you calculate total material cost for a project?",
          paragraphs: [
            "Every material estimate is the same three-step arithmetic. Line total = quantity × unit cost. Subtotal = the sum of all line totals. Total = subtotal × (1 + tax rate). The discipline is not in the multiplication; it is in making sure each quantity and each unit price are expressed in the same unit before you multiply. Twenty studs at $4.50 each is 20 × 4.50 = $90.00. Five pounds of screws at $8.99 per pound is 5 × 8.99 = $44.95. The subtotal is $134.95; at an 8% tax rate the tax is $10.80 and the total is $145.75. Two lines, one convention, and nothing left to interpretation.",
            "Build the line list from a takeoff — also called a material list or bill of materials — rather than from memory. A takeoff walks the drawing or the room and records a measured quantity for every purchased item, in the unit that item is sold in. Apply waste factors to the quantities before they reach this calculator, because it multiplies what you give it and does not add overage. Keep tax-exclusive unit prices in one column and handle tax once at the bottom. If you are running a business, these purchases feed cost of goods sold, which IRS Publication 334 explains for small businesses alongside how gross profit is figured [3].",
          ],
        },
        {
          heading: "How do you convert a package price into a unit price?",
          paragraphs: [
            "Suppliers price in packages and takeoffs measure in installed units, so normalization is where most cost errors hide. The method never changes: divide the package price by the number of installed units in the package. A 4 ft × 8 ft sheet covers 32 ft², so a sheet priced at $16.00 is $0.50 per square foot. A tile carton covering 15.5 ft² at $31.00 is $2.00 per square foot. A box of 100 screws at $12.00 is $0.12 each. An 80-lb concrete bag yielding 0.6 ft³ at $6.00 is $10.00 per cubic foot. Every dollar figure here is an arithmetic illustration, not a market quote.",
            "Lumber needs one extra conversion because it is often priced per board foot. A board foot is thickness in inches × width in inches × length in feet ÷ 12, using nominal dimensions. A 2×10 sixteen feet long is 2 × 10 × 16 ÷ 12 = 26.67 board feet, so a $40.00 board works out to $1.50 per board foot. Coverage products run the same logic in reverse: if a pail covers 1,750 ft² at the specified spread rate, divide the pail price by 1,750 to get cost per square foot, and use the manufacturer's published rate rather than the optimistic figure on a shelf tag. Normalize first, price second.",
          ],
        },
        {
          heading: "How do you add sales tax to a materials estimate?",
          paragraphs: [
            "Add tax once, at the subtotal, using the rate that actually applies to your purchase: total = subtotal × (1 + rate ÷ 100). On a $1,000 subtotal, a 6% rate adds $60.00 for a $1,060.00 total; 7% adds $70.00; 8.25% adds $82.50 for $1,082.50; and 9.5% adds $95.00 for $1,095.00. Which rate applies, and whether materials are taxed to you or to your customer, depends on your jurisdiction and on how the contract is written, so confirm it locally instead of assuming. This calculator applies one rate to the whole subtotal, which is the ordinary case for a single-supplier purchase.",
            "Two practical cautions. If some lines are taxable and others are not — an exempt resale purchase sitting next to a taxable shop supply, for instance — split them into separate runs rather than blending an average rate, because a blended rate cannot be reconciled against a receipt. And keep delivery, fuel surcharges, cutting fees, and returns handling as their own visible lines; they are real cost and they are frequently taxed differently from the goods themselves. A total that matches the supplier's invoice line for line is worth far more at reconciliation time than a tidy round number.",
          ],
        },
        {
          heading: "How long is a material price quote good for?",
          paragraphs: [
            "Only as long as the quote says, and construction material prices move measurably. The BLS Producer Price Index program measures the average change over time in the selling prices received by domestic producers, and publishes monthly indexes for commodities including lumber and steel mill products [1]. Because those indexes are objective and released on a fixed schedule, BLS notes that firms commonly use PPI series in price adjustment — escalation — clauses in longer-term sales and purchase contracts, and estimates that agreements worth trillions of dollars are adjusted this way [2]. That is the professional answer to volatility: state an expiry date, or tie the price to a named published index.",
            "For a homeowner or small contractor the practical version is simpler. Date every quote, record the supplier and the quantity break it assumes, and re-price any line you did not buy inside the quote window. Note the quantity a price depends on, because a per-unit price that assumes a full pallet is not valid for three pieces. If your bid may be accepted weeks later, either carry the risk knowingly or write an escalation clause naming the index and the reference month. This calculator totals the prices you enter; it does not forecast them, index them, or update them for you.",
          ],
        },
        {
          heading: "What should a material takeoff include besides the main materials?",
          paragraphs: [
            "The lines people forget are the small ones that appear on every job: fasteners, adhesives, sealants, tape and joint compound, shims, blocking, blades and bits, abrasives, drop cloths, protection film, disposal and dumpster charges, delivery, and equipment rental. Individually trivial, collectively a meaningful share of a materials budget. Add them as real lines with real quantities rather than as a lump percentage, because a percentage cannot be checked against a receipt. Group the consumables that belong to a specific assembly — thinset and grout with tile, underlayment and transitions with flooring, primer with paint — so a scope change removes the whole cluster at once.",
            "A worked list ends in a named number. Twenty studs at $4.50 = $90.00; five pounds of screws at $8.99 = $44.95; twelve drywall sheets at $16.00 = $192.00; two buckets of joint compound at $15.00 = $30.00. Subtotal $356.95. At 8% tax that is $28.56 of tax and a $385.51 materials total. Every quantity came from a takeoff, every unit price is tax-exclusive, and tax was applied exactly once. The unit prices are illustrative arithmetic rather than market quotes — swap in your own supplier numbers and the structure of the list still holds.",
          ],
        },
      ],
      howToMeasure:
        "Build your list from takeoff quantities. Enter each SKU or material name with quantity and unit price from supplier quotes or receipts.",
      commonMistakes: [
        "Mixing tax-included and tax-excluded unit prices.",
        "Using box price without converting to per-piece quantity.",
        "Forgetting fasteners and consumables that add up on large jobs.",
      ],
      faqs: [
        {
          question: "How do you calculate total material cost?",
          answer:
            "**Multiply each quantity by its unit cost, add the line totals, then apply tax once to the subtotal.** Twenty studs at $4.50 plus five pounds of screws at $8.99 gives $90.00 + $44.95 = $134.95; at 8% tax that is $10.80 of tax and a $145.75 total. Keep every quantity in the unit the item is sold in.",
        },
        {
          question: "How do you find the price per square foot from a carton price?",
          answer:
            "**Divide the carton price by the square footage the carton covers.** A carton covering 15.5 ft² priced at $31.00 works out to $2.00 per square foot. Use the coverage printed on the carton rather than the nominal tile size, because published coverage already accounts for how many pieces are packed.",
        },
        {
          question: "Should I add waste before or after entering costs here?",
          answer:
            "**Add waste to the quantities first, then enter the adjusted quantities.** This calculator multiplies quantity by unit cost and does not apply overage of its own. Running the waste factor upstream keeps the net takeoff, the allowance, and the priced quantity as three separate, checkable numbers.",
        },
        {
          question: "How do you calculate a board foot price?",
          answer:
            "**Board feet = thickness in inches × width in inches × length in feet ÷ 12, then divide the board price by that figure.** A 2×10 sixteen feet long is 2 × 10 × 16 ÷ 12 = 26.67 board feet, so a $40.00 board is $1.50 per board foot. Use nominal dimensions, not dressed ones.",
        },
        {
          question: "Does this calculator include delivery and labor?",
          answer:
            "**No. It totals material line items and one tax rate, and nothing else.** Add delivery, fuel surcharges, cutting fees, disposal, and equipment rental as their own visible lines so each can be checked against the invoice. Use a labor markup or project budget tool for a complete bid.",
        },
        {
          question: "Why do material prices change between quote and purchase?",
          answer:
            "**Producer prices for construction commodities move month to month, and a quote is only valid for the window it states.** BLS publishes Producer Price Index series for commodities including lumber and steel mill products. Date every quote, note the quantity break it assumes, and re-price anything bought outside the window.",
        },
        {
          question: "How do I handle a bulk discount tier?",
          answer:
            "**Enter the unit price that matches the quantity you will actually buy, not the price for a larger break.** If the discount requires a full pallet, either commit to the pallet quantity or use the smaller-quantity price. Record the tier on the line so the total can be reconciled against the invoice.",
        },
      ],
      dataTables: [
        {
          title: "How do you convert a package price to a unit price?",
          columns: [
            "Package form",
            "Installed units per package",
            "Per-unit formula",
            "Illustrative package price",
            "Resulting unit price",
          ],
          rows: [
            ["4 ft × 8 ft sheet", "32 ft²", "price ÷ 32", "$16.00", "$0.50 per ft²"],
            ["Tile carton", "15.5 ft²", "price ÷ 15.5", "$31.00", "$2.00 per ft²"],
            ["Box of screws", "100 pieces", "price ÷ 100", "$12.00", "$0.12 each"],
            [
              "2×10 × 16 ft board",
              "26.67 board feet",
              "price ÷ 26.67",
              "$40.00",
              "$1.50 per board foot",
            ],
            ["80-lb concrete bag", "0.6 ft³", "price ÷ 0.6", "$6.00", "$10.00 per ft³"],
            [
              "Coating pail at spec spread rate",
              "1,750 ft²",
              "price ÷ 1,750",
              "$175.00",
              "$0.10 per ft²",
            ],
          ],
          note: "Board feet = thickness (in) × width (in) × length (ft) ÷ 12, using nominal dimensions. Package prices are arithmetic illustrations, not quotes — substitute your supplier's numbers.",
        },
        {
          title: "How much does sales tax add to a materials subtotal?",
          columns: [
            "Tax rate",
            "Multiplier",
            "Tax on a $1,000 subtotal",
            "Total on $1,000",
            "Tax on a $356.95 subtotal",
          ],
          rows: [
            ["0%", "1.0000", "$0.00", "$1,000.00", "$0.00"],
            ["4%", "1.0400", "$40.00", "$1,040.00", "$14.28"],
            ["6%", "1.0600", "$60.00", "$1,060.00", "$21.42"],
            ["7%", "1.0700", "$70.00", "$1,070.00", "$24.99"],
            ["8%", "1.0800", "$80.00", "$1,080.00", "$28.56"],
            ["8.25%", "1.0825", "$82.50", "$1,082.50", "$29.45"],
            ["9.5%", "1.0950", "$95.00", "$1,095.00", "$33.91"],
          ],
          note: "Pure arithmetic: total = subtotal × (1 + rate ÷ 100). Which rate applies, and whether materials are taxable to you or to your customer, depends on your jurisdiction and contract.",
        },
        {
          title: "What does a line-item materials list look like?",
          columns: [
            "Line item",
            "Quantity",
            "Unit",
            "Illustrative unit cost",
            "Line total",
          ],
          rows: [
            ["Studs", "20", "each", "$4.50", "$90.00"],
            ["Construction screws", "5", "pound", "$8.99", "$44.95"],
            ["Drywall sheets", "12", "each", "$16.00", "$192.00"],
            ["Joint compound", "2", "bucket", "$15.00", "$30.00"],
            ["Subtotal", "—", "—", "—", "$356.95"],
            ["Sales tax at 8%", "—", "—", "—", "$28.56"],
            ["Materials total", "—", "—", "—", "$385.51"],
          ],
          note: "Quantities should already include any waste factor. Unit costs are tax-exclusive illustrations, not market prices. Add delivery, disposal, and consumables as their own lines.",
        },
      ],
      references: [
        {
          label:
            "Producer Price Index: monthly indexes for commodities including lumber and steel mill products",
          publisher: "U.S. Bureau of Labor Statistics",
          year: "2026",
          url: "https://www.bls.gov/ppi/",
        },
        {
          label: "Producer Price Index (PPI) Guide for Price Adjustment",
          publisher: "U.S. Bureau of Labor Statistics",
          year: "2026",
          url: "https://www.bls.gov/ppi/publications/price-adjustment-guide-for-contracting-parties.htm",
        },
        {
          label:
            "Publication 334, Tax Guide for Small Business: figuring cost of goods sold and gross profit",
          publisher: "Internal Revenue Service",
          year: "2025",
          url: "https://www.irs.gov/publications/p334",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        total: "Materials total",
      },
      inputLabels: {
        lineItems: "Material line items",
      },
      metaTitle: "Material Cost Calculator — Line Item Total | BuildSiteCalc",
      metaDescription:
        "Add up material line items with optional sales tax. Free supply list cost calculator for contractors and DIY.",
    },
    "project-budget": {
      title: "Project Budget Calculator",
      description:
        "Build a whole-project budget from material line items, labor, permits, and contingency percentage.",
      shortDescription: "Full renovation budget worksheet.",
      formula:
        "Materials subtotal = sum of material amounts. Subtotal = materials + labor + permits. Contingency = subtotal × contingency%. Grand total = subtotal + contingency.",
      assumptions: [
        "Material amounts are lump sums or pre-calculated totals.",
        "Labor is entered as one total or blended cost.",
        "Contingency covers unknowns, not planned waste (add waste in material quantities).",
        "Typical contingency is 10–20% for renovations.",
        "Does not include financing costs or owner-supplied allowances unless entered.",
      ],
      workedExample: {
        title: "Materials $3,650, labor $4,000, permits $250, 10% contingency",
        body: "Subtotal = 3,650 + 4,000 + 250 = $7,900. Contingency = $790. Grand total = $8,690.",
      },
      sections: [
        {
          heading: "How do you build a renovation budget step by step?",
          paragraphs: [
            "Work from quantities to money, never the reverse. First, take off the measurable materials and price them, applying waste factors to the quantities before pricing. Second, estimate labor, either as your own burdened hours or as written subcontractor quotes. Third, list the hard third-party costs: permits, inspections, dumpster and disposal, equipment rental, temporary utilities. Those three groups form the subtotal. Fourth, apply a contingency percentage to that subtotal, so the reserve scales with the size of the job. A worked case: materials $3,650, labor $4,000, and permits $250 give a $7,900 subtotal; a 10% contingency is $790, for an $8,690 grand total.",
            "Write the budget so every number can be traced to its source. Materials should point to a takeoff and a quote; labor to hours × burdened rate or a signed sub bid; permits to the fee schedule your building department publishes. GAO's federal cost-estimating guide describes the same discipline for public programs: a documented technical baseline, a work breakdown structure, stated ground rules and assumptions, sensitivity and risk analysis, and updating the estimate with actual costs as work proceeds [1]. A homeowner's kitchen budget is far smaller than a federal program, but the failure mode is identical — undocumented assumptions nobody can revisit when the number moves.",
          ],
        },
        {
          heading: "How much contingency should you include in a project budget?",
          paragraphs: [
            "Contingency exists to cover what you cannot see yet, so it should scale with how much of the job is hidden. New construction on an open site carries less unknown than opening the walls of an older house, where obsolete wiring, galvanized supply lines, undersized framing, rot behind tile, or an unpermitted earlier remodel are all live possibilities. Sizing it is a judgment, not a formula, and the honest method is to list the specific unknowns and ask what each would cost to correct. On the $7,900 subtotal above, 10% is $790, 15% is $1,185, and 20% is $1,580 — three very different levels of protection against the same set of walls.",
            "Notice which base the percentage uses. This calculator applies contingency to the subtotal, so a 15% contingency is $1,185 on top of $7,900 for a $9,085 grand total, and that reserve is 13.0% of the grand total rather than 15%. Same dollars, two denominators, exactly like markup versus margin. Decide up front who controls the reserve and what counts as a legitimate draw against it, then record every draw with a date and a reason. GAO's guidance is to analyze risk and uncertainty explicitly and to update the estimate as actual costs come in, instead of treating the original figure as fixed [1].",
          ],
        },
        {
          heading:
            "What is the difference between contingency, allowance, and waste factor?",
          paragraphs: [
            "Three different words for three different mechanisms, and conflating them is how budgets become unreadable. A waste factor is a percentage added to a material quantity to cover cutting loss and cull; it lives in the quantity column, before anything is priced. An allowance is a placeholder dollar amount for a scope item whose selection has not been made yet — the tile, the faucet, the light fixtures — and it gets reconciled against the actual selection later. Contingency is a reserve against unknown conditions and estimating error; it is not earmarked for any specific item and should not quietly fund upgrades.",
            "Keeping them separate makes overruns diagnosable. If the final cost lands high, you can tell whether the tile allowance was set too low, the drywall quantity was under-ordered, or the wall really did hold a surprise. Blended into one padded number, all three look identical and none can be corrected on the next job. The practical rule: quantities carry waste, selections carry allowances, unknowns carry contingency. Put each on its own line, and reconcile allowances explicitly when selections are made so the client sees a credit or an extra rather than a mysterious shift in the total.",
          ],
        },
        {
          heading: "Where does the money go in a construction budget?",
          paragraphs: [
            "Published survey data gives a useful sense of proportion. NAHB's 2024 Construction Cost Survey reports that construction costs averaged 64.4% of the sales price of a new single-family home, finished lot 13.7%, builder profit 11.0%, overhead and general expenses 5.7%, sales commission 2.8%, financing 1.5%, and marketing 0.8% [2]. Within construction cost itself, interior finishes were the largest stage at 24.1%, followed by major systems rough-ins at 19.2%, framing at 16.6%, exterior finishes at 13.4%, foundations at 10.5%, site work at 7.6%, final steps at 6.5%, and other costs at 2.1% [2].",
            "Read those shares as shape, not as a price list. NAHB states the survey shows percentage breakdowns for a typical home built by a subset of its builders, reports national averages with no geographic breakdown, and is not a good tool for estimating a specific house in a specific location [2]. The 2024 results came from 41 usable builder responses. For a remodel the shape shifts hard: no lot cost, higher demolition and protection cost, and finishes often dominating even more than 24%. Use the percentages to check that no stage is missing from your own list, then price your scope from your own quotes.",
          ],
        },
        {
          heading: "How do you keep a renovation budget from creeping over?",
          paragraphs: [
            "Track committed cost, not just spent cost. The moment you sign a sub bid or place a material order, that money has left the budget even though no invoice has arrived. Keep three columns per line — budget, committed, actual — and update them weekly. Reconcile every allowance the day its selection is made, and log each change order with its dollar effect and its reason before the work proceeds. The SBA describes the basic distinction that drives this bookkeeping: accrual accounting records a transaction as soon as the sale is complete, while the cash method records it only when payment actually moves [3].",
            "Then re-run the whole budget rather than patching it. If demolition uncovers $1,200 of unplanned electrical work on the $7,900 subtotal above, the new subtotal is $9,100, and a 10% contingency on that base is $910 for a $10,010 grand total — the reserve grew because the base grew. Draw the $1,200 from the original $790 reserve instead and you are $410 short, which is the arithmetic reason a thin contingency fails on the very first surprise. These figures are planning estimates, not financial, tax, or legal advice; consult a CPA, lender, or attorney for decisions that depend on them.",
          ],
        },
      ],
      howToMeasure:
        "Gather material quotes, labor estimates, and permit fees. Use other calculators for quantity-driven materials first, then enter totals here.",
      commonMistakes: [
        "Skipping contingency on older homes with hidden conditions.",
        "Double-counting tax if material lines already include tax.",
        "Separating contractor markup inconsistently between labor and materials.",
      ],
      faqs: [
        {
          question: "How much contingency should a renovation budget have?",
          answer:
            "**Size the reserve to how much of the job is hidden, and list the specific unknowns rather than picking a habit number.** Cosmetic work on a known structure needs less than opening walls in an older house. On a $7,900 subtotal, 10% is $790 and 20% is $1,580 — write down which unknowns each dollar is meant to cover.",
        },
        {
          question: "Is contingency calculated on the subtotal or the total?",
          answer:
            "**This calculator applies contingency to the subtotal, so the reserve sits on top of it.** A 15% contingency on a $7,900 subtotal is $1,185, giving a $9,085 grand total — and that reserve is 13.0% of the grand total, not 15%. Same dollars, two different denominators.",
        },
        {
          question: "What is the difference between an allowance and a contingency?",
          answer:
            "**An allowance is a placeholder price for a specific undecided selection; contingency is an unearmarked reserve for unknown conditions.** Allowances get reconciled against the real selection as a credit or an extra. Contingency should never quietly fund upgrades, or the reserve disappears before the first surprise arrives.",
        },
        {
          question: "Should a project budget include contractor markup?",
          answer:
            "**It depends whose budget it is.** An owner comparing bids sees markup already inside each bid price. A contractor building the same budget should carry burdened labor and profit inside the labor and overhead lines. Decide which view you are producing and label it, so the two are never compared side by side.",
        },
        {
          question: "How do you budget a phased project?",
          answer:
            "**Run one budget per phase, each with its own subtotal and its own contingency, then sum the phases.** Phase-level reserves stop an overrun in demolition from silently consuming the reserve meant for finishes. Re-price later phases before they start, because both material prices and scope tend to move.",
        },
        {
          question: "What costs do people forget in a renovation budget?",
          answer:
            "**Permits and inspections, dumpster and disposal, protection and clean-up, equipment rental, temporary utilities, storage, and meals or lodging during downtime.** Appliances and fixtures also get dropped when they are purchased separately. Add each as a visible line so the omission surfaces during review instead of at the end.",
        },
        {
          question: "Is this a financial estimate I can rely on?",
          answer:
            "**No. It is a planning tool that adds your entered materials, labor, and permits and applies a contingency percentage.** It is not financial, tax, or legal advice, and it does not know your local fees or lender requirements. Confirm every figure with written quotes and a qualified professional.",
        },
      ],
      dataTables: [
        {
          title: "How much does contingency add to a project subtotal?",
          columns: [
            "Contingency rate",
            "Reserve on a $7,900 subtotal",
            "Grand total",
            "Reserve as a share of the grand total",
            "Reserve on a $50,000 subtotal",
          ],
          rows: [
            ["5%", "$395.00", "$8,295.00", "4.8%", "$2,500.00"],
            ["10%", "$790.00", "$8,690.00", "9.1%", "$5,000.00"],
            ["12%", "$948.00", "$8,848.00", "10.7%", "$6,000.00"],
            ["15%", "$1,185.00", "$9,085.00", "13.0%", "$7,500.00"],
            ["20%", "$1,580.00", "$9,480.00", "16.7%", "$10,000.00"],
            ["25%", "$1,975.00", "$9,875.00", "20.0%", "$12,500.00"],
          ],
          note: "Reserve = subtotal × rate; grand total = subtotal + reserve. A percentage of the subtotal is always a smaller share of the grand total — the same relationship as markup versus margin.",
        },
        {
          title: "How is the sales price of a new single-family home divided?",
          columns: ["Component", "Share of sales price", "What it covers"],
          rows: [
            [
              "Total construction cost",
              "64.4%",
              "All labor, subcontracts, and materials in the physical build",
            ],
            [
              "Finished lot cost",
              "13.7%",
              "Land plus development, including financing on the lot",
            ],
            [
              "Builder profit (pre-tax)",
              "11.0%",
              "Return to the builder before income tax",
            ],
            [
              "Overhead and general expenses",
              "5.7%",
              "Office, administration, insurance, and other indirect cost",
            ],
            ["Sales commission", "2.8%", "Selling cost paid on the transaction"],
            ["Financing cost", "1.5%", "Interest and fees during construction"],
            ["Marketing cost", "0.8%", "Advertising and model-home expense"],
          ],
          note: "NAHB 2024 Construction Cost Survey, 41 usable builder responses, national averages [2]. NAHB cautions it is not designed to estimate a specific home in a specific location, and it does not transfer directly to remodeling.",
        },
        {
          title: "Which construction stages carry the largest share of cost?",
          columns: [
            "Construction stage",
            "Share of construction cost",
            "Representative items",
          ],
          rows: [
            [
              "Interior finishes",
              "24.1%",
              "Insulation, drywall, paint, trim, cabinets, flooring, fixtures",
            ],
            [
              "Major systems rough-ins",
              "19.2%",
              "Plumbing, electrical, and HVAC before fixtures",
            ],
            [
              "Framing",
              "16.6%",
              "Framing including roof, trusses, sheathing, structural metal",
            ],
            [
              "Exterior finishes",
              "13.4%",
              "Exterior wall finish, roofing, windows and doors",
            ],
            ["Foundations", "10.5%", "Excavation, concrete, retaining walls, backfill"],
            [
              "Site work",
              "7.6%",
              "Permit fees, impact fees, water and sewer, engineering",
            ],
            [
              "Final steps and other",
              "8.6%",
              "Landscaping, driveway, deck and porch, clean-up, other",
            ],
          ],
          note: "Shares of total construction cost from the NAHB 2024 Construction Cost Survey [2]; final steps 6.5% plus other 2.1% are combined here. Use as a completeness check on your own scope list, not as a price guide.",
        },
      ],
      references: [
        {
          label:
            "GAO-20-195G, Cost Estimating and Assessment Guide: Best Practices for Developing and Managing Program Costs",
          publisher: "U.S. Government Accountability Office",
          year: "2020",
          url: "https://www.gao.gov/products/gao-20-195g",
        },
        {
          label:
            "Cost of Constructing a Home — 2024: sales price and construction cost breakdowns",
          publisher: "National Association of Home Builders",
          year: "2025",
          url: "https://www.nahb.org/news-and-economics/housing-economics-plus/special-studies/special-studies-pages/cost-of-constructing-a-home-in-2024",
        },
        {
          label: "Manage your finances: accounting methods and cost-benefit analysis",
          publisher: "U.S. Small Business Administration",
          year: "2025",
          url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances",
        },
      ],
      lastUpdated: "2026-07-30",
      resultLabels: {
        grandTotal: "Total project budget",
      },
      inputLabels: {},
      metaTitle: "Project Budget Calculator — Renovation Estimate | BuildSiteCalc",
      metaDescription:
        "Build a home project budget with materials, labor, permits, and contingency. Free renovation cost worksheet.",
    },
  },

  pages: {
    about: {
      title: "About BuildSiteCalc",
      metaDescription:
        "BuildSiteCalc provides free, transparent home-improvement calculators for homeowners and contractors. Learn about our mission and how to use the tools responsibly.",
      sections: [
        {
          heading: "Our mission",
          paragraphs: [
            "BuildSiteCalc exists to make project planning math visible. Whether you are pouring a patio slab, ordering shingles, or building a renovation budget, every calculator shows the formula, assumptions, and units behind the number.",
            "We serve homeowners tackling DIY improvements and contractors who need a quick sanity check in the field — without hiding steps behind a black box.",
          ],
        },
        {
          heading: "Transparent formulas",
          paragraphs: [
            "Each tool documents how inputs become results: coverage rates, waste factors, pitch multipliers, and unit conversions are stated on the page. You can verify the arithmetic and adjust assumptions to match your supplier data.",
            "When industry practice varies, we say so. Defaults are sensible starting points, not guarantees that every job matches every code or manufacturer spec.",
          ],
        },
        {
          heading: "Not a substitute for professionals",
          paragraphs: [
            "These calculators are planning aids. They do not replace structural engineering, ACCA Manual J load calculations, licensed trade work, or compliance with local building codes.",
            "Always confirm critical measurements on site, follow manufacturer installation instructions, and consult qualified professionals when safety or structural performance is involved.",
          ],
        },
        {
          heading: "Contact & feedback",
          paragraphs: [
            "Questions, corrections, or suggestions? Reach us at hello@buildsitecalc.com. We improve tools based on real-world feedback from the field.",
          ],
        },
      ],
    },
    methodology: {
      title: "Calculation Methodology",
      metaDescription:
        "How BuildSiteCalc calculators work: units, waste factors, rounding rules, and limitations explained.",
      sections: [
        {
          heading: "How calculations work",
          paragraphs: [
            "Each calculator implements a documented formula applied to your inputs. Internal math uses SI base units (meters, square meters, cubic meters) for consistency, then converts results to US customary units for display when appropriate.",
            "Validation rejects missing, non-numeric, or non-positive values where physical quantities must be greater than zero.",
          ],
        },
        {
          heading: "Units",
          paragraphs: [
            "Length, area, and volume fields accept US customary (feet, inches, square feet, cubic yards) and metric (meters, centimeters, square meters, cubic meters) inputs. Conversions use fixed factors — for example, 1 inch = 25.4 mm and 1 cubic yard = 27 cubic feet.",
            "Weight results (gravel tons) use US short tons (2,000 lb) unless noted otherwise.",
          ],
        },
        {
          heading: "Waste factors",
          paragraphs: [
            "Material calculators optionally add waste as a percentage on top of net quantity: adjusted = base × (1 + waste% ÷ 100). Default waste values reflect typical residential practice but should be increased for diagonal layouts, complex roofs, or brittle materials.",
            "Apply waste once in your workflow — either in a dedicated waste calculator or within a material calculator, not both.",
          ],
        },
        {
          heading: "Rounding",
          paragraphs: [
            "Display values round to practical precision (often two decimal places for volumes, whole units for counts). Paint gallons round up to the nearest quarter gallon. Bag, tile, and sheet counts round up to whole units because partial purchases are not available at retail.",
            "Intermediate values retain full precision before final rounding to minimize cumulative error.",
          ],
        },
        {
          heading: "Limitations",
          paragraphs: [
            "Presets (dumpster sizes, truck tiers, BTU rules of thumb) are approximations. Site conditions, product lines, and regulations vary.",
            "Affiliate links or ads do not influence formulas. See our Disclaimer for liability terms.",
          ],
        },
      ],
    },
    glossary: {
      title: "Construction Glossary",
      metaDescription:
        "Definitions of common construction and home-improvement terms used across BuildSiteCalc calculators.",
      sections: [
        {
          paragraphs: [
            "Quick reference for terminology appearing in calculators, results, and project guides. Spanish translations appear in the Spanish glossary page.",
          ],
        },
      ],
      terms: [
        {
          term: "Board foot",
          definition:
            "A lumber volume unit equal to 144 cubic inches — commonly used for hardwood pricing.",
        },
        {
          term: "Bundle (roofing)",
          definition:
            "A packaged unit of asphalt shingles; typically three bundles cover one roofing square.",
        },
        {
          term: "Coverage rate",
          definition:
            "Area a material covers per unit (e.g., square feet per gallon of paint).",
        },
        {
          term: "Cubic yard (yd³)",
          definition:
            "US volume measure equal to 27 cubic feet; common for concrete, mulch, and bulk soil.",
        },
        {
          term: "On center (OC)",
          definition:
            "Spacing measured from the center of one framing member to the next (e.g., 16 in OC studs).",
        },
        {
          term: "Pitch (roof)",
          definition:
            "Roof slope expressed as rise over run (4/12 means 4 in rise per 12 in horizontal run).",
        },
        {
          term: "R-value",
          definition:
            "Thermal resistance of insulation; higher numbers mean better resistance to heat flow.",
        },
        {
          term: "Riser",
          definition: "Vertical face of a stair step between treads.",
        },
        {
          term: "Roofing square",
          definition:
            "100 square feet of roof area; shingle orders often reference squares.",
        },
        {
          term: "Tread",
          definition: "Horizontal walking surface of a stair step.",
        },
        {
          term: "Waste factor",
          definition:
            "Extra material percentage added to net quantity to cover cuts, breakage, and errors.",
        },
        {
          term: "Markup",
          definition:
            "Percentage added to cost to reach selling price (markup% of cost).",
        },
        {
          term: "Margin",
          definition: "Profit as a percentage of selling price (different from markup).",
        },
        {
          term: "BTU",
          definition:
            "British Thermal Unit — heat energy rate used to size heating and cooling equipment.",
        },
        {
          term: "Manual J",
          definition:
            "ACCA standard for residential HVAC load calculation; more detailed than rule-of-thumb sizing.",
        },
        {
          term: "Premix concrete",
          definition:
            "Dry concrete mix in bags requiring water on site; yield varies by bag weight.",
        },
        {
          term: "Roll-off dumpster",
          definition:
            "Open-top waste container delivered for construction debris; sized in cubic yards.",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      metaDescription:
        "Contact BuildSiteCalc by email. Feedback, corrections, and partnership inquiries welcome.",
      sections: [
        {
          heading: "Get in touch",
          paragraphs: [
            "Email us at hello@buildsitecalc.com for calculator feedback, bug reports, partnership inquiries, or licensing questions.",
            "We read every message and prioritize fixes that affect calculation accuracy or accessibility.",
          ],
        },
        {
          heading: "Contact form",
          paragraphs: [
            "The contact form on this site opens your email client with a pre-filled message (mailto link). No message content is stored on our servers when you use the form.",
            "If your browser cannot open mailto links, copy the address above into your preferred email app.",
          ],
        },
        {
          heading: "Response time",
          paragraphs: [
            "We aim to respond within a few business days. Complex engineering questions may be directed to licensed professionals in your area.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      metaDescription:
        "BuildSiteCalc privacy policy — data collection, cookies, analytics, and your rights. Last updated July 28, 2026.",
      sections: [
        {
          paragraphs: [
            'Last updated: July 28, 2026. BuildSiteCalc ("we," "us") operates https://buildsitecalc.com. This policy describes how we handle information when you use our website.',
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "Calculator inputs are processed in your browser to produce results. We do not require an account to use the tools.",
            "We may collect standard server logs (IP address, browser type, pages visited) and analytics data if you consent to analytics cookies.",
            "If you email us, we receive the information you choose to send.",
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            "To operate, secure, and improve the website; measure aggregate traffic; and respond to inquiries.",
            "We do not sell personal information.",
          ],
        },
        {
          heading: "Cookies & analytics",
          paragraphs: [
            "See our Cookie Policy for details. Analytics tools may set cookies only after consent where required by law.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Depending on your state of residence (including California), you may have rights to access, delete, or opt out of certain processing. Contact hello@buildsitecalc.com to exercise these rights.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            'We may update this policy. The "Last updated" date will change when revisions are posted.',
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      metaDescription:
        "Terms of Service for BuildSiteCalc. US jurisdiction. Last updated July 28, 2026.",
      sections: [
        {
          paragraphs: [
            "Last updated: July 28, 2026. By using BuildSiteCalc, you agree to these Terms of Service.",
          ],
        },
        {
          heading: "Use of the service",
          paragraphs: [
            "Calculators and content are provided free for personal and commercial planning purposes. You may not scrape, reverse engineer, or republish the site in bulk without permission.",
            "You are responsible for verifying results before purchasing materials or performing work.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "BuildSiteCalc name, branding, and original content are owned by BuildSiteCalc. Calculator formulas expressed as text may be cited with attribution.",
          ],
        },
        {
          heading: "Disclaimer of warranties",
          paragraphs: [
            'The site is provided "as is" without warranties of any kind. See our Disclaimer for calculation and professional advice limitations.',
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, BuildSiteCalc is not liable for indirect, incidental, or consequential damages arising from use of the site.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the United States and the state in which BuildSiteCalc operates, without regard to conflict-of-law rules.",
          ],
        },
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      metaDescription:
        "Important disclaimer: BuildSiteCalc calculators are estimates only, not professional engineering or code advice.",
      sections: [
        {
          paragraphs: ["Last updated: July 28, 2026."],
        },
        {
          heading: "Estimates only",
          paragraphs: [
            "All calculator results are estimates for planning and budgeting. Actual material needs depend on site conditions, product specifications, installation method, and local codes.",
          ],
        },
        {
          heading: "Not professional advice",
          paragraphs: [
            "Nothing on this site constitutes structural engineering, architectural, legal, tax, or licensed trade advice. Hire qualified professionals for load-bearing design, electrical, plumbing, gas, and code compliance.",
          ],
        },
        {
          heading: "Third-party products",
          paragraphs: [
            "References to brands, suppliers, or rental fleet sizes are illustrative. We are not affiliated unless explicitly stated. Follow manufacturer instructions.",
          ],
        },
        {
          heading: "Affiliate disclosure",
          paragraphs: [
            "Some links may be affiliate links. They do not change calculator outputs or increase your price.",
          ],
        },
      ],
    },
    accessibility: {
      title: "Accessibility Statement",
      metaDescription:
        "BuildSiteCalc commitment to web accessibility and how to report barriers. Last updated July 28, 2026.",
      sections: [
        {
          paragraphs: [
            "Last updated: July 28, 2026. We aim to make BuildSiteCalc usable for people with diverse abilities.",
          ],
        },
        {
          heading: "Our commitment",
          paragraphs: [
            "We strive to conform to WCAG 2.1 Level AA where practicable: keyboard navigation, sufficient color contrast, semantic headings, form labels, and skip links.",
          ],
        },
        {
          heading: "Known limitations",
          paragraphs: [
            "Some third-party embeds (ads, analytics) may not fully meet our standards. We select partners with accessibility policies when possible.",
          ],
        },
        {
          heading: "Feedback",
          paragraphs: [
            "Encounter a barrier? Email hello@buildsitecalc.com with the page URL and description. We will work to address reasonable requests promptly.",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      metaDescription:
        "How BuildSiteCalc uses cookies and similar technologies. Last updated July 28, 2026.",
      sections: [
        {
          paragraphs: ["Last updated: July 28, 2026."],
        },
        {
          heading: "What cookies are",
          paragraphs: [
            "Cookies are small text files stored on your device. They help sites remember preferences and measure usage.",
          ],
        },
        {
          heading: "Cookies we use",
          paragraphs: [
            "Essential cookies: required for basic functionality such as language preference and cookie consent choice.",
            "Analytics cookies: optional, used to understand aggregate traffic patterns (e.g., Google Analytics) only if you consent.",
            "Advertising cookies: optional, may be set by ad partners if ads are enabled and you consent.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "Use our consent banner to accept or reject non-essential cookies. You can also clear cookies in your browser settings.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["Questions about this policy: hello@buildsitecalc.com."],
        },
      ],
    },
  },

  footer: {
    tagline:
      "Every measurement, material, and project-cost calculator a homeowner or contractor needs.",
    copyright: "All rights reserved.",
    links: {
      about: "About",
      methodology: "Methodology",
      glossary: "Glossary",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      disclaimer: "Disclaimer",
      accessibility: "Accessibility",
      cookies: "Cookie Policy",
    },
  },

  errors404: {
    title: "Page not found",
    description:
      "The page you requested does not exist or may have moved. Try searching for a calculator or return to the home page.",
    backHome: "Back to home",
  },
};

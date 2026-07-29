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
      howToMeasure:
        "Measure the longest straight length and width of the pour area at grade. For thickness, use the specified slab depth from your plan — typical patios are 3.5–4 in and driveways 4–6 in. Deduct only areas that will not receive concrete.",
      commonMistakes: [
        "Measuring thickness in feet when the field is in inches (4 in ≠ 4 ft).",
        "Forgetting to add waste for spillage, uneven subgrade, or partial loads.",
        "Using interior room dimensions instead of the actual form or edge dimensions outdoors.",
      ],
      faqs: [
        {
          question: "How many 80 lb bags equal a cubic yard?",
          answer:
            "Roughly 45 bags of 80 lb premix per cubic yard, but ready-mix by the truck is usually cheaper for slabs over about 1 yd³.",
        },
        {
          question: "Should I add extra for a thickened edge?",
          answer:
            "Yes. This calculator assumes uniform thickness. Add a separate volume for footings or thickened perimeter beams.",
        },
        {
          question: "What waste percentage should I use?",
          answer:
            "10% is common for flatwork. Use 5% for simple rectangles with good access, or 15% for irregular shapes.",
        },
        {
          question: "Does this include the gravel base?",
          answer:
            "No. Use the gravel or topsoil calculators for base material volume separately.",
        },
      ],
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
      howToMeasure:
        "For holes, measure diameter or square side and depth to the bottom of the excavation. For slabs, measure the formed area and thickness. When in doubt, measure each hole separately and sum volumes.",
      commonMistakes: [
        "Using the bag weight as volume (80 lb is weight, not 80 ft³).",
        "Ignoring waste on multiple small pours where spillage adds up.",
        "Mixing bag sizes within one calculation — pick one bag weight per order.",
      ],
      faqs: [
        {
          question: "40 lb vs 80 lb bags — which is better?",
          answer:
            "80 lb bags cover more volume per bag and often cost less per cubic foot, but 40 lb bags are easier to handle alone.",
        },
        {
          question: "Can I enter volume in cubic yards?",
          answer:
            "Yes. Switch the volume unit to cubic yards and the calculator converts internally.",
        },
        {
          question: "How much water per bag?",
          answer:
            "Follow the label — typically about 3 qt for 80 lb. Too much water weakens the mix.",
        },
        {
          question: "Is this enough for a sonotube?",
          answer:
            "Measure the tube inside diameter and depth. Cylindrical holes can be entered as equivalent square dimensions or direct volume.",
        },
      ],
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
          question: "Do I need primer?",
          answer:
            "New drywall, stains, or dark-to-light color changes usually need primer. Calculate primer as a separate coat with its coverage rate.",
        },
        {
          question: "What coverage rate should I use?",
          answer:
            "Check the can label. Smooth walls often 350–400 ft²/gal (≈32–37 m²/gal); textured walls may be 250–300 ft²/gal. Switch the coverage unit to match the label.",
        },
        {
          question: "Should I include the ceiling?",
          answer:
            "Add ceiling square footage to your wall area, or calculate the ceiling as a separate rectangle.",
        },
        {
          question: "Why round to quarter gallons?",
          answer:
            "Retail paint is sold in quart increments above 1 gallon. Rounding avoids coming up short mid-project.",
        },
      ],
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
      howToMeasure:
        "Measure the longest wall lengths at the floor level. For L-shaped rooms, break into rectangles and sum areas, or measure total area from a floor plan.",
      commonMistakes: [
        "Ordering exact net area with zero waste — cuts always produce scrap.",
        "Using box coverage from a different SKU or plank width.",
        "Forgetting closet floors and alcoves attached to the room.",
      ],
      faqs: [
        {
          question: "How much waste for herringbone or diagonal?",
          answer:
            "Plan 12–15% waste for diagonal layouts and 15–20% for complex herringbone patterns.",
        },
        {
          question: "Does this work for tile?",
          answer: "Use the tile calculator for individual tile counts with grout gaps.",
        },
        {
          question: "Should I buy extra for future repairs?",
          answer:
            "Keep one spare carton when possible — dye lots change and styles discontinue.",
        },
        {
          question: "Metric rooms?",
          answer: "Enter dimensions in meters or centimeters; results show ft² and m².",
        },
      ],
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
      howToMeasure:
        "Measure the tile area length and width. For backsplashes, measure wall length and height to the cabinet line. Note tile size printed on the box.",
      commonMistakes: [
        "Ignoring grout joint width on small-format tile (adds up over hundreds of tiles).",
        "Using net area without waste — cuts around toilets and doorways need extras.",
        "Mixing up inches and centimeters on imported tile labels.",
      ],
      faqs: [
        {
          question: "How much extra for a diagonal layout?",
          answer:
            "Add 15% waste minimum. Diagonal cuts consume more tile at the perimeter.",
        },
        {
          question: "Do I need trim tile?",
          answer:
            "This counts field tile only. Measure linear feet of exposed edges for bullnose or pencil trim separately.",
        },
        {
          question: "Large format tile waste?",
          answer:
            "Large tiles have fewer cuts but break more often — 10–12% waste is still wise.",
        },
        {
          question: "Can I include a grout gap?",
          answer:
            "Yes. Enter the grout gap and the calculator expands each tile footprint accordingly.",
        },
      ],
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
      howToMeasure:
        "Calculate total square footage of surfaces to be drywalled. For rooms, sum all walls plus ceiling. Subtract large openings only if they occupy full floor-to-ceiling space.",
      commonMistakes: [
        "Forgetting the ceiling when hanging a full room.",
        "Using 4×8 sheet count math on 4×12 sheets (48 ft² vs 32 ft²).",
        "Ordering too little for vaulted or angled ceilings with extra cuts.",
      ],
      faqs: [
        {
          question: "4×8 or 4×12 sheets?",
          answer:
            "4×12 reduces joints on long walls but is heavier and harder to handle alone. 4×8 is standard for DIY.",
        },
        {
          question: "How much waste for many windows?",
          answer: "Bump waste to 12–15% when there are many cutouts and corners.",
        },
        {
          question: "Does this include joint compound?",
          answer:
            "No. This is sheet count only. Compound and tape depend on joint linear feet.",
        },
        {
          question: "Fire-rated or soundboard?",
          answer:
            "Sheet count is the same by area; order the correct board type for your code requirements.",
        },
      ],
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
      howToMeasure:
        "Measure the building footprint at the eaves from outside edge to outside edge. For pitch, use rise and run from the roof surface or a pitch gauge (e.g., 4 in rise per 12 in run = 4/12).",
      commonMistakes: [
        "Using flat footprint area without pitch adjustment.",
        "Confusing bundles with squares (1 square ≠ 1 bundle).",
        "Forgetting waste for ridge, valley, and starter course cuts.",
      ],
      faqs: [
        {
          question: "What is a roofing square?",
          answer:
            "One square covers 100 ft² of roof area. Shingles are sold by the bundle; typically 3 bundles make one square.",
        },
        {
          question: "How do I find pitch factor?",
          answer:
            "Enter rise and run (e.g., 4 and 12) and the calculator computes the multiplier, or enter the factor directly if you know it.",
        },
        {
          question: "Hip roof vs gable?",
          answer:
            "Complex roofs need more waste. Use 12–15% and verify with a roof measurement app or contractor.",
        },
        {
          question: "Architectural vs 3-tab bundles?",
          answer:
            "Bundles per square varies by product line — check your shingle packaging.",
        },
      ],
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
      howToMeasure:
        "Stake the area to be covered and measure length × width. For grading, estimate average depth between high and low points across the zone.",
      commonMistakes: [
        "Ordering fill dirt when nutrient-rich topsoil was needed for planting.",
        "Using maximum depth at low spots only — use average depth.",
        "Ignoring that truck measurements are loose volume before spreading.",
      ],
      faqs: [
        {
          question: "Topsoil vs fill dirt?",
          answer:
            "Topsoil has organic matter for planting. Fill dirt is for grading and compaction under structures.",
        },
        {
          question: "How much for sod prep?",
          answer:
            "Often 2–4 in of topsoil tilled into the existing grade before sod or seed.",
        },
        {
          question: "Raised bed calculation?",
          answer: "Treat the bed footprint × side height as a rectangular volume.",
        },
        {
          question: "Will soil compact?",
          answer: "Yes. Order slightly high or plan to top-dress after initial settling.",
        },
      ],
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
          question: "What is a comfortable riser height?",
          answer:
            "7–7.75 in is typical in US homes. Outdoor deck stairs often use 7–7.25 in.",
        },
        {
          question: "Is this code-compliant?",
          answer:
            "No. Always check local building code for riser, tread, handrail, and landing rules.",
        },
        {
          question: "What about the nosing?",
          answer:
            "Tread depth here is horizontal run. Some codes require nosing projection beyond the riser.",
        },
        {
          question: "Split flights with a landing?",
          answer: "Calculate each flight separately from landing to floor.",
        },
      ],
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
      howToMeasure:
        "Measure each wall length and sum for perimeter, or enter total perimeter. Height is floor to ceiling. Subtract doors and windows as total opening area.",
      commonMistakes: [
        "Ignoring pattern repeat on large prints (can add 15–25% extra).",
        "Using bolt coverage from a different roll width (20.5 in vs 27 in).",
        "Forgetting inside corners consume partial roll widths.",
      ],
      faqs: [
        {
          question: "Peel-and-stick vs traditional paste?",
          answer:
            "Roll coverage is similar by area, but check if your product lists usable square feet after trimming.",
        },
        {
          question: "How does pattern repeat affect rolls?",
          answer:
            "Larger repeats mean more waste aligning each strip. Enter your repeat distance in inches.",
        },
        {
          question: "Should I buy an extra roll?",
          answer:
            "Yes — keep one roll for future repairs. Dye lots change between batches.",
        },
        {
          question: "Textured walls?",
          answer:
            "Heavy texture reduces effective coverage. Add extra waste or consult the manufacturer.",
        },
      ],
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
      howToMeasure:
        "Calculate net insulated area — wall area minus windows and doors, or attic floor footprint. Match batt width to stud or joist spacing (16 in OC → 15 in batts).",
      commonMistakes: [
        "Using batts too wide for stud spacing (compression reduces R-value).",
        "Forgetting attic kneewalls and rim joists in the total area.",
        "Confusing R-value with square footage needed.",
      ],
      faqs: [
        {
          question: "15 in or 23 in batts?",
          answer:
            "15 in fits 16 in on-center framing. 23 in fits 24 in on-center (common in attics).",
        },
        {
          question: "Blown-in vs batts?",
          answer:
            "This calculator is for batts. Blown insulation uses bag coverage by depth, not batt count.",
        },
        {
          question: "Do I need a vapor barrier?",
          answer:
            "Depends on climate zone and assembly. Quantity here is insulation only.",
        },
        {
          question: "Can I layer batts for higher R-value?",
          answer:
            "Only if the assembly is designed for it — do not compress batts to fit.",
        },
      ],
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
      howToMeasure:
        "Measure room length and width at the floor. For sizing a whole floor, sum rooms or use building footprint. Note sun exposure and insulation quality honestly in the factors.",
      commonMistakes: [
        "Sizing only by bedroom count for an entire house.",
        "Oversizing AC (short cycling) by ignoring insulation factor.",
        "Using this result as final equipment selection without Manual J.",
      ],
      faqs: [
        {
          question: "How many BTU per square foot?",
          answer:
            "Rules of thumb range 15–25 BTU/ft² depending on climate. Hot humid zones trend higher.",
        },
        {
          question: "What is a ton of cooling?",
          answer: "One ton = 12,000 BTU/hr of cooling capacity.",
        },
        {
          question: "Does ceiling height matter?",
          answer:
            "Yes for volume. This tool uses floor area with factors — high ceilings may need higher BTU/ft².",
        },
        {
          question: "Heat pump sizing?",
          answer:
            "Heat pumps need balance of heating and cooling loads. Consult a professional for dual-mode sizing.",
        },
      ],
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
      howToMeasure:
        "Count bedrooms plus consider dining, office, and garage storage. For precision, list major furniture with approximate dimensions and sum cubic feet, or use a home inventory app.",
      commonMistakes: [
        "Underestimating garage tools, outdoor furniture, and boxed storage.",
        "Choosing the smallest truck to save money — second trips cost more.",
        "Ignoring weight limits on large trucks with dense items (books, tools).",
      ],
      faqs: [
        {
          question: "What size truck for a 2-bedroom apartment?",
          answer:
            "Often a 15–20 ft truck or cargo van for a lightly furnished apartment; 20 ft if well furnished.",
        },
        {
          question: "Can I enter cubic feet directly?",
          answer:
            "Yes. Override the bedroom estimate with your inventory total for better accuracy.",
        },
        {
          question: "Tow a car behind the truck?",
          answer:
            "Tow capacity reduces usable cargo considerations — ask the rental company.",
        },
        {
          question: "Is this for commercial moves?",
          answer:
            "No. Office and warehouse moves need pallet-level cubic footage analysis.",
        },
      ],
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
      howToMeasure:
        "For custom projects, estimate piled debris length × width × average height in feet, convert to cubic yards (÷ 27), or ask your contractor for a comparable past job.",
      commonMistakes: [
        "Ordering too small and paying for a second pull.",
        "Filling a dumpster with concrete or dirt — weight limits trigger overage fees fast.",
        "Blocking the container placement area — confirm driveway clearance.",
      ],
      faqs: [
        {
          question: "10 vs 20 yard dumpster?",
          answer:
            "10 yd³ suits small bath or garage cleanouts. 20 yd³ is the most common full remodel size.",
        },
        {
          question: "How long can I keep it?",
          answer: "Typical rental includes 7–10 days — check local hauler terms.",
        },
        {
          question: "What cannot go in a dumpster?",
          answer:
            "Paint, chemicals, tires, and appliances often require special disposal.",
        },
        {
          question: "Roofing tear-off?",
          answer:
            "Use the roofing shingles preset or measure tear-off squares × debris factor.",
        },
      ],
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
      howToMeasure:
        "Start with net quantity from a area or count calculator, then apply waste based on layout complexity and your trade experience.",
      commonMistakes: [
        "Adding waste twice (once in area calc and again here).",
        "Using 5% on diagonal tile (usually too low).",
        "Confusing waste with price contingency — they serve different purposes.",
      ],
      faqs: [
        {
          question: "What waste for hardwood?",
          answer: "10% straight lay, 12–15% diagonal or wide plank.",
        },
        {
          question: "What waste for framing lumber?",
          answer: "5–10% for cuts and blocks on typical walls; more for complex roofs.",
        },
        {
          question: "Is waste the same as shrinkage?",
          answer:
            "No. Shrinkage applies to concrete curing or wood moisture — waste is cutting loss.",
        },
        {
          question: "Should contractors add hidden waste?",
          answer:
            "Transparent estimates show waste explicitly so clients understand ordering needs.",
        },
      ],
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
            "144 cubic inches of lumber — equivalent to a 1×12 board one foot long.",
        },
        {
          question: "Why nominal vs actual size?",
          answer:
            "Board-foot pricing traditionally uses nominal dimensions before surfacing.",
        },
        {
          question: "Does this work for plywood?",
          answer:
            "Plywood is usually sold by the sheet, not board foot. Use for solid lumber.",
        },
        {
          question: "Random width hardwood?",
          answer: "Measure each piece or use average width for a batch estimate.",
        },
      ],
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
          label: "ANSI Z765-2021 Square Footage Standard Announcement",
          publisher: "Home Innovation Research Labs",
          year: "2021",
          url: "https://www.homeinnovation.com/insights/company_news/consensus-committee-approves-latest-version-of-ansi-square-footage-standard/44317",
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
      howToMeasure:
        "Measure length and width on the floor and ceiling height at the center. For vaulted ceilings, measure average height or divide into sections.",
      commonMistakes: [
        "Using wall height minus baseboard inconsistently.",
        "Treating whole-house volume as one room without zoning.",
        "Confusing cubic feet with square feet.",
      ],
      faqs: [
        {
          question: "Why does volume matter for HVAC?",
          answer:
            "Air handlers move air through space. Volume helps estimate air changes per hour.",
        },
        {
          question: "Air purifier CADR sizing?",
          answer: "Manufacturers recommend CADR relative to room volume and ACH targets.",
        },
        {
          question: "Open floor plan?",
          answer:
            "Use combined dimensions of the connected space or size each zone separately.",
        },
        {
          question: "Metric output?",
          answer: "Cubic meters are shown alongside cubic feet.",
        },
      ],
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
      howToMeasure:
        "Sum labor hours × burdened rate plus job-specific costs (permits, subs, materials if included in your pricing model).",
      commonMistakes: [
        "Applying margin formula to a markup target (25% markup ≠ 25% margin).",
        "Excluding employer taxes and insurance from job cost.",
        "Underpricing by using unburdened hourly wage only.",
      ],
      faqs: [
        {
          question: "Markup vs margin — which should I use?",
          answer:
            "Markup adds on cost; margin is profit as a share of price. Pick one method and stay consistent.",
        },
        {
          question: "Typical contractor markup?",
          answer:
            "Varies widely — 20–50% on labor plus separate material markup is common.",
        },
        {
          question: "Include overhead?",
          answer:
            "Job cost should reflect burdened rates if you want profit beyond base wage.",
        },
        {
          question: "Does this handle tiered pricing?",
          answer:
            "Enter blended job cost or run separate line items in the material cost calculator.",
        },
      ],
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
      howToMeasure:
        "Build your list from takeoff quantities. Enter each SKU or material name with quantity and unit price from supplier quotes or receipts.",
      commonMistakes: [
        "Mixing tax-included and tax-excluded unit prices.",
        "Using box price without converting to per-piece quantity.",
        "Forgetting fasteners and consumables that add up on large jobs.",
      ],
      faqs: [
        {
          question: "Should I add waste to quantities first?",
          answer:
            "Yes. Use the waste factor calculator, then enter adjusted quantities here.",
        },
        {
          question: "Can I export the list?",
          answer:
            "Copy results from the calculator page for your spreadsheet or bid template.",
        },
        {
          question: "Bulk discount tiers?",
          answer: "Enter the unit price that matches your expected purchase quantity.",
        },
        {
          question: "Include labor?",
          answer:
            "This is materials only. Use labor markup or project budget for full bids.",
        },
      ],
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
      howToMeasure:
        "Gather material quotes, labor estimates, and permit fees. Use other calculators for quantity-driven materials first, then enter totals here.",
      commonMistakes: [
        "Skipping contingency on older homes with hidden conditions.",
        "Double-counting tax if material lines already include tax.",
        "Separating contractor markup inconsistently between labor and materials.",
      ],
      faqs: [
        {
          question: "How much contingency should I hold?",
          answer:
            "10% for cosmetic work, 15–20% when opening walls or dealing with old plumbing/electrical.",
        },
        {
          question: "Owner vs contractor budget?",
          answer:
            "Owners might exclude markup; contractors should include burdened labor and profit in labor totals.",
        },
        {
          question: "Phased projects?",
          answer: "Run separate budgets per phase or sum phases into one material list.",
        },
        {
          question: "Include appliances?",
          answer:
            "Add them as material line items if they are part of the project scope.",
        },
      ],
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

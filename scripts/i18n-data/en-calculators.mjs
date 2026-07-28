import { calc } from "./helpers.mjs";

export const enCalculators = {
  "concrete-slab": calc({
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
        answer: "No. Use the gravel or topsoil calculators for base material volume separately.",
      },
    ],
    resultLabels: { volumeYd3: "Concrete to order (yd³)" },
    inputLabels: { thickness: "Slab thickness" },
    metaTitle: "Concrete Slab Calculator — Cubic Yards | BuildSite Calc",
    metaDescription:
      "Free concrete slab calculator. Enter length, width, and thickness to estimate cubic yards with waste factor. US and metric units.",
  }),

  "concrete-bags": calc({
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
        answer: "Yes. Switch the volume unit to cubic yards and the calculator converts internally.",
      },
      {
        question: "How much water per bag?",
        answer: "Follow the label — typically about 3 qt for 80 lb. Too much water weakens the mix.",
      },
      {
        question: "Is this enough for a sonotube?",
        answer: "Measure the tube inside diameter and depth. Cylindrical holes can be entered as equivalent square dimensions or direct volume.",
      },
    ],
    resultLabels: { bagsNeeded: "Premix bags to buy" },
    inputLabels: { bagSize: "Premix bag weight" },
    metaTitle: "Concrete Bags Calculator — How Many Bags? | BuildSite Calc",
    metaDescription:
      "Calculate how many 40, 60, or 80 lb concrete bags you need for slabs, footings, and post holes. Free with waste factor.",
  }),

  paint: calc({
    title: "Paint Calculator",
    description:
      "Estimate gallons of interior or exterior paint from room dimensions or direct wall area. Deducts doors and windows and applies coats and waste.",
    shortDescription: "Gallons of paint for walls and rooms.",
    formula:
      "Paintable area = wall area − openings. Gallons = (paintable area × coats ÷ coverage rate) × (1 + waste%). Results round up to the nearest quarter gallon.",
    assumptions: [
      "Default coverage is 350 ft² per gallon per coat for quality latex on smooth surfaces.",
      "Default door deduction is 21 ft²; window deduction is 15 ft² each.",
      "Two coats are assumed unless you change the setting.",
      "Does not include ceiling area unless included in wall area entry.",
      "Primer is calculated separately if coverage differs.",
    ],
    workedExample: {
      title: "12 × 10 ft room, 8 ft ceilings, 2 coats",
      body: "Perimeter = 2×(12+10) = 44 ft. Wall area = 44 × 8 = 352 ft². Minus 1 door (21) and 2 windows (30) = 301 ft² paintable. Two coats on 350 ft²/gal: (301×2)÷350 = 1.72 gal → 1.75 gal with quarter-gallon rounding, plus waste.",
    },
    howToMeasure:
      "Measure room length and width along the floor. Measure ceiling height at a corner. Count doors and standard windows, or enter custom opening areas for large patio doors or picture windows.",
    commonMistakes: [
      "Using floor square footage instead of wall surface area.",
      "Forgetting the second coat on new drywall or bold color changes.",
      "Using manufacturer best-case coverage on textured or porous walls.",
    ],
    faqs: [
      {
        question: "Do I need primer?",
        answer:
          "New drywall, stains, or dark-to-light color changes usually need primer. Calculate primer as a separate coat with its coverage rate.",
      },
      {
        question: "What coverage rate should I use?",
        answer: "Check the can label. Smooth walls often 350–400 ft²/gal; textured walls may be 250–300 ft²/gal.",
      },
      {
        question: "Should I include the ceiling?",
        answer: "Add ceiling square footage to your wall area, or calculate the ceiling as a separate rectangle.",
      },
      {
        question: "Why round to quarter gallons?",
        answer: "Retail paint is sold in quart increments above 1 gallon. Rounding avoids coming up short mid-project.",
      },
    ],
    resultLabels: { gallons: "Gallons to purchase" },
    inputLabels: { coverageRate: "Paint coverage per gallon" },
    metaTitle: "Paint Calculator — Gallons Needed | BuildSite Calc",
    metaDescription:
      "Free paint calculator for rooms and walls. Estimate gallons with door/window deductions, coats, and waste. Interior and exterior.",
  }),

  flooring: calc({
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
        answer: "Plan 12–15% waste for diagonal layouts and 15–20% for complex herringbone patterns.",
      },
      {
        question: "Does this work for tile?",
        answer: "Use the tile calculator for individual tile counts with grout gaps.",
      },
      {
        question: "Should I buy extra for future repairs?",
        answer: "Keep one spare carton when possible — dye lots change and styles discontinue.",
      },
      {
        question: "Metric rooms?",
        answer: "Enter dimensions in meters or centimeters; results show ft² and m².",
      },
    ],
    resultLabels: { areaWithWasteFt2: "Flooring to order (ft²)" },
    metaTitle: "Flooring Calculator — Square Feet & Cartons | BuildSite Calc",
    metaDescription:
      "Calculate flooring square footage, waste, and cartons needed for hardwood, laminate, and vinyl plank. Free calculator.",
  }),

  tile: calc({
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
        answer: "Add 15% waste minimum. Diagonal cuts consume more tile at the perimeter.",
      },
      {
        question: "Do I need trim tile?",
        answer: "This counts field tile only. Measure linear feet of exposed edges for bullnose or pencil trim separately.",
      },
      {
        question: "Large format tile waste?",
        answer: "Large tiles have fewer cuts but break more often — 10–12% waste is still wise.",
      },
      {
        question: "Can I include a grout gap?",
        answer: "Yes. Enter the grout gap and the calculator expands each tile footprint accordingly.",
      },
    ],
    resultLabels: { tilesNeeded: "Field tiles to order" },
    metaTitle: "Tile Calculator — How Many Tiles? | BuildSite Calc",
    metaDescription:
      "Free tile calculator for floors and walls. Enter room size and tile dimensions to count tiles with grout gap and waste.",
  }),

  drywall: calc({
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
        answer: "No. This is sheet count only. Compound and tape depend on joint linear feet.",
      },
      {
        question: "Fire-rated or soundboard?",
        answer: "Sheet count is the same by area; order the correct board type for your code requirements.",
      },
    ],
    resultLabels: { sheetsNeeded: "Drywall sheets" },
    inputLabels: { sheetSize: "Drywall sheet size" },
    metaTitle: "Drywall Calculator — Sheets Needed | BuildSite Calc",
    metaDescription:
      "Calculate how many 4×8 or 4×12 drywall sheets you need. Free calculator with waste factor for walls and ceilings.",
  }),

  "roofing-shingle": calc({
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
        answer: "One square covers 100 ft² of roof area. Shingles are sold by the bundle; typically 3 bundles make one square.",
      },
      {
        question: "How do I find pitch factor?",
        answer: "Enter rise and run (e.g., 4 and 12) and the calculator computes the multiplier, or enter the factor directly if you know it.",
      },
      {
        question: "Hip roof vs gable?",
        answer: "Complex roofs need more waste. Use 12–15% and verify with a roof measurement app or contractor.",
      },
      {
        question: "Architectural vs 3-tab bundles?",
        answer: "Bundles per square varies by product line — check your shingle packaging.",
      },
    ],
    resultLabels: { squares: "Roofing squares", bundles: "Shingle bundles" },
    metaTitle: "Roofing Shingle Calculator — Squares & Bundles | BuildSite Calc",
    metaDescription:
      "Free roofing calculator. Estimate shingle squares and bundles from roof dimensions and pitch with waste factor.",
  }),

  mulch: calc({
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
    howToMeasure:
      "Outline the bed and measure length × width, or break irregular beds into rectangles. Depth is the thickness you will spread after settling — not the piled height from the truck.",
    commonMistakes: [
      "Confusing inches of depth with feet.",
      "Underestimating irregular curved beds — break into sections.",
      "Ordering by bag count without checking bag cubic feet (2 vs 3 ft³ bags differ).",
    ],
    faqs: [
      {
        question: "How deep should mulch be?",
        answer: "2–3 in for maintenance, 3–4 in for new beds. More than 4 in can harm plant stems.",
      },
      {
        question: "Bags vs bulk delivery?",
        answer: "Bulk by the cubic yard is economical above ~2 yd³. Bags are easier for small beds.",
      },
      {
        question: "Does mulch type change volume?",
        answer: "Volume is the same; density varies. This calculator uses volume, not weight.",
      },
      {
        question: "How often to refresh?",
        answer: "Most beds need 1–2 in added annually as mulch decomposes.",
      },
    ],
    resultLabels: { volumeYd3: "Mulch to order (yd³)" },
    metaTitle: "Mulch Calculator — Cubic Yards | BuildSite Calc",
    metaDescription:
      "Calculate cubic yards of mulch for landscaping beds. Free calculator with depth, area, waste, and optional bag count.",
  }),

  gravel: calc({
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
    howToMeasure:
      "Measure the paved area length and width. Depth should reflect the compacted layer specified for your use — ask your supplier for driveway base recommendations.",
    commonMistakes: [
      "Using loose-fill depth without accounting for compaction (order slightly high).",
      "Mixing metric density with US area units without conversion.",
      "Confusing short tons with metric tonnes on international quotes.",
    ],
    faqs: [
      {
        question: "Pea gravel vs crushed stone?",
        answer: "Crushed stone compacts better for driveways. Pea gravel suits paths and decorative areas.",
      },
      {
        question: "Order by ton or cubic yard?",
        answer: "Either works if density is known. This calculator shows both for comparison with supplier quotes.",
      },
      {
        question: "What depth for a driveway?",
        answer: "Often 4 in base plus surface course. Heavy use may need 6–8 in compacted base.",
      },
      {
        question: "Can I enter custom density?",
        answer: "Yes. Use the custom density field if your supplier provides kg/m³ or lb/ft³.",
      },
    ],
    resultLabels: { tons: "Estimated weight (tons)" },
    inputLabels: { densityKey: "Stone type" },
    metaTitle: "Gravel Calculator — Cubic Yards & Tons | BuildSite Calc",
    metaDescription:
      "Free gravel calculator for driveways and paths. Estimate cubic yards and tons with material density and waste factor.",
  }),

  topsoil: calc({
    title: "Topsoil Calculator",
    description:
      "Calculate cubic yards of topsoil or garden fill for lawn grading, raised beds, and new landscaping.",
    shortDescription: "Topsoil volume for lawns and garden beds.",
    formula: "Volume = area × depth, converted to cubic yards with optional waste allowance.",
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
        answer: "Topsoil has organic matter for planting. Fill dirt is for grading and compaction under structures.",
      },
      {
        question: "How much for sod prep?",
        answer: "Often 2–4 in of topsoil tilled into the existing grade before sod or seed.",
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
    resultLabels: { volumeYd3: "Topsoil to order (yd³)" },
    metaTitle: "Topsoil Calculator — Cubic Yards | BuildSite Calc",
    metaDescription:
      "Calculate cubic yards of topsoil for lawns and gardens. Free calculator with US and metric units.",
  }),

  "fence-material": calc({
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
    howToMeasure:
      "Measure the fence line along the planned post centerline from end post to end post, following grade. Confirm post spacing matches your design and local wind-load habits.",
    commonMistakes: [
      "Forgetting gate posts and latch-side spacing.",
      "Using nominal picket width without adding gap.",
      "Not adding extra posts for changes in elevation or direction.",
    ],
    faqs: [
      {
        question: "How far apart should posts be?",
        answer: "6–8 ft is typical for wood privacy fences. Closer spacing handles wind loads better.",
      },
      {
        question: "Does this include a gate?",
        answer: "No. Plan gate width, posts, and hardware separately.",
      },
      {
        question: "Chain link vs wood?",
        answer: "This targets picket-style layout. Chain link uses fabric rolls and different post counts.",
      },
      {
        question: "Slope adjustments?",
        answer: "Stepped or racked fences on slopes need longer posts and may change rail lengths.",
      },
    ],
    resultLabels: { posts: "Posts", pickets: "Pickets", rails: "Rails" },
    metaTitle: "Fence Material Calculator — Posts & Pickets | BuildSite Calc",
    metaDescription:
      "Calculate fence posts, rails, and pickets for a straight run. Free material estimator for privacy and picket fences.",
  }),

  "deck-board": calc({
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
    howToMeasure:
      "Measure deck frame length and width at the outer joists. Use actual board width (5.5 in for a 2×6) and planned gap. Confirm board lengths available from your supplier.",
    commonMistakes: [
      "Using nominal 6 in instead of actual 5.5 in board width.",
      "Ignoring butt joints — rows may need more pieces when board length < deck length.",
      "Forgetting waste on diagonal decking patterns.",
    ],
    faqs: [
      {
        question: "Composite vs wood spacing?",
        answer: "Composite often specifies 3/16 in or hidden fasteners — follow manufacturer gap requirements.",
      },
      {
        question: "Should boards run parallel or perpendicular to the house?",
        answer: "Either works structurally. Running parallel to the house often looks best — adjust which dimension you call length vs width.",
      },
      {
        question: "Does this include fascia?",
        answer: "No. Fascia and risers for stairs need separate linear-foot calculations.",
      },
      {
        question: "16 ft or 12 ft boards?",
        answer: "Fewer joints with longer boards, but verify they fit your transport and staging area.",
      },
    ],
    resultLabels: { boardsNeeded: "Deck boards" },
    metaTitle: "Deck Board Calculator — How Many Boards? | BuildSite Calc",
    metaDescription:
      "Calculate deck boards needed for a rectangular deck. Free estimator with gap, board size, and waste factor.",
  }),

  stair: calc({
    title: "Stair Calculator",
    description:
      "Calculate riser count, tread count, and total run from total rise and target riser height. Basic geometry only — verify local code.",
    shortDescription: "Riser and tread counts for stairs.",
    formula:
      "Number of risers = round(total rise ÷ target riser height). Actual riser = total rise ÷ risers. Treads = risers − 1. Total run = treads × tread depth.",
    assumptions: [
      "Straight flight with uniform risers and treads.",
      "Target riser near 7 in is common in US residential work.",
      "Does not verify IRC or local code compliance.",
      "Landing platforms and headroom are not calculated.",
      "Total rise is floor-to-floor vertical distance.",
    ],
    workedExample: {
      title: "9 ft total rise, 7 in target riser",
      body: "Total rise = 108 in. Risers = 108 ÷ 7 ≈ 15.4 → 15 risers. Actual riser = 108 ÷ 15 = 7.2 in. Treads = 14. Run = 14 × 10 in tread = 140 in (11.67 ft).",
    },
    howToMeasure:
      "Measure vertical distance from finished floor to finished floor (or landing). For exterior decks, measure from top of finished deck to grade at the stair base.",
    commonMistakes: [
      "Measuring to subfloor instead of finished floor height.",
      "Unequal risers after adjusting only the bottom step.",
      "Ignoring maximum riser height and minimum tread depth in local code.",
    ],
    faqs: [
      {
        question: "What is a comfortable riser height?",
        answer: "7–7.75 in is typical in US homes. Outdoor deck stairs often use 7–7.25 in.",
      },
      {
        question: "Is this code-compliant?",
        answer: "No. Always check local building code for riser, tread, handrail, and landing rules.",
      },
      {
        question: "What about the nosing?",
        answer: "Tread depth here is horizontal run. Some codes require nosing projection beyond the riser.",
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
    },
    metaTitle: "Stair Calculator — Rise, Run & Treads | BuildSite Calc",
    metaDescription:
      "Calculate stair risers, treads, and total run from floor-to-floor rise. Free geometry helper — verify local code separately.",
  }),

  wallpaper: calc({
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
        answer: "Roll coverage is similar by area, but check if your product lists usable square feet after trimming.",
      },
      {
        question: "How does pattern repeat affect rolls?",
        answer: "Larger repeats mean more waste aligning each strip. Enter your repeat distance in inches.",
      },
      {
        question: "Should I buy an extra roll?",
        answer: "Yes — keep one roll for future repairs. Dye lots change between batches.",
      },
      {
        question: "Textured walls?",
        answer: "Heavy texture reduces effective coverage. Add extra waste or consult the manufacturer.",
      },
    ],
    resultLabels: { rollsNeeded: "Wallpaper rolls" },
    metaTitle: "Wallpaper Calculator — Rolls Needed | BuildSite Calc",
    metaDescription:
      "Calculate wallpaper rolls from room perimeter and height. Pattern repeat and waste included. Free estimator.",
  }),

  insulation: calc({
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
        answer: "15 in fits 16 in on-center framing. 23 in fits 24 in on-center (common in attics).",
      },
      {
        question: "Blown-in vs batts?",
        answer: "This calculator is for batts. Blown insulation uses bag coverage by depth, not batt count.",
      },
      {
        question: "Do I need a vapor barrier?",
        answer: "Depends on climate zone and assembly. Quantity here is insulation only.",
      },
      {
        question: "Can I layer batts for higher R-value?",
        answer: "Only if the assembly is designed for it — do not compress batts to fit.",
      },
    ],
    resultLabels: { battsNeeded: "Insulation batts" },
    metaTitle: "Insulation Calculator — Batts Needed | BuildSite Calc",
    metaDescription:
      "Calculate fiberglass insulation batts for walls and attics. Free calculator with batt width and waste factor.",
  }),

  "hvac-btu": calc({
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
        answer: "Rules of thumb range 15–25 BTU/ft² depending on climate. Hot humid zones trend higher.",
      },
      {
        question: "What is a ton of cooling?",
        answer: "One ton = 12,000 BTU/hr of cooling capacity.",
      },
      {
        question: "Does ceiling height matter?",
        answer: "Yes for volume. This tool uses floor area with factors — high ceilings may need higher BTU/ft².",
      },
      {
        question: "Heat pump sizing?",
        answer: "Heat pumps need balance of heating and cooling loads. Consult a professional for dual-mode sizing.",
      },
    ],
    resultLabels: { estimatedBtu: "Estimated load (BTU/hr)", tonnage: "Cooling tons" },
    metaTitle: "HVAC BTU Calculator — AC Sizing Estimate | BuildSite Calc",
    metaDescription:
      "Estimate HVAC BTU and tonnage from room size and climate factors. Free rough-sizing tool — not a Manual J substitute.",
  }),

  "moving-truck-size": calc({
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
        answer: "Often a 15–20 ft truck or cargo van for a lightly furnished apartment; 20 ft if well furnished.",
      },
      {
        question: "Can I enter cubic feet directly?",
        answer: "Yes. Override the bedroom estimate with your inventory total for better accuracy.",
      },
      {
        question: "Tow a car behind the truck?",
        answer: "Tow capacity reduces usable cargo considerations — ask the rental company.",
      },
      {
        question: "Is this for commercial moves?",
        answer: "No. Office and warehouse moves need pallet-level cubic footage analysis.",
      },
    ],
    resultLabels: { recommendedTruck: "Suggested truck" },
    metaTitle: "Moving Truck Size Calculator | BuildSite Calc",
    metaDescription:
      "Find the right moving truck size from bedrooms or cubic feet. Free guide for cargo van through 26 ft trucks.",
  }),

  "dumpster-size": calc({
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
        answer: "10 yd³ suits small bath or garage cleanouts. 20 yd³ is the most common full remodel size.",
      },
      {
        question: "How long can I keep it?",
        answer: "Typical rental includes 7–10 days — check local hauler terms.",
      },
      {
        question: "What cannot go in a dumpster?",
        answer: "Paint, chemicals, tires, and appliances often require special disposal.",
      },
      {
        question: "Roofing tear-off?",
        answer: "Use the roofing shingles preset or measure tear-off squares × debris factor.",
      },
    ],
    resultLabels: { recommendedDumpster: "Recommended dumpster size" },
    inputLabels: { projectType: "Project type" },
    metaTitle: "Dumpster Size Calculator — Roll-Off Guide | BuildSite Calc",
    metaDescription:
      "Choose the right roll-off dumpster size for remodels and cleanouts. Free preset and custom volume calculator.",
  }),

  "project-waste-factor": calc({
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
        answer: "No. Shrinkage applies to concrete curing or wood moisture — waste is cutting loss.",
      },
      {
        question: "Should contractors add hidden waste?",
        answer: "Transparent estimates show waste explicitly so clients understand ordering needs.",
      },
    ],
    resultLabels: { adjustedQuantity: "Quantity to order" },
    metaTitle: "Waste Factor Calculator — Material Overage | BuildSite Calc",
    metaDescription:
      "Apply a waste percentage to any material quantity. Free overage calculator for flooring, tile, lumber, and more.",
  }),

  "board-foot": calc({
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
        answer: "144 cubic inches of lumber — equivalent to a 1×12 board one foot long.",
      },
      {
        question: "Why nominal vs actual size?",
        answer: "Board-foot pricing traditionally uses nominal dimensions before surfacing.",
      },
      {
        question: "Does this work for plywood?",
        answer: "Plywood is usually sold by the sheet, not board foot. Use for solid lumber.",
      },
      {
        question: "Random width hardwood?",
        answer: "Measure each piece or use average width for a batch estimate.",
      },
    ],
    resultLabels: { boardFeet: "Total board feet" },
    metaTitle: "Board Foot Calculator — Lumber Volume | BuildSite Calc",
    metaDescription:
      "Calculate board feet from lumber dimensions. Free calculator for hardwood and rough lumber ordering.",
  }),

  "square-footage": calc({
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
    howToMeasure:
      "Measure each room at the longest points on the floor. For open floor plans, divide visually at logical boundaries or use plan dimensions.",
    commonMistakes: [
      "Double-counting overlapping areas in open plans.",
      "Measuring wall-to-wall including unusable niches inconsistently.",
      "Forgetting closets that will receive the same flooring.",
    ],
    faqs: [
      {
        question: "How do I measure L-shaped rooms?",
        answer: "Split into two rectangles, calculate each, and add.",
      },
      {
        question: "Convert to square meters?",
        answer: "Results include m² automatically from the same inputs.",
      },
      {
        question: "Include waste here or in the flooring calculator?",
        answer: "Use waste in one place only to avoid double-counting.",
      },
      {
        question: "Appraisal vs material area?",
        answer: "GLA for appraisals follows specific rules — this is a general area tool.",
      },
    ],
    resultLabels: { totalAreaFt2: "Combined area (ft²)" },
    inputLabels: { rooms: "Room dimensions" },
    metaTitle: "Square Footage Calculator — Multi-Room Area | BuildSite Calc",
    metaDescription:
      "Calculate total square footage for multiple rooms. Free area calculator with US and metric output.",
  }),

  "room-volume": calc({
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
        answer: "Air handlers move air through space. Volume helps estimate air changes per hour.",
      },
      {
        question: "Air purifier CADR sizing?",
        answer: "Manufacturers recommend CADR relative to room volume and ACH targets.",
      },
      {
        question: "Open floor plan?",
        answer: "Use combined dimensions of the connected space or size each zone separately.",
      },
      {
        question: "Metric output?",
        answer: "Cubic meters are shown alongside cubic feet.",
      },
    ],
    resultLabels: { volumeFt3: "Room volume (ft³)" },
    metaTitle: "Room Volume Calculator — Cubic Feet | BuildSite Calc",
    metaDescription:
      "Calculate room volume in cubic feet and meters. Free tool for HVAC and ventilation planning.",
  }),

  "labor-markup": calc({
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
        answer: "Markup adds on cost; margin is profit as a share of price. Pick one method and stay consistent.",
      },
      {
        question: "Typical contractor markup?",
        answer: "Varies widely — 20–50% on labor plus separate material markup is common.",
      },
      {
        question: "Include overhead?",
        answer: "Job cost should reflect burdened rates if you want profit beyond base wage.",
      },
      {
        question: "Does this handle tiered pricing?",
        answer: "Enter blended job cost or run separate line items in the material cost calculator.",
      },
    ],
    resultLabels: { sellingPrice: "Price to charge" },
    metaTitle: "Labor Markup Calculator — Margin vs Markup | BuildSite Calc",
    metaDescription:
      "Calculate selling price from job cost using markup or margin. Free contractor pricing helper.",
  }),

  "material-cost": calc({
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
        answer: "Yes. Use the waste factor calculator, then enter adjusted quantities here.",
      },
      {
        question: "Can I export the list?",
        answer: "Copy results from the calculator page for your spreadsheet or bid template.",
      },
      {
        question: "Bulk discount tiers?",
        answer: "Enter the unit price that matches your expected purchase quantity.",
      },
      {
        question: "Include labor?",
        answer: "This is materials only. Use labor markup or project budget for full bids.",
      },
    ],
    resultLabels: { total: "Materials total" },
    inputLabels: { lineItems: "Material line items" },
    metaTitle: "Material Cost Calculator — Line Item Total | BuildSite Calc",
    metaDescription:
      "Add up material line items with optional sales tax. Free supply list cost calculator for contractors and DIY.",
  }),

  "project-budget": calc({
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
        answer: "10% for cosmetic work, 15–20% when opening walls or dealing with old plumbing/electrical.",
      },
      {
        question: "Owner vs contractor budget?",
        answer: "Owners might exclude markup; contractors should include burdened labor and profit in labor totals.",
      },
      {
        question: "Phased projects?",
        answer: "Run separate budgets per phase or sum phases into one material list.",
      },
      {
        question: "Include appliances?",
        answer: "Add them as material line items if they are part of the project scope.",
      },
    ],
    resultLabels: { grandTotal: "Total project budget" },
    metaTitle: "Project Budget Calculator — Renovation Estimate | BuildSite Calc",
    metaDescription:
      "Build a home project budget with materials, labor, permits, and contingency. Free renovation cost worksheet.",
  }),
};

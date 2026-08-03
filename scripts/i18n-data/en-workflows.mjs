const LAST_UPDATED = "2026-08-03";

function workflow(content) {
  return { ...content, lastUpdated: content.lastUpdated ?? LAST_UPDATED };
}

export const enWorkflows = {
  "deck-build": workflow({
    title: "Deck Build Calculator Sequence",
    shortDescription: "Every calculation a deck needs, in build order.",
    description:
      "Work through a deck from footprint to final budget: footings, boards, framing lumber, stairs, railing, and the material list that ties them together.",
    metaTitle: "How to Estimate a Deck Build: Calculators in Build Order",
    metaDescription:
      "Estimate a deck step by step - footprint, footings, deck boards, board feet, stairs, railing and total budget. Free calculators in the order you actually build.",
    intro: [
      "A deck goes wrong at the ordering stage more often than at the framing stage. The reason is almost always sequencing: someone prices decking before knowing the footprint, or forgets that stairs need their own lumber, or discovers at the till that post footings need concrete nobody counted. Each calculation below depends on the one above it.",
      "Work top to bottom. Every step carries its result forward, and the last two turn the quantities into money. Skip a step only when the deck genuinely does not have that element, and note that stairs and railing are where most estimates come up short.",
    ],
    outcome:
      "A material list with quantities for footings, decking, framing, stairs and railing, priced and totalled with labor and contingency.",
    faqs: [
      {
        question: "What order should I estimate a deck in?",
        answer:
          "**Footprint first, then footings, then decking, then framing lumber, then stairs and railing, and cost last.** Every quantity depends on the footprint, and pricing before the quantities are settled means repricing. Stairs are the step most often forgotten, and they carry their own lumber and their own code limits.",
      },
      {
        question: "Why do deck estimates come up short so often?",
        answer:
          "**Three things: stairs, railing and waste.** Decking gets calculated carefully and then the stair stringers, treads, balusters and rail posts get added from memory. Cutting waste on deck boards also runs higher than people expect, because board length rarely divides evenly into deck width.",
      },
      {
        question: "Do I need concrete for a deck?",
        answer:
          "**Yes, for the post footings, unless you are using a pier or helical system.** Bag count depends on hole diameter and depth, and it is easy to underestimate: a 12 in diameter hole 36 in deep takes roughly 2.4 ft3 of concrete, which is four to five 80 lb bags per hole.",
      },
    ],
  }),
  "room-repaint": workflow({
    title: "Room Repaint Calculator Sequence",
    shortDescription: "From wall area to gallons to a priced material list.",
    description:
      "Repaint a room in the right order: measure wall area, check the volume for ventilation, repair the board, then work out gallons, rolls and total cost.",
    metaTitle: "How to Estimate a Room Repaint: Calculators in Order",
    metaDescription:
      "Estimate a room repaint step by step - wall area, room volume, drywall repair, gallons of paint, wallpaper rolls, touch-up allowance and total cost.",
    intro: [
      "Repainting is the most commonly underestimated job in a house, and almost always for the same reason: paint is bought against floor area instead of wall area. A 12 by 10 ft room has 120 ft2 of floor and 352 ft2 of wall, and the paint has to cover the wall.",
      "This sequence starts with the measurement that actually matters, checks whether the surface needs work before any paint goes on, and finishes with a priced list. The touch-up allowance near the end is worth doing: matching a colour six months later is far harder than buying an extra quart now.",
    ],
    outcome:
      "Gallons by coat, any board and compound needed for repairs, a touch-up allowance, and the whole thing priced.",
    faqs: [
      {
        question: "Should I measure floor area or wall area to buy paint?",
        answer:
          "**Wall area, always.** Multiply the room perimeter by the ceiling height, then deduct doors and windows. Floor area and wall area are not proportional: a long narrow room has far more wall per square foot of floor than a square room of the same size.",
      },
      {
        question: "Do I need to repair drywall before painting?",
        answer:
          "**Fix it first, because paint makes flaws more visible rather than less.** Fresh compound and bare patches also absorb paint at a different rate than the surrounding wall, so an unprimed repair shows through the finish coat as a dull spot even when the colour matches.",
      },
      {
        question: "How much extra paint should I buy?",
        answer:
          "**Enough for touch-ups, which usually means rounding up to the next container rather than adding a percentage.** Paint is sold in fixed sizes, so a calculated 1.7 gallons becomes 2 gallons anyway. Keep the leftover sealed and labelled with the room name.",
      },
    ],
  }),
  "bathroom-tile": workflow({
    title: "Bathroom Tile Calculator Sequence",
    shortDescription: "Floor, walls, backer board and the waste small rooms demand.",
    description:
      "Tile a bathroom in order: separate floor and wall areas, backer board for wet zones, tile counts, and the higher waste factor small rooms actually need.",
    metaTitle: "How to Estimate Bathroom Tile: Calculators in Order",
    metaDescription:
      "Estimate a bathroom tile job step by step - floor and wall areas, backer board, tile counts, waste factor for small rooms, and total material cost.",
    intro: [
      "Bathrooms are the worst room in the house for tile estimating, and the reason is geometry. A small room with a tub, a toilet, a vanity and a doorway has an unusually high ratio of cut edges to open field, which means the standard 10% waste allowance is frequently not enough.",
      "The other trap is substrate. Standard drywall does not belong behind tile in a wet area, and discovering that after the tile arrives costs a trip and a delay. Work through the steps in order and treat the waste factor step as a real decision rather than a default.",
    ],
    outcome:
      "Separate floor and wall tile counts, backer board sheets, a realistic waste allowance, and a priced list including thinset and grout.",
    faqs: [
      {
        question: "How much waste should I allow for bathroom tile?",
        answer:
          "**Plan 15% rather than the usual 10%, and more for a diagonal or patterned layout.** Small rooms cut a high proportion of their tile, and fixtures multiply the number of cut edges. Buy the whole order at once so every box comes from the same production run.",
      },
      {
        question: "Can I tile over regular drywall in a bathroom?",
        answer:
          "**Not in the wet area.** Tub surrounds and shower walls need cement board or an equivalent water-resistant substrate. Outside the wet zone, on a wall that only sees humidity, standard board is generally acceptable, but check your local code before deciding.",
      },
      {
        question: "Should I calculate floor and wall tile separately?",
        answer:
          "**Yes, because they are usually different products with different coverage per box.** They also often carry different waste factors, since a shower surround has more cut edges around valves and niches than an open floor does.",
      },
    ],
  }),
  "driveway-concrete": workflow({
    title: "Concrete Driveway Calculator Sequence",
    shortDescription: "Base course, cubic yards, bags, regrading and disposal.",
    description:
      "Pour a concrete driveway in order: area at the forms, compacted gravel base, cubic yards for ready-mix or bag count, then regrading, disposal and cost.",
    metaTitle: "How to Estimate a Concrete Driveway: Calculators in Order",
    metaDescription:
      "Estimate a concrete driveway step by step - area, gravel base, cubic yards of concrete, bag count, regrading, dumpster size and total project cost.",
    intro: [
      "A driveway pour is unforgiving because concrete arrives on a truck with a clock running. Ordering short means a cold joint in the middle of the slab; ordering long means paying for concrete that goes in the spoil pile. Both are avoidable by settling the quantities before the order goes in.",
      "The base course is the step most often skipped in estimating and least often skipped in practice, so it belongs in the sequence. So does disposal: excavated soil and any demolished slab have to go somewhere, and that is a line item.",
    ],
    outcome:
      "Compacted base volume, concrete in cubic yards with a bag-count alternative, regrading soil, disposal volume, and a total with pump or short-load fees.",
    faqs: [
      {
        question: "How thick should a concrete driveway be?",
        answer:
          "**Four inches is typical for cars, and five to six inches where trucks or heavy vehicles will park.** Thickness drives volume directly, so this decision has to be made before ordering: going from 4 to 5 in adds 25% to the concrete order on the same area.",
      },
      {
        question: "Do I need a gravel base under a concrete driveway?",
        answer:
          "**In almost all cases, yes.** A compacted granular base gives uniform support and drainage, which is what prevents the cracking that comes from differential settlement. It is a separate material order in cubic yards or tons, and it is easy to leave out of an estimate.",
      },
      {
        question: "Should I order ready-mix or use bags?",
        answer:
          "**Ready-mix for anything approaching a full driveway; bags only for small pads and repairs.** The crossover is usually around one cubic yard, which is roughly 45 80 lb bags. Above that, mixing on site is slower than the concrete's working time allows.",
      },
    ],
  }),
};

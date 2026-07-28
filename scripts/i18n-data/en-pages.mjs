export const enPages = {
  about: {
    title: "About BuildSite Calc",
    metaDescription:
      "BuildSite Calc provides free, transparent home-improvement calculators for homeowners and contractors. Learn about our mission and how to use the tools responsibly.",
    sections: [
      {
        heading: "Our mission",
        paragraphs: [
          "BuildSite Calc exists to make project planning math visible. Whether you are pouring a patio slab, ordering shingles, or building a renovation budget, every calculator shows the formula, assumptions, and units behind the number.",
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
      "How BuildSite Calc calculators work: units, waste factors, rounding rules, and limitations explained.",
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
      "Definitions of common construction and home-improvement terms used across BuildSite Calc calculators.",
    sections: [
      {
        paragraphs: [
          "Quick reference for terminology appearing in calculators, results, and project guides. Spanish translations appear in the Spanish glossary page.",
        ],
      },
    ],
    terms: [
      { term: "Board foot", definition: "A lumber volume unit equal to 144 cubic inches — commonly used for hardwood pricing." },
      { term: "Bundle (roofing)", definition: "A packaged unit of asphalt shingles; typically three bundles cover one roofing square." },
      { term: "Coverage rate", definition: "Area a material covers per unit (e.g., square feet per gallon of paint)." },
      { term: "Cubic yard (yd³)", definition: "US volume measure equal to 27 cubic feet; common for concrete, mulch, and bulk soil." },
      { term: "On center (OC)", definition: "Spacing measured from the center of one framing member to the next (e.g., 16 in OC studs)." },
      { term: "Pitch (roof)", definition: "Roof slope expressed as rise over run (4/12 means 4 in rise per 12 in horizontal run)." },
      { term: "R-value", definition: "Thermal resistance of insulation; higher numbers mean better resistance to heat flow." },
      { term: "Riser", definition: "Vertical face of a stair step between treads." },
      { term: "Roofing square", definition: "100 square feet of roof area; shingle orders often reference squares." },
      { term: "Tread", definition: "Horizontal walking surface of a stair step." },
      { term: "Waste factor", definition: "Extra material percentage added to net quantity to cover cuts, breakage, and errors." },
      { term: "Markup", definition: "Percentage added to cost to reach selling price (markup% of cost)." },
      { term: "Margin", definition: "Profit as a percentage of selling price (different from markup)." },
      { term: "BTU", definition: "British Thermal Unit — heat energy rate used to size heating and cooling equipment." },
      { term: "Manual J", definition: "ACCA standard for residential HVAC load calculation; more detailed than rule-of-thumb sizing." },
      { term: "Premix concrete", definition: "Dry concrete mix in bags requiring water on site; yield varies by bag weight." },
      { term: "Roll-off dumpster", definition: "Open-top waste container delivered for construction debris; sized in cubic yards." },
    ],
  },

  contact: {
    title: "Contact Us",
    metaDescription:
      "Contact BuildSite Calc by email. Feedback, corrections, and partnership inquiries welcome.",
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
      "BuildSite Calc privacy policy — data collection, cookies, analytics, and your rights. Last updated July 28, 2026.",
    sections: [
      {
        paragraphs: [
          "Last updated: July 28, 2026. BuildSite Calc (\"we,\" \"us\") operates https://buildsitecalc.com. This policy describes how we handle information when you use our website.",
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
          "We may update this policy. The \"Last updated\" date will change when revisions are posted.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    metaDescription:
      "Terms of Service for BuildSite Calc. US jurisdiction. Last updated July 28, 2026.",
    sections: [
      {
        paragraphs: [
          "Last updated: July 28, 2026. By using BuildSite Calc, you agree to these Terms of Service.",
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
          "BuildSite Calc name, branding, and original content are owned by BuildSite Calc. Calculator formulas expressed as text may be cited with attribution.",
        ],
      },
      {
        heading: "Disclaimer of warranties",
        paragraphs: [
          "The site is provided \"as is\" without warranties of any kind. See our Disclaimer for calculation and professional advice limitations.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, BuildSite Calc is not liable for indirect, incidental, or consequential damages arising from use of the site.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of the United States and the state in which BuildSite Calc operates, without regard to conflict-of-law rules.",
        ],
      },
    ],
  },

  disclaimer: {
    title: "Disclaimer",
    metaDescription:
      "Important disclaimer: BuildSite Calc calculators are estimates only, not professional engineering or code advice.",
    sections: [
      {
        paragraphs: [
          "Last updated: July 28, 2026.",
        ],
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
      "BuildSite Calc commitment to web accessibility and how to report barriers. Last updated July 28, 2026.",
    sections: [
      {
        paragraphs: [
          "Last updated: July 28, 2026. We aim to make BuildSite Calc usable for people with diverse abilities.",
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
      "How BuildSite Calc uses cookies and similar technologies. Last updated July 28, 2026.",
    sections: [
      {
        paragraphs: [
          "Last updated: July 28, 2026.",
        ],
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
        paragraphs: [
          "Questions about this policy: hello@buildsitecalc.com.",
        ],
      },
    ],
  },
};

/**
 * Original accessible SVG diagrams for selected calculators.
 */
export function SlabDiagram({ title }: { title: string }) {
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label={title}
      className="mx-auto h-auto w-full max-w-md text-slate-700"
    >
      <title>{title}</title>
      <rect
        x="40"
        y="50"
        width="200"
        height="90"
        fill="#e2e8f0"
        stroke="#334155"
        strokeWidth="2"
      />
      <rect
        x="40"
        y="130"
        width="200"
        height="18"
        fill="#94a3b8"
        stroke="#334155"
        strokeWidth="2"
      />
      <path
        d="M40 50 L70 30 L270 30 L240 50 Z"
        fill="#cbd5e1"
        stroke="#334155"
        strokeWidth="2"
      />
      <path
        d="M240 50 L270 30 L270 120 L240 140 Z"
        fill="#94a3b8"
        stroke="#334155"
        strokeWidth="2"
      />
      <text x="140" y="100" textAnchor="middle" className="fill-slate-800" fontSize="14">
        L × W
      </text>
      <text x="250" y="100" textAnchor="middle" className="fill-slate-800" fontSize="12">
        T
      </text>
    </svg>
  );
}

export function StairDiagram({ title }: { title: string }) {
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label={title}
      className="mx-auto h-auto w-full max-w-md text-slate-700"
    >
      <title>{title}</title>
      <path
        d="M40 150 H90 V120 H140 V90 H190 V60 H240 V40 H280"
        fill="none"
        stroke="#334155"
        strokeWidth="3"
      />
      <line
        x1="40"
        y1="150"
        x2="40"
        y2="40"
        stroke="#b45309"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text
        x="28"
        y="95"
        fontSize="11"
        className="fill-amber-800"
        transform="rotate(-90 28 95)"
      >
        Total rise
      </text>
      <line
        x1="40"
        y1="155"
        x2="240"
        y2="155"
        stroke="#b45309"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text x="130" y="170" fontSize="11" className="fill-amber-800">
        Total run
      </text>
    </svg>
  );
}

export function RoomDiagram({ title }: { title: string }) {
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label={title}
      className="mx-auto h-auto w-full max-w-md"
    >
      <title>{title}</title>
      <rect
        x="60"
        y="30"
        width="180"
        height="120"
        fill="#f8fafc"
        stroke="#334155"
        strokeWidth="2"
      />
      <text x="150" y="95" textAnchor="middle" fontSize="14" className="fill-slate-800">
        L × W × H
      </text>
      <text x="150" y="165" textAnchor="middle" fontSize="12" className="fill-slate-600">
        Length × Width
      </text>
      <text x="255" y="95" fontSize="12" className="fill-slate-600">
        H
      </text>
    </svg>
  );
}

type FeatureIconProps = {
  name: string;
  tone?: "blue" | "slate";
};

export default function FeatureIcon({ name, tone = "blue" }: FeatureIconProps) {
  const stroke = tone === "blue" ? "stroke-blue-700" : "stroke-slate-900";
  const bg = tone === "blue" ? "bg-blue-50 ring-blue-100" : "bg-slate-900 ring-slate-800";
  const iconClass = tone === "blue" ? stroke : "stroke-white";

  return (
    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ring-1`}>
      <svg viewBox="0 0 24 24" fill="none" className={`h-7 w-7 ${iconClass}`} strokeWidth="1.8">
        {name === "cross" ? (
          <>
            <path d="M12 4v16" />
            <path d="M6 10h12" />
            <path d="M8 20h8" />
          </>
        ) : null}
        {name === "spark" ? (
          <>
            <path d="M12 3v5" />
            <path d="M12 16v5" />
            <path d="M4 12h5" />
            <path d="M15 12h5" />
            <path d="M7 7l3 3" />
            <path d="M14 14l3 3" />
            <path d="M17 7l-3 3" />
            <path d="M10 14l-3 3" />
          </>
        ) : null}
        {name === "path" ? (
          <>
            <path d="M7 5c0 2 2 2 2 4s-2 2-2 4 2 2 2 4" />
            <path d="M15 5c0 2 2 2 2 4s-2 2-2 4 2 2 2 4" />
          </>
        ) : null}
        {name === "flow" ? (
          <>
            <path d="M5 8h9" />
            <path d="M5 12h14" />
            <path d="M5 16h11" />
          </>
        ) : null}
        {name === "pulse" ? (
          <>
            <path d="M3 12h4l2-4 4 8 2-4h6" />
          </>
        ) : null}
        {name === "shield" ? (
          <>
            <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
            <path d="M9.5 12l1.5 1.5 3.5-4" />
          </>
        ) : null}
        {name === "lens" ? (
          <>
            <circle cx="11" cy="11" r="5" />
            <path d="M16 16l4 4" />
          </>
        ) : null}
        {name === "scope" ? (
          <>
            <path d="M6 6h12v8H6z" />
            <path d="M10 14v4" />
            <path d="M14 14v4" />
          </>
        ) : null}
        {name === "screen" ? (
          <>
            <rect x="4" y="5" width="16" height="10" rx="2" />
            <path d="M9 19h6" />
            <path d="M12 15v4" />
          </>
        ) : null}
        {name === "drop" ? (
          <>
            <path d="M12 4c3 4 5 6.5 5 9a5 5 0 1 1-10 0c0-2.5 2-5 5-9Z" />
          </>
        ) : null}
        {name === "hand" ? (
          <>
            <path d="M8 12V7a1 1 0 1 1 2 0v5" />
            <path d="M10 12V6a1 1 0 1 1 2 0v6" />
            <path d="M12 12V7a1 1 0 1 1 2 0v5" />
            <path d="M14 12V8a1 1 0 1 1 2 0v7c0 2.5-2 4.5-4.5 4.5H10c-2 0-3.8-1.2-4.5-3l-1-2.5a1 1 0 1 1 1.8-.8L7 14" />
          </>
        ) : null}
        {name === "target" ? (
          <>
            <circle cx="12" cy="12" r="7" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3" />
            <path d="M12 19v3" />
            <path d="M2 12h3" />
            <path d="M19 12h3" />
          </>
        ) : null}
      </svg>
    </div>
  );
}
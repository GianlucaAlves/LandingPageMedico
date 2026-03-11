type FeatureIconProps = {
  name: string;
  tone?: "blue" | "slate";
};

export default function FeatureIcon({ name, tone = "blue" }: FeatureIconProps) {
  const stroke =
    tone === "blue" ? "stroke-[var(--primary)]" : "stroke-[var(--cta)]";
  const bg =
    tone === "blue"
      ? "bg-[rgba(143,175,163,0.16)] ring-[var(--border)]"
      : "bg-[var(--cta)] ring-[rgba(79,111,174,0.18)]";
  const iconClass = tone === "blue" ? stroke : "stroke-white";

  return (
    <div
      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ring-1`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`h-7 w-7 ${iconClass}`}
        strokeWidth="1.8"
      >
        {name === "cross" ? (
          <>
            <path d="M12 4v16" />
            <path d="M6 10h12" />
            <path d="M8 20h8" />
          </>
        ) : null}
        {name === "hemorrhoid" ? (
          <>
            <path d="M12 5c3.5 0 6 2.3 6 5.6 0 4.1-3 6.6-6 8.4-3-1.8-6-4.3-6-8.4C6 7.3 8.5 5 12 5Z" />
            <path d="M9.5 11.5c.8-.9 1.6-1.3 2.5-1.3s1.7.4 2.5 1.3" />
          </>
        ) : null}
        {name === "fissure" ? (
          <>
            <path d="M8 4c3 2.5 3.5 4.4 2.4 6.3-.8 1.3-.8 2.1.1 3.2 1.2 1.4 1.4 2.9-.5 6.5" />
            <path d="M14.5 5.5c1.7 1.2 2.5 2.4 2.5 4 0 1.2-.6 2.1-1.5 2.9-1 .8-1.6 1.8-1.6 3.1" />
          </>
        ) : null}
        {name === "fistula" ? (
          <>
            <circle cx="8" cy="8" r="2" />
            <circle cx="16" cy="16" r="2" />
            <path d="M9.5 9.5c1.5 1 2.7 2 5 5" />
            <path d="M14 8c2.2 0 4 1.8 4 4" />
          </>
        ) : null}
        {name === "intestine" ? (
          <>
            <path d="M7 7c0 2.2 1.8 2.2 1.8 4.4S7 13.6 7 15.8C7 18 8.8 19 10 19h4c2.2 0 3-1.6 3-3.1 0-2.2-1.8-2.2-1.8-4.4S17 9.4 17 7.2C17 6 16.2 5 15 5h-5C8.8 5 7 5.8 7 7Z" />
            <path d="M10 5v14" />
          </>
        ) : null}
        {name === "pelvic-pain" ? (
          <>
            <path d="M7 7c1.2 2 2.8 3 5 3s3.8-1 5-3" />
            <path d="M9 10v3c0 2.2 1.5 4 3 6 1.5-2 3-3.8 3-6v-3" />
            <path d="M12 11.5v3" />
            <path d="M10.5 13h3" />
          </>
        ) : null}
        {name === "protection" ? (
          <>
            <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
            <path d="M8 12.5c1-.8 2-.8 3 0s2 .8 3 0 2-.8 3 0" />
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

"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type AnimatedStatProps = {
  value: number;
  label: string;
  prefix?: string;
  variant?: "number" | "ratio";
  duration?: number;
  delay?: number;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export default function AnimatedStat({
  value,
  label,
  prefix = "",
  variant = "number",
  duration = 1800,
  delay = 0,
}: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = rootRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let frameId = 0;
    let timeoutId = 0;
    const startAnimation = () => {
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const nextValue = Math.round(value * easeOutCubic(progress));

        setDisplayValue(nextValue);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    timeoutId = window.setTimeout(startAnimation, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [delay, duration, hasStarted, value]);

  const formattedValue =
    variant === "ratio"
      ? `${displayValue}:${displayValue}`
      : `${prefix}${displayValue.toLocaleString("pt-BR")}`;

  const finalValue =
    variant === "ratio"
      ? `${value}:${value}`
      : `${prefix}${value.toLocaleString("pt-BR")}`;

  const labelTypingStyle = {
    ["--typing-chars" as string]: Math.max(label.length, 8),
    ["--typing-delay" as string]: `${(delay + 420) / 1000}s`,
  } as CSSProperties;

  return (
    <article
      ref={rootRef}
      className="hero-stats-row"
      aria-label={`${finalValue} ${label}`}
    >
      <div className="hero-counter" aria-hidden="true">
        {formattedValue}
      </div>
      <p
        className="hero-stats-label hero-stats-label-typing"
        style={labelTypingStyle}
      >
        {label}
      </p>
    </article>
  );
}

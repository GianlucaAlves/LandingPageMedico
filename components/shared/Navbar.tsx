"use client";

import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#tratamentos", label: "Condições" },
  { href: "#sobre", label: "Sobre" },
  { href: "#exames", label: "Exames" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(232,221,210,0.9)] bg-[rgba(255,253,252,0.92)] backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex flex-col leading-none text-(--foreground)"
        >
          <span className="font-heading text-3xl">Dr. Daniel Alves</span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-(--primary)">
            Clínico geral e proctologista
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--muted) transition hover:text-(--primary)"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-(--cta) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
          >
            Agendar consulta
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) text-(--foreground) md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Abrir menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-(--border) bg-(--surface) md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-(--foreground) transition hover:bg-[rgba(143,175,163,0.14)] hover:text-(--primary)"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

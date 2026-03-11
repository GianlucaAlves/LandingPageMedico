import Image from "next/image";

import { medico } from "@/data/medico";
import { buildWhatsAppUrl } from "@/lib/utils";

const heroHighlights = [
  { label: "Veja as condicoes atendidas", href: "#tratamentos" },
  { label: "Veja os exames", href: "#exames" },
  { label: "Conheca o medico", href: "#sobre" },
  { label: `Atendimento em ${medico.cidade}`, href: "#contato" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(143,175,163,0.18),transparent_32%),linear-gradient(180deg,#faf6f1_0%,#fffdfc_100%)]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--primary)]">
            Clinico Geral | Proctologia | Atendimento Humanizado
          </p>
          <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Cuidado em clinica geral e proctologia com olhar humano e atencao
            aos sinais certos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            {medico.nome}, especialista em {medico.especialidade}, oferece
            consultas, exames e tratamentos com descricao clara do quadro
            clinico, acolhimento e foco na sua qualidade de vida desde a
            primeira avaliacao.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--primary)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--secondary)] hover:bg-[rgba(143,175,163,0.12)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                medico.whatsapp,
                "Ola, gostaria de agendar uma consulta",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--cta)] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(79,111,174,0.22)] transition hover:brightness-105"
            >
              Agendar via WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-7 py-4 text-base font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Ver condicoes atendidas
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute inset-x-8 inset-y-10 rounded-[3rem] bg-[rgba(143,175,163,0.32)] blur-3xl" />
          <div className="relative">
            <div className="relative aspect-5/6 overflow-hidden rounded-[2.75rem] bg-[var(--surface)] shadow-[0_34px_85px_rgba(36,50,58,0.14)]">
              <Image
                src={medico.heroFoto}
                alt={medico.nome}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
            <div className="mx-4 -mt-10 grid gap-4 rounded-4xl bg-[rgba(255,253,252,0.94)] px-5 pb-5 pt-6 shadow-[0_20px_50px_rgba(36,50,58,0.1)] backdrop-blur sm:mx-6 sm:grid-cols-3">
              <div className="rounded-3xl px-4 py-3 text-center transition duration-300 hover:-translate-y-1 hover:bg-[rgba(143,175,163,0.12)] hover:shadow-[0_18px_36px_rgba(94,124,138,0.14)] sm:text-left">
                <p className="text-3xl font-semibold text-[var(--foreground)]">
                  20+
                </p>
                <p className="text-sm text-[var(--muted)]">
                  anos de experiencia
                </p>
              </div>
              <div className="rounded-3xl px-4 py-3 text-center transition duration-300 hover:-translate-y-1 hover:bg-[rgba(201,169,138,0.14)] hover:shadow-[0_18px_36px_rgba(201,169,138,0.16)] sm:text-left">
                <p className="text-3xl font-semibold text-[var(--foreground)]">
                  1:1
                </p>
                <p className="text-sm text-[var(--muted)]">
                  atendimento acolhedor
                </p>
              </div>
              <div className="rounded-3xl px-4 py-3 text-center transition duration-300 hover:-translate-y-1 hover:bg-[rgba(143,175,163,0.12)] hover:shadow-[0_18px_36px_rgba(94,124,138,0.14)] sm:text-left">
                <p className="text-3xl font-semibold text-[var(--foreground)]">
                  + de 360
                </p>
                <p className="text-sm text-[var(--muted)]">
                  pacientes atendidos por ano
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import { medico } from "@/data/medico";
import AnimatedStat from "@/components/shared/AnimatedStat";
import { buildWhatsAppUrl } from "@/lib/utils";

const heroHighlights = [
  { label: "Veja as condições atendidas", href: "#tratamentos" },
  { label: "Veja os exames", href: "#exames" },
  { label: "Conheça o médico", href: "#sobre" },
  { label: `Atendimento em ${medico.cidade}`, href: "#contato" },
];

const heroStats = [
  {
    value: 20,
    variant: "number",
    prefix: "+",
    label: "Anos de experiência",
    delay: 0,
  },
  {
    value: 30,
    variant: "number",
    prefix: "+",
    label: "Congressos",
    delay: 180,
  },
  {
    value: 1000,
    variant: "number",
    prefix: "+",
    label: "Pacientes atendidos",
    delay: 320,
  },
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(143,175,163,0.18),transparent_32%),linear-gradient(180deg,#faf6f1_0%,#fffdfc_100%)]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-(--primary)">
            Clínico Geral | Proctologia | Atendimento Humanizado
          </p>
          <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.95] text-(--foreground) sm:text-6xl lg:text-7xl">
            Cuidado em clínica geral e proctologia com olhar humano e atenção
            aos sinais certos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted) sm:text-xl">
            {medico.nome}, especialista em {medico.especialidade}, oferece
            consultas, exames e tratamentos com descrição clara do quadro
            clínico, acolhimento e foco na sua qualidade de vida desde a
            primeira avaliação.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-(--primary) transition duration-300 hover:-translate-y-0.5 hover:border-(--secondary) hover:bg-[rgba(143,175,163,0.12)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                medico.whatsapp,
                "Olá, gostaria de agendar uma consulta",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-(--cta) px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(79,111,174,0.22)] transition hover:brightness-105"
            >
              Agendar via WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center rounded-full border border-(--border) px-7 py-4 text-base font-semibold text-(--foreground) transition hover:border-(--primary) hover:text-(--primary)"
            >
              Ver condições atendidas
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-160 lg:pr-36 xl:max-w-2xl">
          <div className="absolute inset-x-8 inset-y-10 rounded-[3rem] bg-[rgba(143,175,163,0.32)] blur-3xl" />
          <div className="relative">
            <div className="relative aspect-5/7.5 overflow-hidden rounded-[2.75rem] bg-(--surface) shadow-[0_34px_85px_rgba(36,50,58,0.14)]">
              <Image
                src={medico.heroFoto}
                alt={medico.nome}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 580px, 620px"
              />
            </div>
            <aside className="hero-stats-panel mt-5 w-full max-w-40 sm:ml-auto lg:absolute lg:-right-24 lg:top-18 lg:mt-0 lg:w-40 xl:-right-28 xl:w-44">
              {heroStats.map((stat) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  prefix={stat.prefix}
                  variant={stat.variant}
                  delay={stat.delay}
                />
              ))}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

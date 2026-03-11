import Image from "next/image";

import SectionHeader from "@/components/shared/SectionHeader";
import { depoimentos } from "@/data/depoimentos";
import { medico } from "@/data/medico";
import { starsFromRating } from "@/lib/utils";

export default function Depoimentos() {
  return (
    <section id="avaliacoes" className="bg-[var(--background)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Relatos de pacientes sobre a experiencia de atendimento."
          description="Percepcao de quem passou por consulta, avaliacao e acompanhamento com escuta atenta."
          centered
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative">
            <div className="absolute -left-5 top-10 hidden h-32 w-32 rounded-full bg-[rgba(143,175,163,0.22)] blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_24px_70px_rgba(36,50,58,0.1)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[var(--surface)]">
                <Image
                  src={medico.depoimentosFoto}
                  alt={`Retrato de ${medico.nome}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {depoimentos.map((depoimento) => (
              <article
                key={depoimento.id}
                className="flex h-full flex-col rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="flex gap-1 text-[var(--accent)]">
                  {starsFromRating(depoimento.avaliacao).map(
                    (filled, index) => (
                      <span key={`${depoimento.id}-${index}`}>
                        {filled ? "*" : "."}
                      </span>
                    ),
                  )}
                </div>
                <p className="mt-5 flex-1 text-base leading-7 text-[var(--muted)]">
                  “{depoimento.texto}”
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  {depoimento.nome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

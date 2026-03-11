"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import SectionHeader from "@/components/shared/SectionHeader";
import { depoimentos } from "@/data/depoimentos";
import { medico } from "@/data/medico";
import { starsFromRating } from "@/lib/utils";

export default function Depoimentos() {
  const pages = useMemo(() => {
    const pageSize = 2;

    return Array.from(
      { length: Math.ceil(depoimentos.length / pageSize) },
      (_, index) =>
        depoimentos.slice(index * pageSize, index * pageSize + pageSize),
    );
  }, []);

  const [activePage, setActivePage] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-[linear-gradient(180deg,rgba(36,50,58,0.08)_0%,rgba(36,50,58,0.03)_100%),linear-gradient(180deg,#ffffff_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Relatos de pacientes sobre a experiência de atendimento."
          description="Percepção de quem passou por consulta, avaliação e acompanhamento com escuta atenta."
          centered
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-5 top-10 hidden h-32 w-32 rounded-full bg-[rgba(79,111,174,0.24)] blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_24px_70px_rgba(36,50,58,0.1)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-(--surface)">
                <Image
                  src={medico.depoimentosFoto}
                  alt={`Retrato de ${medico.nome}`}
                  fill
                  className="object-cover"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </div>

          <div className="lg:self-center">
            <div className="grid gap-5 sm:grid-cols-2">
              {pages[activePage].map((depoimento) => (
                <article
                  key={depoimento.id}
                  className="flex h-full min-h-100 flex-col rounded-[1.8rem] border border-(--border) bg-transparent p-7 lg:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-(--border)">
                      <Image
                        src={depoimento.foto}
                        alt={`Foto de ${depoimento.nome}`}
                        fill
                        className="object-cover object-center"
                        quality={100}
                        sizes="64px"
                      />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--foreground)">
                      Paciente verificado
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-amber-300 ">
                    {starsFromRating(depoimento.avaliacao).map(
                      (filled, index) => (
                        <span
                          key={`${depoimento.id}-${index}`}
                          className="text-xl leading-none"
                        >
                          {filled ? "★" : "☆"}
                        </span>
                      ),
                    )}
                  </div>
                  <p className="mt-5 flex-1 text-base leading-7 text-(--muted)">
                    “{depoimento.texto}”
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-(--foreground)">
                    {depoimento.nome}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-2.5">
              {pages.map((_, index) => {
                const isActive = index === activePage;

                return (
                  <button
                    key={`depoimentos-page-${index}`}
                    type="button"
                    aria-label={`Ir para página ${index + 1} de depoimentos`}
                    aria-current={isActive}
                    onClick={() => setActivePage(index)}
                    className={`h-2.5 w-2.5 rounded-full border border-(--primary) ${
                      isActive ? "bg-(--primary)" : "bg-transparent"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

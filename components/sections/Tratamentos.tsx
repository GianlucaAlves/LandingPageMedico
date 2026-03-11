"use client";

import { useMemo, useState } from "react";

import FeatureIcon from "@/components/shared/FeatureIcon";
import SectionHeader from "@/components/shared/SectionHeader";
import { tratamentos } from "@/data/tratamentos";

export default function Tratamentos() {
  const destaques = tratamentos.map((tratamento) => tratamento.titulo);
  const [activeId, setActiveId] = useState(tratamentos[0]?.id ?? "");

  const activeTratamento = useMemo(
    () =>
      tratamentos.find((tratamento) => tratamento.id === activeId) ??
      tratamentos[0],
    [activeId],
  );

  return (
    <section id="tratamentos" className="bg-[var(--surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Condicoes atendidas"
          title="Hemorroidas, fissuras, fistulas, constipacao e outros sintomas que precisam de atencao logo no inicio."
          description="Veja as principais queixas acompanhadas no consultorio e toque na condicao com a qual voce mais se identifica para entender melhor os sintomas e quando vale procurar avaliacao."
          centered
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {destaques.map((destaque) => (
            <button
              key={destaque}
              type="button"
              onClick={() => {
                const target = tratamentos.find(
                  (tratamento) => tratamento.titulo === destaque,
                );
                if (target) setActiveId(target.id);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                activeTratamento?.titulo === destaque
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--surface)] shadow-[0_16px_30px_rgba(94,124,138,0.18)]"
                  : "border-[var(--border)] bg-[rgba(143,175,163,0.1)] text-[var(--primary)] hover:border-[var(--secondary)]"
              }`}
            >
              {destaque}
            </button>
          ))}
        </div>

        {activeTratamento ? (
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background)] shadow-[0_22px_55px_rgba(36,50,58,0.07)]">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="border-b border-[var(--border)] bg-[rgba(143,175,163,0.08)] p-7 lg:border-b-0 lg:border-r">
                <div className="flex items-start gap-4">
                  <FeatureIcon name={activeTratamento.icone} tone="blue" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                      Condicao em destaque
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                      {activeTratamento.titulo}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-[var(--muted)]">
                  {activeTratamento.descricao}
                </p>

                <div className="mt-8 rounded-3xl bg-[var(--surface)] px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    Quando costuma chamar atencao
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Esses sinais nao substituem consulta, mas ajudam voce a
                    perceber quando vale investigar o quadro com mais cuidado.
                  </p>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                  Sintomas e sinais relacionados
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeTratamento.sinais.map((sinal) => (
                    <div
                      key={sinal}
                      className="rounded-3xl border border-[rgba(201,169,138,0.45)] bg-[rgba(201,169,138,0.12)] px-5 py-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-lg text-[var(--accent)]">
                          !
                        </span>
                        <p className="text-base leading-7 text-[var(--foreground)]">
                          {sinal}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                    Como a consulta ajuda
                  </p>
                  <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                    Na avaliacao, o medico entende a historia dos sintomas,
                    examina com cuidado quando necessario e orienta o melhor
                    caminho: tratamento clinico, exames ou acompanhamento mais
                    especifico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";

import FeatureIcon from "@/components/shared/FeatureIcon";
import SectionHeader from "@/components/shared/SectionHeader";
import { medico } from "@/data/medico";
import { tratamentos } from "@/data/tratamentos";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Tratamentos() {
  const destaques = tratamentos.map((tratamento) => tratamento.queixa);
  const [activeId, setActiveId] = useState(tratamentos[0]?.id ?? "");

  const activeTratamento = useMemo(
    () =>
      tratamentos.find((tratamento) => tratamento.id === activeId) ??
      tratamentos[0],
    [activeId],
  );

  return (
    <section id="tratamentos" className="bg-(--surface) py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Condicoes atendidas"
          title="Sintomas e condicoes que merecem atencao logo no inicio"
          description="Comece pela queixa que mais se parece com o que voce esta sentindo. Em poucos segundos, a secao deve ajudar voce a se reconhecer, entender o que isso pode indicar e saber qual atitude tomar agora."
          centered
        />

        <nav aria-label="Queixas e sintomas mais comuns" className="mt-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destaques.map((destaque) => (
              <button
                key={destaque}
                type="button"
                aria-pressed={activeTratamento?.queixa === destaque}
                onClick={() => {
                  const target = tratamentos.find(
                    (tratamento) => tratamento.queixa === destaque,
                  );
                  if (target) setActiveId(target.id);
                }}
                className={`min-h-12 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--cta) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface) ${
                  activeTratamento?.queixa === destaque
                    ? "border-(--primary) bg-(--primary) text-(--surface) shadow-[0_16px_30px_rgba(94,124,138,0.22)]"
                    : "border-(--border) bg-[rgba(143,175,163,0.1)] text-(--primary) hover:border-(--secondary)"
                }`}
              >
                {destaque}
              </button>
            ))}
          </div>
        </nav>

        {activeTratamento ? (
          <div
            className="mt-12 overflow-hidden rounded-4xl border border-(--border) bg-(--background) shadow-[0_22px_55px_rgba(36,50,58,0.07)]"
            aria-live="polite"
          >
            <div className="border-b border-(--border) bg-[linear-gradient(135deg,rgba(143,175,163,0.12),rgba(94,124,138,0.08))] px-6 py-5 sm:px-8">
              <div className="mb-4 inline-flex rounded-full bg-(--surface) px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-(--primary)">
                Queixa ativa: {activeTratamento.queixa}
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--primary)">
                O que seus sintomas podem indicar
              </p>
              <div className="mt-4 flex items-center gap-4">
                <FeatureIcon name={activeTratamento.icone} tone="blue" />
                <div>
                  <h3 className="text-2xl font-semibold text-(--foreground) sm:text-3xl">
                    {activeTratamento.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-(--muted)">
                    {activeTratamento.resumoLeigo}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
              <section className="rounded-3xl border border-(--border) bg-(--surface) p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--primary)">
                  O que pode estar acontecendo
                </p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-(--muted)">
                  {activeTratamento.descricao}
                </p>

                <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[rgba(143,175,163,0.12)] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-(--foreground)">
                      Quer entender esse sintoma com seguranca?
                    </p>
                    <p className="mt-1 text-sm text-(--muted)">
                      Avaliacao individual, com privacidade e orientacao clara
                      sobre o proximo passo.
                    </p>
                  </div>
                  <a
                    href={buildWhatsAppUrl(
                      medico.whatsapp,
                      `Ola, gostaria de agendar avaliacao sobre ${activeTratamento.queixa}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-(--cta) px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(79,111,174,0.18)] transition hover:brightness-105"
                  >
                    Agendar avaliacao proctologica
                  </a>
                </div>
              </section>

              <section className="rounded-3xl border border-(--border) bg-(--surface) p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--primary)">
                  Sinais comuns
                </p>
                <ul
                  className="mt-5 space-y-4"
                  aria-label="Sinais comuns relacionados"
                >
                  {activeTratamento.sinais.map((sinal) => (
                    <li
                      key={sinal.texto}
                      className="flex items-start gap-4 rounded-2xl bg-[rgba(201,169,138,0.12)] px-4 py-4"
                    >
                      <span
                        className={`mt-0.5 inline-flex min-w-24 justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                          sinal.nivel === "Importante"
                            ? "bg-[rgba(201,169,138,0.24)] text-(--foreground)"
                            : sinal.nivel === "Atencao"
                              ? "bg-[rgba(143,175,163,0.22)] text-(--primary)"
                              : "bg-(--surface) text-(--muted)"
                        }`}
                      >
                        {sinal.nivel}
                      </span>
                      <p className="text-base leading-7 text-(--foreground)">
                        {sinal.texto}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        ) : null}

        {activeTratamento ? (
          <div className="mt-8 rounded-4xl border border-(--border) bg-[linear-gradient(135deg,rgba(255,253,252,0.96),rgba(143,175,163,0.1))] p-6 shadow-[0_24px_60px_rgba(36,50,58,0.08)] sm:p-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--primary)">
                Como a consulta ajuda
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-(--foreground) sm:text-3xl">
                Avaliacao individual para entender o sintoma com seguranca e
                definir o proximo passo.
              </h3>
              <p className="mt-4 text-base leading-8 text-(--muted)">
                Na consulta, o medico escuta sua historia, entende a intensidade
                dos sintomas, examina com cuidado quando necessario e orienta
                com clareza se o melhor caminho e tratamento clinico, exames ou
                acompanhamento mais especifico.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-(--border) bg-(--surface) px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-(--foreground)">
                  Se voce se reconheceu nesses sinais, nao precisa decidir
                  sozinho.
                </p>
                <p className="mt-1 text-sm text-(--muted)">
                  Atendimento com privacidade, acolhimento e orientacao clara
                  sobre exames, tratamento e o que fazer agora.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppUrl(
                    medico.whatsapp,
                    `Ola, gostaria de entender com seguranca sintomas relacionados a ${activeTratamento.queixa}`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-(--cta) px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(79,111,174,0.18)] transition hover:brightness-105"
                >
                  Quero entender esse sintoma com seguranca
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-(--border) px-6 py-3 text-sm font-semibold text-(--foreground) transition hover:border-(--primary) hover:text-(--primary)"
                >
                  Ver local e contato
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

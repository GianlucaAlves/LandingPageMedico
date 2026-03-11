"use client";

import { useMemo, useState } from "react";

import SectionHeader from "@/components/shared/SectionHeader";
import { faq, faqCategories, type FaqCategory } from "@/data/faq";
import { medico } from "@/data/medico";
import { buildWhatsAppUrl } from "@/lib/utils";

function CategoryIcon({ icon }: { icon: string }) {
  const common = "h-5 w-5 stroke-[1.8]";

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common}>
      {icon === "conversation" ? (
        <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v5A2.5 2.5 0 0 1 16.5 15H11l-4 3v-3.2A2.5 2.5 0 0 1 5 12.5v-5Z" />
      ) : null}
      {icon === "search" ? (
        <>
          <circle cx="10.5" cy="10.5" r="4.5" />
          <path d="M14 14l4.5 4.5" />
        </>
      ) : null}
      {icon === "privacy" ? (
        <>
          <path d="M12 3l6 2.5v4.7c0 4-2.7 7-6 8.8-3.3-1.8-6-4.8-6-8.8V5.5L12 3Z" />
          <path d="M9.5 11.8 11 13l3.5-3.6" />
        </>
      ) : null}
      {icon === "check" ? <path d="M5 12.5 9.2 17 19 7.5" /> : null}
    </svg>
  );
}

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>(
    faqCategories[0].id,
  );
  const [openQuestion, setOpenQuestion] = useState<string>(
    faq[0]?.pergunta ?? "",
  );

  const groupedFaq = useMemo(
    () =>
      faqCategories.map((category) => ({
        ...category,
        items: faq.filter((item) => item.categoria === category.id),
      })),
    [],
  );

  const activeGroup =
    groupedFaq.find((category) => category.id === activeCategory) ??
    groupedFaq[0];
  const activeQuestion =
    activeGroup?.items.find((item) => item.pergunta === openQuestion)
      ?.pergunta ??
    activeGroup?.items[0]?.pergunta ??
    "";

  return (
    <section id="faq" className="bg-(--surface) py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Jornada do paciente"
          title="Duvidas comuns antes da sua consulta"
          description="Respostas curtas e claras para que voce entenda o que esperar, reduza a ansiedade e saiba qual o proximo passo antes de agendar."
          centered
        />

        <div
          className="mt-8 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Categorias da FAQ"
        >
          {faqCategories.map((category) => (
            <button
              key={category.id}
              id={`faq-tab-${category.id}`}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`faq-panel-${category.id}`}
              onClick={() => {
                setActiveCategory(category.id);
                const firstQuestion = faq.find(
                  (item) => item.categoria === category.id,
                )?.pergunta;
                if (firstQuestion) setOpenQuestion(firstQuestion);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--cta) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface) ${
                activeCategory === category.id
                  ? "border-(--primary) bg-(--primary) text-(--surface) shadow-[0_16px_30px_rgba(94,124,138,0.18)]"
                  : "border-(--border) bg-(--background) text-(--primary) hover:border-(--secondary)"
              }`}
            >
              {category.chip}
            </button>
          ))}
        </div>

        {activeGroup ? (
          <div
            id={`faq-panel-${activeGroup.id}`}
            role="tabpanel"
            aria-labelledby={`faq-tab-${activeGroup.id}`}
            className="mt-10 overflow-hidden rounded-4xl border border-(--border) bg-(--background) shadow-[0_18px_42px_rgba(36,50,58,0.06)]"
          >
            <div className="border-b border-(--border) bg-[rgba(143,175,163,0.08)] px-6 py-6 sm:px-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(94,124,138,0.18)] bg-[rgba(143,175,163,0.14)] text-(--primary)">
                  <CategoryIcon icon={activeGroup.icon} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--primary)">
                    Categoria ativa
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-(--foreground)">
                    {activeGroup.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-(--muted)">
                    {activeGroup.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 px-4 py-4 sm:px-6 sm:py-6">
              {activeGroup.items.map((item) => {
                const isOpen = activeQuestion === item.pergunta;
                const slug = toSlug(item.pergunta);
                const questionId = `faq-question-${slug}`;
                const answerId = `faq-answer-${slug}`;

                return (
                  <div
                    key={item.pergunta}
                    className={`overflow-hidden rounded-[1.6rem] border transition duration-300 ${
                      isOpen
                        ? "border-(--secondary) bg-(--surface) shadow-[0_18px_36px_rgba(94,124,138,0.12)]"
                        : "border-(--border) bg-(--surface)"
                    }`}
                  >
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenQuestion(item.pergunta)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--cta) focus-visible:ring-inset"
                    >
                      <span className="text-base font-semibold text-(--foreground) sm:text-lg">
                        {item.pergunta}
                      </span>
                      <span
                        className={`text-2xl leading-none text-(--primary) transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-(--border) px-5 py-5">
                          <p className="text-base leading-7 text-(--muted)">
                            {item.resposta}
                          </p>

                          <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-[rgba(143,175,163,0.12)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-medium text-(--foreground)">
                              Ainda com duvida sobre este caso? Agende sua
                              avaliacao.
                            </p>
                            <a
                              href={buildWhatsAppUrl(
                                medico.whatsapp,
                                `Ola, gostaria de tirar uma duvida sobre: ${item.pergunta}`,
                              )}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex min-h-11 items-center justify-center rounded-full bg-(--cta) px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105"
                            >
                              Agendar avaliacao
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="mt-6 text-center text-sm text-(--muted)">
          Se preferir, voce tambem pode falar direto pelo WhatsApp sem passar
          por todas as perguntas.
        </div>
      </div>
    </section>
  );
}

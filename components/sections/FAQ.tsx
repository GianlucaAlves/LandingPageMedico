"use client";

import { useMemo, useState } from "react";

import SectionHeader from "@/components/shared/SectionHeader";
import { faq, faqCategories, type FaqCategory } from "@/data/faq";

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
          title="Dúvidas comuns antes da sua consulta"
          description="Respostas curtas e claras para que você entenda o que esperar, reduza a ansiedade e saiba qual o próximo passo antes de agendar."
          centered
        />

        <p className="mt-7 text-center text-sm font-medium text-(--muted)">
          Selecione uma aba para explorar cada etapa.
        </p>

        <div
          className="mt-5 flex items-end gap-5 overflow-x-auto border-b border-(--border) pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--cta) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface) ${
                activeCategory === category.id
                  ? "border-(--cta) text-(--foreground)"
                  : "border-transparent text-(--muted) hover:border-(--secondary) hover:text-(--foreground)"
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
            className="mt-10"
          >
            <div className="border-b border-(--border) pb-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--primary)">
                  Categoria ativa
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-(--foreground)">
                  {activeGroup.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-(--muted)">
                  {activeGroup.description}
                </p>
              </div>
            </div>

            <div className="divide-y divide-(--border)">
              {activeGroup.items.map((item) => {
                const isOpen = activeQuestion === item.pergunta;
                const slug = toSlug(item.pergunta);
                const questionId = `faq-question-${slug}`;
                const answerId = `faq-answer-${slug}`;

                return (
                  <div key={item.pergunta} className="py-4">
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenQuestion(item.pergunta)}
                      className={`flex w-full items-center justify-between gap-4 border-l-4 px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--cta) focus-visible:ring-inset ${
                        isOpen
                          ? "border-l-(--cta) bg-[rgba(79,111,174,0.08)]"
                          : "border-l-(--secondary) bg-transparent hover:bg-[rgba(94,124,138,0.06)]"
                      }`}
                    >
                      <div>
                        <span className="text-base font-semibold text-(--foreground) sm:text-lg">
                          {item.pergunta}
                        </span>
                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-(--muted)">
                          {isOpen
                            ? "Clique para recolher"
                            : "Clique para expandir"}
                        </p>
                      </div>
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
                        <div className="border-l-4 border-l-(--cta) px-4 pb-5 pt-3">
                          <p className="max-w-3xl text-base leading-7 text-(--muted)">
                            {item.resposta}
                          </p>
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
          Se preferir, você também pode falar direto pelo WhatsApp sem passar
          por todas as perguntas.
        </div>
      </div>
    </section>
  );
}

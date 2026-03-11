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
        <>
          <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v5A2.5 2.5 0 0 1 16.5 15H11l-4 3v-3.2A2.5 2.5 0 0 1 5 12.5v-5Z" />
        </>
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
      {icon === "check" ? (
        <>
          <path d="M5 12.5 9.2 17 19 7.5" />
        </>
      ) : null}
    </svg>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>(
    faqCategories[0].id,
  );
  const [openQuestion, setOpenQuestion] = useState<string>(
    faq[0]?.pergunta ?? "",
  );

  const visibleCategories = useMemo(
    () =>
      faqCategories.map((category) => ({
        ...category,
        items: faq.filter((item) => item.categoria === category.id),
      })),
    [],
  );

  return (
    <section id="faq" className="bg-[var(--surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Jornada do paciente"
          title="Duvidas comuns antes da sua consulta"
          description="Respostas claras para que voce se sinta seguro desde o primeiro contato, da avaliacao inicial ate exames e tratamento."
          centered
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id);
                const firstQuestion = faq.find(
                  (item) => item.categoria === category.id,
                )?.pergunta;
                if (firstQuestion) setOpenQuestion(firstQuestion);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category.id
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--surface)] shadow-[0_16px_30px_rgba(94,124,138,0.18)]"
                  : "border-[var(--border)] bg-[var(--background)] text-[var(--primary)] hover:border-[var(--secondary)]"
              }`}
            >
              {category.chip}
            </button>
          ))}
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(201,169,138,0.65),transparent)] lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {visibleCategories.map((category, index) => {
              const isActiveCategory = activeCategory === category.id;

              return (
                <div key={category.id} className="relative">
                  <div className="mb-4 hidden justify-center lg:flex">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory(category.id);
                        const firstQuestion = category.items[0]?.pergunta;
                        if (firstQuestion) setOpenQuestion(firstQuestion);
                      }}
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition ${
                        isActiveCategory
                          ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--surface)] shadow-[0_0_0_10px_rgba(94,124,138,0.08)]"
                          : "border-[var(--border)] bg-[var(--surface)] text-[var(--primary)]"
                      }`}
                      aria-label={`Abrir categoria ${category.title}`}
                    >
                      <CategoryIcon icon={category.icon} />
                    </button>
                  </div>

                  <div
                    className={`h-full rounded-[2rem] border p-6 transition duration-300 ${
                      isActiveCategory
                        ? "border-[var(--secondary)] bg-[var(--background)] shadow-[0_24px_50px_rgba(94,124,138,0.12)]"
                        : "border-[var(--border)] bg-[var(--surface)] shadow-[0_14px_30px_rgba(36,50,58,0.04)]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                          isActiveCategory
                            ? "border-[rgba(94,124,138,0.18)] bg-[rgba(143,175,163,0.14)] text-[var(--primary)]"
                            : "border-[var(--border)] bg-[var(--background)] text-[var(--muted)]"
                        }`}
                      >
                        <CategoryIcon icon={category.icon} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                          Etapa {index + 1}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                          {category.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {category.items.map((item) => {
                        const isOpen =
                          isActiveCategory && openQuestion === item.pergunta;

                        return (
                          <div
                            key={item.pergunta}
                            className={`overflow-hidden rounded-[1.6rem] border transition duration-300 ${
                              isOpen
                                ? "border-[var(--secondary)] bg-[var(--surface)] shadow-[0_18px_36px_rgba(94,124,138,0.12)]"
                                : "border-[var(--border)] bg-[var(--surface)]"
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setActiveCategory(category.id);
                                setOpenQuestion((current) =>
                                  current === item.pergunta && isActiveCategory
                                    ? ""
                                    : item.pergunta,
                                );
                              }}
                              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                            >
                              <span className="text-base font-semibold text-[var(--foreground)]">
                                {item.pergunta}
                              </span>
                              <span
                                className={`text-2xl leading-none text-[var(--primary)] transition-transform duration-300 ${
                                  isOpen ? "rotate-45" : "rotate-0"
                                }`}
                              >
                                +
                              </span>
                            </button>

                            <div
                              className={`grid transition-all duration-300 ${
                                isOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <div className="border-t border-[var(--border)] px-5 py-4 text-base leading-7 text-[var(--muted)]">
                                  {item.resposta}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={buildWhatsAppUrl(
              medico.whatsapp,
              "Ola, ainda fiquei com algumas duvidas antes da consulta",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--cta)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(79,111,174,0.22)] transition hover:brightness-105"
          >
            Ainda ficou com duvida? Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

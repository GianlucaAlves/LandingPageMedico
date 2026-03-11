"use client";

import Image from "next/image";
import { useState } from "react";

import { medico } from "@/data/medico";
import { buildWhatsAppUrl, formatPhone } from "@/lib/utils";

export default function Localizacao() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFoto = medico.consultorioFotos[activeIndex];

  function goToSlide(nextIndex: number) {
    const total = medico.consultorioFotos.length;
    const normalized = (nextIndex + total) % total;
    setActiveIndex(normalized);
  }

  return (
    <section id="contato" className="bg-(--background) py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <div className="overflow-hidden rounded-4xl bg-(--surface) shadow-[0_20px_45px_rgba(36,50,58,0.06)]">
            <div className="aspect-16/11 w-full">
              <iframe
                title="Mapa de localizacao"
                src="https://www.google.com/maps?q=Jacarei%20SP&z=14&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl bg-(--surface) shadow-[0_18px_45px_rgba(36,50,58,0.06)]">
            <div className="relative aspect-4/3 w-full">
              <Image
                key={activeFoto.src}
                src={activeFoto.src}
                alt={activeFoto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 720px"
              />

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  aria-label="Foto anterior do consultorio"
                  onClick={() => goToSlide(activeIndex - 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,253,252,0.88)] text-(--foreground) shadow-md backdrop-blur transition hover:scale-105"
                >
                  ←
                </button>

                <div className="flex items-center gap-2 rounded-full bg-[rgba(255,253,252,0.82)] px-3 py-2 backdrop-blur">
                  {medico.consultorioFotos.map((foto, index) => (
                    <button
                      key={foto.src}
                      type="button"
                      aria-label={`Ir para foto ${index + 1} do consultorio`}
                      aria-pressed={activeIndex === index}
                      onClick={() => goToSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        activeIndex === index
                          ? "bg-(--cta) scale-110"
                          : "bg-[rgba(36,50,58,0.28)] hover:bg-[rgba(36,50,58,0.45)]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Proxima foto do consultorio"
                  onClick={() => goToSlide(activeIndex + 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,253,252,0.88)] text-(--foreground) shadow-md backdrop-blur transition hover:scale-105"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-(--border) bg-(--surface) p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-(--primary)">
            Localizacao
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-(--foreground)">
            Atendimento em {medico.cidade}
          </h2>
          <p className="mt-4 text-base leading-8 text-(--muted)">
            {medico.endereco}
          </p>

          <div className="mt-8 rounded-3xl bg-(--background) px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--muted)">
              Horarios
            </p>
            <div className="mt-4 space-y-3">
              {medico.horarios.map((horario) => (
                <p key={horario} className="text-base text-(--foreground)">
                  {horario}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-3xl bg-(--background) px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--muted)">
              Contato
            </p>
            <p className="mt-2 text-lg font-semibold text-(--foreground)">
              {formatPhone(medico.whatsapp)}
            </p>
            <p className="mt-2 text-sm text-(--muted)">
              Envie uma mensagem para tirar dúvidas e solicitar agendamento.
            </p>
          </div>

          <div className="mt-5 rounded-3xl bg-(--foreground) px-5 py-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
              Agendamento rápido
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight">
              Agende sua consulta com orientação clara desde o primeiro contato.
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/85">
              Atendimento em {medico.cidade} com privacidade, acolhimento e foco
              no tratamento adequado para o seu caso.
            </p>
            <a
              href={buildWhatsAppUrl(
                medico.whatsapp,
                "Olá, gostaria de agendar uma consulta",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-(--surface) px-6 py-3 text-sm font-semibold text-(--foreground) transition hover:brightness-95"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <p className="mt-5 text-sm text-(--muted)">
            Use as setas ou as bolinhas para visualizar o ambiente do
            consultório.
          </p>
        </div>
      </div>
    </section>
  );
}

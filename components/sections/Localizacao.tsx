import Image from "next/image";

import { medico } from "@/data/medico";
import { formatPhone } from "@/lib/utils";

export default function Localizacao() {
  return (
    <section id="contato" className="bg-[var(--background)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <div className="overflow-hidden rounded-4xl bg-[var(--surface)] shadow-[0_20px_45px_rgba(36,50,58,0.06)]">
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

          <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-4">
              {medico.consultorioFotos.map((foto) => (
                <article
                  key={foto.src}
                  className="min-w-[78%] snap-start sm:min-w-[48%] lg:min-w-[46%]"
                >
                  <div className="overflow-hidden rounded-4xl bg-[var(--surface)] shadow-[0_18px_45px_rgba(36,50,58,0.06)]">
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={foto.src}
                        alt={foto.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 360px"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Localizacao
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">
            Atendimento em {medico.cidade}
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            {medico.endereco}
          </p>

          <div className="mt-8 rounded-3xl bg-[var(--background)] px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              Horarios
            </p>
            <div className="mt-4 space-y-3">
              {medico.horarios.map((horario) => (
                <p key={horario} className="text-base text-[var(--foreground)]">
                  {horario}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-3xl bg-[var(--background)] px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              Contato
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              {formatPhone(medico.whatsapp)}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Envie uma mensagem para tirar duvidas e solicitar agendamento.
            </p>
          </div>

          <p className="mt-5 text-sm text-[var(--muted)]">
            Deslize as fotos ao lado para visualizar o ambiente do consultorio.
          </p>
        </div>
      </div>
    </section>
  );
}

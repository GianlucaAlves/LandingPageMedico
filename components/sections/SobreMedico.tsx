import Image from "next/image";

import SectionHeader from "@/components/shared/SectionHeader";
import { medico } from "@/data/medico";

export default function SobreMedico() {
  return (
    <section id="sobre" className="bg-[var(--background)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-[rgba(143,175,163,0.22)] blur-3xl lg:block" />
          <div className="absolute -bottom-6 right-4 hidden h-32 w-32 rounded-full bg-[rgba(201,169,138,0.18)] blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[var(--surface)]">
              <Image
                src={medico.sobreFoto}
                alt={`Foto de ${medico.nome}`}
                fill
                className="object-cover transition duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Sobre o medico"
            title="Experiencia clinica com escuta atenta e conduta baseada em evidencia."
            description={medico.resumo}
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
            {medico.biografia.slice(0, 2).map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {medico.credenciais.map((credencial) => (
              <div
                key={credencial}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm font-medium text-[var(--foreground)]"
              >
                {credencial}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_40px_rgba(36,50,58,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Formacao e atuacao
            </p>
            <div className="mt-5 space-y-4">
              {medico.trajetoria.slice(0, 3).map((item) => (
                <div
                  key={`${item.periodo}-${item.titulo}`}
                  className="flex gap-4"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {item.titulo}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.instituicao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm">
              CRM {medico.crm}
            </span>
            <span className="rounded-full bg-[rgba(143,175,163,0.12)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Atendimento em {medico.cidade}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

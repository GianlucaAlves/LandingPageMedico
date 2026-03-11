import Image from "next/image";

import SectionHeader from "@/components/shared/SectionHeader";
import { medico } from "@/data/medico";

export default function SobreMedico() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-slate-100">
            <Image
              src={medico.sobreFoto}
              alt={`Foto de ${medico.nome}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Sobre o medico"
            title="Experiencia clinica com escuta atenta e conduta baseada em evidencia."
            description={medico.resumo}
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
            {medico.biografia.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {medico.credenciais.map((credencial) => (
              <div
                key={credencial}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700"
              >
                {credencial}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 rounded-3xl bg-blue-700 px-6 py-5 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-blue-100">CRM</p>
              <p className="mt-2 text-lg font-semibold">{medico.crm}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-blue-100">Cidade</p>
              <p className="mt-2 text-lg font-semibold">{medico.cidade}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
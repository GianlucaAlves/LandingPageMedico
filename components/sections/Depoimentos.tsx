import SectionHeader from "@/components/shared/SectionHeader";
import { depoimentos } from "@/data/depoimentos";
import { starsFromRating } from "@/lib/utils";

export default function Depoimentos() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Relatos de pacientes sobre a experiencia de atendimento."
          description="Acolhimento, privacidade e explicacoes claras fazem parte de cada consulta."
          centered
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article
              key={depoimento.id}
              className="flex h-full flex-col rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex gap-1 text-amber-500">
                {starsFromRating(depoimento.avaliacao).map((filled, index) => (
                  <span key={`${depoimento.id}-${index}`}>{filled ? "*" : "."}</span>
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-7 text-slate-600">“{depoimento.texto}”</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
                {depoimento.nome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
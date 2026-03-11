import FeatureIcon from "@/components/shared/FeatureIcon";
import SectionHeader from "@/components/shared/SectionHeader";
import { tratamentos } from "@/data/tratamentos";

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tratamentos"
          title="Abordagem completa para sintomas, diagnostico e tratamento especializado."
          description="Cada conduta e planejada a partir do seu quadro clinico, com explicacao clara, acompanhamento e foco em recuperacao segura."
          centered
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tratamentos.map((tratamento) => (
            <article
              key={tratamento.id}
              className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(30,64,175,0.12)]"
            >
              <FeatureIcon name={tratamento.icone} tone="blue" />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{tratamento.titulo}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{tratamento.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
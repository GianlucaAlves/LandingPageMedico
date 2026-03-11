import FeatureIcon from "@/components/shared/FeatureIcon";
import SectionHeader from "@/components/shared/SectionHeader";
import { exames } from "@/data/exames";

export default function Exames() {
  return (
    <section id="exames" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Exames"
          title="Investigacao precisa com exames voltados a prevencao e diagnostico."
          description="Exames bem indicados ajudam a esclarecer causas de dor, sangramento, inflamacao e alteracoes intestinais com mais agilidade."
          centered
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exames.map((exame) => (
            <article
              key={exame.id}
              className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
            >
              <FeatureIcon name={exame.icone} tone="slate" />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{exame.titulo}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{exame.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
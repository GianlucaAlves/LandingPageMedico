import SectionHeader from "@/components/shared/SectionHeader";
import { medico } from "@/data/medico";

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="bg-[var(--surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trajetoria profissional"
          title="Formacao, aperfeicoamento e experiencia clinica em uma linha do tempo objetiva."
          description="Resumo da evolucao profissional do medico, com espacos prontos para receber os dados oficiais das instituicoes e titulacoes."
          centered
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {medico.trajetoria.map((item, index) => (
            <article
              key={`${item.periodo}-${index}`}
              className="relative overflow-hidden rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_18px_45px_rgba(36,50,58,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[var(--secondary)] hover:shadow-[0_22px_55px_rgba(94,124,138,0.1)]"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--accent)]" />
              <div className="pl-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                  {item.periodo}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">
                  {item.instituicao}
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  {item.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeader from "@/components/shared/SectionHeader";

const sinais = [
  "Sangramento ao evacuar ou presenca de sangue nas fezes.",
  "Dor anal persistente, ardor ou dificuldade para evacuar.",
  "Mudanca no habito intestinal por mais de duas semanas.",
  "Sensacao de caroço, inchaco ou secrecao na regiao anal.",
  "Perda de peso, anemia ou cansaco associado a sintomas intestinais.",
  "Historia familiar de doencas intestinais ou cancer colorretal.",
];

export default function SinaisAlerta() {
  return (
    <section className="bg-[var(--background)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Quando procurar ajuda"
          title="Sinais de alerta que merecem avaliacao clinica e proctologica."
          description="Nem todo sintoma e grave, mas ignorar sinais persistentes atrasa o diagnostico e pode piorar o tratamento."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {sinais.map((sinal) => (
            <div
              key={sinal}
              className="flex gap-4 rounded-3xl border border-[rgba(201,169,138,0.45)] bg-[rgba(201,169,138,0.12)] px-5 py-5"
            >
              <span className="text-xl text-[var(--accent)]">!</span>
              <p className="text-base leading-7 text-[var(--foreground)]">
                {sinal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

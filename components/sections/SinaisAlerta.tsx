import SectionHeader from "@/components/shared/SectionHeader";

const sinais = [
  "Sangramento ao evacuar ou presença de sangue nas fezes.",
  "Dor anal persistente, ardor ou dificuldade para evacuar.",
  "Mudança no hábito intestinal por mais de duas semanas.",
  "Sensação de caroço, inchaço ou secreção na região anal.",
  "Perda de peso, anemia ou cansaço associado a sintomas intestinais.",
  "História familiar de doenças intestinais ou câncer colorretal.",
];

export default function SinaisAlerta() {
  return (
    <section className="bg-[var(--background)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Quando procurar ajuda"
          title="Sinais de alerta que merecem avaliação clínica e proctológica."
          description="Nem todo sintoma é grave, mas ignorar sinais persistentes atrasa o diagnóstico e pode piorar o tratamento."
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

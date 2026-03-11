import { medico } from "@/data/medico";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="bg-(--cta) py-20 text-white sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
          Agendamento rápido
        </p>
        <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
          Agende sua consulta com atendimento acolhedor e orientação clara desde
          o primeiro contato.
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/85">
          Consultas em {medico.cidade} com foco em diagnóstico preciso,
          privacidade e definição do tratamento adequado para o seu caso.
        </p>
        <a
          href={buildWhatsAppUrl(
            medico.whatsapp,
            "Olá, gostaria de agendar uma consulta",
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-(--surface) px-8 py-4 text-base font-semibold text-(--cta) transition hover:brightness-95"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

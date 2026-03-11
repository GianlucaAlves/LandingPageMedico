import { medico } from "@/data/medico";
import { formatPhone } from "@/lib/utils";

export default function Localizacao() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">
          <div className="aspect-[16/11] w-full">
            <iframe
              title="Mapa de localizacao"
              src="https://www.google.com/maps?q=Jacarei%20SP&z=14&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">Localizacao</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Atendimento em {medico.cidade}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{medico.endereco}</p>

          <div className="mt-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Horarios</p>
            {medico.horarios.map((horario) => (
              <p key={horario} className="text-base text-slate-700">
                {horario}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contato</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{formatPhone(medico.whatsapp)}</p>
            <p className="mt-2 text-sm text-slate-600">
              Envie uma mensagem para tirar duvidas e solicitar agendamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
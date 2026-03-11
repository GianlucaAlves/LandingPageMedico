import Image from "next/image";

import { medico } from "@/data/medico";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(30,64,175,0.08),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">
            Proctologia  |  Cirurgia Geral  |  Atendimento Humanizado
          </p>
          <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.95] text-slate-900 sm:text-6xl lg:text-7xl">
            Cuidado especialista para sua saude intestinal e anorretal.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {medico.nome}, especialista em {medico.especialidade}, oferece consultas, exames e tratamentos com descricao clara do quadro clinico, acolhimento e foco na sua qualidade de vida.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Hemorroidas", "Fissuras", "Exames", medico.cidade].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl(medico.whatsapp, "Ola, gostaria de agendar uma consulta")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(30,64,175,0.2)] transition hover:bg-blue-800"
            >
              Agendar via WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-base font-semibold text-slate-700 transition hover:border-blue-700 hover:text-blue-700"
            >
              Ver tratamentos
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute inset-x-8 inset-y-10 rounded-[3rem] bg-blue-100/80 blur-3xl" />
          <div className="relative">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2.75rem] bg-slate-100 shadow-[0_34px_85px_rgba(15,23,42,0.18)]">
              <Image
                src={medico.heroFoto}
                alt={medico.nome}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
            <div className="mx-4 -mt-10 grid gap-4 rounded-[2rem] bg-white/92 px-5 pb-5 pt-6 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur sm:mx-6 sm:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-semibold text-slate-900">20+</p>
                <p className="text-sm text-slate-500">anos de experiencia</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-semibold text-slate-900">1:1</p>
                <p className="text-sm text-slate-500">atendimento acolhedor</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-semibold text-slate-900">+ de 360</p>
                <p className="text-sm text-slate-500">pacientes atendidos por ano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
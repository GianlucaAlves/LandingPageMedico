'use client';

import { medico } from "@/data/medico";
import { buildWhatsAppUrl } from "@/lib/utils";

const message = "Ola, gostaria de agendar uma consulta";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(medico.whatsapp, message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition hover:scale-105 hover:bg-emerald-600 md:hidden"
    >
      <span className="text-2xl">W</span>
    </a>
  );
}
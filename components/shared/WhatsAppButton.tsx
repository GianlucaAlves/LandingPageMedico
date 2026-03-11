"use client";

import { medico } from "@/data/medico";
import { buildWhatsAppUrl } from "@/lib/utils";

const message = "Olá, gostaria de agendar uma consulta";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(medico.whatsapp, message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.38)] transition hover:scale-105 hover:brightness-105"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.8 11.8 0 0 0 5.74 1.47h.01c6.56 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.14-3.44-8.43ZM12.07 21.8h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.22-3.75.98 1-3.65-.24-.38a9.84 9.84 0 0 1-1.5-5.26c0-5.45 4.43-9.89 9.88-9.89 2.64 0 5.12 1.03 6.99 2.91a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.44 9.9-9.89 9.9Zm5.43-7.4c-.3-.15-1.78-.88-2.06-.99-.28-.1-.48-.15-.69.15-.2.3-.79.99-.97 1.2-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.6.13-.12.3-.3.45-.45.15-.16.2-.26.3-.44.1-.18.05-.33-.02-.48-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.5.08-.76.38-.26.3-1 1-.98 2.44.02 1.43 1.02 2.8 1.16 2.99.15.2 2.02 3.08 4.9 4.32.69.3 1.23.47 1.65.6.7.22 1.33.19 1.83.12.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z"
        />
      </svg>
    </a>
  );
}

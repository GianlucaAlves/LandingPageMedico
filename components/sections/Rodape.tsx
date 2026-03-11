import { medico } from "@/data/medico";

const footerLinks = [
  { href: "#hero", label: "Início" },
  { href: "#tratamentos", label: "Condições" },
  { href: "#sobre", label: "Sobre" },
  { href: "#exames", label: "Exames" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Rodape() {
  return (
    <footer className="border-t border-(--border) bg-(--foreground) py-12 text-[rgba(255,253,252,0.78)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-heading text-3xl text-(--surface)">
            {medico.nome}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[rgba(255,253,252,0.6)]">
            {medico.especialidade} | {medico.crm}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[rgba(255,253,252,0.68)]">
            Este site tem caráter informativo e educacional. O atendimento
            médico depende de avaliação clínica individual, histórico e
            indicações específicas em consulta.
          </p>
        </div>

        <div className="grid gap-3 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-(--surface)"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

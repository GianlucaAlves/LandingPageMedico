import { medico } from "@/data/medico";

const footerLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#exames", label: "Exames" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Rodape() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-heading text-3xl text-white">{medico.nome}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">
            {medico.especialidade}  |  {medico.crm}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            Este site tem carater informativo e educacional. O atendimento medico depende de avaliacao clinica individual, historico e indicacoes especificas em consulta.
          </p>
        </div>

        <div className="grid gap-3 text-sm">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
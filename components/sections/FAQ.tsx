import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes sobre consulta, sintomas e tratamento."
          description="Respostas objetivas para orientar os primeiros passos antes do agendamento."
          centered
        />

        <Accordion type="single" collapsible defaultValue="item-0" className="mt-12 space-y-4">
          {faq.map((item, index) => (
            <AccordionItem key={item.pergunta} value={`item-${index}`}>
              <AccordionTrigger>{item.pergunta}</AccordionTrigger>
              <AccordionContent>{item.resposta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
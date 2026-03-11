import { faqPageSchema } from "@/data/faq";
import { medico } from "@/data/medico";

export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: medico.nome,
  medicalSpecialty: medico.especialidade,
  address: {
    "@type": "PostalAddress",
    addressLocality: medico.cidade,
    streetAddress: medico.endereco,
    addressCountry: "BR",
  },
  areaServed: medico.cidade,
  telephone: `+${medico.whatsapp}`,
  image: medico.heroFoto,
  description: medico.resumo,
};

export const structuredData = [physicianSchema, faqPageSchema];
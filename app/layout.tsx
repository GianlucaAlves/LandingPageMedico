import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import Navbar from "@/components/shared/Navbar";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { structuredData } from "@/lib/schema";

import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dr. Daniel Alves | Clinico geral e proctologista em Jacarei-SP",
  description:
    "Landing page profissional para consultas em clinica geral e proctologia, exames e tratamentos com atendimento acolhedor em Jacarei-SP.",
  keywords: [
    "proctologista em Jacarei",
    "clinico geral em Jacarei",
    "proctologia",
    "hemorroida",
    "fissura anal",
    "exame proctologico",
    "cirurgia geral",
  ],
  openGraph: {
    title: "Dr. Daniel Alves | Clinico geral e proctologista em Jacarei-SP",
    description:
      "Consultas em clinica geral e proctologia, exames e tratamentos com foco em acolhimento, diagnostico preciso e acompanhamento especializado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {structuredData.map((item, index) => (
          <script
            key={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </head>
      <body className="bg-[var(--background)] font-body text-[var(--foreground)] antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

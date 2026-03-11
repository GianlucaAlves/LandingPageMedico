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
  title: "Dr. Daniel Alves | Clínico geral e proctologista em Jacareí-SP",
  description:
    "Landing page profissional para consultas em clínica geral e proctologia, exames e tratamentos com atendimento acolhedor em Jacareí-SP.",
  keywords: [
    "proctologista em Jacareí",
    "clínico geral em Jacareí",
    "proctologia",
    "hemorroida",
    "fissura anal",
    "exame proctologico",
    "cirurgia geral",
  ],
  openGraph: {
    title: "Dr. Daniel Alves | Clínico geral e proctologista em Jacareí-SP",
    description:
      "Consultas em clínica geral e proctologia, exames e tratamentos com foco em acolhimento, diagnóstico preciso e acompanhamento especializado.",
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
      <body className="bg-(--background) font-body text-(--foreground) antialiased">
        {structuredData.map((item, index) => (
          <script
            key={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

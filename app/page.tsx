import CTA from "@/components/sections/CTA";
import Depoimentos from "@/components/sections/Depoimentos";
import Exames from "@/components/sections/Exames";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Localizacao from "@/components/sections/Localizacao";
import Rodape from "@/components/sections/Rodape";
import SinaisAlerta from "@/components/sections/SinaisAlerta";
import SobreMedico from "@/components/sections/SobreMedico";
import Tratamentos from "@/components/sections/Tratamentos";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreMedico />
      <Tratamentos />
      <SinaisAlerta />
      <Exames />
      <Depoimentos />
      <FAQ />
      <CTA />
      <Localizacao />
      <Rodape />
    </main>
  );
}

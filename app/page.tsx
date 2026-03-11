import Depoimentos from "@/components/sections/Depoimentos";
import Exames from "@/components/sections/Exames";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Localizacao from "@/components/sections/Localizacao";
import Rodape from "@/components/sections/Rodape";
import SobreMedico from "@/components/sections/SobreMedico";
import Tratamentos from "@/components/sections/Tratamentos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Tratamentos />
      <SobreMedico />
      <Exames />
      <Depoimentos />
      <FAQ />
      <Localizacao />
      <Rodape />
    </main>
  );
}

import { Section } from "@/components/SectionBase";
import img from "@/assets/img/5.jpg";
import { Filtro } from "@/components/Filtro";
import { Titulo2 } from "@/components/Titulo2";
import { Paragrafo } from "@/components/Paragrafo";

export const History = () => {
  return (
    <Section bgImage={img}>
      <Filtro />
      <div className="container min-h-80 text-[var(--branco)]">
        <div className="py-10">
          <Titulo2 cor="claro">Conheça Fulaninha</Titulo2>
        </div>
        <Paragrafo>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, hic
          autem? Debitis ut aliquid nostrum velit ipsa ad amet, illum nulla ab
          quasi eveniet adipisci. Vel facere perferendis veritatis consequatur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, hic
          autem? Debitis ut aliquid nostrum velit ipsa ad amet, illum nulla ab
          quasi eveniet adipisci. Vel facere perferendis veritatis consequatur.
        </Paragrafo>
      </div>
    </Section>
  );
};

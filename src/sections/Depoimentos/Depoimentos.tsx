import imgDepoimentos from "@/assets/img/img-depoimentos.jpg";
import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";
import { Filtro } from "@/components/Filtro";
import { Carrossel } from "@/components/CarrosselDepoimentos";


export const Depoimentos = () => {
  return (
    <Section id="depoimentos" bgImage={imgDepoimentos} mt="sim">
    <Filtro/>
      <div className="container">
        <div className="py-8">
          <Titulo2 cor="claro">Depoimentos</Titulo2>
        </div>
       <Carrossel/>
      </div>
    </Section>
  );
};

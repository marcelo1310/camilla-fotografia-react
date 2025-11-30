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
        <div className="py-8 text-center">
          <Titulo2 cor="claro">Como cada história foi enxergada por quem esteve do outro lado da lente.</Titulo2>
        </div>
       <Carrossel/>
      </div>
    </Section>
  );
};

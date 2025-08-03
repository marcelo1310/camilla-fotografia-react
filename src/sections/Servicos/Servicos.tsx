import { Titulo2 } from "@/components/Titulo2";
import { Section } from "@/components/SectionBase";
import { Carrossel } from "@/components/CarrosselServicos";



export const Servicos = () => {
  return (
    <Section id="servicos">
      <div className="relative flex flex-col items-center">
        <div className="py-8 z-10">
          <Titulo2 cor="escuro">Serviços</Titulo2>
        </div>
        <Carrossel/>  
      </div>
    </Section>
  );
};

/* 
 <div className="flex max-w-[1200px]">
        <Carrossel />
      </div>
*/

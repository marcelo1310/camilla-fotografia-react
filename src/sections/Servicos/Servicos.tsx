import { Titulo2 } from "@/components/Titulo2";
import { Section } from "@/components/SectionBase";
import { Carrossel } from "@/components/CarrosselServicos";



export const Servicos = () => {
  return (
    <Section id="servicos">
      <div className="relative flex flex-col items-center">
        <div className="pb-15 z-10 text-center">
          <Titulo2 cor="escuro">O momento que marca sua história pode começar agora.</Titulo2>
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

import { Carrossel } from "@/components/CarrosselServicos";
import { Titulo2 } from "@/components/Titulo2";
import { Section } from "@/components/SectionBase";

export const Servicos = () => {
  return (
    <Section id="servicos" bgColor="cor">
      <div className="pt-10 z-10">
        <Titulo2 cor="claro">Serviços</Titulo2>
      </div>
        <Carrossel />
    </Section>
  );
};

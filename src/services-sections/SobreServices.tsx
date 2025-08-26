import { Paragrafo } from "@/components/Paragrafo";
import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";

type SobreServicesProps = {
  titulo: String;
  texto: String;
};
export const SobreServices = ({ titulo, texto }: SobreServicesProps) => {
  return (
    <Section id="sobre" bgColor="vinho" mt="nao">
      <div className="container min-h-80 text-[var(--branco)] gap-10 mt-65 lg:mt-30 lg:py-20">
        <div className="w-full text-center lg:text-left">
          <Titulo2 cor="claro">{titulo}</Titulo2>
        </div>
        <Paragrafo>{texto}</Paragrafo>
      </div>
    </Section>
  );
};

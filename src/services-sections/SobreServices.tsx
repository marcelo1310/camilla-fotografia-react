import { Paragrafo } from "@/components/Paragrafo";
import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";

type SobreServicesProps = {
  titulo: String;
  texto: String;
};
export const SobreServices = ({ titulo, texto }: SobreServicesProps) => {
  return (
    <Section id="sobre" bgColor="cor">
      <div className="container min-h-80 text-[var(--branco)] gap-15">
        <div className="text-center">
          <Titulo2 cor="claro">{titulo}</Titulo2>
        </div>
        <Paragrafo>{texto}</Paragrafo>
      </div>
    </Section>
  );
};

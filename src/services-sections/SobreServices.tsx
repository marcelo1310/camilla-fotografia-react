import { Paragrafo } from "@/components/Paragrafo";
import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";

type SobreServicesProps = {
  titulo: String;
  texto: String;
};
export const SobreServices = ({ titulo, texto }: SobreServicesProps) => {
  return (
    <Section id="sobre" mt="nao">
      <div className="flex items-center justify-center w-[calc(100%-16px)] mb-20 mt-20 lg:max-w-[1200px]">
        <div className="flex flex-col items-center justify-center md:w-[80%] lg:w-[60%]">
          <div className="w-full text-center lg:text-left ">
            <Titulo2 cor="escuro">{titulo}</Titulo2>
          </div>
          <div className="text-justify mt-5 text-[var(--vinho)]">
            <Paragrafo>{texto}</Paragrafo>
          </div>
        </div>
      </div>
    </Section>
  );
};

import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";
import { Paragrafo } from "@/components/Paragrafo";

export const History = () => {
  return (
    <Section mt="nao">
      <div className="container bg-[var(--bege)]/40 min-h-80 text-[var(--vinho)] p-4">
        <div className="pb-10">
          <Titulo2 cor="escuro">Maria e José</Titulo2>
        </div>
        <div className="flex flex-col gap-3 md:w-[80%]">
          <Paragrafo>
           Um casamento repleto de emoção e beleza, onde cada instante foi capturado com sensibilidade e arte. A cerimônia ao ar livre, cercada pela natureza exuberante, proporcionou um cenário encantador para a troca de votos entre Maria e José. 
          </Paragrafo>
       
        </div>
      </div>
    </Section>
  );
};

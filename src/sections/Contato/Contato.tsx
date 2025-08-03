import { Titulo2 } from "@/components/Titulo2";
import { Botao } from "../../components/Botao";
import { Paragrafo } from "@/components/Paragrafo";
import { Section } from "@/components/SectionBase";

export const Contato = () => {
  return (
    <Section id="contato">
      <div className="flex flex-col items-center w-full gap-8 pb-20">
        <div className="py-8">
          <Titulo2>Contato</Titulo2>
        </div>
        <Paragrafo>
          Não perca a oportunidade de registar momentos incíveis.
        </Paragrafo>
        <Paragrafo> Entre em contato conosco!</Paragrafo>

        <Botao tipo="chamada">Fale comigo</Botao>
      </div>
    </Section>
  );
};

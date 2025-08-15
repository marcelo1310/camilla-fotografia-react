import { Titulo2 } from "@/components/Titulo2";
import imgCamilla from "@/assets/img/Camilla.jpg";
import { Instagram, Facebook, WhatsApp } from "@/components/Links";
import { Section } from "@/components/SectionBase";
import { Paragrafo } from "@/components/Paragrafo";

export const Sobre = () => {
  return (
    <Section id="sobre">
      <div className="container">

        <div className="lg:flex flex-row lg:gap-10">
          <div className="flex flex-col gap-5 lg:w-1/2 xl:text-xl">
          <Titulo2>Olá, eu sou a Camilla</Titulo2>
          <div className="w-18 my-5 border-1 border-[var(--vinho)]"></div>
            <Paragrafo>
              Sou fotógrafa profissional com mais de 1 ano de experiência,
              especializada em registrar memórias, e apaixonada por capturar os
              momentos importantes.
            </Paragrafo>

            <Paragrafo>
              Use esta seção para adicionar um pouco sobre você, sua
              especialidade e seus serviços fotográficos. Seja conciso e deixe o
              restante para a página dedicada "Sobre mim". A página inicial é
              sua chance de chamar a atenção imediatamente, então use o modelo
              de site completo de Use esta seção para adicionar um pouco sobre
              você, sua especialidade e seus serviços fotográficos. Seja conciso
              e deixe o restante para a página dedicada "Sobre mim". A página
              inicial é sua chance de chamar a atenção imediatamente, então use
              o modelo de site completo de Fotografia para.
            </Paragrafo>

            <div className="flex gap-5 pb-5 text-[var(--vinho)]">
              <Instagram size={35} />
              <Facebook size={35} />
              <WhatsApp size={35} />
            </div>
          </div>

          <div className="flex justify-center lg:w-1/2">
            <img
              className=" block h-auto md:w-130"
              src={imgCamilla}
              alt="Foto da fotógrafa"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

import { Titulo2 } from "@/components/Titulo2";
import imgCamilla from "@/assets/img/Camilla.jpg";
import { Instagram, Facebook, WhatsApp } from "@/components/Links";
import { Section } from "@/components/SectionBase";
import { Paragrafo } from "@/components/Paragrafo";

export const Sobre = () => {
  return (
    <Section id="sobre">
      <div className="flex flex-col max-w-[1300px] justify-between mx-8 gap-5 lg:gap-20 md:flex-row">
          <div className="flex flex-col justify-center gap-5 xl:text-xl p-6 md:p-10 lg:p-16 bg-[var(--bege)]/30 md:w-1/2">
            <Titulo2>Olá, eu sou a Camilla</Titulo2>
            <div className="w-18 mb-5 border-1 border-[var(--vinho)]"></div>
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
            
            </Paragrafo>

            <div className="flex gap-5 pb-5 text-[var(--vinho)]/90">
              <Instagram size={35} />
              <Facebook size={35} />
              <WhatsApp size={35} />
            </div>
          </div>
          <div className="flex md:w-1/2 justify-end">
            <img
              className=" flex h-auto w-[100%] object-cover"
              src={imgCamilla}
              alt="Foto da fotógrafa"
            />
          </div>
      </div>
    </Section>
  );
};


import foto from "@/assets/img/Camilla.jpg";
import { Section } from "@/components/SectionBase";
import { motion } from "framer-motion";
import { Botao } from "@/components/Botao";
import { fadeInFromTop } from "@/utils/AnimacaoInicio";
import { Titulo1 } from "@/components/Titulo1";
import { Paragrafo } from "@/components/Paragrafo";
import { Filtro } from "@/components/Filtro";

type HeroServiceProps = {
  titulo: String;
  paragrafo: String;
  textobtn: string;
  img: string;
};

export const HeroServices = ({
  titulo,
  paragrafo,
  textobtn,
  img,
}: HeroServiceProps) => {
  return (
    <Section id="hero" bgImage={img} mt="nao">
      <Filtro />
      <div className="relative flex flex-col mt-20 mx-2 max-w-[1200px] items-center z-10 h-120 md:h-130 lg:h-150 lg:flex-row xl:h-150">
        <div className="flex flex-col items-center mt-6 lg:mt-30 gap-6 w-[85%] md:gap-8 md:w-[80%] lg:w-[65%] lg:items-start">
          <motion.div {...fadeInFromTop(0.2)}>
            <Titulo1>{titulo}</Titulo1>
          </motion.div>

          <motion.div
            {...fadeInFromTop(0.4)}
            className="text-center lg:text-left w-[85%] text-[var(--branco)]"
          >
            <Paragrafo texthero="sim">{paragrafo}</Paragrafo>
          </motion.div>

          <motion.div
            {...fadeInFromTop(0.6)}
            className="relative inline-flex items-center justify-center"
          >
            <Botao tipo="chamada">
              {textobtn}
            </Botao>
          </motion.div>
        </div>
        <div className="absolute flex top-75 z-20 w-70 md:w-80 lg:w-[35%] bg-[var(--branco)] lg:top-70 lg:right-0">
          <img className="p-1" src={foto} alt="" />
        </div>
      </div>
    </Section>
  );
};

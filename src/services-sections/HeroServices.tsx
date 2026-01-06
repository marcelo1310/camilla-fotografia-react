
//import foto from "@/assets/img/Camilla.jpg";
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
      <div className="flex mx-2 w-ful items-center justify-center lg:max-w-[1200px] z-10 h-80 md:h-130 lg:h-150 xl:h-170">
        <div className="flex flex-col items-center justify-around h-[50%]">
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
            <Botao tipo="chamada" cor="transparente">
              {textobtn}
            </Botao>
          </motion.div>
        </div>   
      </div>
    </Section>
  );
};

/* 

<div className="absolute flex top-75 z-20 w-70 md:w-80 lg:w-[35%] bg-[var(--bege)]/50 lg:top-70 lg:right-2">
          <img className="shadowFull rounded" src={foto} alt="" />
        </div>

*/
import img from "@/assets/img/5.jpg";
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
};

export const HeroServices = ({
  titulo,
  paragrafo,
  textobtn,
}: HeroServiceProps) => {
  return (
    <Section id="hero" bgImage={img} mt="nao">
      <Filtro />
      <div className="container h-70 md:h-100 md:gap-8 lg:h-150 xl:h-180">
        <motion.div {...fadeInFromTop(0.2)}>
          <Titulo1>{titulo}</Titulo1>
        </motion.div>

        <motion.div
          {...fadeInFromTop(0.4)}
          className="text-center w-[85%] text-[var(--branco)]"
        >
          <Paragrafo texthero="sim">{paragrafo}</Paragrafo>
        </motion.div>

        <motion.div
          {...fadeInFromTop(0.6)}
          className="relative inline-flex items-center justify-center"
        >
          <Botao tipo="chamada" cor="escuro">
            {textobtn}
          </Botao>
        </motion.div>
      </div>
    </Section>
  );
};

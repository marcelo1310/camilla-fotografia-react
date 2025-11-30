import imgCasal from "@/assets/img/img-home.jpg";
import { motion } from "framer-motion";
import { Botao } from "@/components/Botao";
import { useAnimacao } from "@/hooks/useAnimacao";
import { fadeInFromTop } from "@/utils/AnimacaoInicio";
import { Section } from "@/components/SectionBase";
import { Titulo1 } from "@/components/Titulo1";
import { Paragrafo } from "@/components/Paragrafo";
import { Filtro } from "@/components/Filtro";

export const Hero = () => {
  const imagemCarregada = useAnimacao(imgCasal);
  return (
    <Section id="hero" bgImage={imgCasal} mt="nao">
      {imagemCarregada && (
        <>
          <Filtro />

          <div className="container w-full h-screen pt-10 gap-6 z-10 text-[var(--branco)] md:h-
           lg:h-screen">
            <motion.div {...fadeInFromTop(0.2)}>
              <Titulo1>Camilla Fotografia</Titulo1>
            </motion.div>

            <motion.div {...fadeInFromTop(0.4)} className="text-center w-[85%]">
              <Paragrafo texthero="sim">
                Momentos diferentes, pessoas diferentes, histórias diferentes. A única constante é o cuidado em cada clique.
              </Paragrafo>
            </motion.div>

            <motion.div
              {...fadeInFromTop(0.6)}
              className="relative inline-flex items-center justify-center"
            >
              <Botao tipo="chamada" cor="bege">
                Agende Agora
              </Botao>
            </motion.div>
          </div>
        </>
      )}
    </Section>
  );
};

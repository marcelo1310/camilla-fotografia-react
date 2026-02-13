import { Section } from "@/components/SectionBase";
import img from "@/assets/img/img-depoimentos.jpg";
import { Paragrafo } from "@/components/Paragrafo";
import { Titulo2 } from "@/components/Titulo2";
import { useState } from "react";

export const PaginaDepoimentos = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const Depoimentos = [
    {
      id: 1,
      name: "Ana Carolina Silva",
      role: "Noiva",
      text: "Foi uma experiência incrível! As fotos capturaram cada emoção do nosso grande dia de forma tão natural e autêntica. Revivemos cada momento através das lentes.",
      image: img,
    },
    {
      id: 2,
      name: "Roberto Mendes",
      role: "Empresário",
      text: "Profissionalismo excepcional. As fotos corporativas ficaram impecáveis, transmitindo exatamente a imagem que queríamos para nossa marca.",
      image: img,
    },
    {
      id: 3,
      name: "Juliana Costa",
      role: "Influenciadora",
      text: "Trabalho incrível! A atenção aos detalhes e a capacidade de capturar minha essência em cada foto foi simplesmente perfeita. Super recomendo!",
      image: img,
    },
    {
      id: 4,
      name: "Pedro Almeida",
      role: "Músico",
      text: "As fotos do ensaio artístico superaram todas as expectativas. Conseguiu traduzir visualmente a energia da música de forma única.",
      image: img,
    },
    {
      id: 5,
      name: "Mariana Santos",
      role: "Gestante",
      text: "Um momento tão especial registrado com tanto carinho e delicadeza. As fotos ficaram lindas e vou guardar para sempre.",
      image: img,
    },
  ];

  return (
    <>
      <Section id="hero" mt="nao" bgImage={img}>
        <div className="container h-70 md:h-100 lg:h-130 xl:h-150">
          <div className="flex flex-col items-center gap-10 max-w-[80%] text-[var(--chumbo)]">
            <Paragrafo texthero="sim">
              "Desde o momento em que Camilla chegou ao local, ficou claro que
              ela estava no auge de sua performance."
            </Paragrafo>
            <Paragrafo texthero="sim">- Cliente Satisfeita</Paragrafo>
          </div>
        </div>
      </Section>

      <Section mt="sim">
        <div className="container gap-10 p-20 md:w-[80%] bg-[var(--bege)] text-[var(--chumbo)]">
          <Titulo2 cor="escuro">Histórias que falam por si mesmas</Titulo2>
          <Paragrafo>
            A parte mais gratificante de ser fotógrafa não é apenas tirar fotos,
            mas sim conectar-se com as pessoas e suas histórias. Cada casal e
            família traz algo único, e sou profundamente grata por ser convidada
            a registrar esses momentos. De casamentos intimistas no quintal de
            casa a grandes celebrações, essas experiências compartilhadas
            refletem o riso, a alegria e o amor que não podem ser expressos
            apenas em palavras.
          </Paragrafo>
        </div>
      </Section>

      <Section mt="sim">
        <div className="container space-y-20">
          {Depoimentos.map((depoimento, index) => (
            <article
              className={`
                flex flex-col items-center gap-2 md:flex-row md:justify-around md:gap-10
                  `}
              onMouseEnter={() => setHoveredItem(depoimento.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`
                  overflow-hidden w-full md:w-[80%] lg:w-[50%]
                     ${index % 2 === 0 ? "md:order-1" : "md:order-2"}
                    `}
              >
                <img
                  src={depoimento.image}
                  alt={depoimento.name}
                  className={`
                        w-full h-full object-cover
                        transition-transform duration-[800ms] ease-out
                        ${hoveredItem === depoimento.id ? "scale-105" : "scale-100"}
                      `}
                />
              </div>
              <div
                className={` 
                     md:w-[80%] md:py-10 lg:px-10
                     ${index % 2 === 0 ? "md:order-2" : "md:order-1"}
                    `}
              >
                <div className="space-y-5">
                  <p className="font-light leading-relaxed tracking-wide text-[var(--chumbo)] text-sm w-full italic">
                    "{depoimento.text}"
                  </p>

                  <div className="w-[50%] pt-5 border-t border-[var(--bege)]">
                    <h3 className="text-xl font-light mb-2 text-[var(--chumbo)]">
                      {depoimento.name}
                    </h3>
                    <p className="text-[var(--chumbo)] opacity-60 uppercase text-xs">
                      {depoimento.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};

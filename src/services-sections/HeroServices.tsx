//import foto from "@/assets/img/Camilla.jpg";
import { Paragrafo } from "@/components/Paragrafo";
import { Section } from "@/components/SectionBase";
import { Titulo1 } from "@/components/Titulo1";
import { Titulo2 } from "@/components/Titulo2";

type HeroServiceProps = {
  titulo: string;
  subtitulo: string;
  texto: string;
  img: string;
};

export const HeroServices = ({ titulo, subtitulo, texto, img }: HeroServiceProps) => {
  return (
    <Section id="hero" mt="nao">
      <div
        className=" relative flex flex-col items-center w-full lg:max-w-[1400px] z-10 h-80 md:h-130 lg:h-150 xl:h-170"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex mt-20 md:mt-30 lg:mt-40">
          <Titulo1 children={titulo} />
        </div>

        <div className="absolute flex flex-col items-center justify-center text-center gap-5 top-50 md:top-95 lg:top-110 xl:top-130 p-5 bg-[#e7e3d9] w-[85%] h-65 md:h-70 lg:h-80 shadow-lg">

          <Titulo2 
          children={subtitulo}
          />

          <Paragrafo
          children={texto}
          />

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

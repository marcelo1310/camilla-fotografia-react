import { HeroServices, History } from "@/services-sections";
import { Galeria } from "@/services-sections/GaleriaServices";
import { SobreServices } from "@/services-sections/SobreServices";
//import { useEffect, useState } from "react";
//import { pegarFotosEnsaio } from "@/services/imagens";
import img from "@/assets/img/img-home.jpg";

import foto1 from "@/assets/img/pag-home/foto1.jpg";
import foto2 from "@/assets/img/pag-home/foto2.jpg";
import foto3 from "@/assets/img/pag-home/foto3.jpg";
import foto4 from "@/assets/img/pag-home/foto4.jpg";
import foto5 from "@/assets/img/pag-home/foto5.jpg";
import foto6 from "@/assets/img/pag-home/foto6.jpg";
import foto7 from "@/assets/img/pag-home/foto7.jpg";
import foto8 from "@/assets/img/pag-home/foto8.jpg";
import foto9 from "@/assets/img/pag-home/foto9.jpg";
import foto10 from "@/assets/img/pag-home/foto10.jpg";
import foto11 from "@/assets/img/pag-home/foto11.jpg";
import foto12 from "@/assets/img/pag-home/foto12.jpg";
import { Depoimentos } from "@/sections/Depoimentos";

const imge = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
];

export const Casamento = ({ nomeEnsaio }: any) => {
  // const [imagens, setImagens] = useState<string[]>([]);
  nomeEnsaio = "fotos-iniciais";
  /*
  useEffect(() => {
    const carregarFotos = async () => {
      const urls = await pegarFotosEnsaio(nomeEnsaio);
      setImagens(urls);
    };
    carregarFotos();
  }, [nomeEnsaio]);

  */

  return (
    <main className="flex flex-col bg-[var(--branco)]">
      <HeroServices
        img={img}
        titulo="Fotografia de Casamento"
        paragrafo=""
        textobtn="Agendar Agora"
      />
      <SobreServices
        titulo="Quero Registrar Seu Grande dia"
        texto="Cada casamento é único, e acredito que suas memórias merecem ser registradas com atenção, sensibilidade e profissionalismo. Ao me escolher, você tem a garantia de um olhar atento, imagens de alta qualidade e dedicação total para transformar seu dia em lembranças eternas."
      />
      <History />
      <Galeria imagens={imge} />
      <Depoimentos />
    </main>
  );
};

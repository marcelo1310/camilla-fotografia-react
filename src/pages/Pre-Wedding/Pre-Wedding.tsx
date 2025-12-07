import { HeroServices } from "@/services-sections";
import { SobreServices } from "@/services-sections/SobreServices";
import { History } from "@/services-sections";
import { Galeria } from "@/services-sections";
import { useEffect, useState } from "react";
import { pegarFotosEnsaio } from "@/services/imagens";

export const PreWedding = ({ nomeEnsaio }: any) => {
  const [imagens, setImagens] = useState<string[]>([]);
  nomeEnsaio = "fotos-iniciais";

  useEffect(() => {
    const carregarFotos = async () => {
      const urls = await pegarFotosEnsaio(nomeEnsaio);
      setImagens(urls);
    };
    carregarFotos();
  }, [nomeEnsaio]);

  return (
    <div className="flex flex-col bg-[var(--branco)]">
      <HeroServices
        titulo="Ensaio Pré-Wedding"
        paragrafo="Um registro completo do seu amor antes de dizer o sim"
        textobtn="Saber mais"
        img=""
      />
      <SobreServices
        titulo="Quero Registrar Seu Grande dia"
        texto="Cada casamento é único, e acredito que suas memórias merecem ser registradas com atenção, sensibilidade e profissionalismo. Ao me escolher, você tem a garantia de um olhar atento, imagens de alta qualidade e dedicação total para transformar seu dia em lembranças eternas."
      />
      <History />
      <Galeria imagens={imagens} />
    </div>
  );
};

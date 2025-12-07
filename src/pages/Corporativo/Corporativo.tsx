import { HeroServices, History } from "@/services-sections";
import { Galeria } from "@/services-sections/GaleriaServices";
import { SobreServices } from "@/services-sections/SobreServices";
import { useEffect, useState } from "react";
import { pegarFotosEnsaio } from "@/services/imagens";
import img from "@/assets/img/5.jpg";

export const Corporativo = ({nomeEnsaio} : any) => {
  const [imagens, setImagens] =  useState<string[]>([]);
  nomeEnsaio = "corporativos"

  useEffect(()=>{
    const carregarFotos = async () => {
      const urls = await pegarFotosEnsaio(nomeEnsaio)
      setImagens(urls)
    }
    carregarFotos()
  },[nomeEnsaio])

  return (
    <div className="flex flex-col bg-[var(--branco)]">
      <HeroServices
        img={img}
        titulo="Pra quem quer transmitir seriedade, profissionalismo e autenticidade."
        paragrafo="Ensaio Corporativo"
        textobtn="Agendar Agora"
      />
      <SobreServices
        titulo="Por Que um Corporativo?"
        texto="No mercado competitivo de hoje, sua imagem fala antes mesmo de você se apresentar. Um ensaio corporativo profissional não é apenas sobre boas fotos, é sobre transmitir confiança, autoridade e autenticidade em cada detalhe. Mostre ao mundo quem você é e conquiste novas oportunidades com imagens que contam a sua história."
      />
      <History />
      <Galeria
        imagens={imagens}
      />
    </div>
  );
};

import { HeroServices, History, Pacotes } from "@/services-sections";
import { Galeria } from "@/services-sections/GaleriaServices";
import { SobreServices } from "@/services-sections/SobreServices";
import { Contato } from "@/sections/Contato";
import { useEffect, useState } from "react";
import { pegarFotosEnsaio } from "@/services/imagens";
import img from "@/assets/img/img-home.jpg";


export const Casamento = ({nomeEnsaio} : any) => {
  const [imagens, setImagens] =  useState<string[]>([]);
    nomeEnsaio = "fotos-iniciais"
  
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
          titulo="Casamento"
          paragrafo="Junte-se aos casais que confiaram em meu olhar atento para eternizar seus momentos mais preciosos. Cada fotografia é uma celebração do amor, feita para que você e seus entes queridos se sintam parte de algo verdadeiramente inesquecível."
          textobtn="Agendar Agora"
        />
        <SobreServices
          titulo="Quero Registrar Seu Grande dia"
          texto="Cada casamento é único, e acredito que suas memórias merecem ser registradas com atenção, sensibilidade e profissionalismo. Minha experiência permite capturar não apenas imagens, mas emoções genuínas, detalhes que contam sua história e momentos que você jamais quer esquecer. Ao me escolher, você tem a garantia de um olhar atento, imagens de alta qualidade e dedicação total para transformar seu dia em lembranças eternas. Além disso, casais que já confiaram em meu trabalho destacam minha capacidade de tornar cada sessão personalizada, confortável e memorável, porque não fotografo apenas casamentos, crio registros que emocionam gerações."
        />
        <History />
        <Galeria
          imagens={imagens}
        />
        <Pacotes />
        <Contato />
      </div>
    );
  };
  
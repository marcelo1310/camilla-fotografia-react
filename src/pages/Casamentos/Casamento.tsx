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
          titulo="Seu Grande Dia Retratado com Sensibilidade, Arte e Propósito"
          paragrafo="Fotografia de Casamento"
          textobtn="Agendar Agora"
        />
        <SobreServices
          titulo="Quero Registrar Seu Grande dia"
          texto="Cada casamento é único, e acredito que suas memórias merecem ser registradas com atenção, sensibilidade e profissionalismo. Ao me escolher, você tem a garantia de um olhar atento, imagens de alta qualidade e dedicação total para transformar seu dia em lembranças eternas."
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
  
import { HeroServices, History, Pacotes } from "@/services-sections";
import { Galeria } from "@/services-sections/GaleriaServices";
import { SobreServices } from "@/services-sections/SobreServices";
import img1 from "@/assets/galeria/1.jpg";
import img2 from "@assets/galeria/2.jpg";
import img3 from "@assets/galeria/3.jpg";
import img4 from "@assets/galeria/4.jpg";
import img5 from "@assets/galeria/5.jpg";
import img6 from "@assets/galeria/6.jpg";
import img7 from "@assets/galeria/7.jpg";
import img8 from "@assets/galeria/8.jpg";
import img9 from "@assets/galeria/9.jpg";

export const Corporativo = () => {

  return (
    <div className="flex flex-col bg-[var(--branco)]">
      <HeroServices
        titulo="Ensaio Corporativo"
        paragrafo="Pra quem quer transmitir seriedade, profissionalismo e autenticidade. Mostre ao mundo a melhor versão de si mesmo."
        textobtn="Agendar Agora"
      />
      <SobreServices
        titulo="Por Que um Corporativo?"
        texto="No mercado competitivo de hoje, sua imagem fala antes mesmo de você se apresentar. Um ensaio corporativo profissional não é apenas sobre boas fotos, é sobre transmitir confiança, autoridade e autenticidade em cada detalhe. Mostre ao mundo quem você é e conquiste novas oportunidades com imagens que contam a sua história."
      />
      <History />
      <Galeria
        imagens={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
      />
      <Pacotes />
    </div>
  );
};

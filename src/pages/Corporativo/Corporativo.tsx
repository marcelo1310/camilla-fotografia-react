import { HeroServices, History } from "@/services-sections";
import { Galeria } from "@/services-sections/GaleriaServices";
import { SobreServices } from "@/services-sections/SobreServices";
import imgHero from "@/assets/img/5.jpg";
import img1 from "@/assets/galeria/1.jpg";
import img2 from "@assets/galeria/2.jpg";
import img3 from "@assets/galeria/3.jpg";
import img4 from "@assets/galeria/4.jpg";
import img5 from "@assets/galeria/5.jpg";
import img6 from "@assets/galeria/6.jpg";
import img7 from "@assets/galeria/7.jpg";
import img8 from "@assets/galeria/8.jpg";
import img9 from "@assets/galeria/9.jpg";
import { useAnimacao } from "@/hooks/useAnimacao";

export const Corporativo = () => {
  const img = useAnimacao(imgHero);
 return (
      <div className="flex flex-col bg-[var(--branco)]">
        <HeroServices
          titulo="Ensaio Corporativo"
          paragrafo="Um ensaio pra você que quer se posicionar"
          textobtn="Quero me posicionar"
        />
        <SobreServices
          titulo="Sobre o Ensaio Corporativo"
          texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita recusandae necessitatibus beatae repudiandae aspernatur voluptate ullam, autem aliquid quia repellendus minus laudantium explicabo repellat totam dolores illum. Perferendis, voluptatibus repellat."
        />
        <History />
        <Galeria
          imagens={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
        />
      </div>
    )
};

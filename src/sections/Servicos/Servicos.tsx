import { Titulo2 } from "@/components/Titulo2";
import { Section } from "@/components/SectionBase";
import img1 from "@/assets/galeria/1.jpg";
import img2 from "@assets/galeria/2.jpg";
import img3 from "@assets/galeria/3.jpg";
import img4 from "@assets/galeria/4.jpg";
import img5 from "@assets/galeria/5.jpg";
import img6 from "@assets/galeria/6.jpg";
import img7 from "@assets/galeria/7.jpg";

const titulos = [
  {
    id: 1,
    img: img1,
    titulo: "Pré-Wedding",
    href: "/ensaio-pre-wedding",
  },
  {
    id: 2,
    img: img2,
    titulo: "Casamento",
    href: "/fotos-casamento",
  },
  {
    id: 3,
    img: img3,
    titulo: "Corporativo",
    href: "/ensaio-corporativo",
  },
  {
    id: 4,
    img: img4,
    titulo: "Eventos",
    href: "/fotos-eventos",
  },
  {
    id: 5,
    img: img5,
    titulo: "Estúdio",
    href: "/estudio",
  },
  {
    id: 6,
    img: img6,
    titulo: "Gestantes",
    href: "/ensaio-gestante",
  },
  {
    id: 7,
    img: img7,
    titulo: "Família",
    href: "/ensaio-familia",
  },
  {
    id: 8,
    img: img7,
    titulo: "Elopement",
    href: "/elopement",
  },
];

export const Servicos = () => {
  return (
    <Section id="servicos">
      <div className="container">
        <div className="pb-15 z-10 text-center">
          <Titulo2 cor="escuro">
            O momento que marca sua história pode começar agora.
          </Titulo2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 w-full">
          {titulos.map(({ id, titulo, img, href }) => (
            <a href={href} key={id} className="relative w-full  rounded">
              <div className="absolute flex items-start inset-0 bg-black/30 z-10 text-[var(--branco)] rounded hover:bg-transparent duration-300">
                <h3 className="p-4 z-10 text-lg font-bold">
                  {titulo}
                </h3>
              </div>
              <div
                className="gap-4 h-35 md:h-40 rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

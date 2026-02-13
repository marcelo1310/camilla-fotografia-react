import img1 from "@/assets/img/pag-home/foto12.jpg";
import img2 from "@/assets/img/pag-home/foto6.jpg";
import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";

export const Portfolio = () => {
 
  const ensaios = [
    {
      id: 1,
      imagem: img1,
      titulo: "Casamento",
      descricao: "Registros autênticos e emocionantes do dia mais especial.",
      href: "/fotos-casamento",
      orientacao: "vertical",
      rota: "/ensaio-casamento",
    },
    {
      id: 2,
      imagem: img2,
      titulo: "Pré-Wedding",
      descricao:
        "Ensaios românticos ao ar livre, capturando a essência do amor.",
      href: "/ensaio-pre-wedding",
      orientacao: "horizontal",
      rota: "/ensaio-pre-wedding",
    },
    {
      id: 3,
      imagem: img1,
      titulo: "Gestantes",
      descricao:
        "Capturando a beleza e a expectativa da maternidade com sensibilidade e carinho.",
      href: "/ensaio-gestante",
      orientacao: "horizontal",
      rota: "/ensaio-gestante",
    },
    {
      id: 4,
      imagem: img2,
      titulo: "Família",
      descricao: "Momentos especiais em família, cheios de amor e conexão.",
      href: "/ensaio-familia",
      orientacao: "vertical",
      rota: "/ensaio-familia",
    },
  ];

  return (
    <Section id="portfolio" mt="sim">
      <div className="mb-8">
        <Titulo2>Portfólio</Titulo2>
      </div>
      <div className=" container min-h-screen">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 px-5">
          {/* Item 1 - Horizontal grande */}
          <a href={ensaios[0].rota}
            className="md:col-span-8 md:row-span-2 relative overflow-hidden cursor-pointer group"
          >
            <img
              src={ensaios[0].imagem}
              alt={ensaios[0].titulo}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:translate-y-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-white text-3xl tracking-wider">
                {ensaios[0].titulo}
              </h3>
            </div>
          </a>

          {/* Item 2 - Vertical */}
          <a href={ensaios[1].rota}
            className="md:col-span-4 md:row-span-2 relative overflow-hidden cursor-pointer group"
          >
            <img
              src={ensaios[1].imagem}
              alt={ensaios[1].titulo}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:translate-y-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-white text-3xl tracking-wider">
                {ensaios[1].titulo}
              </h3>
            </div>
          </a>

          {/* Item 3 - Vertical */}
          <a href={ensaios[3].rota}
            className="md:col-span-4 md:row-span-2 relative overflow-hidden cursor-pointer group"
          >
            <img
              src={ensaios[3].imagem}
              alt={ensaios[3].titulo}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:translate-y-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-white text-3xl tracking-wider">
                {ensaios[3].titulo}
              </h3>
            </div>
          </a>

          {/* Item 4 - Horizontal grande */}
          <a href={ensaios[2].rota}
            className="md:col-span-8 md:row-span-2 relative overflow-hidden cursor-pointer group"
          >
            <img
              src={ensaios[2].imagem}
              alt={ensaios[2].titulo}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:translate-y-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-white text-3xl tracking-wider">
                {ensaios[2].titulo}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
};
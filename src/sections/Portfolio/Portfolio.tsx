import { Section } from "@/components/SectionBase";
import img1 from "@/assets/img/pag-home/foto1.jpg";
import { Titulo2 } from "@/components/Titulo2";
import { Paragrafo } from "@/components/Paragrafo";
import { GrNext } from "react-icons/gr";

const portfolioItems = [
  {
    id: 1,
    img: img1,
    titulo: "Pré-Wedding",
    descricao: "Ensaios românticos ao ar livre, capturando a essência do amor.",
    href: "/ensaio-pre-wedding",
  },
  {
    id: 2,
    img: img1,
    titulo: "Casamento",
    descricao: "Registros autênticos e emocionantes do dia mais especial.",
    href: "/fotos-casamento",
  },
  {
    id: 3,
    img: img1,
    titulo: "Corporativo",
    descricao:
      "Fotografias profissionais que destacam a identidade e valores da sua empresa.",
    href: "/ensaio-corporativo",
  },
  {
    id: 4,
    img: img1,
    titulo: "Eventos",
    descricao:
      "Cobertura completa de eventos sociais e corporativos, registrando cada momento.",
    href: "/fotos-eventos",
  },
  {
    id: 5,
    img: img1,
    titulo: "Estúdio",
    descricao:
      "Sessões fotográficas em estúdio com iluminação controlada e criativa.",
    href: "/estudio",
  },
  {
    id: 6,
    img: img1,
    titulo: "Gestantes",
    descricao:
      "Capturando a beleza e a expectativa da maternidade com sensibilidade e carinho.",
    href: "/ensaio-gestante",
  },
  {
    id: 7,
    img: img1,
    titulo: "Família",
    descricao: "Momentos especiais em família, cheios de amor e conexão.",
    href: "/ensaio-familia",
  },
  {
    id: 8,
    img: img1,
    titulo: "Elopement",
    descricao:
      "Casamentos íntimos e cheios de significado, celebrando o amor em grande estilo.",
    href: "/elopement",
  },
];

export const Portfolio = () => {

  return (
    <Section id="portfolio" mt="nao">
      <div className="container text-[var(--branco)] py-4 md:py-15">
        <div className="flex flex-col w-full text-center  h-50 justify-center gap-2">
          <Titulo2 cor="escuro">Portifolio</Titulo2>
          <div className="text-[var(--chumbo)]">
            <Paragrafo>Momentos passam. Histórias que permanecem.</Paragrafo>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-[var(--chumbo)]">
          {portfolioItems.map((item) => (
            <a href={item.href} key={item.id} className="no-underline">
              <div
                key={item.id}
                className="flex w-full group cursor-pointer bg-[var(--bege)]/40 h-45 overflow-hidden  transition-all"
              >
                <div className="flex w-full items-center p-2 ">
                  <div className=" w-40 h-40 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.titulo}
                      className="w-full h-full aspect-square  object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 pl-6">
                    <span className="text-[0.6rem] lg:text-[0.7rem] text-zinc-500 tracking-wider uppercase">
                      {item.descricao}
                    </span>
                    <h3 className="text-xl md:text-2xl font-light tracking-wide mt-2 mb-2">
                      {item.titulo}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-400">Veja Mais</p>
                      <GrNext />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

/*

  <Section id="portfolio" mt="sim">
      <div className="container text-[var(--branco)] pb-4 md:pb-15">
        <div className="flex flex-col w-full text-center  h-50 justify-center gap-2">
          <Titulo2 cor="escuro">Portifolio</Titulo2>
          <Paragrafo>Momentos passam. Histórias que permanecem.</Paragrafo>
        </div>
        <div className="">
          <div className="space-y-2 md:space-y-15">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-16 
                  items-center cursor-pointer
               bg-[var(--branco)] shadowFull
                `}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`
                    relative overflow-hidden
                    md:col-span-2
                    lg:h-100
                  `}
                >
                  <img
                    src={item.img}
                    alt={item.titulo}
                    className={`
                      w-full h-full object-cover
                      transition-transform duration-700 ease-out
                      ${hoveredItem === item.id ? "scale-105" : "scale-100"}
                    `}
                  />

                  <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-light tracking-wide mb-3">
                        {item.titulo}
                      </h3>
                      <p className="text-sm text-zinc-300 leading-relaxed tracking-wide">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`
                    hidden text-[var(--vinho)] md:p-8 lg:p-10 md:flex md:flex-col md:justify-center
                    ${
                      index % 2 === 1
                        ? "md:col-start-1 md:row-start-1"
                        : ""
                    }
                  `}
                >
                  <h3 className="text-4xl lg:text-5xl font-light tracking-wide mb-6">
                    {item.titulo}
                  </h3>
                  <p className=" leading-relaxed tracking-wide">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

*/

/*export const Portfolio = () => {
  return (
    <Section id="servicos" mt="sim">
      <div className="w-full text-center mb-8">
        <Titulo2>Meu Portfólio</Titulo2>

        <div className="w-full z-10 text-center bg-[var(--branco)] px-2"></div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 w-full">
          {titulos.map(({ id, titulo, img, href }) => (
            <a href={href} key={id} className="relative w-full">
              <div className="absolute flex items-start inset-0 bg-black/30 z-10 text-[var(--branco)] hover:bg-transparent  duration-300">
                <h3 className="p-4 z-10 text-lg font-bold">{titulo}</h3>
              </div>
              <div
                className="gap-4 h-50  bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

/*

  <Paragrafo>Momentos passam. Histórias que permanecem.</Paragrafo>
        <Paragrafo>
          Fotografia é mais do que apertar um botão, é enxergar o que muitos não
          veem. É transformar instantes únicos em memórias que resistem ao
          tempo. Cada imagem que criamos carrega emoção, verdade e significado,
          porque acreditamos que momentos passam, mas boas fotografias
          permanecem.
        </Paragrafo>

*/

/*

   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer bg-zinc-900/30 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <div className="flex items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <span className="text-xs text-zinc-500 tracking-wider uppercase">
                        {item.descricao}
                      </span>
                      <h3 className="text-xl md:text-2xl font-light tracking-wide mt-2 mb-3">
                        {item.titulo}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-zinc-400">
                          lau fotos
                        </p>
                        -
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

*/

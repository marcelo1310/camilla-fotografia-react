import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";

const cards = [
  {
    id: 1,
    icone: "<>",
    titulo: "lorem1",
    texto:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt, adipisci obcaecati sint provident dolore? Vel pariatur, sint repellat possimus dignissimos aliquam.",
  },
  {
    id: 2,
    titulo: "lorem2",
    icone: "<>",
    texto:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt, adipisci obcaecati sint provident dolore? Vel pariatur, sint repellat possimus dignissimos aliquam.",
  },
  {
    id: 3,
    titulo: "lorem3",
    icone: "<>",
    texto:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt, adipisci obcaecati sint provident dolore? Vel pariatur, sint repellat possimus dignissimos aliquam.",
  },
];

export const Diferencial = () => {
  return (
    <Section id="diferencial" mt="sim">
      <div className="py-8 lg:pb-0">
        <Titulo2>Meu diferencial</Titulo2>
      </div>
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row min-h-[500px] gap-15">
          {cards.map((card) => (
            <div className="flex rounded shadowFull h-70 items-center md:w-[70%]">
              <div className="flex flex-col gap-6 items-center px-6 text-center">
                <img src={card.icone} alt="" />
                <h3>{card.titulo}</h3>
                <p>{card.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

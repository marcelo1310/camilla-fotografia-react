import imgDepoimentos from "@/assets/img/img-depoimentos.jpg";
import { Section } from "@/components/SectionBase";
import img from "@/assets/img/Camilla.jpg";
import { Titulo2 } from "@/components/Titulo2";
import { Filtro } from "@/components/Filtro";

const depoimentos = [
  {
    id: 1,
    nome: "Fulano 1",
    imagem: img,
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus eos repudiandae obcaecati assumenda sapiente aut ",
  },
  {
    id: 2,
    nome: "Fulano 2",
    imagem: img,
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus eos repudiandae obcaecati assumenda sapiente aut ",
  },
  {
    id: 3,
    nome: "Fulano 3",
    imagem: img,
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus eos repudiandae obcaecati assumenda sapiente aut ",
  },
  {
    id: 4,
    nome: "Fulano 4",
    imagem: img,
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias apiente aut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus eos repudiandae obcaecati assumenda sapiente aut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus eos repudiandae obcaecati assumenda sapiente aut",
  },
];

export const Depoimentos = () => {
  return (
    <Section id="depoimentos" bgImage={imgDepoimentos} mt="sim">
    <Filtro/>
      <div className="container">
        <div className="py-8">
          <Titulo2 cor="claro">Depoimentos</Titulo2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 flex-col my-6 lg:my-15">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.id}
              className="flex flex-col items-center gap-3 text-white w-full h-full"
            >
              <div className="flex w-full items-center justify-center">
                <img
                  className="rounded-full w-20 h-20"
                  src={depoimento.imagem}
                  alt="Foto de Perfil"
                />
              </div>

              <div className="flex flex-col gap-3 items-center w-[90%]">
                <h3 className="text-3xl font-bold">{depoimento.nome}</h3>
                <p className="">{depoimento.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

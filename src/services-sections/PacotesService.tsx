import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";
import img from "@/assets/img/Camilla.jpg";
import { Pacote } from "@/components/CardsPacotes";

// Array com todos os pacotes
const pacotes = [
  {
    titulo: "MINI",
    itens: [
      "30 minutos de ensaio",
      "15 fotos profissionais entregues tratadas",
      "1 look",
    ],
  },
  {
    titulo: "PROFISSIONAL",
    itens: [
      "1 hora de ensaio",
      "Fotos profissionais ilimitadas e entregues tratadas",
      "Até 2 looks",
    ],
    },
  {
    titulo: "VÍDEO",
    itens: ["1 vídeo na vertical", "Até 1 minuto e meio"],
    },
  {
    titulo: "ESTRATÉGIA",
    img,
    itens: [
      "1 hora de ensaio",
      "Fotos profissionais ilimitadas e entregues tratadas",
      "Até 2 looks",
      <>
        <span key="consultoria" className="font-bold">
          Consultoria estratégica
        </span>{" "}
        <p>
          antes do ensaio para alinhamento de imagem, público alvo e uso das
          fotos
        </p>
      </>,
    ],
  },
];

export const Pacotes = () => {
  return (
    <Section id="pacotes" bgColor="bege" mt="nao">
      <div className="w-full text-center py-8">
        <Titulo2 cor="claro">Pacotes</Titulo2>
      </div>
      <div className="container mb-5">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Coluna com os 3 primeiros pacotes */}
          <div className="flex flex-col gap-4 flex-1 md:w-[50%]">
            {pacotes.slice(0, 3).map((p, index) => (
              <Pacote key={index} titulo={p.titulo} img={p.img}>
                {p.itens.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Pacote>
            ))}
          </div>

          {/* Coluna com o último pacote */}
          <div className="flex md:w-[50%]">
            {pacotes.slice(3, 4).map((p, index) => (
              <Pacote key={index} titulo={p.titulo} img={p.img}>
                {p.itens.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Pacote>
            ))}
          </div>
        </div>
       
      </div>
    </Section>
  );
};

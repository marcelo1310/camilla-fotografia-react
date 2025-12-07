import { Section } from "@/components/SectionBase";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TiDeviceTablet, TiCamera } from "react-icons/ti";




const cards = [
  {
    id: 1,
    icone: <FaMoneyBillTransfer size={45} color="green" />,
    titulo: "Pagamento flexível",
    texto:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt, adipisci obcaecati sint provident dolore? Vel pariatur, sint repellat possimus dignissimos aliquam.",
  },
  {
    id: 2,
    titulo: "Entrega digital",
    icone: <TiDeviceTablet size={45} color="blue" />,
    texto:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt, adipisci obcaecati sint provident dolore? Vel pariatur, sint repellat possimus dignissimos aliquam.",
  },
  {
    id: 3,
    titulo: "Prévia das fotos",
    icone: <TiCamera size={45} />,
    texto:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt, adipisci obcaecati sint provident dolore? Vel pariatur, sint repellat possimus dignissimos aliquam.",
  },
];

export const Diferencial = () => {
  return (
    <Section id="diferencial" mt="sim" bgColor="bege">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-[1100px] lg:h-[500px] lg:flex-row  gap-15">
          {cards.map((card) => (
            <div className="flex rounded shadowFull h-70 items-center md:w-[70%] bg-[var(--branco)] lg:w-full" key={card.id}>
              <div className="flex flex-col gap-6 items-center px-6 text-center text-[var(--vinho)]">
                <div>{card.icone}</div>
                <h3 className="text-xl">{card.titulo}</h3>
                <p>{card.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

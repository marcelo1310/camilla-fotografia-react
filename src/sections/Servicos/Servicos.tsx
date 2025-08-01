import { Titulo2 } from "@/components/Titulo2";
import { Section } from "@/components/SectionBase";
import { motion } from "framer-motion";

export const cards = [
  {
    id: 1,
    titulo: "Pré-Wedding",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "/ensaio-pre-wedding",
  },
  {
    id: 2,
    titulo: "Casamento",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "/fotos-casamento",
  },
  {
    id: 3,
    titulo: "Corporativo",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "ensaio-corporativo",
  },
  {
    id: 4,
    titulo: "Fotos de Eventos",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 5,
    titulo: "Estúdio",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 6,
    titulo: "Gestantes",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 7,
    titulo: "Edições",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 8,
    titulo: "Rostos e Retratos",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 9,
    titulo: "Outros Serviços",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
];

export const Servicos = () => {
  return (
    <Section id="servicos" bgColor="cor">
 
      <div className="container">
        <div className="pt-10 z-10">
          <Titulo2 cor="claro">Serviços</Titulo2>
        </div>
        <div className="grid grid-cols-1 w-ful py-10  gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 ">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="flex flex-col w-full text-[var(--branco)] gap-2 rounded"
            >
              <h3 className="text-2xl font-bold">{card.titulo}</h3>
              <p className="font-light">{card.texto}</p>
              <a
                href={card.href}
                className="mt-2 px-4 w-40 text-center py-1 border rounded hover:bg-[var(--branco)] hover:text-[var(--vinho)]"
              >
                Saiba mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

/* 
 <div className="flex max-w-[1200px]">
        <Carrossel />
      </div>
*/

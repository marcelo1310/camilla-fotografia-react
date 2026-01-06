import { Section } from "@/components/SectionBase";
//import { Titulo2 } from "@/components/Titulo2";
import { useState, type SetStateAction } from "react";
import img1 from "@/assets/img/pag-home/foto1.jpg";
import { GrPrevious, GrNext } from "react-icons/gr";



export const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonials = [
    {
      id: 1,
      name: "Ana Carolina Silva",
      role: "Noiva",
      text: "Foi uma experiência incrível! As fotos capturaram cada emoção do nosso grande dia de forma tão natural e autêntica. Revivemos cada momento através das lentes.",
      image: img1
    },
    {
      id: 2,
      name: "Roberto Mendes",
      role: "Empresário",
      text: "Profissionalismo excepcional. As fotos corporativas ficaram impecáveis, transmitindo exatamente a imagem que queríamos para nossa marca.",
      image: "https://picsum.photos/seed/person2/200/200"
    },
    {
      id: 3,
      name: "Juliana Costa",
      role: "Influenciadora",
      text: "Trabalho incrível! A atenção aos detalhes e a capacidade de capturar minha essência em cada foto foi simplesmente perfeita. Super recomendo!",
      image: img1
    },
    {
      id: 4,
      name: "Pedro Almeida",
      role: "Músico",
      text: "As fotos do ensaio artístico superaram todas as expectativas. Conseguiu traduzir visualmente a energia da música de forma única.",
      image: "https://picsum.photos/seed/person4/200/200"
    },
    {
      id: 5,
      name: "Mariana Santos",
      role: "Gestante",
      text: "Um momento tão especial registrado com tanto carinho e delicadeza. As fotos ficaram lindas e vou guardar para sempre.",
      image: img1
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <Section id="depoimentos" mt="sim" bgColor="bege">
      <div className="container py-10 px-6 md:px-0 text-[var(--chumbo)]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center w-full mb-6 ">
          <h2 className="text-4xl  md:text-6xl font-light mb-4">
            Depoimentos
          </h2>
          <p className=" text-lg font-light">
            O que nossos clientes dizem
          </p>
        </div>

        {/* Exibição Principal do Depoimento */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 items-center mb-10">
            {/* Lado da Imagem */}
            <div className="relative group">
              <div className="absolute -inset-0 bg-gradient-to-br from-zinc-800/20 to-zinc-900/20  blur-2xl group-hover:blur-3xl transition-all duration-500 "></div>
              <div className="relative flex items-center justify-center aspect-square overflow-hidden w-full">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Conteúdo Slide */}
            <div className="space-y-5">
              
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide">
                {testimonials[currentIndex].text}
              </p>

              <div className="pt-6 border-t border-[var(--chumbo)]">
                <h4 className="text-2xl font-light tracking-wide mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-zinc-500 tracking-wider uppercase text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between md:justify-center gap-8 mt-10 md:mt-20">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-[var(--branco)] hover:bg-[var(--vinho)] transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <GrPrevious size={20} color="white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${currentIndex === index 
                      ? 'w-8 bg-[var(--branco)]' 
                      : 'w-2 bg-[var(--chumbo)] hover:bg-[var(--vinho)]'}
                  `}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-[var(--branco)] hover:border-zinc-600 hover:bg-[var(--vinho)] transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <GrNext size={20} color="white" />
            </button>
          </div>
        </div>

      </div>
    </Section>
  );
};



/*

        /* Alternative: Cards Grid Version 
        <div className="mt-32 pt-32 border-t border-zinc-900">
          <h3 className="text-2xl md:text-3xl font-light tracking-wider mb-16 text-center">
            Todos os Depoimentos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group p-8 rounded-lg border border-zinc-900 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-light tracking-wide">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-zinc-500 tracking-wider uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-zinc-400 leading-relaxed tracking-wide text-sm">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
*/











/*

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

export const Depoimentos = () => {
  return (
    <Section id="diferencial" mt="sim" bgColor="bege">
      <div className="container">
        <div className="flex text-center pt-10">
        <Titulo2 cor="escuro">Como cada história foi enxergada por quem esteve do outro lado da lente.</Titulo2>
        </div>
        <div className="flex flex-col items-center justify-center h-[1100px] lg:h-[500px] lg:flex-row  gap-15">
          {cards.map((card) => (
            <div className="flex rounded h-70 items-center md:w-[70%] bg-[var(--branco)] lg:w-full" key={card.id}>
              <div className="flex flex-col gap-6 items-center px-6 text-center text-[var(--vinho)]">
                <h3 className="text-xl">Nome</h3>
                <p>{card.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
*/
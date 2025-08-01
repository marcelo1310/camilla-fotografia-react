// components/Carrossel.tsx
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import img from "../../assets/img/Camilla.jpg";



const slides = [
  {
    id: 1,
    titulo: "Casamento",
    imagem: img,
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus",
    href: "/fotos-casamento",
  },
  {
    id: 2,
    titulo: "Pré-Wedding",
    imagem: img,
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus",
    href: "/ensaio-pre-wedding",
  },
  {
    id: 3,
    titulo: "Corporativo",
    imagem: img,
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus",
    href: "/ensaio-corporativo",
  },
  {
    id: 4,
    titulo: "Estúdio",
    imagem: img,
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus",
    href: "/ensaio-estudio",
  },
  {
    id: 5,
    titulo: "Ediçoes",
    imagem: img,
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus",
    href: "/edicoes",
  },
  {
    id: 6,
    titulo: "Eventos",
    imagem: img,
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus",
    href: "/fotos-de-eventos",
  },
  {
    id: 7,
    titulo: "Rostos e Retratos",
    imagem: img,
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus",
    href: "/rostos-e-retratos",
  },
];

export function Carrossel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div ref={emblaRef} className="overflow-hidden my-10 flex flex-col justify-center w-full z-20 text-[var(--branco)] h-full">
        <div className="flex xl:w-[95%]">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="px-2 md:px-3 lg:px-4 flex-[0_0_70%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
            >
              <div className="relative">
                <img
                  src={slide.imagem}
                  alt={slide.titulo}
                  className="w-full object-cover rounded"
                />
                <div className="absolute inset-0 flex flex-col items-center gap-6 justify-center bg-black/10 text-white">
                  <h3 className="text-4xl font-bold">{slide.titulo}</h3>
                  <p className="w-[80%]">{slide.texto}</p>
                  <a href={slide.href} className="mt-2 px-4 py-1 bg-white text-black rounded">
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
   

      <div className="justify-center gap-20 mt-5 hidden lg:flex">
        <button
          onClick={scrollPrev}
          className="px-4 py-2 bg-[var(--vinho)] rounded transition"
        >
          Anterior
        </button>
        <button
          onClick={scrollNext}
          className="px-4 py-2 bg-[var(--vinho)] rounded  transition"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}


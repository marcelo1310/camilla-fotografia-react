// components/Carrossel.tsx
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import img from "@/assets/img/Camilla.jpg";
import { GrNext, GrPrevious } from "react-icons/gr";

const slides = [
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias apiente aut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus eos repudiandae obcaecati assumenda sapiente aut Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    nome: "Fulano 5",
    imagem: img,
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta apiente aut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus, nemo repellat molestias soluta delectus eos repudiandae obcaecati assumenda sapiente aut Lorem ipsum dolor sit amet, consectetur",
  },
];

export function Carrossel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden flex flex-col justify-center w-full h-[500px] lg:w-[800px] z-20 text-[var(--branco)]"
    >
      <div className="flex h-90">
        {slides.map((slide) => (
          <div key={slide.id} className="p-4 flex-[0_0_100%] bg-black/30 lg:rounded-md">
            <div className="flex gap-8 flex-col items-center text-white w-full h-full">
              <div className="flex flex-col gap-2 w-full items-center justify-center">
                <img
                  className="rounded-full w-20 h-20"
                  src={slide.imagem}
                  alt="Foto de Perfil"
                />
                <h3 className="text-3xl">{slide.nome}</h3>
              </div>                  
                <p className="lg:w-[80%]">{slide.texto}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-10 top-80 px-2 py-4 rounded transition hidden lg:flex"
      >
        <GrPrevious size={30} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-10 top-80 px-2 py-4 rounded  transition hidden lg:flex"
      >
        <GrNext size={30} />
      </button>
    </div>
  );
}

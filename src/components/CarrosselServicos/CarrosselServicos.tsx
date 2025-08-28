// components/Carrossel.tsx
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import img1 from "@/assets/galeria/1.jpg";
import img2 from "@assets/galeria/2.jpg";
import img3 from "@assets/galeria/3.jpg";
import img4 from "@assets/galeria/4.jpg";
import img5 from "@assets/galeria/5.jpg";
import img6 from "@assets/galeria/6.jpg";
import img7 from "@assets/galeria/7.jpg";

export const slides = [
  {
    id: 1,
    img: img1,
    titulo: "Pré-Wedding",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "/ensaio-pre-wedding",
  },
  {
    id: 2,
    img: img2,
    titulo: "Casamento",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "/fotos-casamento",
  },
  {
    id: 3,
    img: img3,
    titulo: "Corporativo",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "ensaio-corporativo",
  },
  {
    id: 4,
    img: img4,
    titulo: "Eventos",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 5,
    img: img5,
    titulo: "Estúdio",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 6,
    img: img6,
    titulo: "Gestantes",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
  },
  {
    id: 7,
    img: img7,
    titulo: "Outros Serviços",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, quam accusamus cupiditate rerum sit repudiandae labore voluptates nesciunt deserunt.",
    href: "",
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
    <div
      ref={emblaRef}
      className="overflow-hidden flex flex-col justify-center w-full h-full z-20 text-[var(--branco)] "
    >
      <div className="flex w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="px-1 md:px-2 lg:px-3 flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_30%]"
          >
            <a href={slide.href}>
              <div className="relative shadow-xl">
                <img
                  src={slide.img}
                  alt={slide.titulo}
                  className="object-cover rounded"
                />
                <div className="absolute inset-0 flex flex-col items-center text-center gap-2 justify-end bg-black/10 text-[var(--branco)]">
                  <h3 className="text-3xl font-bold">{slide.titulo}</h3>

                  <a
                    href={slide.href}
                    className="m-3 px-4 py-1 bg-[var(--branco)] text-black rounded"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-1  px-2 py-4 bg-black/70 rounded transition"
      >
        <GrPrevious size={25} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-1 bg-black/70 px-2 py-4 rounded  transition"
      >
        <GrNext size={25} />
      </button>
    </div>
  );
}

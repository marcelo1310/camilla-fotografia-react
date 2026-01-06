import { Section } from "@/components/SectionBase";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
//import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type GaleriaProps = {
  imagens: string[];
};

export function Galeria({ imagens }: GaleriaProps) {
  const [imagemAtual, setImagemAtual] = useState<number | null>(null);

  function abrirModal(index: number) {
    setImagemAtual(index);
  }

  function fecharModal() {
    setImagemAtual(null);
  }

  function imagemAnterior(e: React.MouseEvent) {
    e.stopPropagation();
    if (imagemAtual !== null) {
      setImagemAtual((prev) => (prev! === 0 ? imagens.length - 1 : prev! - 1));
    }
  }

  function proximaImagem(e: React.MouseEvent) {
    e.stopPropagation();
    if (imagemAtual !== null) {
      setImagemAtual((prev) => (prev! === imagens.length - 1 ? 0 : prev! + 1));
    }
  }

  return (
    <Section mt="nao">
      <div className="container">
        <div className="columns-2 md:columns-3 gap-2 my-2">
          {imagens.length === 0 && <p className="text-[2rem]">Carregando...</p>}

          {imagens.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`foto ${index + 1}`}
              loading="lazy"
              className="
                w-full
                mb-2
                break-inside-avoid
                object-cover
                cursor-pointer
                hover:opacity-80
                transition
              "
              onClick={() => abrirModal(index)}
            />
          ))}
        </div>

        {/* Modal de visualização */}
        {imagemAtual !== null && (
          <div
            className="fixed flex items-center justify-center inset-0 bg-[var(--branco)] z-90"
            onClick={fecharModal}
          >

            {/* Conteúdo do modal */}
            <div className="relative flex flex-col  items-center justify-center z-10 w-full h-full mt-30 lg:mt-0  px-4 md:p-0">

              {/* Botão Prev */}
              <button
                className="absolute flex items-center justify-center left-4 text-[var(--branco)] text-4xl font-bold bg-black/50 rounded-full w-12 h-12  hover:bg-black transition"
                onClick={imagemAnterior}
              >
                <GrPrevious />
              </button>

              {/* Botão Close */}
              <button
                className="absolute top-5 right-10 text-[var(--vinho)] text-3xl font-bold"
                onClick={fecharModal}
              >
                &times;
              </button>

              {/* Imagem */}
              <img
                src={imagens[imagemAtual]}
                alt="Visualização"
                className="w-full md:w-[80%] max-h-[85%] object-contain"
              />

              {/* Botão Next */}
              <button
                className="absolute flex items-center justify-center right-4 text-[var(--branco)] text-4xl font-bold bg-black/50 rounded-full w-12 h-12  hover:bg-black transition"
                onClick={proximaImagem}
              >
                <GrNext />
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

/*
 <div className="container">
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-2">
          {imagens.length === 0 && <p className="text-[2rem]">Carregando...</p>}
          {imagens.map((src, index) => {
            const webpSrc = src.replace(/\.jpe?g$/i, ".webp");
            return (
              <picture key={index} onClick={() => abrirModal(index)}>
                <source srcSet={webpSrc} type="image/webp" />
                <img
                  src={src}
                  alt={`foto ${index + 1}`}
                  loading="lazy"
                  className="w-full object-cover shadow-md cursor-pointer hover:opacity-80 transition"
                />
              </picture>
            );
          })}
        </div>
*/

import { Section } from "@/components/SectionBase";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

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
      {/* Grade de imagens */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        {imagens.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`foto ${index + 1}`}
            className="w-full object-cover shadow-md cursor-pointer hover:opacity-80 transition"
            onClick={() => abrirModal(index)}
          />
        ))}
      </div>

      {/* Modal de visualização */}
      {imagemAtual !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-90"
          onClick={fecharModal}
        >
          {/* Conteúdo do modal */}
          <div className="relative z-10 max-w-5xl w-full h-full flex items-center justify-center px-4">
            {/* Botão Prev */}
            <button
              className="absolute left-4 text-white text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black transition"
              onClick={imagemAnterior}
            >
              <GrPrevious />
            </button>

            {/* Botão Close */}
            <button
              className="absolute top-20 right-5 text-white text-3xl font-bold"
              onClick={fecharModal}
            >
              &times;
            </button>

            {/* Imagem */}
            <img
              src={imagens[imagemAtual]}
              alt="Visualização"
              className="w-full max-h-[80vh] object-contain rounded shadow-lg"
            />

            {/* Botão Next */}
            <button
              className="absolute right-4 text-white text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black transition"
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

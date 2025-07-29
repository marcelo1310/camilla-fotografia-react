import { useEffect, useState } from "react";

export function useAnimacao(src: string) {
  const [imagemCarregada, setImagemCarregada] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const aoCarregar = () => {
      setImagemCarregada(true);
    };

    img.onload = aoCarregar;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return imagemCarregada;
}

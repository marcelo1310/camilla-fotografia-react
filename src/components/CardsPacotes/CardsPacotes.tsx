

type PacoteProps = {
  children?: React.ReactNode;
  titulo: string;
  img?: string;
  valor: string
};

export const Pacote = ({ children, titulo, img, valor }: PacoteProps) => {
  return (
    <div className="bg-[var(--branco)] min-h-80 md:max-w-110 px-5">
      {img ? <div className="flex h- w-full pt-5"><img src={img} alt="Imagem ilustrativa do pacote ESTRATÉGIA" className="w-full" /></div> : ""}
      <h3 className="text-[1.5rem] font-bold text-center border-b-3 p-5">
        {titulo}
      </h3>
      <ul className="list-disc p-8 text-[1.3rem]">{children}</ul>
      <div className="w-full flex justify-center text-[var(--branco)]">
        <p className="text-[2rem] text-center bg-[var(--vinho)] mb-5 px-2 rounded-lg">{valor}</p>
      </div>
    </div>
  );
};

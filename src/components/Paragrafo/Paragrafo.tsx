type ParagrafoProps = {
  children: React.ReactNode;
  texthero?: "nao" | "sim";
};

export const Paragrafo = ({ children, texthero = "nao" }: ParagrafoProps) => {
  const text = {
    sim: "font-medium text-xl lg:text-2xl xl:text-3xl",
    nao: "font-medium text-[1.1rem] md:text-xl xl:text-2xl",
  };

  return <p className={text[texthero]}>{children}</p>;
};
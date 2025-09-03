

type BotaoProps = {
  children: React.ReactNode;
  tipo?: "chamada" | "secundario";  
  cor?: "transparente" | "bege" | "vinho";          
  onClick?: () => void;
};

export const Botao = ({ children, tipo="chamada", cor="bege", onClick }: BotaoProps) => {

  const estiloBase = "z-10 px-8 py-2 items-center text-xl rounded-lg font-bold  md:text-2xl lg:py-3 lg:px-14"

  const estilosTipo = {
    chamada: "text-[var(--branco)]",
    secundario: "text-black",
  };

  const estilosCor = {
    bege: "bg-[var(--bege)]",
    vinho: "bg-[var(--vinho)]",
    transparente: "border-2"
  };

const estiloFinal = `${estiloBase} ${estilosTipo[tipo]} ${estilosCor[cor]}`;

  return (
    <a className={estiloFinal} onClick={onClick} href="https://wa.me/5521971639183" target="blanck">
      {children}
    </a>
  );
};

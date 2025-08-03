

type BotaoProps = {
  children: React.ReactNode;
  tipo?: "chamada" | "secundario";  
  cor?: "claro" | "escuro";          
  onClick?: () => void;
};

export const Botao = ({ children, tipo="chamada", cor="escuro", onClick }: BotaoProps) => {

  const estiloBase = "z-10 px-8 py-2 items-center text-xl rounded-2xl font-bold  md:text-2xl lg:py-3 lg:px-14"

  const estilosTipo = {
    chamada: "text-[var(--branco)]",
    secundario: "text-black",
  };

  const estilosCor = {
    claro: "bg-[var(--bege)]",
    escuro: "bg-[var(--vinho)]",
  };

const estiloFinal = `${estiloBase} ${estilosTipo[tipo]} ${estilosCor[cor]}`;

  return (
    <button className={estiloFinal} onClick={onClick}>
      {children}
    </button>
  );
};

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  bgColor?: "transparente" | "cor";
  bgImage?: string;
  mt?: "sim" | "nao"
};

export const Section = ({
  children,
  id,
  bgColor = "transparente",
  bgImage,
  mt = "sim",
}: SectionProps) => {
    
  const estiloBase =
    "relative flex flex-col w-full items-center justify-center bg-cover bg-center scroll-mt-15";

  const estilosCor = {
    transparente: "",
    cor: "bg-[var(--vinho)]",
  };

const marginTop = {
  sim: "mt-20",
  nao: "mt-0"
}


  const classFinal = `${marginTop[mt]} ${estiloBase} ${estilosCor[bgColor]}`;

  return (
    <section
      id={id}
      className={classFinal}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      }}
    >  
        {children}
    </section>
  );
};

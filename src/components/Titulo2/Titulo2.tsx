type Titulo2Props = {
    children: React.ReactNode;
    cor?: "claro" | "escuro"
}

export const Titulo2 = ({children, cor="escuro"}: Titulo2Props) => {

const estiloBase = "text-3xl font-[var(--fonte-titulo)] md:text-4xl lg:text-5xl"

const estiloCor = {
  claro: "text-[var(--branco)]",
  escuro: "text-[var(--vinho)]"
}

const estiloFinal = `${estiloBase} ${estiloCor[cor]}`

    return(
      <h2 className={estiloFinal}>
       {children}
      </h2>
    )
}
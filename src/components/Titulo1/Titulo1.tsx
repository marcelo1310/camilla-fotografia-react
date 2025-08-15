type Titulo1Props = {
    children: String
}

export const Titulo1 = ({children} : Titulo1Props) => {
    return (
        <h1 className="font-bold text-center text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] text-[var(--branco)]">
            {children}
        </h1>
    )
}
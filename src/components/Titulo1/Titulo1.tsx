type Titulo1Props = {
    children: String
}

export const Titulo1 = ({children} : Titulo1Props) => {
    return (
        <h1 className=" font-semibold text-center text-[1.5rem] lg:text-start md:text-[2rem] xl:text-[2.5rem] text-[var(--branco)]">
            {children}
        </h1>
    )
}
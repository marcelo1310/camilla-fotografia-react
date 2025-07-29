type Titulo1Props = {
    children: String
}

export const Titulo1 = ({children} : Titulo1Props) => {
    return (
        <h1 className="font-bold text-center text-4xl lg:text-6xl xl:text-7xl text-[var(--branco)]">
            {children}
        </h1>
    )
}
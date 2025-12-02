type Titulo1Props = {
    children: String
    home?: "sim"
}

export const Titulo1 = ({children, home} : Titulo1Props) => {

  
    return (
        <h1 className= {`${home ? "text-4xl md:text-5xl lg:text-7xl" : "font-semibold text-center text-[1.5rem] lg:text-start md:text-[2rem] xl:text-[2.5rem] text-[var(--branco)]"}`}>
            {children}
        </h1>
    )
}
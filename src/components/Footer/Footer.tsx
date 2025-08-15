
import { Paragrafo } from "../Paragrafo"

export const Footer = () => {
    return (
        <footer className="flex justify-center w-full h-40 bg-[var(--bege] text-[var(--branco)]">

            <div className="flex flex-col items-center gap-5 justify-center xl:w-[1200px]">

                <div className="flex flex-col items-center text-[var(--vinho)]">
                    <Paragrafo> &copy; 2025 Camilla Fotografia.</Paragrafo>
                    <Paragrafo>Todos os direitos reservados.</Paragrafo>
                </div>

            </div>

        </footer>
    )
}
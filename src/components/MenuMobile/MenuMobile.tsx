
type MenuMobileProps = {
  menuAberto: boolean;
  toggleMenu: () => void;
  links: { nome: string; href: string }[];
};
export const MenuMobile = ({ menuAberto, toggleMenu, links }: MenuMobileProps) => {
  return (
     <div
            className={`fixed text-[var(--branco)] bg-[var(--bege)]/60 top-0 left-0 w-full z-50 h-full flex flex-col items-center backdrop-blur-lg duration-1000 ease-in-out
            ${menuAberto ? "opacity-100 " : "opacity-0 pointer-events-none"}
            lg:hidden`}
          >            
          
            <ul className="flex flex-col w-full items-center z-20 mt-20 text-center text-xl md:text-2xl">
              {links.map((link) => (
                <li
                  key={link.nome}
                  className="w-full flex  hover:bg-[var(--branco)] hover:text-[var(--vinho)] border-b"
                >
                  <a className="flex w-full h-[100%] p-2" href={link.href} onClick={toggleMenu}>
                    {link.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  )
}
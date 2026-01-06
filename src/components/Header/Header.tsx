import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Instagram, Facebook, WhatsApp } from "@/components/Links/Links";

export const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto(!menuAberto);
  //const [scrolled, setScrolled] = useState(false);

  /*useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  */

  useEffect(() => {
    function bloquearToque(e: TouchEvent) {
      e.preventDefault();
    }

    if (menuAberto) {
      // bloqueia o toque no fundo
      document.addEventListener("touchmove", bloquearToque, { passive: false });
    }

    return () => {
      // sempre remove o listener ao desmontar ou fechar menu
      document.removeEventListener("touchmove", bloquearToque);
    };
  }, [menuAberto]);

  const links = [
    { nome: "Topo", href: "#hero" },
    { nome: "Sobre", href: "#sobre" },
    { nome: "Portfólio", href: "/#servicos" },
    { nome: "Depoimentos", href: "#depoimentos" },
    { nome: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`w-full h-20 md:h-22 lg:h-30 flex items-center justify-between lg:justify-around z-50 transition-colors duration-300`}
    >
      <div className=" ml-4 font-[var(--fonte-titulo)]">
        <a className="flex items-center text-3xl gap-1" href="/">
          Camilla Fotografia
        </a>
      </div>
      <div className="flex items-center gap-20 ">
        <nav className="flex w-full">

          {/*Menu Desktop*/}
          <ul className="hidden gap-8 lg:flex z-10 font-[var(--fonte-titulo)] justify-between">
            {links.map((link) => (
              <li key={link.nome}>
                <a
                  href={link.href}
                  aria-label="abre menu mobile"
                  className={`relative no-underline group`}
                >
                  {link.nome}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`mr-8 lg:hidden z-1000 ${menuAberto ? "text-[var(--branco)]" : "text-[var(--vinho)]"}`}
            onClick={toggleMenu}
          >
            {menuAberto ? <IoClose size={35} /> : <IoMenu size={35} />}
          </button>

          {/*Menu Mobile*/}
          <div
            className={`absolute text-[var(--branco)] top-0 left-0 w-full z-50 h-130 flex flex-col items-center backdrop-blur-md duration-1000 ease-in-out
            ${menuAberto ? "opacity-100 " : "opacity-0 pointer-events-none"}
            lg:hidden`}
          >
            <div className="absolute flex  inset-0 bg-[var(--bege)]/80 z-10">
            

            </div>
            
          
            <ul className="flex flex-col w-full items-center z-20 mt-20 text-center font-bold text-xl md:text-2xl">
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
              <div className="flex w-50 items-center justify-between mt-15">
                <Instagram size={45} />
                <Facebook size={45} />
                <WhatsApp size={45} />
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

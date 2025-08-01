import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Instagram, Facebook, WhatsApp } from "@/components/Links/Links";

export const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto(!menuAberto);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

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
    { nome: "INÍCIO", href: "/" },
    { nome: "SOBRE", href: "#sobre" },
    { nome: "SERVIÇOS", href: "#servicos" },
    { nome: "DEPOIMENTOS", href: "#depoimentos" },
    { nome: "CONTATO", href: "#contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full h-14 flex items-center justify-between bg-[var(--bege)] lg:justify-around z-50 xl:h-16 transition-colors duration-300
     ${
        scrolled ? 'bg-[var(--branco)] text-[var(--vinho)] shadow-sm' : 'bg-transparent text-[var(--branco)]'
      }
    `}>
      <div className="ml-4 text-2xl font-bold">
        <a href="/">CF</a>
      </div>
      <div className="flex items-center gap-20 ">
        <div className=" hidden z-10 gap-15 lg:flex">
          <Instagram size={25} />
          <Facebook size={25} />
          <WhatsApp size={25} />
        </div>

        <nav className="flex w-full">
          {/*Menu Desktop*/}
          <ul className="hidden gap-8 lg:flex z-10 text-xl font-bold justify-between">
            {links.map((link) => (
              <li className="hover:text-[var(--vinho)]  hover:border-b-1" 
              key={link.nome}>
                <a href={link.href} aria-label="abre menu mobile">
                  {link.nome}
                </a>
              </li>
            ))}
          </ul>
          <button
            className=" fixed top-2.5 right-3 z-20 lg:hidden"
            onClick={toggleMenu}
          >
            {menuAberto ? "" : <IoMenu size={35} />}
          </button>
          {/*Menu Mobile*/}
          <div
            className={`absolute text-[var(--branco)] top-0 left-0 w-full z-50 h-screen flex flex-col items-center backdrop-blur-md duration-1000 ease-in-out
            ${menuAberto ? "opacity-100 " : "opacity-0 pointer-events-none"}
            lg:hidden`}
          >
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <button
              className="fixed z-60 top-2.5 right-3 lg:hidden"
              onClick={toggleMenu}
            >
              <IoClose size={35} />
            </button>

            <ul className="flex flex-col w-full items-center z-20 mt-30 text-center font-bold text-xl md:text-2xl">
              {links.map((link) => (
                <li
                  key={link.nome}
                  className="w-full block py-2 md:py-4 hover:bg-[var(--bege)] hover:text-[var(--vinho)] "
                >
                  <a href={link.href} onClick={toggleMenu}>
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

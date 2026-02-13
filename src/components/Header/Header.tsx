import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { MenuMobile } from "../MenuMobile";
import { MenuDesktop } from "../MenuDesktop";

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
    function bloquearScroll() {
      document.body.style.overflow = "hidden";
    }

    if (menuAberto) {
      bloquearScroll();
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuAberto]);

  const links = [
    { nome: "Home", href: "/" },
    { nome: "Sobre", href: "/sobre" },
    { nome: "Portfólio >", href: "" },
    { nome: "Depoimentos", href: "/depoimentos" },
    { nome: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`w-full h-20 md:h-22 lg:h-30 flex items-center justify-between lg:justify-around z-50 transition-colors duration-300`}
    >
      <div className=" ml-4 font-[var(--fonte-titulo)]">
        <a className="flex items-center text-2xl gap-1" href="/">
        <h1>
          Camilla Fotografia
        </h1>
        </a>
      </div>
      <div className="flex items-center gap-20 ">
        <nav className="flex w-full">
          <MenuDesktop links={links} />

          <button
            className={`mr-8 lg:hidden z-1000 ${
              menuAberto
                ? "fixed top-6 right-0 text-[var(--branco)]"
                : "text-[var(--vinho)]"
            }`}
            onClick={toggleMenu}
          >
            {menuAberto ? <IoClose size={35} /> : <IoMenu size={35} />}
          </button>

          <MenuMobile
            menuAberto={menuAberto}
            toggleMenu={toggleMenu}
            links={links}
          />
        </nav>
      </div>
    </header>
  );
};

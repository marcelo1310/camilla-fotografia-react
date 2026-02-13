type MenuDesktopProps = {
  links: { nome: string; href: string }[];
};

export const MenuDesktop = ({ links }: MenuDesktopProps) => {
  return (
    <>
      <ul className="hidden relative gap-8 lg:flex z-10 font-[var(--fonte-titulo)] justify-between">
        {links.map((link) => (
          <li key={link.nome}>
            <a
              href={link.href}
              aria-label={`abre menu ${link.nome.toLowerCase()}`}
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
      {links.map((link) =>
        link.nome.includes("Portfólio") ? (
          <div key="portfolio-dropdown" className="hidden">
            {/*<PortfolioDropdown />*/}
          </div>
        ) : null
      )}
    </>
  );
};

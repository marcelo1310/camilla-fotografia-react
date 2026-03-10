import { Section } from "@/components/SectionBase";
import foto from "@/assets/img/pag-home/foto2.jpg";

export const MinhaFilosofiaSection = () => {
  return (
    <Section mt="sim">
      <div className="flex flex-col font-sans md:hidden gap-5 px-2">
        <div className="w-fit">
          <span className="tracking-[0.2em] text-[var(--chumbo)] font-light">
            Histórias que falam por si mesmas
          </span>
        </div>

        <h2 className="text-3xl font-sans text-[var(--chumbo)] mb-6">
          A parte mais gratificante de ser fotógrafa não é apenas tirar fotos,
          mas sim conectar-se com as pessoas e suas histórias.
        </h2>

        <div className="flex items-center justify-center gap-5 mb-6">
          <div className="w-[35%]">
            <img src={foto} alt="Noiva" className=" object-contain" />
          </div>
          <div className="w-[60%]">
            <img src={foto} alt="Casal" className="object-cover" />
          </div>
        </div>

        <p className="text-sm text-[var(--chumbo)] leading-relaxed">
          Cada casal e família traz algo único, e sou profundamente grata por
          ser convidada a registrar esses momentos. De casamentos intimistas a
          grandes celebrações, essas experiências compartilhadas refletem o
          riso, a alegria e o amor que não podem ser expressos apenas em
          palavras.
        </p>

        <button className="bg-[var(--vinho)] text-[var(--branco)] text-xs tracking-[0.2em] py-4 w-full hover:opacity-90 transition-opacity">
          ME CONHEÇA MELHOR
        </button>
      </div>

      {/* Versão para desktop */}

      <div className="hidden relative h-130 lg:h-180 w-full max-w-[1300px] font-sans items-start md:flex columns-2 lg:items-center justify-around">
        <div className="flex absolute right-1/2 left-0 items-center justify-center gap-4 lg:gap-10 xl:gap-15 ml-5">
          <div className="md:w-1/2 md:h-[240px] lg:w-[70%] lg:h-[380px]">
            <img
              src={foto}
              alt="Noiva"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/2 md:h-[440px] lg:w-[100%] lg:h-[580px]">
            <img
              src={foto}
              alt="Casal"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex absolute left-[58%] flex-col w-[40%] gap-5 p-2">
          <div className="w-fit">
            <span className="tracking-[0.2em] text-[var(--chumbo)]">
              Histórias que falam por si mesmas
            </span>
          </div>

          <h2 className="text-4xl text-[var(--chumbo)]">
            A parte mais gratificante de ser fotógrafa não é apenas tirar fotos,
            mas sim conectar-se com as pessoas e suas histórias.
          </h2>

          <p className=" text-[var(--chumbo)] leading-relaxed">
            Cada casal e família traz algo único, e sou profundamente grata por
            ser convidada a registrar esses momentos. De casamentos intimistas a
            grandes celebrações, essas experiências compartilhadas refletem o
            riso, a alegria e o amor que não podem ser expressos apenas em
            palavras.
          </p>

          <button className="bg-[var(--vinho)] text-[var(--branco)] text-xs tracking-[0.2em] px-10 py-4 w-fit hover:opacity-90 transition-opacity">
            ME CONHEÇA MELHOR
          </button>
        </div>
      </div>
    </Section>
  );
};

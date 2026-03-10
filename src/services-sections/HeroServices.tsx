import { Section } from "@/components/SectionBase";

type HeroServiceProps = {
  titulo: string;
  texto: string;
  img: string;
};

export const HeroServices = ({ titulo, texto }: HeroServiceProps) => {
  return (
    <Section id="hero" mt="nao">
      <div className=" flex flex-col items-center justify-center w-full max-w-[1500px] bg-[var(--bege)] h-50">
        <div className="flex flex-col items-center justify-center text-center gap-4 p-5">
          <h1 className="text-3xl font-light text-[var(--chumbo)]">{titulo}</h1>
          <p className="text-sm text-[var(--chumbo)]">{texto}</p>
        </div>
      </div>
    </Section>
  );
};


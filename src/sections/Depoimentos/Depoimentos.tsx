import imgDepoimentos from "@/assets/img/img-depoimentos.jpg";
import { Carrossel } from "@/components/CarrosselDepoimentos";
import { Section } from "@/components/SectionBase";

export const Depoimentos = () => {
  return (
    <Section id="depoimentos" bgImage={imgDepoimentos}>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="flex flex-col w-full items-center">
        <h2 className="text-4xl py-10 z-10 text-[var(--branco)] font-semibold md:text-5xl">
          Depoimentos
        </h2>
        <Carrossel />
      </div>
    </Section>
  );
};

import { Hero } from "@/sections/Hero";
import { Sobre } from "@/sections/Sobre";
import { Servicos } from "@/sections/Servicos";
import { Diferencial } from "@/sections/Diferencial";
import { Depoimentos } from "@/sections/Depoimentos";
import { Contato } from "@/sections/Contato";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-[var(--branco)]">
      <Hero />
      <Sobre />
      <Servicos />
      <Diferencial />
      <Depoimentos />
      <Contato />
    </div>
  );
};

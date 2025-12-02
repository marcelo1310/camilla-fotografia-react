import { Hero } from "@/sections/Hero";
import { Sobre } from "@/sections/Sobre";
import { Servicos } from "@/sections/Servicos";
import { Diferencial } from "@/sections/Diferencial";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-[var(--branco)]">
      <Hero />
      <Sobre />
      <Servicos />
      <Diferencial />
    </div>
  );
};

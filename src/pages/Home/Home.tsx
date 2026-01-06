import { Hero } from "@/sections/Hero";
import { Sobre } from "@/sections/Sobre";
import { Portfolio } from "@/sections/Portfolio";
import { Depoimentos } from "@/sections/Depoimentos";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Sobre />
      <Portfolio />
      <Depoimentos />
    </div>
  );
};

import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { Depoimentos } from "@/sections/Depoimentos";
import { MinhaFilosofiaSection } from "@/sections/MinhaFilosofia";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <MinhaFilosofiaSection />
      <Portfolio />
      <Depoimentos />
    </div>
  );
};

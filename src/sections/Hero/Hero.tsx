import { Carrossel } from "@/components/CarrosselServicos";
import { Section } from "@/components/SectionBase";

export const Hero = () => {
  return (
    <Section id="hero" mt="nao">
      <div className=" flex w-full min-h-0">
        <Carrossel />
      </div>
    </Section>
  );
};

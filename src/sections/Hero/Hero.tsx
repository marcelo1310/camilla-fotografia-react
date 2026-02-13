import { Carrossel } from "@/components/CarrosselServicos";
import { Section } from "@/components/SectionBase";

export const Hero = () => {
  return (
    <Section id="hero" mt="nao">
      <div className="flex ">
        <Carrossel />
      </div>
    </Section>
  );
};

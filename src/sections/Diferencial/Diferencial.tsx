import { Section } from "@/components/SectionBase";
import { Titulo2 } from "@/components/Titulo2";
import { Paragrafo } from "@/components/Paragrafo";

export const Diferencial = () => {
  return (
    <Section id="diferencial">
      <div className="w-full">
        <div className="flex flex-col items-center w-[calc(100%-16px)] mx-2">
          <div className="py-8">
            <Titulo2>Meu diferencial</Titulo2>
          </div>
          <div className="flex flex-col gap-6">
            <Paragrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              deserunt, adipisci obcaecati sint provident dolore? Vel pariatur,
              sint repellat possimus dignissimos aliquam. Sed numquam earum est?
              Temporibus quos obcaecati labore?
            </Paragrafo>
            <Paragrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              deserunt, adipisci obcaecati sint provident dolore? Vel pariatur,
              sint repellat possimus dignissimos aliquam. Sed numquam earum est?
              Temporibus quos obcaecati labore?
            </Paragrafo>
            <Paragrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              deserunt, adipisci obcaecati sint provident dolore? Vel pariatur,
              sint repellat possimus dignissimos aliquam. Sed numquam earum est?
              Temporibus quos obcaecati labore?
            </Paragrafo>
          </div>
        </div>
      </div>
    </Section>
  );
};

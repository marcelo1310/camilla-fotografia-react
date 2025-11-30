import { Section } from "@/components/SectionBase";
import img from "@/assets/img/5.jpg";
import { Filtro } from "@/components/Filtro";
import { Titulo2 } from "@/components/Titulo2";
import { Paragrafo } from "@/components/Paragrafo";

export const History = () => {
  return (
    <Section bgImage={img} mt="nao">
      <Filtro />
      <div className="container min-h-80 text-[var(--branco)] pb-4">
        <div className="py-10">
          <Titulo2 cor="claro">Conheça a Paula</Titulo2>
        </div>
        <div className="flex flex-col gap-3 md:w-[80%]">
          <Paragrafo>
            Ela é estrategista digital e designer. O trabalho dela une estética,
            estratégia e verdade. Então, as fotos tinham que refletir exatamente
            isso.
          </Paragrafo>
          <Paragrafo>
            Nada de imagens que não conversam com quem ela é. Tudo foi pensado
            para mostar a Paula, com autenticidade e intenção.
          </Paragrafo>
          <Paragrafo>
            A estética foi intensionada para transmitir clareza, sofisticação,
            conexão e autenticidade.
          </Paragrafo>
          <Paragrafo>
            Resultado? Uma imagem profissional que representa quem ela é e quem
            ela quer atrair.
          </Paragrafo>
        </div>
      </div>
    </Section>
  );
};

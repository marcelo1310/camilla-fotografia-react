import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Titulo2 } from "@/components/Titulo2";
import { Paragrafo } from "@/components/Paragrafo";
import { Section } from "@/components/SectionBase";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import InputTelefone from "@/components/InputTelefone/InputTelefone";

export const Contato = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);
  const [telefone, setTelefone] = useState("");

  const enviarEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setEnviado(false);
    setErro(false);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_3nkl56j",
          "template_e17c698",
          formRef.current,
          "37hgnb-0uNlC8rdhh"
        )
        .then(() => {
          setEnviando(false);
          setEnviado(true);
          formRef.current?.reset();
        })
        .catch(() => {
          setEnviando(false);
          setErro(true);
        });
    }
  };


  return (
    <Section id="contato">
      <div className="container mb-15 gap-10">
        {/* Título */}
        <div className=" flex flex-col text-center gap-6 mb-20">
          <Titulo2>Estou aqui para ouvir o que você precisa.</Titulo2>
          <Paragrafo>
            Entre em contato para agendar seu ensaio ou tirar
            dúvidas.
          </Paragrafo>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bloco de informações */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <a
                href="wa.me/message/EBTONHHDANOOA1"
                target="_blank"
                className="text-lg text-[var(--vinho)] hover:text-green-500 transition"
              >
                (21) 97163-9183
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <a
                href="mailto:"
                className="text-lg text-[var(--vinho)] hover:text-blue-500 transition"
              >
                contato@fotografa.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-pink-500 text-2xl" />
              <a
                href="https://instagram.com/camillafotografiabr"
                target="_blank"
                className="text-lg text-[var(--vinho)] hover:text-pink-500 transition"
              >
                @camillafotografiabr
              </a>
            </div>
          </div>

          {/* Formulário */}
          <form
            ref={formRef}
            onSubmit={enviarEmail}
            className="bg-[var(--bege)]/40 rounded p-8 space-y-5 lg:w-[80%]"
          >
            <Paragrafo>Se preferir, me envie sua ideia por email. Estou animada para conhecer sua história.</Paragrafo>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="w-full p-3 bg-[var(--branco)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vinho)]"
            />
             <InputTelefone value={telefone} onChange={setTelefone} name="telefone" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="w-full p-3 bg-[var(--branco)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vinho)]"
            />
            <textarea
              name="mensagem"
              placeholder="Escreva sua mensagem..."
              required
              rows={5}
              className="w-full p-3 bg-[var(--branco)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vinho)]"
            ></textarea>
            <button
            type="submit"
            disabled={enviando}
            className="w-full bg-[var(--vinho)] text-[var(--branco)] font-semibold py-3 rounded hover:brightness-90 cursor-pointer transition disabled:opacity-50"
          >
            {enviando ? "Enviando..." : "Enviar Mensagem"}
          </button>

            {enviado && (
              <p className="text-green-600 text-center mt-4">
                ✅ Mensagem enviada com sucesso!
              </p>
            )}
            {erro && (
              <p className="text-red-600 text-center mt-4">
                ❌ Ocorreu um erro. Tente novamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

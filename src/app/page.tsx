"use client";
import React from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
  Fullpage,
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

export default function Home() {
  const [loadingImage, setLoadingImage] = React.useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem"),
    };

    console.log("Dados do formulário:", data);
  }

  return (
    <>
      {loadingImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-white/70 backdrop-blur-sm z-50">
          <p className="text-[var(--color-dark)]">Carregando...</p>
        </div>
      )}

      <Fullpage>
        <FullpageNavigation />

        {/* Header */}
        <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-between px-8 z-50">
          <div></div>

          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                {/* Botão */}
                <Menu.Button className="relative flex flex-col items-end justify-center p-5 space-y-2 focus:outline-none cursor-pointer text-[var(--color-dark)] z-50">
                  <div
                    className={`h-[4px] w-10 bg-current rounded-full transition-transform duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""
                      }`}
                  />
                  <div
                    className={`h-[4px] w-6 bg-current rounded-full transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <div
                    className={`h-[4px] w-10 bg-current rounded-full transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""
                      }`}
                  />
                </Menu.Button>

                {/* Itens com transição */}
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-500 delay-200"
                  enterFrom="opacity-0 translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-300"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                >
                  <Menu.Items className="absolute right-[-10] mt-[-70] w-84 bg-white border border-gray-200 shadow-2xl focus:outline-none z-40 py-20 px-8">

                    {/* Projetos - Em breve */}
                    <Menu.Item disabled>
                      {() => (
                        <span
                          title="Em breve"
                          className="block px-6 py-4 text-lg font-medium text-gray-400 cursor-not-allowed"
                        >
                          Projetos
                        </span>
                      )}
                    </Menu.Item>

                    {/* Resumo Profissional */}
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#ResumoProfissional"
                          className={`block px-6 py-4 text-lg font-medium transition-colors cursor-not-allowed ${active
                            ? "bg-[var(--color-hero)] text-[var(--color-primary)]"
                            : "text-[var(--color-dark)]"
                            }`}
                        >
                          Resumo Profissional
                        </a>
                      )}
                    </Menu.Item>

                    {/* Contato */}
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#contato"
                          className={`block px-6 py-4 text-lg font-medium transition-colors text-[var(--color-dark)] cursor-not-allowed`}
                        >
                          Contato
                        </a>
                      )}
                    </Menu.Item>

                    {/* LinkedIn - Em breve */}
                    <Menu.Item disabled>
                      {() => (
                        <span
                          title="Em breve"
                          className="block px-6 py-4 text-lg font-medium text-gray-400 cursor-not-allowed"
                        >
                          in/jhordansuzuki
                        </span>
                      )}
                    </Menu.Item>

                    {/* GitHub - Em breve */}
                    <Menu.Item disabled>
                      {() => (
                        <span
                          title="Em breve"
                          className="block px-6 py-4 text-lg font-medium text-gray-400 cursor-not-allowed"
                        >
                          github.com/SuzukiJhor
                        </span>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </header>

        <FullPageSections>

          {/* ====== Seção Hero ====== */}
          <FullpageSection>
            <main className="flex w-full h-[100vh] relative">
              {/* Seção Esquerda */}
              <article className="w-[75%] flex flex-col justify-start bg-[var(--color-dark)] pl-[15%] pt-[12%]">
                <h1 className="text-[var(--color-primary)] leagueSpartan text-[74px] font-bold leading-[110%] mr-[55%]">
                  Desenvolvedor Full stack
                </h1>
                <p className="text-white text-xl font-spartan font-bold leading-normal mt-4 opacity-80 mr-[45%]">
                  Um desenvolvedor web orientado a resultados, apto a criar e gerenciar sites e aplicativos que impulsionam o sucesso do produto.
                </p>

                <div className="flex w-[600px] mt-36 space-x-8">
                  <p className="text-[var(--color-light)] w-[50%] text-[14px] opacity-50">
                    Criação de interfaces modernas e intuitivas com foco em experiências digitais fáceis e agradáveis para o usuário.
                  </p>
                  <p className="text-[var(--color-light)] w-[50%] text-[14px] opacity-50">
                    Back-end consistente e adaptável, seu sistema funcionando de forma confiável, mesmo durante o crescimento.
                  </p>
                </div>
              </article>

              {/* Imagem */}
              <div className="absolute top-[20%] left-[60%] w-[290px] h-[276px] shadow-2xl overflow-hidden z-50">
                <Image
                  src="/autoridade.webp"
                  alt="Minha foto"
                  width={453}
                  height={466}
                  className="w-full h-full object-cover"
                  priority
                  onLoadingComplete={() => setLoadingImage(false)}
                />
              </div>

              {/* Borda sobre a imagem */}
              <div className="absolute top-[24%] left-[62%] w-[290px] h-[276px] border-2 border-white pointer-events-none z-20"></div>

              {/* Seção direita */}
              <aside className="w-[25%] h-full bg-[var(--color-primary)]"></aside>
            </main>
          </FullpageSection>

          {/* ====== Seção Arquitetura/Designer ====== */}
          <FullpageSection>
            <section className="flex w-full h-[100vh] bg-white py-32 relative justify-around items-center px-8">
              <article className="w-[500px] self-start">
                <h2 className="text-6xl font-bold text-[var(--color-dark)] mb-4">Arquitetura</h2>
                <p className="text-gray-500 text-2xl leading-snug opacity-80">
                  Ao desenvolver aplicações, utilizo as ferramentas adequadas e tenho autonomia para entregar soluções eficientes, resilientes e preparadas para escalar. Performance, boas práticas e escalabilidade fazem parte do meu processo de desenvolvimento.
                </p>
              </article>

              <article className="w-[500px] self-end">
                <h2 className="text-6xl font-bold text-[var(--color-dark)] mb-4">Designer</h2>
                <p className="text-gray-500 text-2xl leading-snug opacity-80">
                  Meu trabalho em design é orientado pela criação de interfaces que aliam estética e usabilidade, utilizando boas práticas de UI/UX para entregar experiências funcionais e atraentes.                </p>
              </article>

              {/* Elementos decorativos */}
              <div className="absolute top-10 left-1/3 w-24 h-24 border border-gray-300 rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute bottom-10 right-1/4 w-12 h-12 border border-gray-300 rounded-full opacity-20"></div>
            </section>
          </FullpageSection>

          {/* ====== Seção Sobre ====== */}
          <FullpageSection>
            <section className="w-full min-h-screen bg-[var(--color-dark)] text-white flex justify-center items-start px-6 sm:px-12 lg:px-32 py-12">
              <div className="flex flex-col items-center w-full max-w-6xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] text-center opacity-90">Sobre</h2>
                <p className="text-base sm:text-lg lg:text-2xl opacity-80 text-center mt-4 max-w-3xl">
                  Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, em termos de programação e tecnologia.
                </p>

                <div className="mt-12 lg:mt-20 w-full flex flex-col lg:flex-row gap-12">
                  <article className="lg:w-1/2 space-y-4 pr-0 lg:pr-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">Chega mais,</h3>
                    <p className="text-base sm:text-lg lg:text-xl opacity-80">
                      Gerencio tanto o Frontend quanto o Backend de sites e aplicações web,
                      sempre com foco no sucesso do produto como um todo. Confira alguns
                      dos meus trabalhos na seção de Projetos. Gosto de compartilhar conteúdos
                      sobre o que aprendi ao longo dos anos em Desenvolvimento Web, para ajudar
                      outras pessoas da comunidade dev. Sinta-se à vontade para se conectar ou
                      me seguir no LinkedIn e Telegram, onde posto conteúdos úteis sobre
                      Desenvolvimento Web e Programação.
                    </p>
                  </article>

                  <aside className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 pl-0 lg:pl-12">
                    {[
                      "GIT", "PHP", "JavaScript", "Laravel", "Nest.js", "HTML",
                      "Redis", "Next.js", "Wordpress", "SQL", "SEO", "CSS",
                      "MongoDB", "React.js", "Node.js", "SASS", "Angular", "Vue.js"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-[var(--color-primary)] text-[var(--color-dark)] font-bold px-2 py-2 rounded-md text-center text-sm sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </aside>
                </div>
              </div>
            </section>
          </FullpageSection>

          {/* ====== Seção Contato ====== */}
          <FullpageSection>
            <section className="w-full h-[100vh] bg-white flex flex-col items-center justify-center py-32 px-24">
              <h2 className="text-6xl font-bold text-[var(--color-dark)] mb-8">Mande uma mensagem!</h2>
              <p className="text-gray-500 text-2xl text-center mb-32">
                Alguma pergunta ou proposta, ou quer apenas dar um salve? Manda bala.
              </p>

              <form onSubmit={handleSubmit} className="w-full max-w-4xl flex flex-col space-y-6">
                <div className="flex space-x-6">
                  <div className="relative w-1/2">
                    <input type="text" id="nome" name="nome" placeholder="Seu nome" className="peer w-full border-b border-gray-400 focus:outline-none py-2 px-2 text-gray-800 placeholder-transparent" />
                    <label htmlFor="nome" className="absolute left-2 top-2 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[var(--color-dark)]">Nome</label>
                  </div>

                  <div className="relative w-1/2">
                    <input type="email" name="email" id="email" placeholder="Seu e-mail" className="peer w-full border-b border-gray-400 focus:outline-none py-2 px-2 text-gray-800 placeholder-transparent" />
                    <label htmlFor="email" className="absolute left-2 top-2 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[var(--color-dark)]">E-mail</label>
                  </div>
                </div>

                <div className="relative w-full mt-15">
                  <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" className="peer w-full border-b border-gray-400 focus:outline-none py-2 px-2 text-gray-800 placeholder-transparent resize-none h-12" />
                  <label htmlFor="mensagem" className="absolute left-2 top-2 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[var(--color-dark)]">Sua mensagem</label>
                </div>

                <button type="submit" className="self-center mt-6 w-48 h-12 border-2 border-gray-400 text-gray-400 font-bold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  ENVIAR
                </button>
              </form>
            </section>
          </FullpageSection>

        </FullPageSections>
      </Fullpage>
    </>
  );
}

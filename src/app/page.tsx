"use client";

import Image from "next/image";
import {
  Fullpage,
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

export default function Home() {
  return (
    <Fullpage>
      {/* navegação com bolinhas no lado direito */}
      <FullpageNavigation />

      <FullPageSections>
        {/* ====== Seção Hero ====== */}
        <FullpageSection>
          <div className="flex w-full h-[100vh] relative">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-between px-8 z-50">
              <div className="flex items-center space-x-2"></div>
              <button className="text-[#08111A] text-3xl focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </header>

            {/* Seção Esquerda */}
            <div className="w-[75%] items-center justify-left bg-[#08111A]">
              <div className="w-[500px] h-[350] mt-[20%] ml-[15%]">
                <p className="text-[#CCF381] font-roboto text-[74px] font-bold leading-[110%]">
                  Desenvolvedor Full stack
                </p>
                <p className="text-white font-roboto text-[16px] font-bold leading-normal mt-[5%] opacity-80">
                  Um desenvolvedor web orientado a resultados, especializado em
                  criar e gerenciar sites e aplicativos que impulsionam o
                  sucesso do produto.
                </p>
              </div>

              <div className="flex w-[600px] ml-[15%] space-x-8">
                <p className="text-[#F0FCE0] w-[50%] h-[90px] text-[12px] opacity-50">
                  Criação de interfaces modernas e intuitivas com foco em
                  experiências digitais fáceis e agradáveis para o usuário
                </p>
                <p className="text-[#F0FCE0] w-[50%] h-[90px] text-[12px] opacity-50">
                  Back-end sólido e escalável, seu sistema funcionando de forma
                  confiável, mesmo durante o crescimento.
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="absolute top-[20%] left-[60%] w-[290px] h-[276px] shadow-2xl overflow-hidden z-50">
              <Image
                src="/especialista-up.png"
                alt="Minha foto"
                width={453}
                height={466}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Borda sobre a imagem */}
            <div className="absolute top-[24%] left-[62%] w-[290px] h-[276px] border-2 border-white pointer-events-none z-20"></div>

            {/* Seção direita */}
            <div className="w-[25%] h-full bg-[#CCF381]"></div>
          </div>
        </FullpageSection>

        {/* ====== Seção Arquitetura/Designer ====== */}
        <FullpageSection>
          <div className="w-full h-[100vh] bg-white py-32 relative flex justify-center items-start space-x-32">
            {/* Bloco Arquitetura */}
            <div className="w-[300px]">
              <h2 className="text-4xl font-bold text-[#08111A] mb-4">
                Arquitetura
              </h2>
              <p className="text-[#08111A] text-sm leading-relaxed opacity-80">
                Ao desenvolver aplicações, conto com as ferramentas certas, tenho
                total autonomia para entregar soluções rápidas e resilientes,
                otimizadas para escala. Performance e escalabilidade estão
                sempre no meu radar.
              </p>
            </div>

            {/* Bloco Designer */}
            <div className="w-[300px]">
              <h2 className="text-4xl font-bold text-[#08111A] mb-4">
                Designer
              </h2>
              <p className="text-[#08111A] text-sm leading-relaxed opacity-80">
                Me interesso em criar interfaces que unem clareza e estética.
                Trabalho buscando sempre o equilíbrio entre o visual agradável e
                a experiência simples para quem usa.
              </p>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-10 left-1/3 w-24 h-24 border border-gray-300 rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute bottom-10 right-1/4 w-12 h-12 border border-gray-300 rounded-full opacity-20"></div>
          </div>
        </FullpageSection>

        {/* ====== Seção Sobre ====== */}
        <FullpageSection>
          <section className="w-full h-[100vh] bg-[#08111A] text-white py-32 px-24 flex justify-between">
            {/* Coluna de texto */}
            <div className="w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-[#CCF381]">Sobre</h2>
              <p className="text-white opacity-80">
                Aqui você encontrará mais informações sobre mim, o que faço e
                minhas habilidades atuais, em termos de programação e tecnologia.
              </p>

              <h3 className="text-2xl font-bold text-[#CCF381] mt-6">
                Chega mais,
              </h3>
              <p className="text-white opacity-80">
                Gerencio tanto o Frontend quanto o Backend de sites e aplicações
                web, sempre com foco no sucesso do produto como um todo. Confira
                alguns dos meus trabalhos na seção de Projetos. Gosto de
                compartilhar conteúdos sobre o que aprendi ao longo dos anos em
                Desenvolvimento Web, para ajudar outras pessoas da comunidade
                dev. Sinta-se à vontade para se conectar ou me seguir no LinkedIn
                e Telegram, onde posto conteúdos úteis sobre Desenvolvimento Web
                e Programação.
              </p>
            </div>

            {/* Coluna de skills */}
            <div className="w-1/2 grid grid-cols-3 gap-4">
              {[
                "GIT",
                "PHP",
                "JavaScript",
                "Laravel",
                "Nest.js",
                "HTML",
                "Redis",
                "Next.js",
                "Wordpress",
                "SQL",
                "SEO",
                "CSS",
                "MongoDB",
                "React.js",
                "Node.js",
                "SASS",
                "Angular",
                "Vue.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#CCF381] text-[#08111A] font-bold px-4 py-2 rounded-md text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </FullpageSection>

        {/* ====== Seção Contato ====== */}
        <FullpageSection>
          <section className="w-full h-[100vh] bg-white flex flex-col items-center justify-center py-32 px-24">
            <h2 className="text-4xl font-bold text-[#08111A] mb-4">
              Mande uma mensagem!
            </h2>
            <p className="text-gray-500 text-center mb-12">
              Alguma pergunta ou proposta, ou quer apenas dar um salve? Manda
              bala.
            </p>

            <form className="w-full max-w-4xl flex flex-col space-y-6">
              <div className="flex space-x-6">
                <input
                  type="text"
                  placeholder="Coloque seu Nome!"
                  className="w-1/2 border-b border-gray-400 focus:outline-none py-2 px-2 placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  className="w-1/2 border-b border-gray-400 focus:outline-none py-2 px-2 placeholder-gray-400"
                />
              </div>

              <textarea
                placeholder="Escreva sua mensagem!"
                className="w-full border-b border-gray-400 focus:outline-none py-2 px-2 placeholder-gray-400 resize-none h-32"
              />

              <button
                type="submit"
                className="mt-6 w-48 h-12 border-2 border-gray-400 text-gray-400 font-bold text-lg hover:bg-[#CCF381] hover:text-white transition-colors"
              >
                ENVIAR
              </button>
            </form>
          </section>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

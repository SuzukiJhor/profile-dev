import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex w-full h-[100vh]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-between px-8 z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <span className="text-white font-bold text-lg">Meu Portfólio</span> */}
        </div>

        {/* Ícone de menu */}
        <button className="text-[#08111A] text-3xl focus:outline-none">
          {/* Ícone Hamburguer */}
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
            Um desenvolvedor web orientado a resultados, especializado em criar e gerenciar sites e aplicativos que impulsionam o sucesso do produto.
          </p>
        </div>

        <div className="flex w-[600px] ml-[15%] space-x-8">
          <p className="text-[#F0FCE0] w-[50%] h-[90px] text-[12px] opacity-50">
            Criação de interfaces modernas e intuitivas com foco em experiências digitais fáceis e agradáveis para o usuário
          </p>
          <p className="text-[#F0FCE0] w-[50%] h-[90px] text-[12px] opacity-50">
            Back-end sólido e escalável, seu sistema funcionando de forma confiável, mesmo durante o crescimento.
          </p>
        </div>
      </div>

      {/* Imagem */}
      <div className="absolute top-[20%] left-[60%] w-[290px] h-[276px] shadow-2xl overflow-hidden z-50">
        <Image
          src="/especialista.png"
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
  );
}

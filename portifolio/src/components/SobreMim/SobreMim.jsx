"use client";


export default function SobreMim() {
  return (

    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Sobre Mim</h2>

      <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row items-center max-w-5xl gap-8 shadow-lg">

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-300 mb-4">
            Desenvolvedor fullstack focado em criar soluções eficientes. Experiência com lógica de programação, APIs e interfaces modernas.
          </p>

          <p className="text-gray-300">
            Experiência com React, Tailwind, Node.js, Electron e bancos de dados (MongoDB, PostgreSQL). Desenvolvo dashboards, CRUDs e integrações com APIs, sempre priorizando performance e código claro.
          </p>

        </div>


      </div>

    </section>

  );
}




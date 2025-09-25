"use client";

import { motion } from "framer-motion";

export default function Projetos() {

  const projetos = [
    { name: 'teste1' },

  ];

  // animação padrão para surgimento
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1, // efeito em cascata
        ease: "easeOut"
      }
    })
  };

  // Card: Manutenção nele
  const renderSkillCard = (skill, i) => {

    return (

      <motion.div
        key={skill.name}
        className="bg-neutral-800 p-5 rounded-xl flex flex-col shadow-md"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >

        {/* Titulo + Botões */}
        <>

          <p className=" text-sm text-left text-white">{skill.name}</p>

          {/* Botões */}
          <div className="space-y-2">
            <div className="flex gap-3 mt-4 justify-center">

              {/* Ver Projeto */}
              <a
                href="https://portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-center rounded-lg bg-white text-black text-sm hover:opacity-80 transition flex-shrink-0"
              >
                Ver Projeto
              </a>

              {/* Github */}
              <a
                href="https://github.com/vilippi/portfolio-vitorlippi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-center rounded-lg border text-sm text-white hover:opacity-80 transition flex-shrink-0"
              >
                GitHub
              </a>

            </div>
          </div>

        </>

      </motion.div>

    );

  };

  return (

    <section className="
  min-h-screen 
  flex flex-col justify-center items-center 
  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
  text-center 
  pb-16 sm:pb-20 md:pb-24 lg:pb-32
  pt-16 sm:pt-20 md:pt-24 lg:pt-32
">

      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meus Projetos
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-300 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Confira meus projetos e soluções criativas que desenvolvi.
      </motion.p>

      {/* Card de exibição */}
      <div className="w-full grid gap-4
      
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      
      ">
        {projetos.map((skill, i) => renderSkillCard(skill, i))}
      </div>

      {/* Botão */}
      <motion.a
        href="https://github.com/kayquemab?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg
             shadow-md inline-block transition-none" // evita conflito com Tailwind
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.12,
          y: -6,
          boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
          transition: { duration: 0.15, ease: "easeOut" } // suave e rápida
        }}
        whileTap={{
          scale: 0.96,
          y: 0,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
          transition: { duration: 0.1, ease: "easeIn" }
        }}
      >
        Ver todos os projetos
      </motion.a>

    </section>

  );
}

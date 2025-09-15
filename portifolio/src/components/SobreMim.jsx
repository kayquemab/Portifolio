"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren", // garante que título + card sobem antes do stagger dos textos
      staggerChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function SobreMim() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      {/* Container principal (título + card juntos) */}
      <motion.div
        className="w-full flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Sobre Mim
        </motion.h2>

        {/* Card */}
        <motion.div
          className="
            w-full
            pl-10 pr-4 py-3
            rounded-lg
            bg-transparent
            border border-gray-700
            text-white
            focus:outline-none
            focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
            placeholder-gray-400
            transition-all duration-200
            hover:border-gray-300
          "
        >
          <div className="border-l-4 border-white pl-6">
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-4"
              variants={textItem}
            >
              Sou um desenvolvedor fullstack focado em criar soluções eficientes e bem estruturadas.
              Tenho uma base sólida em lógica de programação, venho aplicando esses conhecimentos em
              projetos práticos que envolvem desde APIs até interfaces modernas.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={textItem}
            >
              Trabalho com React, Tailwind CSS, Node.js, Electron e bancos de dados como MongoDB e PostgreSQL.
              Tenho experiência desenvolvendo dashboards, sistemas internos, CRUDs otimizados e integração com APIs REST,
              sempre priorizando performance, clareza no código e uma ótima experiência para o usuário.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

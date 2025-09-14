"use client";

import { motion } from "framer-motion";

// Variantes para animações em grupo
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // atraso entre os cards
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Projetos() {

  // Seus cards fixos
  const cards = [
    {
      title: "Dashboard de Vendas",
      description:
        "Sistema completo para análise de métricas e indicadores de vendas, com gráficos interativos.",
    },
    {
      title: "Gerenciador de Tarefas",
      description:
        "Aplicação CRUD otimizada para controle de tarefas, com login seguro e persistência em banco.",
    },
    {
      title: "Portfolio Pessoal",
      description:
        "Site responsivo com animações em Framer Motion e design moderno feito com Tailwind CSS.",
    },
  ];

  return (

    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

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
        className="text-gray-300 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Confira meus projetos e soluções criativas que desenvolvi.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap gap-6 justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 text-white p-6 rounded-lg shadow-md w-72 h-full"
            variants={cardVariant}
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Botão */}
      <motion.a
        href="https://github.com/kayquemab?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg
           shadow-md transition-all duration-300
           hover:bg-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 inline-block"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        Ver todos os projetos
      </motion.a>


    </section>

  );
}

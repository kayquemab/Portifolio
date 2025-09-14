"use client";

import { motion } from "framer-motion";

export default function Projetos() {

  const cards = [
    { title: "Card 1", description: "Descrição simples do primeiro card." },
    { title: "Card 2", description: "Descrição simples do segundo card." },
    { title: "Card 3", description: "Descrição simples do terceiro card." },
  ];

  // Variants do framer-motion
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // anima cada card com atraso
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>

      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Meus Projetos</h2>

        {/* Título */}
        <p className="text-gray-300 mb-8 text-center">
          Confira meus projetos e soluções criativas que desenvolvi.
        </p>

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
              className="bg-gray-700 text-white p-6 rounded-lg shadow-md w-100 h-full"
              variants={cardVariant}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.description}</p>
            </motion.div>

          ))}
        </motion.div>

        {/* Botão */}
        <button
          type="button"
          className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg
             shadow-md transition-all duration-300
             hover:bg-white hover:scale-105 hover:shadow-lg hover:-translate-y-1"
        >
          Ver todos os projetos
        </button>

      </section>

    </>

  );
}
















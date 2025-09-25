"use client";

import { motion } from "framer-motion";

export default function SobreMim() {

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
        initial={{ opacity: 0, y: 80 }}              // começa invisível
        whileInView={{ opacity: 1, y: 0 }}            // anima quando entra na viewport
        transition={{ duration: 0.8, delay: 0.2 }}    // animação suave com leve atraso
        viewport={{ once: true, amount: 0.3 }}        // só uma vez, quando ~30% do elemento visível
      >
        Sobre Mim
      </motion.h2>

      {/* Bloco/Card principal */}
      <motion.div
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 80 }}              // começa invisível
        whileInView={{ opacity: 1, y: 0 }}            // anima quando entra na viewport
        transition={{ duration: 0.8, delay: 0.2 }}    // animação suave com leve atraso
        viewport={{ once: true, amount: 0.3 }}        // só uma vez, quando ~30% do elemento visível
      >

        <div className="border-l-4 border-white pl-6">

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Sou um desenvolvedor fullstack focado em criar soluções eficientes e bem estruturadas.
            Tenho uma base sólida em lógica de programação, venho aplicando esses conhecimentos em
            projetos práticos que envolvem desde APIs até interfaces modernas.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Trabalho com React, Tailwind CSS, Node.js, Electron e bancos de dados como MongoDB e PostgreSQL.
            Tenho experiência desenvolvendo dashboards, sistemas internos, CRUDs otimizados e integração com APIs REST,
            sempre priorizando performance, clareza no código e uma ótima experiência para o usuário.
          </p>

        </div>

      </motion.div>

    </section>

  );
  
}

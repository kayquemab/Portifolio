"use client";

import { FileText, Github, Linkedin, Mail } from "lucide-react"; // ícones
import Link from "next/link"; // Link do Next.js
import { FaEnvelope, FaUser } from "react-icons/fa";

export default function Contato() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contatos</h2>

      {/* Título */}
      <p className="text-gray-300 mb-8 text-center">
        Tem um projeto em mente ou quer bater um papo? Me envie uma mensagem!
      </p>

      {/* Formulário */}
      <form className="w-full max-w-md flex flex-col gap-4 relative">

        {/* Nome */}
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white
                 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
                 placeholder-gray-400 transition-all duration-200
                 hover:border-gray-300"
          />
        </div>

        {/* E-mail */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white
                 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
                 placeholder-gray-400 transition-all duration-200
                 hover:border-gray-300"
          />
        </div>

        {/* Mensagem */}
        <textarea
          id="mensagem"
          placeholder="Escreva sua mensagem"
          rows="5"
          className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white
               focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
               placeholder-gray-400 transition-all duration-200 resize-none
               hover:border-gray-300"
        ></textarea>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-gray-200 border-gray-700 text-gray-900 font-semibold py-3 rounded-lg
             shadow-md transition-all duration-300
             hover:bg-gray-200 hover:text-gray-900 hover:scale-105 hover:shadow-lg hover:-translate-y-1"
        >
          Enviar
        </button>

      </form>



      {/* Botões animados */}
      <div className="max-w-3xl flex flex-col items-center gap-6 mt-8">

        <div className="flex flex-wrap justify-center gap-4">

          {/* Github */}
          <Link
            href="https://github.com/kayquemab"
            target="_blank"
            className="bg-transparent text-white px-6 py-3 rounded-lg 
                       transition-all duration-300 
                       hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
          >
            <Github size={24} />
          </Link>

          {/* Linkedin */}
          <Link
            href="https://www.linkedin.com/in/kayque-miqueias-463581326/"
            target="_blank"
            className="bg-transparent text-white px-6 py-3 rounded-lg 
                       transition-all duration-300 
                       hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
          >
            <Linkedin size={24} />
          </Link>

          {/* E-mail */}
          <Link
            href={`mailto:kayquemiqueias17@gmail.com?subject=Contato%20via%20Portfólio&body=Olá,%20tudo%20bem?%0D%0A%0D%0AGostaria%20de%20entrar%20em%20contato%20com%20você%20para%20discutir%20possíveis%20projetos%20ou%20colaborações.%20Ficarei%20feliz%20em%20conversar%20sobre%20como%20posso%20contribuir.`}
            className="bg-transparent text-white px-6 py-3 rounded-lg 
             transition-all duration-300 
             hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
          >
            <Mail size={24} />
          </Link>

        </div>

      </div>

    </section>
  );
}

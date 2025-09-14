"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contato() {
  return (

    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contatos</h2>

      {/* Título */}
      <p className="text-gray-300 mb-8 text-center">
        Tem um projeto em mente ou quer bater um papo? Me envie uma mensagem!
      </p>

      {/* Formulário */}
      <form className="w-full max-w-md flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Sua mensagem"
          rows="5"
          className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition"
        >
          Enviar
        </button>
      </form>

      {/* Ícones de contato */}
      <div className="flex space-x-6 mt-10 text-2xl">
        <a href="mailto:seuemail@exemplo.com" className="hover:text-blue-400">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/seuusuario"
          target="_blank"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/seuusuario"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
      </div>

    </section>

  );
}

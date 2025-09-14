"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaPython, FaPhp, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiMysql, SiPostman, SiFigma, SiVite, SiMaterialdesign, SiFramer } from 'react-icons/si';


const projetos = [
  {
    title: "Meu Portfólio",
    description: "Portfólio pessoal com projetos em destaque, foco em frontend moderno e design responsivo.",
    image: "/images/portfolio.png", // substitua pelo caminho da imagem
    live: "#", // link para o projeto online
    github: "https://github.com/seuusuario/portfolio"
  },
  {
    title: "PC Manager",
    description: "Aplicativo desktop para controle de computadores com histórico.",
    image: "/images/pcmanager.png",
    live: null,
    github: "https://github.com/seuusuario/pcmanager"
  },
  {
    title: "Clone do Spotify",
    description: "Clone visual do Spotify com player funcional e navegação entre playlists, usando as APIs oficiais.",
    image: "/images/spotifyclone.png",
    live: null,
    github: "https://github.com/seuusuario/spotifyclone"
  }
];

export default function Projetos() {

  const frontEnd = [
    { name: 'HTML5', icon: FaHtml5 },

  ];

  const backEnd = [
    { name: 'Node.js', icon: FaNodeJs },

  ];

  const mobile = [
    { name: 'Node.js', icon: FaNodeJs },

  ];

  const renderCards = (items) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.name} className="bg-gray-800/60 rounded-lg p-4 flex flex-col items-center justify-center text-white hover:bg-gray-700 transition-all duration-200">
          {item.icon}
          <span className="mt-2">{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (

    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Meus Projetos</h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center gap-10">

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">Front-End</h3>
          {renderCards(frontEnd)}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">Back-End</h3>
          {renderCards(backEnd)}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">Mobile</h3>
          {renderCards(mobile)}
        </div>

      </div>

    </section>

  );
}

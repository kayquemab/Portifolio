"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaPython, FaPhp, FaDocker, FaAndroid, FaSwift } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiMysql, SiPostman, SiFigma, SiVite, SiMaterialdesign, SiFramer, SiFlutter, SiReact } from 'react-icons/si';

export default function Habilidades() {

  const frontEnd = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Material Design', icon: SiMaterialdesign },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Vite', icon: SiVite },
    { name: 'Figma', icon: SiFigma },
  ];

  const backEnd = [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'PHP', icon: FaPhp },
    { name: 'Python', icon: FaPython },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Postman', icon: SiPostman },
    { name: 'Docker', icon: FaDocker },
  ];

  const mobile = [
    { name: 'React Native', icon: SiReact },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Android', icon: FaAndroid },
    { name: 'iOS', icon: FaSwift },
    { name: 'Firebase', icon: SiFirebase },
  ];

  const renderCards = (items) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {items.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.name}
            className="bg-gray-800/60 rounded-xl p-6 flex flex-col items-center justify-center text-white hover:bg-gray-700 transition-all duration-200"
          >
            <IconComponent size={40} className="text-white" />
            <span className="mt-3 font-medium">{item.name}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Linguagens e Tecnologias</h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center gap-10">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-6">Front-End</h3>
          {renderCards(frontEnd)}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-6">Back-End</h3>
          {renderCards(backEnd)}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-6">Mobile</h3>
          {renderCards(mobile)}
        </div>
      </div>
    </section>
  );
}

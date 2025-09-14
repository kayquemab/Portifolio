"use client";

import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaPython, FaPhp, FaDocker, FaAndroid, FaSwift, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiMysql, SiPostman, SiFigma, SiVite, SiMaterialdesign, SiFramer, SiFlutter, SiReact } from 'react-icons/si';

export default function Habilidades() {

  const frontEnd = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Vue.js', icon: FaVuejs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: ' Design', icon: SiMaterialdesign },
    { name: 'Framer ', icon: SiFramer },
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
    { name: ' Native', icon: SiReact },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Android', icon: FaAndroid },
    { name: 'iOS', icon: FaSwift },
    { name: 'Firebase', icon: SiFirebase },
  ];

  const renderSkillCard = (skill) => {
    const Icon = skill.icon;
    return (
      <div
        key={skill.name}
        className="dark:bg-neutral-800 p-5 rounded-xl flex flex-col items-center justify-center shadow-md"
      >
        <Icon size={40} />
        <p className="mt-2 text-sm text-center">{skill.name}</p>
      </div>
    );
  };

  return (
    
    <section className="flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Linguagens e Tecnologias</h2>

      <div className=" flex flex-col lg:flex-row gap-15">

        {/* Front-End */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Front-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {frontEnd.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.15 }} // aumenta o tamanho no hover
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {renderSkillCard(skill)}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Back-End */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Back-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {backEnd.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.15 }} // aumenta o tamanho no hover
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {renderSkillCard(skill)}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Moble */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Mobile</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {mobile.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.15 }} // aumenta o tamanho no hover
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {renderSkillCard(skill)}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>

  );
}
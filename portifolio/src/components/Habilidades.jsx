"use client";

import { motion } from "framer-motion";

import {
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap,
  FaPython, FaPhp, FaDocker, FaAndroid, FaSwift, FaVuejs
} from 'react-icons/fa';

import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase,
  SiMysql, SiPostman, SiFigma, SiVite, SiMaterialdesign,
  SiFramer, SiFlutter, SiReact
} from 'react-icons/si';

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
    { name: 'Design', icon: SiMaterialdesign },
    { name: 'Framer', icon: SiFramer },
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

  const renderSkillCard = (skill, i) => {
    const Icon = skill.icon;
    return (
      <motion.div
        key={skill.name}
        className="bg-neutral-800 p-5 rounded-xl flex flex-col items-center justify-center shadow-md"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon size={40} className="text-white" />
        <p className="mt-2 text-sm text-center text-white">{skill.name}</p>
      </motion.div>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Linguagens e Tecnologias
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-16 w-full">
        
        {/* Front-End */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Front-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {frontEnd.map((skill, i) => renderSkillCard(skill, i))}
          </div>
        </div>

        {/* Back-End */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Back-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {backEnd.map((skill, i) => renderSkillCard(skill, i))}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Mobile</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {mobile.map((skill, i) => renderSkillCard(skill, i))}
          </div>
        </div>

      </div>
    </section>
  );
}

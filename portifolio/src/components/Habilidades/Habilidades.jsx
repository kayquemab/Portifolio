"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaPython, FaPhp, FaDocker, FaAndroid, FaSwift, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiMysql, SiPostman, SiFigma, SiVite, SiMaterialdesign, SiFramer, SiFlutter, SiReact } from 'react-icons/si';

import { motion } from "framer-motion";

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

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Linguagens e Tecnologias</h2>


      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">

        {/* Front-End */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Front-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {frontEnd.map((tech, index) => (
              <motion.div
                key={index}
                className="dark:bg-neutral-800 p-6 rounded-xl flex flex-col items-center justify-center shadow-md"
                whileHover={{ scale: 1.1, zIndex: 10, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon size={50} />
                <p className="mt-2 text-sm text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Back-End */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Back-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {backEnd.map((tech, index) => (
              <motion.div
                key={index}
                className="dark:bg-neutral-800 p-6 rounded-xl flex flex-col items-center justify-center shadow-md"
                whileHover={{ scale: 1.1, zIndex: 10, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon size={50} />
                <p className="mt-2 text-sm text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Mobile</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {mobile.map((tech, index) => (
              <motion.div
                key={index}
                className="dark:bg-neutral-800 p-6 rounded-xl flex flex-col items-center justify-center shadow-md"
                whileHover={{ scale: 1.1, zIndex: 10, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon size={50} />
                <p className="mt-2 text-sm text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>










    </section>
  );
}

"use client";

import Contato from "@/components/Contato/Contato";
import Habilidades from "@/components/Habilidades/Habilidades";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Projetos from "@/components/Projetos/Projetos";
import SobreMim from "@/components/SobreMim/SobreMim";
import { useRef } from "react";

export default function Page() {
  const apresentacaoRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      apresentacao: apresentacaoRef,
      projetos: projetosRef,
      contato: contatoRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
      <div>

        {/* Header */}
        <div>
          <Header scrollToSection={scrollToSection} />
        </div>

        {/* Home */}
        <div>
          <Home />
        </div>

        {/* Sobre Mim */}
        <div
          ref={apresentacaoRef}>
          <SobreMim />
        </div>

        {/* Habilidades */}
        <div>
          <Habilidades />
        </div>

        {/* Projetos */}
        <div
          ref={projetosRef}>
          <Projetos />
        </div>

        {/* Contato */}
        <div
          ref={contatoRef}>
          <Contato />
        </div>

      </div>
  );
}
"use client";

import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Sempre começa no topo (Home)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sectionRefs = { homeRef, aboutRef, skillsRef, workRef, contactRef };

  return (
    <Box sx={{ bgcolor: "#fafbfc" }}>
      <Header sectionRefs={sectionRefs} />

      <Box ref={homeRef}>
        <Home />
      </Box>
      <Box ref={aboutRef}>
        <AboutSection />
      </Box>
      <Box ref={skillsRef}>
        <SkillsSection />
      </Box>
      <Box ref={workRef}>
        <WorkSection />
      </Box>
      <Box ref={contactRef}>
        <ContactSection />
      </Box>

      <Footer />
    </Box>
  );
}

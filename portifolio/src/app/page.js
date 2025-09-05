"use client";

import { useRef } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutSection from '../components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';

export default function Page() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const sectionRefs = {
    homeRef,
    aboutRef,
    skillsRef,
    workRef,
    contactRef,
  };

  return (
    <>

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={workRef}>
         <WorkSection/>
      </div>
      <div ref={contactRef}>
         <ContactSection/>
      </div>
    </>
  );
}
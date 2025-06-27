import { useState } from "react";
import "./App.css";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
function App() {
  return (
    <div>
      <Navbar />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}

export default App;

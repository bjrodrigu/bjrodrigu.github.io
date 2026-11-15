import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Toolbox from "./components/Toolbox/Toolbox";
import Contact from "./components/Contact/Contact";

// Jump to #anchors on first load (the router doesn't do this by itself).
function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView();
  }, [hash]);
  return null;
}

function Home() {
  return (
    <>
      <a className="skip-link" href="#projects">Skip to projects</a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Toolbox />
      </main>
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* the old site had a separate projects page */}
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

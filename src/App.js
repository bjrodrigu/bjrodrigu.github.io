import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import AllProjects from './components/AllProjects/AllProjects';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Projects />
      <Skills />
      <WorkExperience />
    </>
  );
}

export default App;

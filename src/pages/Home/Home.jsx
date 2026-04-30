import React from 'react';
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import WorkExperience from "../../components/WorkExperience/WorkExperience";

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

export default Home;
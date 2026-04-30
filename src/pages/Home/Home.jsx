import React from 'react';
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Divider from '../../components/Divider/Divider';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <>
            <Hero />
            <Divider />
            <About />
            <Divider />
            <WorkExperience />
            <Divider />
            <Projects />
            <Divider />
            <Contact />
            <Divider />
            <Footer />  
        </>
    );
}

export default Home;
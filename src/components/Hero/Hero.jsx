import React from "react";
import "./Hero.css";
import PixelPitch from "./PixelPitch";

function Hero() {
  return (
    <header className="hero page" id="top">
      <div className="hero-head">
        <h1 className="hero-name">Brandon Rodriguez</h1>
        <p className="hero-lede">
          I'm a software engineer with degrees in computer science and data science from UW–Madison.
          I build web apps and data tools, and in my spare time I turn soccer data into charts.
        </p>
      </div>

      <div className="hero-pitch">
        <PixelPitch />
      </div>

      <div className="hero-more">
        <p className="hero-lede">
          In summer 2025 I interned at Walmart Global Tech, building seller email templates and a
          chatbot. I've also built a receipt-scanning tool for a catering kitchen and a new website
          for a junk-removal company in Kenosha.
        </p>
        <ul className="hero-links">
          <li><a href="#projects">See my projects</a></li>
          <li><a href="mailto:brandonrj6@gmail.com">Email me</a></li>
          <li><a href="https://github.com/bjrodrigu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/brandonrodriguezj" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Hero;

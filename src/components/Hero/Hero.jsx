import React from "react";
import "./Hero.css";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-container">
        <p className="hero-subtitle">
          Software Engineer &middot; Madison, WI
        </p>

        <h1 className="hero-title">
          Building software with{" "}
          <em className="hero-emphasis">care, clarity,</em> and craft.
        </h1>

        <p className="hero-description">
          Computer Science & Data Science student at the University of
          Wisconsin–Madison, focused on creating thoughtful,
          well-engineered solutions.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-link">
            View selected work <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
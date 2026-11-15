import React from "react";
import "./Hero.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          Computer Science & Data Science graduate of the University of
          Wisconsin–Madison, focused on creating thoughtful,
          well-engineered solutions.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="hero-link">
            View work <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
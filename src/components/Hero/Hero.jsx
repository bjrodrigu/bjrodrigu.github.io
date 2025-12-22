import React from 'react';
import './Hero.css'; // We'll make a dedicated CSS for this component

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Brandon Rodriguez</h1>
        <p className="hero-subtitle">
          Software Developer
        </p>
      </div>
    </section>
  );
};

export default Hero;

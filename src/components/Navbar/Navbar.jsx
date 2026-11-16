import React from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  return (
    <nav className="nav page" aria-label="Main">
      <a href="#top" className="nav-home" aria-label="Back to top">
        <svg viewBox="0 0 8 8" width="24" height="24" shapeRendering="crispEdges" aria-hidden="true">
          <path fill="currentColor" d="M2 1h4v1H2zM1 2h6v4H1zM2 6h4v1H2z" />
          <path fill="var(--chalk)" d="M3 3h2v2H3z" />
        </svg>
        <span>bjrodrigu</span>
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;

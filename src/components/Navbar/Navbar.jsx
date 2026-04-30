import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";

function Nav() {
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { label: "Home", to: "/" },
        { label: "About", to: "/#about" },
        { label: "Projects", to: "/#projects" },
        { label: "All Projects", to: "/all-projects" },
    ];

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
            <div className="nav-container">

                {/* Logo */}
                <Link to="/" className="nav-logo">
                    Brandon Rodriguez
                </Link>

                {/* Links */}
                <div className="nav-links">
                    {links.map((link) => (
                        <Link key={link.to} to={link.to} className="nav-link">
                            {link.label}
                        </Link>
                    ))}

                    <a href="mailto:brandonrj6@gmail.com" className="nav-icon">
                        <Mail size={12} />
                    </a>

                    <a
                        href="https://github.com/bjrodrigu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-icon"
                    >
                        <Github size={12} />
                    </a>

                    <a
                        href="https://linkedin.com/in/brandonrodriguezj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-icon"
                    >
                        <Linkedin size={12} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
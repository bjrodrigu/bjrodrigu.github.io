import React from "react";
import "./Contact.css";
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">

                <div className="contact-label">Contact</div>

                <h2 className="contact-title">
                    Let's connect.
                </h2>

                <div className="contact-links">

                    {/* Email */}
                    <a
                        href="mailto:brandonrj6@gmail.com"
                        className="contact-item"
                    >
                        <Mail size={16} className="contact-icon" />
                        <span>brandonrj6@gmail.com</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/brandonrodriguezj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                    >
                        <Github size={16} className="contact-icon" />
                        <span>GitHub</span>
                        <ArrowUpRight size={12} className="contact-arrow" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/brandonrodriguezj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                    >
                        <Linkedin size={16} className="contact-icon" />
                        <span>LinkedIn</span>
                        <ArrowUpRight size={12} className="contact-arrow" />
                    </a>

                    {/* Location */}
                    <div className="contact-item contact-text">
                        <MapPin size={16} className="contact-icon" />
                        <span>Madison, WI</span>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;
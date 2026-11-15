import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <footer id="contact" className="section contact">
      <div className="page">
        <h2 className="section-title">Get in touch</h2>
        <p className="contact-text">
          I'm based in Wisconsin and open to software engineering and data roles. The quickest way to
          reach me is email.
        </p>
        <p className="contact-email">
          <a href="mailto:brandonrj6@gmail.com">brandonrj6@gmail.com</a>
        </p>
        <ul className="contact-links">
          <li><a href="https://github.com/bjrodrigu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/brandonrodriguezj" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <p className="contact-fine">
          Built with React. Match data from StatsBomb's open data.
        </p>
      </div>
    </footer>
  );
}

export default Contact;

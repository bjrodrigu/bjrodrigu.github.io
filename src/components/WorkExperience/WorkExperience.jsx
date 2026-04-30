import React from "react";
import "./WorkExperience.css";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Walmart Global Tech",
    location: "Bentonville, AR",
    period: "June – Aug. 2025",
    description:
      "Created dynamic email templates reaching 60,000+ users weekly. Reduced update cycles by ~15% through configuration-driven templates. Developed a chatbot with Java and Spring Boot to streamline Marketplace seller data access.",
  },
  { 
    role: "Scratch Club Leader",
    company: "Madison Children's Museum",
    location: "Madison, WI",
    period: "Sept. – Dec. 2025",
    description:
      "Led a 10-week programming club guiding 15+ students through weekly projects. Designed an interactive Scratch-based curriculum teaching core computer science concepts.",
  },
];

function WorkExperience() {
  return (
    <section id="work" className="work">
      <div className="work-container">

        <div className="work-label">Selected Experience</div>

        <div className="work-list">
          {experiences.map((exp) => (
            <div key={exp.role} className="work-item">

              {/* Left column */}
              <div className="work-meta">
                <p className="work-meta-text">{exp.period}</p>
                <p className="work-meta-text">{exp.location}</p>
              </div>

              {/* Right column */}
              <div>
                <h3 className="work-role">{exp.role}</h3>
                <p className="work-company">{exp.company}</p>
                <p className="work-description">{exp.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkExperience;
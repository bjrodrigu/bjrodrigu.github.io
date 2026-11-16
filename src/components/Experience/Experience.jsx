import React from "react";
import "./Experience.css";

// Each entry is one place. A place with several roles (Walmart) lists them
// newest first under one heading, so a return offer reads as one story.
const timeline = [
  {
    when: "2025 – now",
    org: "Walmart Global Tech",
    roles: [
      {
        what: "Software Engineer II",
        meta: "Marketplace Seller Performance, July 2026 – now",
        headline: "Frontend owner for Seller Performance.",
        detail:
          "Seller Performance enables Walmart Marketplace sellers to track how they're doing. I own its frontend and the frontend of a separate internal tool our teams use to manage order performance data, and I work on the backend behind both.",
      },
      {
        what: "Software engineering intern",
        meta: "Bentonville, June – Aug 2025",
        headline: "Seller emails that ship 15% faster.",
        detail:
          "I built configuration-driven templates for the Marketplace notifications that reach 60,000+ sellers a week, and a Java and Spring Boot chatbot so teams could look up seller data without writing queries.",
      },
    ],
  },
  {
    when: "Sept – Dec 2025",
    org: "Madison Children's Museum",
    roles: [
      {
        what: "Scratch Club leader",
        headline: "Ten weeks of Scratch with 15+ kids.",
        detail:
          "I led a coding club for 2nd–6th graders, writing each week's project and adjusting it with the other facilitators so first-timers and kids who'd coded before both had something to work on.",
      },
    ],
  },
  {
    when: "2022 – 2026",
    org: "University of Wisconsin–Madison",
    roles: [
      {
        what: "B.S. Computer Sciences and B.S. Data Science",
        detail:
          "Coursework included software engineering, algorithms, databases, machine organization, building user interfaces, and statistical data visualization.",
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="page">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.org} className="timeline-item">
              <p className="timeline-when">{item.when}</p>
              <div>
                <h3 className="timeline-org">{item.org}</h3>
                <div className={item.roles.length > 1 ? "timeline-roles is-multi" : "timeline-roles"}>
                  {item.roles.map((role) => (
                    <div key={role.what} className="timeline-role">
                      <h4 className="timeline-what">{role.what}</h4>
                      {role.meta && <p className="timeline-where">{role.meta}</p>}
                      {role.headline && <p className="timeline-headline">{role.headline}</p>}
                      <p className="timeline-detail">{role.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;

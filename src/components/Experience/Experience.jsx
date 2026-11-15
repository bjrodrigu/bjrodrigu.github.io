import React from "react";
import "./Experience.css";

const timeline = [
  {
    when: "Sept – Dec 2025",
    what: "Scratch Club leader",
    where: "Madison Children's Museum",
    detail:
      "Ran a 10-week coding club for 15+ kids in 2nd–6th grade. I wrote the weekly Scratch projects and adjusted them with the other facilitators so beginners and kids who'd coded before both had something to chew on.",
  },
  {
    when: "June – Aug 2025",
    what: "Software engineering intern",
    where: "Walmart Global Tech, Bentonville",
    detail:
      "Built configuration-driven email templates for Marketplace seller notifications that go to 60,000+ sellers a week, which cut the time to ship an update by about 15%. Also built a Java and Spring Boot chatbot so teams could look up seller data without writing queries.",
  },
  {
    when: "2022 – 2026",
    what: "B.S. Computer Sciences and B.S. Data Science",
    where: "University of Wisconsin–Madison",
    detail:
      "Coursework included software engineering, algorithms, databases, machine organization, building user interfaces, and statistical data visualization.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="page">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.what} className="timeline-item">
              <p className="timeline-when">{item.when}</p>
              <div>
                <h3 className="timeline-what">{item.what}</h3>
                <p className="timeline-where">{item.where}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;

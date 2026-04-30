import React from "react";
import "./About.css";

function About() {
    const skills = {
        Languages: ["Java", "Python", "JavaScript", "SQL"],
        Frameworks: ["React", "Spring Boot"],
        Tools: ["Git", "Docker", "MySQL"],
    };

    return (
        <section id="about" className="about">
            <div className="about-container">

                <div className="about-label">About</div>

                <div className="about-grid">
                    {/* Left side */}
                    <div>
                        <h2 className="about-title">
                            I believe good software is a form of care — for the people who use it and the teams who build it.
                        </h2>

                        <div className="about-text">
                            <p>
                                Currently pursuing dual degrees in Computer Science and Data Science at UW–Madison,
                                graduating May 2026. My work spans full-stack development, data engineering, and
                                education — from building tools at Walmart Global Tech to teaching young students
                                the fundamentals of programming.
                            </p>

                            <p>
                                I'm drawn to work that requires both technical rigor and human thoughtfulness.
                                Whether it's designing an API, optimizing a workflow, or crafting a curriculum,
                                I care about the details that make things feel right.
                            </p>
                        </div>
                    </div>

                    {/* Right side */}
                    <div>
                        <div className="about-skills">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <p className="about-skill-category">{category}</p>
                                    <div className="about-skill-list">
                                        {items.map((s) => (
                                            <span key={s} className="about-skill-item">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="about-education">
                            <p className="about-skill-category">Education</p>
                            <p>B.S. Computer Sciences</p>
                            <p>B.S. Data Science</p>
                            <p className="about-school">University of Wisconsin–Madison</p>
                            <p className="about-date">Sept. 2022 – May 2026</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
import React, { useState } from "react";
import "./Projects.css";
import quoteGeneratorImg from "../../assets/quote-generator.png";
import project2 from "../../assets/project2.png";

export const Projects = () => {
  const [showFullText, setShowFullText] = useState({
    project1: false,
    project2: false,
  });

  const toggleReadMore = (project) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  const projects = [
    {
      id: "project1",
      name: "Squid Game Quote Generator",
      description:
        "The Quote Generator in Squid Game movie is a simple web application I built as a learning project.",
      fullDescription:
        "Inspired by a YouTube tutorial about React, I decided to take it further by creating my own custom API using Node.js and Express.",
      image: quoteGeneratorImg,
      demoLink: "https://quote-generator-ha-do.vercel.app/",
      sourceLink: "https://github.com/khanhhado1208/quote-generator.git",
      apiLink: "https://github.com/khanhhado1208/squidGame-API.git",
      techStack: ["React", "Node.js", "Express", "HTML", "CSS"],
    },
    {
      id: "project2",
      name: "Simple Publisher and Subscriber",
      description:
        "The demo demonstrates a simple publisher and subscriber implementation in C++ and Python using ROS 2 Jazzy Jalisco distribution on Ubuntu 24.04.",
      fullDescription:
        "The publisher sends string messages on the /robot_news topic, and the subscriber logs the received messages in the console.",
      image: project2,
      demoLink: "https://youtu.be/_FySTpNUC7U",
      sourceLink:
        "https://github.com/khanhhado1208/Simple-publisher-and-subscriber-ROS2.git",
      techStack: ["ROS 2", "C++", "Python", "Jazzy", "Ubuntu 24.04"],
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <h3>
        Welcome to my Projects! I'm actively working on ideas and prototypes
        related to robotics, autonomous systems, and software engineering. Stay tuned as I continue to develop and share my work here!
      </h3>

      <section className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h2>{project.name}</h2>
            <p>
              {project.description}{" "}
              {showFullText[project.id] && <>{project.fullDescription}</>}
            </p>
            <button
              className="read-more-button"
              onClick={() => toggleReadMore(project.id)}
            >
              {showFullText[project.id] ? "Read Less" : "Read More"}
            </button>
            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
              {project.apiLink && (
                <a
                  href={project.apiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API
                </a>
              )}
            </div>
            <div className="project-tech-stack">
              <h4>Tech Stack:</h4>
              <ul>
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

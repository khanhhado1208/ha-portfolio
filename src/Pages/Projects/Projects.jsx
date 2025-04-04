import React, { useState } from "react";
import "./Projects.css";
import quoteGeneratorImg from "../../assets/quote-generator.png";
import project2 from "../../assets/project2.jpeg";

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
        "The Quote Generator in Squid Game movie is a simple web application I built as a learning project. It will generate some quotes from characters in Squid Game movie. ",
      fullDescription:
        "Inspired by a YouTube tutorial about React, I decided to take it further by creating my own custom API using Node.js and Express.",
      image: quoteGeneratorImg,
      demoLink: "https://quote-generator-ha-do.vercel.app/",
      sourceLink: "https://github.com/khanhhado1208/quote-generator.git",
      apiLink: "https://github.com/khanhhado1208/squidGame-API.git",
      techStack: ["React", "Node.js", "Express", "Vercel", "CSS"],
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
    {
      id: "project3",
      name: "Simple Server and Client",
      description:
        "The demo demonstrates a simple Server and Client implementation in C++ and Python using ROS 2 Jazzy Jalisco distribution on Ubuntu 24.04.",
      fullDescription:
        "This project implements a simple addition service using the AddTwoInts service type in ROS 2. It demonstrates cross-language communication, where both the server and client nodes are implemented in Python and C++. The server listens for requests on the /add_two_ints topic, processes the addition of two integers, and sends the result back to the client. The client sends requests to the server and logs the responses, showcasing the use of ROS 2 services in multi-language applications.",
      image: project2,
      demoLink: "https://www.youtube.com/watch?v=679Axf3pNbk",
      sourceLink:
        "https://github.com/khanhhado1208/Simple-publisher-and-subscriber-ROS2.git",
      techStack: ["ROS 2", "C++", "Python", "Jazzy", "Ubuntu 24.04"],
    },
    {
      id: "project4",
      name: "3D Pyramid using OpenTK with C#",
      description:
        "This project is a 3D pyramid visualization using OpenTK, a .NET binding for OpenGL. The pyramid is rendered with a simple shader and basic 3D transformations such as rotation and projection.",
      fullDescription:
        "3D rendering: Displays a rotating 3D pyramid.\nShaders: Uses GLSL shaders for color and outline rendering.\nCamera: Implemented using perspective and model-view matrices.\nRotation: The pyramid rotates around the Y-axis.",
      image: "https://private-user-images.githubusercontent.com/55555713/420574660-93941d34-fd2b-40f7-9bed-ed02e836685f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3NzQ5NjYsIm5iZiI6MTc0Mzc3NDY2NiwicGF0aCI6Ii81NTU1NTcxMy80MjA1NzQ2NjAtOTM5NDFkMzQtZmQyYi00MGY3LTliZWQtZWQwMmU4MzY2ODVmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA0VDEzNTEwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVmMGVjZWE5NzZiZDJmMjNlMWI3M2Y0MTYyNzM4YzMzN2UyNDk0NDY1ZjQyODkwZWE3ODRhMzA1MmZmM2ExNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RcUf80Lu6CSnlnBHQ7RSoWeLnn6VZlzpEZ9C5syuaWA",
      demoLink: "https://www.youtube.com/watch?v=sKQjmP1EdRs",
      sourceLink:
        "https://github.com/khanhhado1208/3D-Pyramid-OpenTK",
      techStack: ["C#", ".NET 5.0 ", "OpenTK"],
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <h3>
        Welcome to my Projects! I'm actively working on ideas and prototypes
        related to robotics, autonomous systems, and software engineering. In
        the near future, this section will feature implementations of ROS-based
        systems, C++ algorithms, and other innovative solutions. Stay tuned as
        I continue to develop and share my work here!
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
              {project.description}
              {showFullText[project.id] && (
                <>
                  <br />
                  {project.fullDescription.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </>
              )}
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

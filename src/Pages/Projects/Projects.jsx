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
        {/* Project 1 */}
        <div className="project-card">
          <img
            src={quoteGeneratorImg}
            alt="Squid Game Quote Generator"
            className="project-image"
          />
          <h2>Squid Game Quote Generator</h2>
          <p>
            The <strong>Quote Generator in Squid Game movie</strong> is a simple
            web application I built as a learning project.{" "}
            {showFullText.project1 && (
              <>
                Inspired by a YouTube tutorial about React, I decided to take
                it further by creating my own <strong>custom API</strong> using
                Node.js and Express. The app fetches quotes dynamically from the
                API, allowing users to generate random quotes from the Squid
                Game movie. This project helped me practice both frontend and
                backend skills, including React, API integration, and
                deployment with Vercel.
                <br />
                The API source code is available{" "}
                <a
                  href="https://github.com/khanhhado1208/squidGame-API.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                , and it is deployed on Vercel for public access.
              </>
            )}
          </p>
          <button
            className="read-more-button"
            onClick={() => toggleReadMore("project1")}
          >
            {showFullText.project1 ? "Read Less" : "Read More"}
          </button>
          <div className="project-links">
            <a
              href="https://quote-generator-ha-do.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/khanhhado1208/quote-generator.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src={project2}
            alt="Simple Publisher and Subscriber"
            className="project-image"
          />
          <h2>Simple Publisher and Subscriber</h2>
          <p>
            The <strong>demo</strong> demonstrates a simple publisher and
            subscriber implementation in C++ and Python using ROS 2 Jazzy
            Jalisco distribution on Ubuntu 24.04{" "}
            {showFullText.project2 && (
              <>
                The publisher sends string messages on the /robot_news topic,
                and the subscriber logs the received messages in the console.
                The demo includes building the nodes with colcon, using std_msgs
                <br />
                The API source code is available{" "}
                <a
                  href="https://github.com/khanhhado1208/Simple-publisher-and-subscriber-ROS2.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </>
            )}
          </p>
          <button
            className="read-more-button"
            onClick={() => toggleReadMore("project2")}
          >
            {showFullText.project2 ? "Read Less" : "Read More"}
          </button>
          <div className="project-links">
            <a
              href="https://www.youtube.com/watch?v=tBag6qvKsL8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/khanhhado1208/Simple-publisher-and-subscriber-ROS2.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

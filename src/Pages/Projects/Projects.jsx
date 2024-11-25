import React, { useState } from "react";
import "./Projects.css";
import quoteGeneratorImg from "../../assets/quote-generator.png";

export const Projects = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <h3>
        Welcome to my Projects! I'm actively working on ideas and prototypes related to robotics, autonomous systems, and software engineering.
        In the near future, this section will feature implementations of ROS-based systems, C++ algorithms, and other innovative solutions. Stay tuned as I continue to develop and share my work here!


      </h3>
      <p className="note">
        Note: Many of my ROS-based projects are developed in Linux environments and require specific configurations to run. For these, I may include video demos, HTML files, or GitHub links to provide insights and easy access.
      </p>
      <section className="projects-list">
        <div className="project-card">
          <img
            src={quoteGeneratorImg}
            alt="Squid Game Quote Generator"
            className="project-image"
          />
          <h2>Squid Game quote generator</h2>
          <p>
            The <strong>Quote Generator in Squid Game movie</strong> is a simple web application I built as a learning project.{" "}
            {showFullText && (
              <>
                Inspired by a YouTube tutorial about React, I decided to take it further by creating my own <strong>custom API</strong> using Node.js and Express.
                The app fetches quotes dynamically from the API, allowing users to generate random quotes from the Squid Game movie.
                This project helped me practice both frontend and backend skills, including React, API integration, and deployment with Vercel.
                <br />
                The API source code is available <a href="https://github.com/khanhhado1208/squidGame-API.git" target="_blank" rel="noopener noreferrer">here</a>, and it is deployed on Vercel for public access.
              </>
            )}
          </p>
          <button className="read-more-button" onClick={toggleReadMore}>
            {showFullText ? "Read Less" : "Read More"}
          </button>
          <div className="project-links">
            <a href="https://quote-generator-ha-do.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href="https://github.com/khanhhado1208/quote-generator.git" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>

      </section>
    </div>

  );
};

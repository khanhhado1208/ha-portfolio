import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <section className="projects-list">
        <div className="project-card">
          <h2>Project 1</h2>
          <p>Introduction</p>
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">Source Code</a>
          <a href="https://your-demo-link" target="_blank" rel="noopener noreferrer">Demo</a>
        </div>

        <div className="project-card">
          <h2>Project 2</h2>
          <p>Introduction.</p>
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">Source Code</a>
          <a href="https://your-demo-link" target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      </section>
    </div>
  );
};

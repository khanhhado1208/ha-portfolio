import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";
function Hero() {
  return (
  
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-image">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>
        <div className="hero-content">
          <h2>
            HÀ ĐỖ
          </h2>
          <p>
            I am Hà, 1st-year master's student in Robotics and Autonomous Systems at the University of Turku. I am passionate about technology, especially robotics, and I enjoy reading books to
            expand my knowledge. In my free time, I like learning new things, such as programming
            languages or exploring the field of artificial intelligence.
          </p>
          <div className="slogan-container">
           
            <p className="slogan">
              Coding speaks, math thinks – forget syntax, math builds logic, and logic transforms developers into engineers.
            </p>
          </div>
    
        </div>
      </div>

      {/* Education Section */}
      <div className="section">
        <div className="section-content">
          <h2><u>Education</u></h2>
          <p>
            I started my bachelor's degree in IT at Oulu UAS in 2019 before transferring to Metropolia UAS in 2021.
            I graduated in June 2024 and am now pursuing a master's degree in Robotics and Autonomous Systems at
            the University of Turku.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="section">
        <div className="section-content">
          <h2><u>Skills</u></h2>
          <div className="about-skills">
            <div className="about-skill">Programming languages: C, C++, embedded C, Python, R, JavaScript, Nodejs, Html, CSS, VHDL.</div>
            <div className="about-skill">Database: MongoDB.</div>
            <div className="about-skill">Tools and Platforms: Microsoft Office, Jira, Jenkins, Confluence, ROS2, Linux.</div>
            <div className="about-skill">Other skills: Communication Skills, Customer Services, CI/CD, Scrum, Test Automation Frameworks, Agile Methodologies.</div>
          </div>
        </div>
      </div>

      {/* Work Experiences Section */}
      <div className="section">
        <div className="section-content">
          <h2><u>Work Experiences</u></h2>

          {/* Aion Power */}
          <div className="work-experience">
            <h3><b>Aion Power, Finland | Nov 2023 – Feb 2024</b></h3>
            <h4><b>Software Trainee</b></h4>
            <ul>
              <li>Assisted in LabVIEW software development, testing, and documentation.</li>
              <li>Contributed to the development of the company's software development environment and practices.</li>
              <li>Supported the implementation of the company's ISO9001 quality management system, ensuring compliance with standards and procedures.</li>
            </ul>
          </div>
          {/* Horizontal Line */}
          <hr className="divider" />
          {/* Konecranes */}
          <div className="work-experience">
            <h3><b>Konecranes, Finland</b></h3>
            <h4><b>Innovation Project Course | Sept 2023 – December 2023</b></h4>
            <ul>
              <li>Explored advanced industrial automation concepts using ESP32 microcontrollers, focusing on UART, WebSocket communication, and Wi-Fi data transmission.</li>
              <li>Collaborated with industry professionals from Konecranes to enhance real-world problem-solving skills and integrate IoT solutions.</li>
              <li>Designed and executed a comprehensive project demonstrating timer control and seamless data exchange, highlighting practical application of learned concepts.</li>
            </ul>
            <h4><b>Software designer – summer trainee May 2023 – August 2023</b></h4>
            <ul>
              <li>Software development of embedded crane control system board.</li>
              <li>Software documentation.</li>
              <li>Developing software for a safety-critical control system using embedded C within an agile international team.</li>
              <li>Enthusiastic entry-level embedded systems engineer with a foundation in memory management and testing methodologies for microcontroller units (MCUs) like STM32 F2 and F4. Demonstrated understanding in detecting memory leaks and supporting MCU platform upgradability. Proficient in manual and automated testing techniques, with a keen focus on crane simulator and real crane applications.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="section">
        <div className="section-content">
          <h2><u>Projects</u></h2>
          <p>
            In my free time, I enjoy exploring new technologies to enhance my skills. Currently, I am learning ROS2 with C++ and working on a small project to deepen my understanding. Additionally, I have taken minor courses in data analysis, as I am particularly interested in AI, machine learning, and computer vision, which can be applied to robotics to make robots smarter and more human-friendly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

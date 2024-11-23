import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";
import heroImg from "../../assets/heroImg.png";

function Hero() {
  return (
    <div className="hero">
      {/* Profile Section */}
      <div className="hero-image">
        <img src={profile} alt="Profile" className="profile-img" />
      </div>

      {/* About Section */}
      <div className="hero-content">
        <h1>
          I am Hà, 1st-year master's student in Robotics and Autonomous Systems at
          the University of Turku.
        </h1>
        <p>
          I am passionate about technology, especially robotics, and I enjoy reading books to
          expand my knowledge. In my free time, I like learning new things, such as programming
          languages or exploring the field of artificial intelligence.
        </p>
      </div>

      {/* Education Section */}
      <div className="hero-education">
        <img src={heroImg} alt="Hero Image" className="floating-img" />
        <div>
          <h2>Education</h2>
          <p>
            I started my bachelor's degree in IT at Oulu UAS in 2019 before transferring to Metropolia UAS in 2021. I found the curriculum at Metropolia more engaging as it covered both software and hardware, focusing on Smart IoT Systems. I graduated in June 2024 and am now pursuing a master's degree in Robotics and Autonomous Systems at the University of Turku, with a curriculum emphasizing robotics and AI. Although my bachelor's degree was in Embedded Systems, I have developed a keen interest in robotics and computer vision.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2>Skills</h2>
        <div className="about-skills">
          <div className="about-skill">
            <p>C/C++</p> <hr style={{ width: "100%" }} />
          </div>
          <div className="about-skill">
            <p>Embedded C</p> <hr style={{ width: "100%" }} />
          </div>
          <div className="about-skill">
            <p>Python</p> <hr style={{ width: "100%" }} />
          </div>
          <div className="about-skill">
            <p>R</p> <hr style={{ width: "100%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript, Node.js</p> <hr style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      {/* Work Experiences Section */}
      <div>
        <h2>Work Experiences</h2>
        <p>
        <h4>Software designer – summer trainee May 2023 – August 2023</h4>
        <h5> Software designer – summer trainee</h5>
        </p>
        <ul>
          <li>Software development of embedded crane control system board</li>
          <li>Software testing of the control board in system and integration testing levels.</li>
          <li>Software documentation.</li>
          <li>Developing software for a safety-critical control system using embedded C within an agile international team.</li>
          <li>Enthusiastic entry-level embedded systems engineer with a foundation in memory management and testing methodologies for microcontroller units (MCUs) like STM32 F2 and F4. 
            Demonstrated understanding in detecting memory leaks and supporting MCU platform upgradability. Proficient in manual and automated testing techniques, with a keen focus on crane simulator and real crane applications.</li>
        </ul>
        <p>
          <br/>
        <h5>Innovation Project Course | Sept 2023 – December 2023</h5>
        <ul>
          <li>Explored advanced industrial automation concepts using ESP32 microcontrollers, focusing on UART, WebSocket communication, and Wi-Fi data transmission.</li>
          <li>Collaborated with industry professionals from Konecranes to enhance real-world problem-solving skills and integrate IoT solutions.</li>
          <li>Designed and executed a comprehensive project demonstrating timer control and seamless data exchange, highlighting practical application of learned concepts.</li>
        </ul>
        </p>
        <br/>
        <hr style={{ width: "100%" }} />
        <p>
        <h4>Aion Power, Finland | Nov 2023 – Feb 2024</h4>
        <h5> Software trainee</h5>
        <ul>
          <li>Assisted in LabVIEW software development, testing, and documentation.</li>
          <li>Contributed to the development of the company's software development environment and practices.</li>
          <li>Supported the implementation of the company's ISO9001 quality management system, ensuring compliance with standards and procedures.</li>
        </ul>
        </p>
      </div>

      {/* Projects Section */}
      <div>
        <h2>Projects</h2>
        <p>
          In my free time, I enjoy exploring new technologies to enhance my skills. Currently, I am learning ROS2 with C++ and working on a small project to deepen my understanding. Additionally, I have taken minor courses in data analysis, as I am particularly interested in AI, machine learning, and computer vision, which can be applied to robotics to make robots smarter and more human-friendly.
        </p>
      </div>
    </div>
  );
}

export default Hero;

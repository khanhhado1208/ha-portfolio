import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      window.location.hash = "#contact";
    }
    setMenu("Contact");
  };

  return (
    <header id="home" className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" style={{ width: "200px", height: "70px" }} />
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-container ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-menu">
          <li
            className={menu === "home" ? "active" : ""}
            onClick={() => {
              setMenu("home");
              navigate("/");
              setMobileMenuOpen(false); 
            }}
          >
            <p>Home</p>
          </li>
          <li
            className={menu === "Projects" ? "active" : ""}
            onClick={() => {
              setMenu("Projects");
              navigate("/projects");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className={menu === "Blog" ? "active" : ""}
            onClick={() => {
              setMenu("Blog");
              navigate("/blog");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/blog">Blog</Link>
          </li>

          <li
            className={menu === "Contact" ? "active" : ""}
            onClick={() => {
              handleContactClick();
              setMobileMenuOpen(false);
            }}
          >
            <p>Contact</p>
          </li>
          <li
            className={menu === "CV" ? "active" : ""}
            onClick={() => {
              setMenu("CV");
              setMobileMenuOpen(false);
            }}
          >
            <a href="/cv.pdf" download="Ha_Do_CV.pdf">
              CV
            </a>
          </li>
          <li
            className={menu === "Github" ? "active" : ""}
            onClick={() => {
              setMenu("Github");
              setMobileMenuOpen(false);
            }}
          >
            <a
              href="https://github.com/khanhhado1208"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>

        <div className="nav-connect">
          <a
            href="https://www.linkedin.com/in/hakhanhdo/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            Connect With Me on LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

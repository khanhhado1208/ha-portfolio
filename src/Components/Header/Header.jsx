import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          <li className={isActive("/") ? "active" : ""}>
            <p onClick={() => navigate("/")}>Home</p>
          </li>
          <li className={isActive("/projects") ? "active" : ""}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={isActive("/blog") ? "active" : ""}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="/cv.pdf" download="Ha_Do_CV.pdf">
              CV
            </a>
          </li>
          <li>
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

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if a link is active
  const isActive = (path) => {
    if (path === "/blog") {
      return location.pathname.startsWith("/blog");
    }
    return location.pathname === path;
  };

  // Handle navigation and close menu
  const handleNavigation = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => handleNavigation("/")}>
        <img src={logo} alt="Logo" style={{ width: "200px", height: "70px" }} />
      </div>

      <div
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`nav-container ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-menu">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className={isActive("/projects") ? "active" : ""}>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          </li>
          <li className={isActive("/blog") ? "active" : ""}>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </li>
          {/* 
          <li>
            <a href="/cv.pdf" download onClick={() => setMobileMenuOpen(false)}>CV</a>
          </li>
          */}
          <li>
            <a
              href="https://github.com/khanhhado1208"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
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
            onClick={() => setMobileMenuOpen(false)}
          >
            Connect With Me on LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

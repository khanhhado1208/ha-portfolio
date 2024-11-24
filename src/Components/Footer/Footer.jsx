import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/hakhanhdo/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:khanhhado1208@gmail.com">
          <MdEmail />
        </a>
        <a href="https://github.com/khanhhado1208" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://discord.com/users/472454551799201794" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
      </div>
      <p>&copy; 2024 HA DO. All Rights Reserved. Crafted with 💻 and ⚡ by Hà Do using <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a></p>
    </footer>
  );
};

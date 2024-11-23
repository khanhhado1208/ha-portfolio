import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "../../assets/contactImg.png";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("Message sent successfully!");
        console.log("Success:", res);
      } else {
        setStatus("Failed to send message. Please try again.");
        console.error("Error:", res.message);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div id = "contact" className="contact-container">
      <div className="contact-left">
        <h1>Let's talk</h1>
        <div className="contact-image">
          <img src={ContactImg} alt="Contact" className="contact-img" />
        </div>
        <p>
          I'm eager to learn new things, so feel free to send me a message about
          anything you want to discuss. You can contact me anytime.
        </p>
      </div>

      <div className="contact-right">
        <h2>Contact Me</h2>
        {status && <p className="status-message">{status}</p>} {}
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              className="field mess"
              placeholder="Enter your message here..."
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "../../assets/contactImg.png";

export const Contact = () => {
  const [popupMessage, setPopupMessage] = useState(""); // pop up the contents
  const [popupVisible, setPopupVisible] = useState(false); // popUp state

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const senderName = formData.get("name"); // getter name from sender

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
        setPopupMessage(
          `Hi ${senderName}! Your message was sent successfully to Hà Đỗ. Hà Đỗ will respond to you as soon as possible.`
        );
        setPopupVisible(true); // display pop up 
        console.log("Success:", res);
      } else {
        setPopupMessage("Failed to send message. Please try again.");
        setPopupVisible(true); // display pop up 
        console.error("Error:", res.message);
      }
    } catch (error) {
      setPopupMessage("An error occurred. Please try again later.");
      setPopupVisible(true); // display pop up 
      console.error("Error:", error);
    }
  };

  return (
    <div id="contact" className="contact-container">
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
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label>Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name (required)" 
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email (required)"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message </label>
            <textarea
              className="field mess"
              placeholder="Enter your message here...(required)"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>

      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <p>{popupMessage}</p> { }
            <button
              onClick={() => setPopupVisible(false)}
              className="close-popup-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

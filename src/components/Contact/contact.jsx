import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill the form below to get in touch.
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your E-mail" />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

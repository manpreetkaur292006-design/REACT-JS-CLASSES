import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <div className="contact-section" id="contact-section-id">
        <h1>Connect With Us</h1>
        <div id="Contact-information">
          <div id="get-in-touch">
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <div className="contact-icons">📍</div>
              <div className="contact-desc">
                <h5>Visit Us</h5>
                <p>
                  123 Wellness Street
                  <br />
                  Mindful City, MC 12345
                </p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icons">📧</div>
              <div className="contact-desc">
                <h5>Email</h5>
                <p>
                  hello@innerpeace.com
                  <br />
                  support@innerpeace.com
                </p>
              </div>
              <div className="contact-info">
                <div className="contact-icons">💬</div>
                <div className="contact-desc">
                  <h5>Live Chart</h5>
                  <p>Available 24/7 for urgent</p>
                </div>
              </div>
              <p id="circles">
                <button className="social-media-links"><FaFacebook /></button>
                <button className="social-media-links"><FaTelegram /></button>
                <button className="social-media-links"><FaInstagramSquare /></button>
                <button className="social-media-links"><FaLinkedin /></button>
              </p>
            </div>
          </div>
          <form id="send-message">
            <h2>Send a Message</h2>
            <label htmlFor="Name">Your Name</label>
            <input type="text" name="Name" id="Name" />
            <label htmlFor="Email">Email Address</label>
            <input type="email" name="Email" id="Email" />
            <label htmlFor="Subject">Subject</label>
            <input type="text" name="Subject" id="Subject" />
            <label htmlFor="Message">Message</label>
            <textarea type="text" name="Message" id="Message"></textarea>
            <button id="send-message-btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;

import React, { useState } from "react";
import "./styles/Contact.css";
import { Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact({ data }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const emailTo = "inquiries@iwps-latam.com";

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${emailTo}?subject=${subject}&body=${message}`);
  };

  return (
    <div id="contact">
      <h2>Contact Us!</h2>

      <div className="contact__content">

        <address>
          <p>110 Merrick Way, Suite 2A Coral Gables, FL 33134 U.S.A.</p>
          <p>+1-305-408-9790</p>
          <p>inquiries@iwps-latam.com</p>

          <a
            href="https://www.linkedin.com/company/international-wealth-planning-solutions/"
            target="_blank"
            rel="noreferrer">
            <LinkedInIcon className="contact__linkedIn" fontSize="large" />
          </a>
        </address>

        <form>
          <div className="contact__input">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>

          <div className="contact__input">
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
            />
          </div>

          <div className="contact__message">
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            />
          </div>

          <div className="contact__submit">
            <Button
              className="contact__submitBtn"
              onClick={handleClick}
              type="submit">
              Submit
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Contact;

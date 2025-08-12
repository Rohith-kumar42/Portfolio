import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './App.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_so2eir5',
      'template_1p2du9u',
      form.current,
      'Q7fZuDMKqwcHEmF8v'
    ).then(() => {
      alert("✅ Message sent successfully!");
      form.current.reset();
    }, (error) => {
      alert("❌ Failed to send message. Please try again.");
      console.log(error.text);
    });
  };

  return (
    <div>
      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Your subject"
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            placeholder="Your message"
            name="message"
            rows="4"
            required
          />
        </div>
        <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

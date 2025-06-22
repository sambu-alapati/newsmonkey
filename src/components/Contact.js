import React from 'react';
import './Contact.css';

const Contact = ({ mode }) => {
  return (
     <div className={`container my-5 text-${mode === 'light' ? 'dark' : 'light'}`}>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Reach out with any feedback or questions!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

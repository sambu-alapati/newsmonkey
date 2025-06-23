import React from 'react';
import './Contact.css';

const Contact = ({ mode }) => {
  return (
    <div className={`container my-5 text-${mode === 'light' ? 'dark' : 'light'}`}>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Reach out with any feedback or questions!</p>

      <form
  className="contact-form"
  action="https://docs.google.com/forms/d/e/1FAIpQLSfaUOaa-d3KV4n6t6ayUISDpyL_MM7C9pPkdZB7X7jNXm8gsw/formResponse"
  method="POST"
  target="_blank"
>
  <input
    type="text"
    name="entry.1234567890"  // Replace with actual entry ID for Name
    placeholder="Your Name"
    required
  />
  <input
    type="email"
    name="entry.2345678901"  // Replace with actual entry ID for Email
    placeholder="Your Email"
    required
  />
  <textarea
    name="entry.3456789012"  // Replace with actual entry ID for Message
    placeholder="Your Message"
    rows="6"
    required
  ></textarea>
  <button type="submit">Send Message</button>
</form>

    </div>
  );
};

export default Contact;

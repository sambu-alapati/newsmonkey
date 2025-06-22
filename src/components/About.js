import React from 'react';
import './About.css';

const About = ({ mode }) => {
  return (
    <div className={`container my-5 text-${mode === 'light' ? 'dark' : 'light'}`}>
      <h2>About NewsMonkey</h2>
      <p>
        NewsMonkey is your one-stop destination for the latest and most reliable news across the globe. 
        Our mission is to deliver accurate, unbiased, and up-to-date information covering a wide range 
        of categories including technology, politics, health, entertainment, and more.
      </p>
      <p>
        Our team of passionate journalists and developers work around the clock to ensure you stay 
        informed in the easiest and fastest way possible. Whether you're on the go or relaxing at home, 
        NewsMonkey is here to keep you connected to the world.
      </p>
      <p>
        Thank you for trusting us as your daily source of news!
      </p>
    </div>
  );
};

export default About;

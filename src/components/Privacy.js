import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container container my-5">
      <h2 className="text-center mb-4">Privacy Policy</h2>
      <p><strong>Effective Date:</strong> [Insert Date]</p>

      <p>
        At <strong>NewsMonkey</strong>, your privacy is important to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to safeguard it.
      </p>

      <h5>1. Information We Collect</h5>
      <ul>
        <li><strong>Personal Data:</strong> Name, email (if newsletter or form submission is used)</li>
        <li><strong>Usage Data:</strong> IP address, browser type, visit duration, pages viewed</li>
        <li><strong>Cookies:</strong> To remember preferences and analyze traffic</li>
      </ul>

      <h5>2. How We Use Your Information</h5>
      <ul>
        <li>To deliver relevant news content</li>
        <li>To improve website experience</li>
        <li>To send optional newsletters or alerts</li>
      </ul>

      <h5>3. Third-Party Services</h5>
      <p>
        We may use Google Analytics and advertising platforms which may collect user data in accordance with their privacy policies.
      </p>

      <h5>4. Your Rights</h5>
      <p>You can request access to your data, opt out of communications, or ask for deletion by contacting us at <strong>support@newsmonkey.com</strong>.</p>

      <h5>5. Changes to This Policy</h5>
      <p>This policy may be updated in the future. Please review it periodically.</p>

      <h5>6. Contact Us</h5>
      <p>If you have any questions about this policy, email us at <strong>support@newsmonkey.com</strong>.</p>
    </div>
  );
};

export default Privacy;

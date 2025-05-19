import React from 'react';
import logop from '../../assets/logop.png';
import x from '../../icons/x.png';
import fb from '../../icons/fb.png';
import insta from '../../icons/images.jpg';
import user from '../../icons/user.png';



import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
      </div>
      <div className="footer-subscribe">
        <div className="email-input">
          <img src={user} alt="Email" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <button className="btn-subscribe">Subscribe</button>
      </div>
    </div>

    <hr />

    <div className="footer-bottom">
      <div className="footer-left">
        <p>Made with <span className="love">❤️</span> by Varshith</p>
        <p>© 2025 Kommi Varshith Chowdary. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="Twitter" />
        </a>
        <a href="https://instagram.com/varshith_kommi" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

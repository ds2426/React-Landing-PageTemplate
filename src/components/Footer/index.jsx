/* eslint-disable max-len */
import React from 'react';
import LogosSprite from './logos-sprite.png';
import './styles.scss';

const Footer = () => (
  <footer>
    <div className="footer">
      <ul className="footer-navigation">
        <li>BLOG+VIDEOS</li>
        <li className="footer-navigation-divider">/</li>
        <li>SHOP</li>
        <li className="footer-navigation-divider">/</li>
        <li>COMPANY</li>
        <li className="footer-navigation-divider">/</li>
        <li>PRESS</li>
        <li className="footer-navigation-divider">/</li>
        <li>JOBS</li>
        <li className="footer-navigation-divider">/</li>
        <li>SUPPORT</li>
        <li className="footer-navigation-divider">/</li>
        <li>LEGAL</li>
        <li className="footer-navigation-divider">/</li>
        <li>CONTACT</li>
        <li className="footer-navigation-social"><img src={LogosSprite} alt="Social Media Links" /></li>
        <li className="last-child">LANGUAGE: ENGLISH <i className="down-arrow" /></li>
        <li className="last-child">Copyright &copy; iFit.com, All rights reserved.</li>
      </ul>
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import './styles.scss';
import Button from '../Button/index.jsx';

const FooterAd = () => (
  <section>
    <div className="footerAd footer-advertisement">
      <p className="footer-advertisement-text">Get started on your weight loss journey.</p>
      <div className="footer-advertisement-button"><Button text="Join IFIT Today" /></div>
    </div>
  </section>
);

export default FooterAd;

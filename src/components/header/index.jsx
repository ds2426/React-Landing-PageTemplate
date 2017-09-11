/* eslint-disable max-len */
import React from 'react';
import './styles.scss';
import HeaderImage from './header-image.png';

const Header = () => (
  <header>
    <div className="banner">
      <img src={HeaderImage} alt="Working out has never been so fun." />
      <div className="banner__headline-text">Working out<br />has never been so fun.</div>
      <div className="banner-text banner__body-text"><h2>Welcome to the center of it all.
        sdfgsdfgsdThe Fitness Shop presents you
        with hundreds of workout programs designed to guide your weight loss journey.</h2>
      </div>
    </div>
  </header>
);

export default Header;

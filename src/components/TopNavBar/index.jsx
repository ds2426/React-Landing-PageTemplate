import React from 'react';
import './styles.scss';
import logo from './logo.png';


const TopNavBar = () => (
  <nav className="TopNavBar">
    <div className="logo__image"><img alt="Working out has never been so fun." src={logo} /></div>
    <ul>
      <li>LOGIN</li>
      <li>SIGN UP</li>
      <li>
        <span>MENU</span>
        <div className="container">
          <div className="menu-bar1" />
          <div className="menu-bar2" />
          <div className="menu-bar3" />
          <ul className="submenu">
            <li>Item 1</li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
);

export default TopNavBar;


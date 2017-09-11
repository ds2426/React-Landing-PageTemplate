import React from 'react';
import './styles.scss';

const MainNavBar = () => (
  <nav>
    <div className="mainNavBar">
      <ul>
        <li>OverView</li>
        <li>Features</li>
        <li className="active">Programs</li>
        <li>Training</li>
      </ul>
    </div>
  </nav>
);

export default MainNavBar;


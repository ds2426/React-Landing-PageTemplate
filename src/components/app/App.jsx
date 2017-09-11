// Dependencies
import React from 'react';
// Components
import Header from '../header/index.jsx';
import TopNavBar from '../TopNavBar/index.jsx';
import MainNavBar from '../MainNavBar/index.jsx';
import FooterSlideShow from '../FooterSlideShow/index.jsx';
import FooterAd from '../FooterAd/index.jsx';
import Footer from '../Footer/index.jsx';
import Programs from '../Programs/index.jsx';
import jsonData from '../Programs/data.json';
// Styles
import './App.scss';

const App = () => (
  <div className="site-wrapper">
    <TopNavBar />
    <MainNavBar />
    <Header />
    <Programs programs={jsonData} />
    <FooterSlideShow />
    <FooterAd />
    <Footer />
  </div>
);


export default App;

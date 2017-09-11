import React from 'react';
import './styles.scss';

const FooterSlideShow = () => (
  <section>
    <div className="footerSlideShow">
      <div className="footer-slideshow">
        <div className="slide">
          <blockquote><p>To date I have lost 14 Kilos (30 pounds) and my fitnes level is at
          least the same as when I was actively engaged in sport (if not better), thanks
          to iFit and the range and variation of fitness programs available.</p>
            <span className="slide-author">&mdash;Graham Lambourne</span>
          </blockquote>
        </div>
        <div className="slider-navigation">
          <i className="slider-navigation-item active" />
          <i className="slider-navigation-item" />
          <i className="slider-navigation-item" />
        </div>
      </div>
    </div>
  </section>
);

export default FooterSlideShow;

import React from 'react';
import img6 from '../assets/6.png';

const Passion = () => {
  return (
    <div>
      <section className="section-6">
        <div className="main-container">
          <div className="section--banner">
            <div className="section--banner__left">
              <div className="banner--img">
                <img src={img6} alt="img" />
              </div>
            </div>
            <div className="section--banner__right">
              <h2 className="section--title">A Passion for Teaching</h2>
              <p className="section--subtitle">
                A deep-dive on the Instagram algorythm, hashtags, content
                strategy, and branding.
              </p>
              <button className="btn">About Skillz</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Passion;

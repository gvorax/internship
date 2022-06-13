import React from 'react';
import img1 from '../assets/1.png';

const Courses = () => {
  return (
    <div>
      <section className="section-1">
      <div className="main-container">
        <div className="section--banner">
          <div className="section--banner__left">
            <span className="top--item"> Featured Course </span>
            <h1 className="title">Run your own online learning platform</h1>
            <p className="subheader">
              A deep-dive on the Instagram algorythm, hashtags, content
              strategy, and branding.
            </p>
            <span className="author">Kathryn Murphy</span>
            <button className="btn">Learn More</button>
          </div>
          <div className="section--banner__right">
            <div className="banner--img">
              <img src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Courses;

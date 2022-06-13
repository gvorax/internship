import React from 'react';
import img7 from '../assets/7.png';
import img4 from '../assets/4.png';

const Articles = () => {
  return (
    <div>
      {' '}
      <section className="section-7">
        <div className="main-container">
          <h2 className="section--title">
            Recent Articles
          </h2>
          <p data-aos="fade-up" className="section--subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button  className="btn">
            View all articles
          </button>
          <div className="section--cards">
            <div className="item">
              <div className="card">
                <div className="card--img">
                  <img src={img7} alt='img7' />
                </div>
                <div className="card--content">
                  <span className="date">February 8, 2021</span>
                  <span className="card--title">
                    How to Increase Your Engagement on Instagram
                  </span>
                  <span className="author"> Katie Murphy </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="card--img">
                  <img src={img4} alt="" />
                </div>
                <div className="card--content">
                  <span className="date">February 8, 2021</span>
                  <span className="card--title">
                    How to Win Friends and Influence People
                  </span>
                  <span className="author"> Marvin McKinney </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="card--img">
                  <img src={img7} alt="" />
                </div>
                <div className="card--content">
                  <span className="date">February 8, 2021</span>
                  <span className="card--title">
                    iPhone Photography: Tips, Tricks, and Best Practices
                  </span>
                  <span className="author"> Katie Murphy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;

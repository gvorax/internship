import React from 'react';

import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const Courses_items = () => {
  return (
      <section className="section-2">
        <div className="main-container">
          <h2 className="section--title">
            Featured Courses
          </h2>
          <p  className="section--subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button className="btn">
            View All Courses
          </button>
          <div  className="section--cards">
            <div className="item">
              <div className="card">
                <div className="card--img">
                  <img src={img2} alt="" />
                </div>
                <div className="card--content">
                  <span className="card--title">
                    How to Increase Your Engagement on Instagram
                  </span>
                  <span className="author"> Katie Murphy </span>
                  <span className="price"> $ 59.99 USD </span>
                  <a href="#" className="learn--link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="card--img">
                  <img src={img3} alt="" />
                </div>
                <div className="card--content">
                  <span className="card--title">
                    Business 101: Setting up Your Taxes
                  </span>
                  <span className="author"> Bessie Cooper </span>
                  <span className="old--price price"> $ 69.99 USD </span>
                  <span className="price">$ 39.99 USD</span>
                  <a href="#" className="learn--link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="card--img">
                  <img src={img4} alt="" />
                </div>
                <div className="card--content">
                  <span className="card--title">
                    iPhone Photography: Tips, Tricks and Best Practices
                  </span>
                  <span className="author">Dianne Russell </span>
                  <span className="old--price price"> $ 69.99 USD </span>
                  <span className="price">$ 39.99 USD</span>
                  <a href="#" className="learn--link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Courses_items;

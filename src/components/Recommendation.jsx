import React from 'react';
import img5 from '../assets/5.png';
const Recommendation = () => {
  return (
    <div>
      <section className="section-3">
        <div className="main-container">
          <div className="section--banner">
            <div className="banner--img">
              <img src={img5} alt="" />
            </div>
            <div className="banner--content">
              <h2 className="section--title">
                Get personalized learning recommendations
              </h2>
              <p className="section--subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urnaLorem ipsum dolor sit amet.
              </p>
              <button className="btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendation;

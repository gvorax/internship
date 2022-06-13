import React from 'react';

const WorkShop = () => {
  return (
    <div>
      {' '}
      <section className="section-4">
        <div className="main-container">
          <h2  className="section--title">
            Upcoming Free Workshops
          </h2>
          <p  className="section--subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button  className="btn">
            View All Workshops
          </button>
          <div  className="section--cards">
            <div className="item">
              <div className="card">
                <h3 className="card--title">Photography Basics</h3>
                <p className="card--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#" className="learn--link">
                  Learn More
                </a>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <h3 className="card--title">Business 101</h3>
                <p className="card--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#" className="learn--link">
                  Learn More
                </a>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <h3 className="card--title">Social Networking Camp</h3>
                <p className="card--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#" className="learn--link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkShop;

import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <div className="contact--banner">
          <h2 className="banner--title">
            You have the power to define your future.
          </h2>
          <form className="banner--form">
            <input type="email" placeholder="EMAIL ADDRESS" />
            <button>SUBMIT</button>
          </form>
        </div>
        <div className="logo">
          <a href="./index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="footer--links">
          <ul className="list">
            <li className="list--item">learning Platform</li>
            <li className="list--item">
              <a href="#">Home</a>
            </li>
            <li className="list--item">
              <a href="#">Courses</a>
            </li>
            <li className="list--item">
              <a href="#">Free Workshops</a>
            </li>
            <li className="list--item">
              <a href="#">Blog</a>
            </li>
            <li className="list--item">
              <a href="#">About</a>
            </li>
            <li className="list--item">
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="list">
            <li className="list--item">Template</li>
            <li className="list--item">
              <a href="#">Instructions</a>
            </li>
            <li className="list--item">
              <a href="#">Style Guide</a>
            </li>
            <li className="list--item">
              <a href="#">Licenses</a>
            </li>
            <li className="list--item">
              <a href="#">Changelog</a>
            </li>
          </ul>
          <div>
            <div className="title">Follow skillz</div>
            <ul className="social--list">
              <li>
                <a href="#">
                  <i className="uil uil-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="main-container">
          <span>© Skillz Template</span>
          <span>Powered by Webflow</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

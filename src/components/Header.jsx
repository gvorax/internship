import React ,{useState} from 'react';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg'
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handle = ()=>{
    setIsActive(!isActive);
  }

  return (
    <header className="header">
      <div className="header--top">
        <span className="header--text">
          One week only—50% off all courses with code 50OFF at checkout
        </span>
      </div>
      <div className="main-container">
        <div className="header--bottom">
          <div className="header--logo">
            <a href="./index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav className={`header--nav ${isActive ? 'open--nav' : null}`}>
            <ul className="header--list">
              <li className="header--list__item">
                <a href="#"> Courses</a>
              </li>
              <li className="header--list__item">
                <a href="#"> Free Workshops</a>
              </li>
              <li className="header--list__item">
                <a href="#"> Blog</a>
              </li>
              <li className="header--list__item">
                <a href="#"> About</a>
              </li>
              <li className="header--list__item">
                <a href="#"> Contact</a>
              </li>
            </ul>
            <i className="uil uil-times" onClick={handle}></i>
          </nav>
          <div className="header--cart">
            <img src={cart} alt="cart" />
            <div className="header--cart__count">0</div>
          </div>
          <button className={`header--btn`} onClick={handle}>
            <i className="uil uil-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import "./App.css";
import {
  faChevronLeft,
  faChevronRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a
            href="http://magical-hands.in/images/big-logo.png"
            className="navbar-logo"
          >
            Magical Hands
          </a>
          {/* <img src="http://magical-hands.in/images/big-logo.png"></img> */}
          <div className="navbar-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`navbar-menu ${showMenu ? "active" : ""}`}>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Benefits
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Jacuzzi
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Gallery
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="carosel">
        <Carousel
          autoplay={true}
          wrapAround={true}
          pauseOnHover={true}
          transitionMode="scroll"
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide} className="carousel-button">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide} className="carousel-button">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        >
          <img
            src="http://www.deaurainternationalthaispa.com/Images/Sliders/3.jpg"
            alt=""
            className="carousel-image"
          />
          <img
            src="http://www.deaurainternationalthaispa.com/Images/Sliders/4.jpg"
            alt=""
            className="carousel-image"
          />
          <img
            src="http://www.deaurainternationalthaispa.com/Images/Sliders/5.jpg"
            alt=""
            className="carousel-image"
          />
          <img
            src="http://www.deaurainternationalthaispa.com/Images/Sliders/6.jpg"
            alt=""
            className="carousel-image"
          />
          <img
            src="http://www.deaurainternationalthaispa.com/Images/Sliders/7.jpg"
            alt=""
            className="carousel-image"
          />
          <img
            src="http://www.deaurainternationalthaispa.com/Images/Sliders/1.jpg"
            alt=""
            className="carousel-image"
          />
          <img
            src="http://www.deaurainternationalthaispa.com/Images/Sliders/2.jpg"
            alt=""
            className="carousel-image"
          />
        </Carousel>
      </div>
    </>
  );
}

export default App;

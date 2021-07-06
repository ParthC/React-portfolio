import React from "react";
import Typed from "react-typed";
import bigImage from "../img/intro.jpg";

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image" style={{backgroundImage: "url("+ bigImage +")"}}>
         <div className="overlay-mf"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
            <h3 style={{fontFamily: 'Comic Sans MS'}} className="intro-subtitle mt-3">Hello</h3>
              <h3 style={{fontFamily: 'Comic Sans MS'}} className="intro-title mt-3">I'm Parth</h3>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong style={{fontFamily: 'Comic Sans MS'}} className="text-slider text-dark">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Software Developer",
                      "Full Stack Engineer",
                      "There are no secrets to success. Except Hard-Work and Dedication."
                    ]}
                    typeSpeed={80}
                    backDelay={1500}
                    backSpeed={15}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-5">
                <a
                  className="button button-medium button-rouded btn btn-secondary btn-outline-light js-scroll btn px-3"
                  href="#about"
                  role="button"
                  style={{fontFamily: 'Comic Sans MS'}}
                >
                  More About Me
                  <i className="ml-2 ion-ios-arrow-down"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

import React from "react";
import Typed from "react-typed";
// import blog from "../img/blog-post.png";
import blog from "../img/Header.jpg";
import ShoppingCart from "../img/Shopping-cart.jpg";
import ComingSoon from "../img/coming-soon.png"

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong style={{fontFamily: 'Comic Sans MS'}} className="text-slider title-a text-dark">
                  <Typed
                    strings={[
                      "ProtFolio",
                      "Projects",
                      "Sample Work",
                    ]}
                    typeSpeed={100}
                    backDelay={1500}
                    backSpeed={75}
                    loop
                  />
                </strong>
              </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/ParthC/learnWithChintan" target="_blank" rel="noopener noreferrer">
                  <div style={{ textAlign: "center" }} className="work-img">
                    <img src={ blog } alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 style={{fontFamily: 'Comic Sans MS'}}className="w-title">Blog Python Django</h2>
                        <div className="w-more">
                          <span style={{ fontFamily: 'Open Sans'}} className="w-ctegory">
                            Python, Django, ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <a href="https://paintrace.com/" target="_blank" rel="noopener noreferrer">
                  <div style={{ textAlign: "center" }} className="work-img">
                    <img src={ blog } alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2  style={{fontFamily: 'Comic Sans MS'}} className="w-title">Paintrace </h2>
                        <div className="w-more">
                          <span style={{ fontFamily: 'Open Sans'}} className="w-ctegory">
                            Wordpress, PHP, MySql
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={ ComingSoon } data-lightbox="gallery-todo">
                  <div style={{ textAlign: "center" }} className="work-img">
                    <img src={ ShoppingCart } alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2  style={{fontFamily: 'Comic Sans MS'}}className="w-title">Shopping Cart</h2>
                        <div className="w-more">
                          <span style={{ fontFamily: 'Open Sans'}} className="w-ctegory">
                            React, Postgres-SQL, Nodejs (Express)
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>                        
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

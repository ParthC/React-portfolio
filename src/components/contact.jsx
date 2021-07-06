import React from "react";
import imageOverlay from "../img/contact.JPEG";

class Contact extends React.Component {
  render() {
    return (
      <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className=""></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 style={{ fontFamily: 'Comic Sans MS'}} className="title-left">Contact Me</h5>
                      </div>
                      <div>
                        <form
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name=""
                                  ref="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name=""
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name=""
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name=""
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                onClick={e =>
                                window.confirm("Thank you for Contacting me I will get back to you soon ")}
                                style={{ fontFamily: 'Comic Sans MS'}}
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send
                                <i className="ml-2 ion-ios-paperplane"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 style={{ fontFamily: 'Comic Sans MS'}} className="title-left">Learn More About Me</h5>
                      </div>
                      <div style={{ fontFamily: 'Open Sans'}} className="more-info">
                        <p className="lead">
                          Feel Free to get in touch or just say hi, I'd love to hear from you.
                          <br />
                          Fill the from or send me an email.
                        </p>
                        <p><span className="ion-ios-location"></span> Ottawa, Ontario, Canada</p>
                        <p><span className="ion-ios-telephone"></span> (613) 501-2331</p>
                        <p><span className="ion-email"></span> Parthchauhan2702@gmail.com</p>
                      </div>
                      <div className="socials">
                        <ul>
                        <li>
                            <a
                              href="https://www.linkedin.com/in/parth-chauhan-650978116/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/ParthC"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="parthchauhan.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-codepen"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div style={{ fontFamily: 'Open Sans'}} className="copyright-box">
                  ©2021 Parth Chauhan® All Rights Reserved. 
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;


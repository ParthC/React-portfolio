import React from "react";
import imageOverlay from "../img/test.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", percentage: "80%", value: "80" },
        { id: "JavaScript_skill", content: "Vue.js", percentage: "70%", value: "70" },
        { id: "ReactJS_skill", content: "React.js", percentage: "60%", value: "60"},
        { id: "CSS3_skill", content: "CSS & Bootstrap", percentage: "75%", value: "75" },
        { id: "Wordpress_skill", content: "Wordpress", percentage: "80%", value: "80"},
        { id: "VanillaJS_skill", content: "Nodejs", percentage: "70%", value: "70"},
        { id: "Python_skill", content: "Database", percentage: "55%",value: "55" },
        { id: "PHP_skill", content: "Java", percentage: "60%", value: "60" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
          "3+ years of experience in industry as a Web Developer with the strategy to handle front-end, back- end and debugging the code. Experience in all the activities of Software Development Life Cycle (SDLC), different team projects with good project implementation experience, team skills, troubleshooting, presentation abilities and issue resolution capabilities."
        },
        {
          id: "second-p-about",
          content:
          "Possess good experience in Design, Coding, Testing and Implementation of projects executing on multiple platforms such as Web and mobile. Technical proficiency in a high paced production environment capable of being an effective team player with exceptional planning and execution skills coupled with a systematic approach and quick adaptability."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route" style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf" style={{fontFamily: 'Comic Sans MS'}}>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="text-primary pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage}}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left" style={{fontFamily: 'Comic Sans MS'}}>About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead text-dark" style={{ fontFamily: 'Open Sans', fontStyle: 'italic'}} key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>        
                <div style={{ textAlign: "center" ,  fontFamily: 'Open Sans'}} className="container">
                    <p className="pt-5">
                      <a
                        className="button button-medium button-rouded btn btn-dark btn-outline-primary btn px-3"
                        type="submit"
                        role="button"
                        href="/files/Parth_Chauhan_Resume.pdf" 
                        target="_blank"
                      >
                        Download Resume
                      </a>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

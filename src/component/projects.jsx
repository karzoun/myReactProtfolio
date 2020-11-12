import React from "react";
import Planner from "../img/planner.png";
import Cal from "../img/cal.png";
// import Burger from "../img/burger.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid bg-light mt-5">
          <div className=" project-container container bg-light pb-5">
            <h1
              id="projects"
              className={"text-center " + this.props.fadeInRight}
            >
              Projects
            </h1>
            <div className="row my-5">
              <div
                className={
                  "testbg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Make My Date</h2>
                  </div>
                  <div>
                    <button
                      id="vmarine-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var marineModal = document.getElementById("planner");
                        modalBG.style.display = "block";
                        marineModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "aguabg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Pocket Butler</h2>
                  </div>
                  <div>
                    <button
                      id="agua-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var aguaModal = document.getElementById("agualuz");
                        modalBG.style.display = "block";
                        aguaModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "todobg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              ></div>
            </div>
          </div>
        </div>

        {/*hidden modals*/}
        <div id="gallery-card">
          <div id="planner" className="modal-card">
            <div className="visual">
              <img src={Planner} alt="" />
            </div>
            <div className="modal-info">
              <h2>Make My Date</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    Simply choose the city you're in and click the "Make My
                    Date" button and off you go! Its that easy! We'll pick a
                    restaurant for dinner and a event in the same area as dinner
                    if you're interested.
                  </li>
                  <li>
                    Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress,
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
                <a
                  href="https://mfallesen.github.io/plannerly/"
                  target="_blank"
                >
                  <h3>View live demo</h3>
                </a>

                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 1 + "rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var marineModal = document.getElementById("planner");
                    modalBG.style.display = "none";
                    marineModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id="agualuz" className="modal-card">
            <div className="visual">
              <img src={Cal} alt="" />
            </div>
            <div className="modal-info">
              <h2>Pocket Butler</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    Pocket Butler is a Task scheduler app to make your life
                    easier
                  </li>
                  <li>
                    Developed with CSS3, Jquery, NodeJS, Express JS, Mysqle
                    BCrypt, HandleBars JS
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
                <a href="https://pocketbutler.herokuapp.com/" target="_blank">
                  <h3>View live demo</h3>
                </a>
                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 2 + "rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var aguaModal = document.getElementById("agualuz");
                    modalBG.style.display = "none";
                    aguaModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};

import "./project.css";
import ScrollAnimation from "react-animate-on-scroll";
import mpl from "../../images/mpl.png";
import firstcry from "../../images/firstcry.png";
import mmt from "../../images/mmt.png";
import dev from "../../images/devfinder.png";
const Project = ({ elem }) => {
  return (
    <div ref={elem} className="project">
      <div className="piroject">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <h1>Projects</h1>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          {/* <div className="imgdiv"> */}
          <img className="projectimg" src={mpl} alt="" />
          {/* </div> */}
          <div className="details">
            <div className="linkdiv">
              <h3
                onClick={() => {
                  window.location.href =
                    "https://github.com/dharmeshrao/MPL-project";
                }}
                className="links"
              >
                GITHUB
              </h3>
              <h3
                onClick={() => {
                  window.location.href =
                    "https://htmlpreview.github.io/?https://raw.githubusercontent.com/dharmeshrao/MPL-project/master/mpl%20project/LANDING%20PAGE/landing.html";
                }}
                className="links"
              >
                DEMO
              </h3>
            </div>
            <h3 className="heading">MPL.live</h3>
            <div className="description">
              <p>
                A web application where we can download MPL fantasy games. Play
                for free and you could win amazing rewards and CASH for playing
                your favourite games
              </p>
            </div>
            <div className="btndiv">
              <button>HTML</button>
              <button>JAVASCRIPT</button>
              <button>CSS</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          <img className="projectimg" src={mmt} alt="" />
          <div className="details">
            <div className="linkdiv">
              <h3
                onClick={() => {
                  window.location.href =
                    "https://github.com/sachanarpit/make-my-trip";
                }}
                className="links"
              >
                GITHUB
              </h3>
              <h3
                onClick={() => {
                  window.location.href = "https://mmt-12r.pages.dev/";
                }}
                className="links"
              >
                DEMO
              </h3>
            </div>
            <h3 className="heading">Makemytrip.com</h3>
            <div className="description">
              <p>
                A web application which provides online travel services
                including flight tickets and holiday packages.
              </p>
            </div>
            <div className="btndiv">
              <button>REACT</button>
              <button>JAVASCRIPT</button>
              <button>EXPRESSJS</button>
              <button>MONGODB</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          <img className="projectimg" src={dev} alt="" />
          <div className="details">
            <div className="linkdiv">
              <h3
                onClick={() => {
                  window.location.href =
                    "https://github.com/dharmeshrao/devFinder";
                }}
                className="links"
              >
                GITHUB
              </h3>
              <h3
                onClick={() => {
                  window.location.href = "https://devfinder-dharmeshrao.vercel.app/";
                }}
                className="links"
              >
                DEMO
              </h3>
            </div>
            <h3 className="heading">Devfinder</h3>
            <div className="description">
              <p>
                A simple react app where you can search your Github account.
                Solo project, checkout Demo link.
              </p>
            </div>
            <div className="btndiv">
              <button>REACT</button>
              <button>JAVASCRIPT</button>
              <button>AXIOS</button>
              <button>STYLED COMPONENTS</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          <div className="imgdiv">
            <img className="projectimg" src={firstcry} alt="" />
          </div>
          <div className="details">
            <div className="linkdiv">
              <h3 onClick={()=>{
                window.location.href = "https://github.com/dharmeshrao/Firstcry-Project"
              }} className="links">GITHUB</h3>
              <h3 className="links">DEMO</h3>
            </div>
            <h3 className="heading">Firstcry.com</h3>
            <div className="description">
              <p>
                A web application where you can purchase clothing for infants
              </p>
            </div>
            <div className="btndiv">
              <button>MONGODB</button>
              <button>JAVASCRIPT</button>
              <button>EXPRESSJS</button>
              <button>EJS</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Project;
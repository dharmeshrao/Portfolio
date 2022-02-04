import "./project.css";
import ScrollAnimation from "react-animate-on-scroll";
import mpl from "../../images/mpl.png";
import mmt from "../../images/mmt.png";
import dev from "../../images/devfinder.png";
import dineout from "../../images/dineout.png";
const Project = ({ elem }) => {
  return (
    <div ref={elem} className="project">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
      <div className="piroject">
          <h1>Projects</h1>
      </div>
        </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          <div className="imgdiv">
            <img className="projectimg" src={dineout} alt="" />
          </div>
          <div className="details">
            <div className="linkdiv">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/suvamAdhikary/dineout_clone"
                className="links"
              >
                GITHUB
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://dineout-clone.vercel.app/"
                className="links"
              >
                LIVE
              </a>
            </div>
            <h3 className="heading">Dineout.com</h3>
            <div className="description">
              <p>
                Dineout web application gives you the perfect restaurant of your
                choice. You can filter restaurants and select the date and time
                of your choice.
              </p>
            </div>
            <div className="btndiv">
              <button>MONGODB</button>
              <button>JAVASCRIPT</button>
              <button>EXPRESSJS</button>
              <button>REACT</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          <img className="projectimg" src={mmt} alt="" />
          <div className="details">
            <div className="linkdiv">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/sachanarpit/make-my-trip"
                className="links"
              >
                GITHUB
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://mmtvercel-dharmeshrao.vercel.app/"
                className="links"
              >
                LIVE
              </a>
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
          {/* <div className="imgdiv"> */}
          <img className="projectimg" src={mpl} alt="" />
          {/* </div> */}
          <div className="details">
            <div className="linkdiv">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dharmeshrao/MPL-project"
                className="links"
              >
                GITHUB
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/dharmeshrao/MPL-project/master/mpl%20project/LANDING%20PAGE/landing.html"
                className="links"
              >
                LIVE
              </a>
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
          <img className="projectimg" src={dev} alt="" />
          <div className="details">
            <div className="linkdiv">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dharmeshrao/devFinder"
                className="links"
              >
                GITHUB
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://devfinder-dharmeshrao.vercel.app/"
                className="links"
              >
                LIVE
              </a>
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
    </div>
  );
};

export default Project;

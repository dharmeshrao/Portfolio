import "./project.css";
import ScrollAnimation from "react-animate-on-scroll";
import mpl from '../../images/mpl.png'
const Project = ({elem}) => {
  return (
    <div   ref={elem}  className="project">
      <div className="piroject"><ScrollAnimation  animateIn="fadeIn">
  <h1>
    Projects
  </h1>
</ScrollAnimation></div>
<ScrollAnimation animateIn="fadeIn">
      <div className="box">
        {/* <div className="imgdiv"> */}
          <img className="projectimg" src={mpl} alt="" />
        {/* </div> */}
        <div className="details">
          <div className="linkdiv">
            <h3 className="links">GITHUB</h3>
            <h3 className="links">LIVE</h3>
          </div>
          <h3 className="heading">MPL.live</h3>
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              voluptatibus 
            </p>
          </div>
          <div className="btndiv">
            <button>HTML</button>
            <button>JAVASCRIPT</button>
            <button>EXPRESSJS</button>
            <button>NODEJS</button>
          </div>
        </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <div className="box">
        {/* <div className="imgdiv"> */}
          <img className="projectimg" src={mpl} alt="" />
        {/* </div> */}
        <div className="details">
          <div className="linkdiv">
            <h3 className="links">GITHUB</h3>
            <h3 className="links">LIVE</h3>
          </div>
          <h3 className="heading">MPL.live</h3>
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              voluptatibus 
            </p>
          </div>
          <div className="btndiv">
            <button>HTML</button>
            <button>JAVASCRIPT</button>
            <button>EXPRESSJS</button>
            <button>NODEJS</button>
          </div>
        </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <div className="box">
        {/* <div className="imgdiv"> */}
          <img className="projectimg" src={mpl} alt="" />
        {/* </div> */}
        <div className="details">
          <div className="linkdiv">
            <h3 className="links">GITHUB</h3>
            <h3 className="links">LIVE</h3>
          </div>
          <h3 className="heading">MPL.live</h3>
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              voluptatibus 
            </p>
          </div>
          <div className="btndiv">
            <button>HTML</button>
            <button>JAVASCRIPT</button>
            <button>EXPRESSJS</button>
            <button>NODEJS</button>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default Project;

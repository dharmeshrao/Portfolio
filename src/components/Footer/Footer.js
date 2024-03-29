import React from "react";
import "./Footer.css";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
   <div className="wraping">
      <footer className="footer" id="contact">
      <h1>Contact</h1>
      <p><i className="fas fa-phone fa-spin fa-1x">  </i>   <a href="tel:9306835403">+919306835403</a></p>
      <ScrollAnimation
        animateIn="bounce"
        initiallyVisible={true}
        animateOnce={true}
      >
        <div className="social-links">
          <a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/Dharmesh-yadav/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="https://www.instagram.com/Dharmesh_ydv/">
            <i className="fab fa-instagram"></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="mailto: dharmeshaheer@gmail.com">
            <i
              className="fa fa-envelope"
              style={{ fontSize: "34px", color: "white" }}
            ></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="https://github.com/dharmeshrao">
            <i className="fab fa-github"></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="https://www.facebook.com/dharmesh.ydv/">
            <i style={{ fontSize: "32px", color: "white" }} className="fa fa-facebook-official"></i>
          </a>
        </div>
      </ScrollAnimation>
      <p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
        Dharmesh Yadav &copy; 2021
      </p>
    </footer>
   </div>
  );
};

export default Footer;

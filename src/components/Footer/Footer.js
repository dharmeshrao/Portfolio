import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<h1>Contact</h1>
			<div className="social-links">
				<a href="https://www.linkedin.com/in/Dharmesh-yadav/">
					<i className="fab fa-linkedin"></i>
				</a>
				<a href="https://www.instagram.com/Dharmesh_ydv/">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="https://github.com/dharmeshrao">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://twitter.com/dharmesh">
					<i className="fab fa-twitter"></i>
				</a>
				{/* <a
					href="https://stackoverflow.com/users/16058244/nishant-bhosale"
					style={{ color: "white", fontSize: "2rem" }}
				>
					<i className="fa fa-stack-overflow"></i>
				</a> */}
			</div>
			<p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
		    Dharmesh Yadav &copy; 2021
			</p>
		</footer>
	);
};

export default Footer;

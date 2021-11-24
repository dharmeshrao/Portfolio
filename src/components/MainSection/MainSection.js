import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const MainSection = () => {
	return (
		<div className="main-section">
			<ScrollAnimation  animateIn="fadeIn">
			<h2 style={{ color: "white" }}>Hii, I Am</h2>
			<ul>
				<li>D</li>
				<li>H</li>
				<li>A</li>
				<li>R</li>
				<li>M</li>
				<li>E</li>
				<li>S</li>
				<li>H</li>
			</ul>
			<h3 className="main-heading">
				I Love <span></span>
			</h3>
			</ScrollAnimation>
		</div>
	);
};

export default MainSection;

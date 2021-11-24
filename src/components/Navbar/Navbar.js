import React, { useState } from "react";
import NavLink from "./NavLink/NavLink";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
	let [expanded, setExpanded] = useState(false);

	const toggleNavbar = () => {
		setExpanded((prevState) => (expanded = !prevState));
	};

	const hideNavbar = () => {
		setExpanded(false);
	};

	const navLinksState = expanded ? " expanded" : "";
	const handleResume = ()=>{
		window.location.href = 'https://drive.google.com/file/d/1FzmXstTIA368dwBAOfSaby49dsPr2Xto/view?usp=sharing';
	}
	return (
		<div className="navbar">
			<div className="navbar__content content-container-fluid">
				<a className="navbar__title" href="/">
					<h1>DHARMESH</h1>
				</a>
				<button
					className="navbar__menu"
					onClick={toggleNavbar}
					aria-label="Toggle nav bar"
				>
					<MdMenu />
				</button>
				<div className={`navbar-links${navLinksState}`}>
					<NavLink link="#home" hide={hideNavbar}>
						Home
					</NavLink>
					<NavLink link="#about" hide={hideNavbar}>
						About
					</NavLink>
					<NavLink link="/#skills" hide={hideNavbar}>
						Skills
					</NavLink>
					<NavLink link="/#work" hide={hideNavbar}>
						Projects
					</NavLink>
					<NavLink link="/#contact" hide={hideNavbar}>
						Contact
					</NavLink>
					<button className="resume" onClick={handleResume}>Resume</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

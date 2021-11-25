import "./App.css";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import BackgroundAnimation from "./components/Background/Background";
import MainSection from "./components/MainSection/MainSection";
function App() {
	const elemRef = useRef(false)
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar elem={elemRef} />
				<div className="animation-container" id="home">
					<BackgroundAnimation />
				</div>
				<MainSection />
				<AboutMe />
				<Skills />
				<Project elem={elemRef} />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;

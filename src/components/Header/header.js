import React from "react";
//import resume from "../Resume.pdf";
import "./header.css";

function Header({ refProp, mainProp, skillsProp, projectsProp, contactProp }) {
	const scrollToMain = () => {
		console.log(mainProp);
		mainProp.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToSkills = () => {
		console.log(skillsProp);
		skillsProp.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToProjects = () => {
		console.log(projectsProp);
		projectsProp.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToContact = () => {
		console.log(contactProp);
		contactProp.current.scrollIntoView({ behavior: "smooth" });
	};

	const openTab = (url) => {
		window.open(url, "_blank");
		return false;
	};

	return (
		<>
			<div>
				<nav className="navBar">
					{/* <div className="resume" target="_blank" href={resume}>
						Resume
					</div> */}
					<div className="main" onClick={scrollToMain}>
						Home
					</div>
					<div className="skills" onClick={scrollToSkills}>
						Skills
					</div>
					<div className="projects" onClick={scrollToProjects}>
						Projects
					</div>
					<div className="contact" onClick={scrollToContact}>
						Contact
					</div>
				</nav>
			</div>
		</>
	);
}

export default Header;

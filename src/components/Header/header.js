import React from "react";
import resume from "../../Corey_Shafer_Resume.pdf";
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
					<a className="resumeTab" id="bruh" target="_blank" href={resume}></a>
					<div className="mainTab" onClick={scrollToMain}>
						Home
					</div>
					<div className="skillsTab" onClick={scrollToSkills}>
						Skills
					</div>
					<div className="projectsTab" onClick={scrollToProjects}>
						Projects
					</div>
					<div className="contactTab" onClick={scrollToContact}>
						Contact
					</div>
				</nav>
			</div>
		</>
	);
}

export default Header;

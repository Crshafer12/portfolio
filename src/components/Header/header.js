import React from "react";
//import resume from "../Resume.pdf";
import "./header.css";

function Header() {
	return (
		<>
			<div>
				<nav className="navBar">
					{/* <div className="resume" target="_blank" href={resume}>
						Resume
					</div> */}
					<div className="projects">Skills</div>
					<div className="projects">Projects</div>
					<div className="contact">Contact</div>
				</nav>
			</div>
		</>
	);
}

export default Header;

import React from "react";
import selfie from "../../images/Capture.png";
//import resume from "../Resume.pdf";
import "./header.css";

function Header() {
	return (
		<>
			<div className="headerDiv">
				<nav className="navBar">
					{/* <div className="resume" target="_blank" href={resume}>
						Resume
					</div> */}
					<div className="projects">Skills</div>
					<div className="projects">Projects</div>
					<div className="contact">Contact</div>
				</nav>
				<div className="nameAndPic">
					<div className="nameAndTitle">
						<h1 className="nameHeader">Corey Shafer</h1>
						<h2 className="titleHeader">Computuer Science Student / Aspiring Full-Stack Developer</h2>
					</div>
					<div className="pictureAndDescription">
						<img src={selfie} alt="selfie"></img>
						<p className="description">I am a web developer who loves to create responsive, interactive websites</p>
					</div>
				</div>
				<div className="scrollDivContainer">
					<div className="scrollDiv">
						<div className="scrollText">Scroll</div>
						<div className="scrollArrow">ᐅ</div>
					</div>
				</div>

				<ul className="roundBoys">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</>
	);
}

export default Header;

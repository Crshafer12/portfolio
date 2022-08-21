import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import test from "../../images/Capture.png";
import linkedin from "../../images/Linkedin.png";
import gmail from "../../images/Gmail.png";
import github from "../../images/GitHub.png";
import "./contact.css";

function contact({ refProp }) {
	const openTab = (url) => {
		window.open(url);
	};
	return (
		<div className="contactSection" ref={refProp}>
			<header className="headerAndDescription">
				<div className="headerLeft">Contact Me</div>
				<div className="dividerLine"></div>
				<div className="headerRight">Contact me description.</div>
			</header>

			<div className="connectItems">
				<div>
					<img
						className="connectItem"
						src={gmail}
						alt="Gmail logo"
						onClick={() => {
							openTab("mailto:shaf2609@kettering.edu.com");
						}}
					></img>
					<div
						onClick={() => {
							openTab("mailto:shaf2609@kettering.edu.com");
						}}
					>
						Email Me
					</div>
				</div>
				<div>
					<img
						className="connectItem"
						src={linkedin}
						alt="Linkedin"
						onClick={() => {
							openTab("http://www.linkedin.com/in/corey-shafer");
						}}
					></img>
					<div
						onClick={() => {
							openTab("http://www.linkedin.com/in/corey-shafer");
						}}
					>
						Connect on Linkedin
					</div>
				</div>
				<div>
					<img
						className="connectItem"
						src={github}
						alt="Github"
						onClick={() => {
							openTab("http://www.github.com/Crshafer12");
						}}
					></img>
					<div
						onClick={() => {
							openTab("http://www.github.com/Crshafer12");
						}}
					>
						Check out my Github
					</div>
				</div>
			</div>
			<div className="footerBottom">
				<div className="footerBottomLine"></div>
				<div className="bottomName">Corey Shafer</div>
				<div className="footerBottomLine"></div>
			</div>
		</div>
	);
}

export default contact;

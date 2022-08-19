import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import test from "../../images/Capture.png";
import "./contact.css";

function contact({ refProp }) {
	return (
		<div className="contactSection" ref={refProp}>
			<header className="headerAndDescription">
				<div className="headerLeft">Contact Me</div>
				<div className="dividerLine"></div>
				<div className="headerRight">Contact me description.</div>
			</header>

			<div className="connectItems">
				<div className="connectItem">
					<img src={test} alt="Email"></img>
					<div>Email Me</div>
				</div>
				<div className="connectItem">
					<img src={test} alt="Linkedin"></img>
					<div>Connect on Linkedin</div>
				</div>
				<div className="connectItem">
					<img src={test} alt="Gthub"></img>
					<div>Check out my Github</div>
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

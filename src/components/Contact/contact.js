import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import test from "../../images/Capture.png";
// import ContactCard from "//components/ContactCard/contactCard";
import "./contact.css";

function contact() {
	return (
		<div className="contactSection">
			<header className="headerAndDescription">
				<div className="headerLine">
					<div className="headerLeft">Contact Me</div>
					<div className="dividerLine"></div>
				</div>
				<div className="headerRight">Contact me description.</div>
			</header>
			{/* <div className="contactMethods">
				<img src={test} alt="test"></img>
			</div> */}
			<div id="grid">
				<div>{/* <ContactCard /> */}</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
				<div>
					<img src={test} alt="test"></img>
				</div>
			</div>
		</div>
	);
}

export default contact;

import React from "react";

import test from "../../images/Capture.png";
import "./contactCard.css";

function ContactCard(props) {
	return (
		<div className="contactCardSection">
			<img src={props.img} alt="test"></img>
		</div>
	);
}

export default ContactCard;

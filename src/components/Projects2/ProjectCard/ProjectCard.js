import React from "react";
//import Icon from "@material-ui/core/Icon";
import github from "../../../images/GitHubBlack.png";
import live from "../../../images/share.png";

import "./ProjectCard.css";

const ProjectCard = ({ projectTitle, projectDescription, projectImgAddress, gitHubLink, demoLink, stack }) => {
	let gitHubIcon = null;
	if (gitHubLink !== "") {
		gitHubIcon = (
			<a href={gitHubLink} target="_blank" rel="noopener noreferrer">
				<img className="gitButton" src={github} alt="Linkedin"></img>
				<span>GITHUB</span>
			</a>
		);
	}

	let demoIcon = null;
	if (demoLink !== "") {
		demoIcon = (
			<a href={demoLink} target="_blank" rel="noopener noreferrer">
				<img className="gitButton" src={live} alt="Live Share button from Pixel Perfect"></img>
				<span>LIVE</span>
			</a>
		);
	}
	const tools = stack.map((item) => <span>{item}</span>);

	return (
		<div className="projectCard">
			<h3 className="projectTitle">
				<span>{projectTitle}</span>
			</h3>
			<div className="imageContainer">
				<img src={projectImgAddress} alt={projectTitle} />
			</div>
			<div className="info">
				<div className="tools">{tools}</div>
				<div className="cardDescription">
					<p>{projectDescription}</p>
				</div>
				<div className="links">
					{gitHubIcon}
					{demoIcon}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

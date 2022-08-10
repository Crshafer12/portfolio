import React from "react";
import HTML from "../../images/Capture.png";
import css from "../../images/Capture.png";
import git from "../../images/Capture.png";
import github from "../../images/Capture.png";
import js from "../../images/Capture.png";
import react from "../../images/Capture.png";
import "./Skills.css";

function Skills() {
	return (
		<div className="skillsDiv">
			<header className="skillsHeader">
				<div className="skillsAndLine">
					<div className="skillsHeaderLeft">Skills</div>
					<div className="skillsDividerLine"></div>
				</div>
				<div className="skillsHeaderRight">Experienced in building modern web applications and reusable user interface components using React.js, Javascript, HTML, and CSS.</div>
			</header>
			<div className="skillsBody">
				<div className="skillsBodyLeft">
					<div className="skillsBodyLeftHeader">Languages and Frameworks</div>
					<div className="skillsBodyLeftItems">
						<div className="skillItem">
							<img src={HTML} alt="html"></img>
							<span>HTML5</span>
						</div>
						<div className="skillItem">
							<img src={css} alt="css"></img>
							<span>CSS3</span>
						</div>
						<div className="skillItem">
							<img src={js} alt="javascript"></img>
							<span>Javascript (ES6)</span>
						</div>
						<div className="skillItem">
							<img src={react} alt="react"></img>
							<span>React</span>
						</div>
						{/* <div className="skillItem">
							<img src={node} alt="node,js"></img>
							<span>Node.js</span>
						</div>
            <div className="skillItem">
							<img src={EJS} alt="EJS"></img>
							<span>EJS</span>
						</div> */}
					</div>
				</div>
				<div className="skillsBodyRight">
					<div className="skillsBodyRightHeader">Development Tools</div>
					<div className="skillsBodyRightItems">
						<div className="skillItem">
							<img src={git} alt="git"></img>
							<span>Git</span>
						</div>
						<div className="skillItem">
							<img src={github} alt="github"></img>
							<span>Github</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;

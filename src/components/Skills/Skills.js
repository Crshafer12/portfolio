import React from "react";
import HTML from "../../images/Html.png";
import css from "../../images/Css.png";
import git from "../../images/Git.png";
import github from "../../images/GitHub.png";
import js from "../../images/Js.png";
import react from "../../images/React.png";
import mongoDB from "../../images/MongoDB.png";
import node from "../../images/Node.png";
import "./Skills.css";

function Skills({ refProp }) {
	return (
		<div className="skillsDiv" ref={refProp}>
			<header className="skillsHeader">
				<div className="skillsAndLine">
					<div className="skillsHeaderLeft">Skills</div>
					<div className="skillsDividerLine"></div>
				</div>
				<div className="skillsHeaderRight">Experienced in building modern web applications and reusable user interface components using React.js, Javascript, HTML, and CSS.</div>
			</header>
			{/* <div className="skillsBody">
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
						<div className="skillItem">
							<img src={node} alt="node,js"></img>
							<span>Node.js</span>
						</div>
						{/* <div className="skillItem">
							<img src={EJS} alt="EJS"></img>
							<span>EJS</span>
						</div> */}
			{/* <div className="skillItem">
							<img src={mongoDB} alt="EJS"></img>
							<span>MongoDB</span>
						</div>
					</div> */}
			{/* </div>
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
				</div> */}
			{/* </div> */}
			<div className="skillsSection" ref={refProp}>
				<div className="skillsItems">
					<div className="skillHeight">
						<img className="skillItem" src={HTML} alt="Gmail logo"></img>
						<div className="skillItemLabel">HTML5</div>
					</div>
					<div className="skillHeight">
						<img className="skillItem" src={css} alt="Linkedin"></img>
						<div className="skillItemLabel">CSS3</div>
					</div>
					<div className="skillHeight">
						<img className="skillItem" src={js} alt="Github"></img>
						<div className="skillItemLabel">Javascript</div>
					</div>
					<div className="skillHeight">
						<img className="skillItem" src={node} alt="Gmail logo"></img>
						<div className="skillItemLabel">Node.js</div>
					</div>
					<div className="skillHeight">
						<img className="skillItem" src={react} alt="Linkedin"></img>
						<div className="skillItemLabel">React.js</div>
					</div>
					<div className="skillHeight">
						<img className="skillItem" src={mongoDB} alt="Github"></img>
						<div className="skillItemLabel">MongoDB</div>
					</div>
					<div className="skillHeight">
						<img className="skillItem" src={git} alt="Gmail logo"></img>
						<div className="skillItemLabel">Git</div>
					</div>
					<div className="skillHeight">
						<img className="skillItem" src={github} alt="Linkedin"></img>
						<div className="skillItemLabel">GitHub</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;

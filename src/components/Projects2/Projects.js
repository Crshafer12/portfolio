import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";

import data from "./projectList";
const Projects = ({ refProp }) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(
			data.map((project) => {
				return (
					<ProjectCard
						projectTitle={project.title}
						projectDescription={project.description}
						projectImgAddress={project.imgAddress}
						gitHubLink={project.githubLink}
						demoLink={project.demoLink}
						stack={project.stack}
					/>
				);
			})
		);
	}, []);

	return (
		<div className="projectSection" ref={refProp}>
			<div className="projectsHeader">
				<div className="titleAndLine">
					<div className="headSpace title">Projects</div>
					<div className="projectsDividerLine"></div>
				</div>
			</div>
			<div id="mywork" className="anchorMargin" />
			<div className="container">
				<div className="projects-mobile" href="https://gradebook-089g.onrender.com">
					Gradebook
				</div>
				<img className="projects-mobile" href="https://gradebook-089g.onrender.com" alt="gradebook" src="images/gradebook/GradebookPreview50.PNG" />
				<div className="projects-mobile" href="https://gradebook-089g.onrender.com">
					Keeper App
				</div>
				<img className="projects-mobile" href="https://keeperapp.onrender.com/" alt="keeper" src="images/keeper/KeeperPreview50.PNG" />
				<div className="projects">{projects}</div>
			</div>
		</div>
	);
};

export default Projects;

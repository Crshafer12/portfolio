import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
//import img from "../../images/Capture.png";
import img from "../../images/placeholder.PNG";

import data from "./projects.json";
const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(
			data.map((project) => {
				return (
					<ProjectCard
						projectTitle={project.title}
						projectDescription={project.description}
						projectImgAddress={img}
						gitHubLink={project.githubLink}
						demoLink={project.demoLink}
						stack={project.stack}
					/>
				);
			})
		);
	}, []);

	return (
		<div>
			<header className="title">Projects</header>
			<div id="mywork" className="anchorMargin" />
			<div className="container">
				<div className="projects">{projects}</div>
			</div>
		</div>
	);
};

export default Projects;

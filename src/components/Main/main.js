import React from "react";
import selfie from "../../images/Profile Pic.png";
//import resume from "../Resume.pdf";
import "./main.css";

function Main({ refProp }) {
	return (
		<>
			<div className="mainDiv" ref={refProp}>
				<div classname="navBarPlaceholder"></div>
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

export default Main;

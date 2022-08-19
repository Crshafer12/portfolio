import "./App.css";
import Header from "./components/Header/header";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects2/Projects";
import Contact from "./components/Contact/contact";
import { useRef } from "react";

// function createCard(contact) {
// 	return <ContactCard img={contact.img} />;
// }

function App() {
	const headerRef = useRef();
	const skillsRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();
	return (
		<div className="app">
			<Header refProp={headerRef} />
			<Skills refProp={skillsRef} />
			<Projects refProp={projectsRef} />
			<Contact refProp={contactRef} />
		</div>
	);
}

export default App;

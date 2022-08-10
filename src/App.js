import "./App.css";
import Header from "./components/Header/header";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/contact";
import { useRef } from "react";

function App() {
	const headerRef = useRef();
	const skillsRef = useRef();
	const contactRef = useRef();
	return (
		<div className="app">
			<Header refProp={headerRef} />
			<Skills refProp={skillsRef} />
			<Contact refProp={contactRef} />
		</div>
	);
}

export default App;

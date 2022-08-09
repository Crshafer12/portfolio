import "./App.css";
import Header from "./components/Header/header";
import Skills from "./components/Skills/Skills";
import { useRef } from "react";

function App() {
	const headerRef = useRef();
	const skillsRef = useRef();
	return (
		<div className="app">
			<Header refProp={headerRef} />
			<Skills refProp={skillsRef} />
		</div>
	);
}

export default App;

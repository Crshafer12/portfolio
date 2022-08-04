import "./App.css";
import Header from "./components/Header/header";
import { useRef } from "react";

function App() {
	const headerRef = useRef();
	return (
		<div className="app">
			<Header refProp={headerRef} />
		</div>
	);
}

export default App;

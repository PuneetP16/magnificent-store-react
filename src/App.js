import "./App.css";
import { MockBee } from "./backend/mockdocs/MockBee";
import { Routes, Route, Link } from "react-router-dom";
import MockAPI from "./backend/mockdocs/MockMan";
import { Home } from "./pages";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mockbee" element={<MockBee />} />
				<Route path="/mockman" element={<MockAPI />} />
			</Routes>
		</div>
	);
}

export default App;

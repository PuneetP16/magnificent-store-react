import "./App.css";
import { MockBee } from "./backend/mockdocs/MockBee";
import { Routes, Route, Link } from "react-router-dom";
import MockAPI from "./backend/mockdocs/MockMan";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/mockbee" element={<MockBee />} />
				<Route path="/mockman" element={<MockAPI />} />
			</Routes>

			<nav>
				<Link to="/mockbee">MockBee</Link>
				<Link to="/mockman">Mockman</Link>
			</nav>
		</div>
	);
}

export default App;

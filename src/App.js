import "./App.css";
import { MockBee } from "./backend/mockdocs/MockBee";
import { Routes, Route, Link } from "react-router-dom";
import MockAPI from "./backend/mockdocs/MockMan";
import { Cart, Home, Login, SignUp, Wishlist } from "./pages";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { useDocumentTitle } from "./customHooks/useDocumentTitle";

function App() {
	useDocumentTitle("MS | HOME");
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mockbee" element={<MockBee />} />
				<Route path="/mockman" element={<MockAPI />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/productlisting" element={<ProductListing />} />
			</Routes>
		</div>
	);
}

export default App;

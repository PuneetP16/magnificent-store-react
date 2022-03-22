import "./App.css";
import { MockBee } from "./backend/mockdocs/MockBee";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import MockAPI from "./backend/mockdocs/MockMan";
import {
	Cart,
	Home,
	Login,
	SignUp,
	Wishlist,
	ProductListing,
	NotFound,
} from "./pages";
import { Footer, Header } from "./components";

function App() {
	const currentPath = useLocation().pathname;
	return (
		<div className="App body">
			{currentPath !== "/pagenotfound" && <Header currentPath={currentPath} />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mockbee" element={<MockBee />} />
				<Route path="/mockman" element={<MockAPI />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/productlisting" element={<ProductListing />} />
				<Route path="/pagenotfound" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/pagenotfound" replace />} />
			</Routes>
			{currentPath !== "/pagenotfound" && <Footer />}
		</div>
	);
}

export default App;

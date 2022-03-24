import "./App.css";
import { MockBee } from "./backend/mockdocs/MockBee";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import MockAPI from "./backend/mockdocs/MockMan";
import { Footer, Header, Loader } from "./components";
import { useAuth } from "./contexts";
import {
	Cart,
	Home,
	Login,
	SignUp,
	Wishlist,
	ProductListing,
	NotFound,
} from "./pages";

function App() {
	const { pathname } = useLocation();
	const { isAuth } = useAuth();

	return (
		<div className="App body">
			{pathname !== "/pagenotfound" && <Header />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mockbee" element={<MockBee />} />
				<Route path="/mockman" element={<MockAPI />} />
				<Route
					path="/login"
					element={isAuth ? <Navigate to="/" replace /> : <Login />}
				/>
				<Route
					path="/signup"
					element={isAuth ? <Navigate to="/" replace /> : <SignUp />}
				/>
				<Route path="/loader" element={<Loader />} />
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

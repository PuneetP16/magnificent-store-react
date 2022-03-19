import { Footer, Header } from "../../components";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import "./Cart.css";

export const Cart = () => {
	useDocumentTitle("Cart | MS");

	return (
		<div className="body--homepage">
			<Header />
			<h2>Cart</h2>
			<Footer />
		</div>
	);
};

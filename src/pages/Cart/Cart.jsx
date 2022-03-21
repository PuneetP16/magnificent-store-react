import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import "./Cart.css";

export const Cart = () => {
	useDocumentTitle("Cart | MS");

	return (
		<div className="body">
			<h2>Cart</h2>
		</div>
	);
};

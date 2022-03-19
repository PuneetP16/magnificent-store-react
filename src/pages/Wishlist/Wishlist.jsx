import { Footer, Header } from "../../components";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import "./Wishlist.css";

export const Wishlist = () => {
	useDocumentTitle("Wishlist | MS");

	return (
		<div className="body--homepage">
			<Header />
			<h2>Wishlist</h2>
			<Footer />
		</div>
	);
};

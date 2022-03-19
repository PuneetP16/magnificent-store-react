import { Footer, Header } from "../../components";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";

export const ProductListing = () => {
	useDocumentTitle("Products | MS");
	return (
		<div className="body--homepage">
			<Header />
			<h2>ProductListing Page</h2>
			<Footer />
		</div>
	);
};

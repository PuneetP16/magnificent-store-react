import { useDocumentTitle } from "../../customHooks/useDocumentTitle";

export const ProductListing = () => {
	useDocumentTitle("Products | MS");
	return (
		<div className="body--homepage">
			<h2>ProductListing Page</h2>
		</div>
	);
};

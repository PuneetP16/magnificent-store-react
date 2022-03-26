import "./ProductListing.css";
import { useDocumentTitle } from "../../customHooks";
import { products } from "../../backend/db/products";
import { Filters } from "../../pages";
import { Listing } from "../../components";

export const ProductListing = () => {
	useDocumentTitle("Products | MS");
	return (
		<div className="product_page_wrapper">
			<Filters />
			<main className="main main--products">
				<section className="products__section items_container">
					<h2 className="h3 section__heading">Showing All Products</h2>
					<ul className="categories__items">
						<Listing products={products} btnTitle="Add to Cart" />
					</ul>
				</section>
			</main>
		</div>
	);
};

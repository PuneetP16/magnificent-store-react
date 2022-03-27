import "./ProductListing.css";
import { useDocumentTitle } from "../../customHooks";
import { Filters } from "../../pages";
import { Listing } from "../../components";
import { useFilter, useProduct } from "../../contexts";
import {
	categoryFilter,
	priceFilter,
	ratingFilter,
	sortByPrice,
} from "../../utilities";

export const ProductListing = () => {
	useDocumentTitle("Products | MS");
	const { category, rating, sortByPrice: sort, priceRange } = useFilter();

	const { productList } = useProduct();

	let filteredList = categoryFilter(productList, category);
	filteredList = ratingFilter(filteredList, rating);
	filteredList = priceFilter(filteredList, priceRange);
	filteredList = sortByPrice(filteredList, sort);
	console.log("from PL", useFilter(), "product", { filteredList });

	return (
		<div className="product_page_wrapper">
			<Filters />
			<main className="main main--products">
				<section className="products__section items_container">
					<h2 className="h3 section__heading">Showing All Products</h2>
					<ul className="categories__items">
						<Listing products={filteredList} btnTitle="Add to Cart" />
					</ul>
				</section>
			</main>
		</div>
	);
};

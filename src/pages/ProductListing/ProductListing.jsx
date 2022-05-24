import "./ProductListing.css";
import { useDocumentTitle } from "../../customHooks";
import { Filters } from "../../pages";
import { Listing } from "../../components";
import { useFilter, useProduct } from "../../contexts";
import { useState } from "react";
import {
	categoryFilter,
	getSearchedProducts,
	priceFilter,
	ratingFilter,
	sortByPrice,
} from "../../utilities";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ProductListing = () => {
	useDocumentTitle("Products | MS");

	const {
		category,
		rating,
		sortByPrice: sort,
		priceRange,
		search,
		filterDispatch,
	} = useFilter();
	const { productList, categoryList, productDispatch } = useProduct();
	const [showFilter, setShowFilter] = useState(false);

	const location = useLocation();
	const urlParam = new URLSearchParams(location.search);
	const searchQuery = urlParam.get("query");

	useEffect(() => {
		if (searchQuery) {
			filterDispatch({ type: "SEARCH", payload: searchQuery });
		}
	}, [filterDispatch, searchQuery]);

	const closeFilter = () => {
		showFilter && setShowFilter((visible) => !visible);
	};

	const toggleFilterPanel = (e) => {
		const isFilterPanelBtn = e.currentTarget.className === "bx bx-filter";
		if (isFilterPanelBtn) setShowFilter(false);

		if (
			e.currentTarget.className ===
			"filter__icon btn btn--icon btn--primary btn--circular btn--floating"
		)
			setShowFilter(true);
	};

	const selectedCategoryGenerator = () => {
		return category.length > 0
			? category
					.map(
						(item) =>
							`${item.split("")[0].toUpperCase()}${item
								.split("")
								.splice(1)
								.join("")}`
					)
					.join(", ")
			: "All Products";
	};

	const selectedCategoryDescGenerator = () => {
		if (category.length === 1) {
			let currCategoryName = category[0];
			let currCategoryObj = categoryList.find(
				(c) => c.categoryName === currCategoryName
			);
			return currCategoryObj.description;
		}
	};

	let filteredList = categoryFilter(productList, category);
	filteredList = ratingFilter(filteredList, rating);
	filteredList = priceFilter(filteredList, priceRange);
	filteredList = sortByPrice(filteredList, sort);
	filteredList = getSearchedProducts(filteredList, search);

	return (
		<div className="product_page_wrapper">
			<div
				onClick={closeFilter}
				className={`filter__modal ${showFilter ? "modal_container" : ""}`}
				style={{ display: "flex" }}
			>
				<button
					onClick={toggleFilterPanel}
					className="filter__icon btn btn--icon btn--primary btn--circular btn--floating"
				>
					<i className="bx bx-filter"></i>
				</button>
				<Filters showFilter={showFilter} />
			</div>
			<main className="main main--products">
				<section className="products__section items_container">
					<h2 className="h3 section__heading">
						Showing {selectedCategoryGenerator()}
					</h2>
					<div className="category__description_container">
						<p className="category__description">
							{selectedCategoryDescGenerator()}
						</p>
					</div>
					<ul className="categories__items">
						{filteredList.length === 0 ? (
							<div className="items_container h3 link">
								Products will arrive soon in this particular filter
							</div>
						) : (
							<Listing products={filteredList} btnTitle="Add to Cart" />
						)}
					</ul>
				</section>
				<button
					onClick={() => {
						window.scroll(0, 0);
					}}
					className="scroll_to_top_icon btn btn--icon btn--primary btn--circular btn--floating"
				>
					<i className="bx bx-up-arrow-alt"></i>
				</button>
			</main>
		</div>
	);
};

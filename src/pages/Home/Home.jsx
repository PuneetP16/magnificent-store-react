import React from "react";
import { Listing } from "../../components";
import { banner2 } from "../../data/image/productImages";
import { categories } from "../../backend/db/categories";
import { products } from "../../backend/db/products";
import "./Home.css";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import { CategoryListing } from "../../pages";
import { Link } from "react-router-dom";

export const Home = () => {
	useDocumentTitle("Home | MS");

	return (
		<div>
			<main className="main--homepage">
				<section className="homepage__section categories">
					<h2 className="h2 section__heading">Product Categories</h2>

					<ul className="categories__items">
						<CategoryListing categories={categories} />
					</ul>
				</section>
				<section className="promotion_container">
					<Link to="productListing">
						<img src={banner2} alt="bats" className="image--responsive" />
					</Link>
				</section>
				<section className="homepage__section items_container">
					<h2 className="h2 section__heading"> Featured Products</h2>
					<ul className="categories__items">
						{/* <!-- -------Vertical CARDS------- --> */}
						<Listing
							products={products.filter((prod) => prod.featured)}
							featured={true}
						/>
					</ul>
				</section>
			</main>
		</div>
	);
};

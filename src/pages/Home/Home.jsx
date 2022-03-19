import React from "react";
import { Link } from "react-router-dom";
import { Card, Footer, Header } from "../../components";
import { banner2 } from "../../data/image/productImages";

import { categories } from "../../backend/db/categories";
import { products } from "../../backend/db/products";
import "./Home.css";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";

export const Home = () => {
	useDocumentTitle("Home | MS");

	return (
		<div className="body--homepage">
			<Header />
			<main className="main--homepage">
				<section className="homepage__section categories">
					<h2 className="h2 section__heading">Product Categories</h2>

					<ul className="categories__items">
						{categories.map((prodCat) => (
							<li
								key={prodCat._id}
								style={{ backgroundColor: "white" }}
								className="categories__list"
							>
								<Link to="/productlisting" className="categories__links">
									<img
										style={{ backgroundColor: "white" }}
										src={prodCat.src}
										alt="bat"
										className="image--responsive"
									/>
									<span className="catergories__name">
										Cricket {prodCat.categoryName}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</section>
				<section className="promotion_container">
					<a href="/pages/products/products.html">
						<img src={banner2} alt="bats" className="image--responsive" />
					</a>
				</section>
				<section className="homepage__section items_container">
					<h2 className="h2 section__heading"> Featured Products</h2>
					<ul className="categories__items">
						{/* <!-- -------Vertical CARDS------- --> */}
						<Card
							products={products.filter((prod) => prod.featured)}
							featured={true}
						/>
					</ul>
				</section>
			</main>
			<Footer />
		</div>
	);
};

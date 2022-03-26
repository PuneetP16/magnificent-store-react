import { Listing, Loader } from "../../components";
import { banner2 } from "../../data/image/productImages";
import "./Home.css";
import { useAxios, useDocumentTitle } from "../../customHooks";
import { CategoryListing } from "../../pages";
import { Link } from "react-router-dom";
import { useAuth, useLoader } from "../../contexts";
import { useState, useEffect } from "react";

export const Home = () => {
	const { token } = useAuth();
	useDocumentTitle("Home | MS");
	const { loader } = useLoader();
	const [productList, setProductList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);
	const { axiosRequest } = useAxios();

	const fetchProductsURL = "/api/products";
	const fetchCategoryURL = "/api/categories";

	useEffect(() => {
		(async () => {
			const { output } = await axiosRequest({
				method: "GET",
				url: fetchProductsURL,
				resKey: "products",
			});
			if (output) setProductList(output);
		})();

		(async () => {
			const { output } = await axiosRequest({
				method: "GET",
				url: fetchCategoryURL,
				resKey: "categories",
			});
			if (output) setCategoryList(output);
		})();
	}, [setCategoryList, setProductList]);

	return (
		<div>
			<main className="main--homepage">
				{loader && <Loader />}
				<section className="homepage__section categories">
					<h2 className="h2 section__heading">Product Categories</h2>

					<ul className="categories__items">
						<CategoryListing categories={categoryList} />
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
							products={productList.filter((prod) => prod.featured)}
							featured={true}
							btnTitle="Add to Cart"
						/>
					</ul>
				</section>
			</main>
		</div>
	);
};

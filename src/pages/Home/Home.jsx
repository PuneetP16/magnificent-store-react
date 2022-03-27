import { Listing, Loader } from "../../components";
import { banner2 } from "../../data/image/productImages";
import "./Home.css";
import { useAxios, useDocumentTitle } from "../../customHooks";
import { CategoryListing } from "../../pages";
import { Link } from "react-router-dom";
import { useAuth, useLoader, useProduct } from "../../contexts";

export const Home = () => {
	useDocumentTitle("Home | MS");

	const { productList, categoryList } = useProduct();

	return (
		<div>
			<main className="main--homepage">
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

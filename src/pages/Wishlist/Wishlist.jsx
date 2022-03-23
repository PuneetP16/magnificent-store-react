import { products } from "../../backend/db/products";
import { Listing } from "../../components";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import "./Wishlist.css";

export const Wishlist = () => {
	useDocumentTitle("Wishlist | MS");

	return (
		<div className="wishlist_page_wrapper">
			<main className="main main--wishlist">
				<section className="wishlist__section">
					<h2 className="h2 section__heading">My WishList</h2>
				</section>
				<section className="wishlist__section items_container">
					{/* <!-- loadS if wishlist empty  --> */}
					<div className="wishlist_empty h3">
						<div className="h6">info: loads only when wishllist empty</div>
						<div className="wishlist_empty__head">WishList Empty!</div>
						<div className="wishlist_empty__content">
							Save your favourite products to Wishlist
						</div>
						<a className="link" href="/pages/products/products.html">
							{" "}
							From HERE..{" "}
						</a>
					</div>
					{/* <!-- loadS if wishlist empty-- END  --> */}

					{/* <!-- --- CARDS SECTION---- --> */}
					<ul className="categories__items">
						<Listing
							products={products.filter((products) => products.featured)}
							isWishlist={true}
							btnTitle="Add to Cart"
						/>
					</ul>
				</section>
			</main>
		</div>
	);
};

import { Link } from "react-router-dom";
import { Listing } from "../../components";
import { useWishlist } from "../../contexts";
import { useAxios, useDocumentTitle } from "../../customHooks";
import "./Wishlist.css";

export const Wishlist = () => {
	useDocumentTitle("Wishlist | MS");
	const { wishlist, totalQty } = useWishlist();

	// useEffect(() => {
	// 	(async () => {
	// 		getUpdatedWishlist(axiosRequest);
	// 	})();
	// }, []);

	return (
		<div className="wishlist_page_wrapper">
			<main className="main main--wishlist">
				<section className="wishlist__section">
					<h2 className="h2 section__heading">My WishList ({totalQty})</h2>
				</section>
				<section className="wishlist__section items_container">
					{/* <!-- loadS if wishlist empty  --> */}
					{wishlist.length === 0 && (
						<div className="wishlist_empty h3">
							<div className="wishlist_empty__head">WishList Empty!</div>
							<div className="wishlist_empty__content">
								Save your favourite products to Wishlist
							</div>
							<Link className="link underline" to="/productlisting">
								➡️ From HERE..
							</Link>
						</div>
					)}

					{/* <!-- loadS if wishlist empty-- END  --> */}

					{/* <!-- --- CARDS SECTION---- --> */}
					<ul className="categories__items">
						{wishlist.length !== 0 && (
							<Listing
								products={wishlist}
								isWishlist={true}
								btnTitle="Add to Cart"
							/>
						)}
					</ul>
				</section>
			</main>
		</div>
	);
};

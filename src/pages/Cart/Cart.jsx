import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import "./Cart.css";
import { HorizontalCard } from "../../components";
import { products } from "../../backend/db/products";
import { BillingCard } from "../../pages";

export const Cart = () => {
	useDocumentTitle("Cart | MS");

	return (
		<div className="cart_page_wrapperd">
			<main className="main--cart">
				<section className="cart__section">
					<h2 className="h3 section__heading">
						My Cart (<span>5</span>)
					</h2>
				</section>

				{/* <!-- loadS if cart empty  --> */}
				<section className="cart__section items_container">
					<div className="cart--empty h3">
						<div className="h6">info: loads only when wishllist empty</div>
						<div className="cart--empty__head">Cart Empty!</div>
						<div className="cart--empty__content">
							Save your favourite products to cart
						</div>
						<a className="link" href="/pages/products/products.html">
							{" "}
							From HERE..{" "}
						</a>
					</div>
				</section>
				{/* <!-- loadS if cart empty-- END  --> */}

				<section className="cart__wrapper items_container">
					{/* <!-- --- CARDS SECTION---- --> */}
					<ul className="categories__items_cart">
						{/* <!-- -------SHOPPING CART- Hoizontal V2 CARDS------- --> */}

						{products.map((prod) => (
							<HorizontalCard
								prod={prod}
								featured={false}
								key={prod._id}
								isWishlist={false}
								isCart={true}
								btnTitle={"Move to Wishlist"}
							/>
						))}
					</ul>
					<BillingCard />
				</section>
			</main>
		</div>
	);
};

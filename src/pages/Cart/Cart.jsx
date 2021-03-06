import { useDocumentTitle } from "../../customHooks";
import "./Cart.css";
import { HorizontalCard, Loader } from "../../components";
import { BillingCard } from "../../pages";
import { useCart, useLoader } from "../../contexts";
import { Link } from "react-router-dom";

export const Cart = () => {
	useDocumentTitle("Cart | MS");
	const { cart, totalQty, cartDispatch } = useCart();
	const { loader } = useLoader();
	console.log(cart);
	return (
		<div className="cart_page_wrapper">
			{loader && <Loader />}

			<main className="main--cart">
				<section className="cart__section">
					<h2 className="h3 section__heading">
						My Cart (<span>{totalQty}</span>)
					</h2>
				</section>

				{/* <!-- loadS if cart empty  --> */}
				{cart.length === 0 && (
					<section className="cart__section items_container">
						<div className="cart--empty h3">
							<div className="h4">No items in Cart</div>
							<div className="h4">Grab items from product page</div>
							<Link className="btn btn--outline--primary" to="/productlisting">
								➡️ CLICK ME
							</Link>
						</div>
					</section>
				)}
				{/* <!-- loadS if cart empty-- END  --> */}

				<section className="cart__wrapper items_container">
					{/* <!-- --- CARDS SECTION---- --> */}
					<ul className="categories__items_cart">
						{/* <!-- -------SHOPPING CART- Hoizontal V2 CARDS------- --> */}

						{cart.length !== 0 &&
							cart.map((prod) => (
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

					{cart.length !== 0 && <BillingCard />}
				</section>
			</main>
		</div>
	);
};

import "./OverviewCard.css";
import { useAxios } from "../../../customHooks";
import { useCart, useWishlist } from "../../../contexts";
import { useState } from "react";

export const OverviewCard = ({ prod, btnTitle, featured, reorder }) => {
	const [disable, setDisable] = useState(false);
	const { axiosRequest } = useAxios();
	const { cart, addToCart, updateQtyInCart, removeFromCart } = useCart();
	const { addToWishlist, wishlist } = useWishlist();

	const productOfCart = cart.find((p) => p._id === prod._id);
	console.log(productOfCart);
	const onClickHandler = async () => {
		setDisable(true);
		let qty;
		if (!!productOfCart) {
			qty = productOfCart.qty;
			updateQtyInCart(qty, axiosRequest, prod);
		} else {
			qty = prod.qty;
			await addToCart(axiosRequest, prod);
			updateQtyInCart(qty, axiosRequest, prod);
		}
		console.log(qty);
	};

	return (
		<li className="categories__list">
			<article
				className={`card card--overview ${featured ? "card--badge" : ""}`}
			>
				<div className="card__content flex">
					<header className="card__header flex-center">
						<figure className="card__figure">
							<img
								className="product__image--overview image--responsive"
								src={prod.src}
								alt={prod.title}
							/>
						</figure>
					</header>
					<div className="card__body--overview">
						<div className="overview__card_header">{prod.title}</div>
						<div className="card__quantity form__input_box">
							Product Quantity: {prod.qty}
						</div>
						<div className="card__quantity form__input_box">
							Product Delivery: 5 Days
						</div>
						{reorder && (
							<div className="card__actions">
								<button
									disabled={disable}
									className="card__button btn btn--outline--primary reorder_btn"
									onClick={onClickHandler}
								>
									{btnTitle}
								</button>
							</div>
						)}
					</div>
				</div>
			</article>
		</li>
	);
};

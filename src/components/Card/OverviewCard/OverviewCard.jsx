import { Rating } from "../../../components";
import "./OverviewCard.css";
import { useAxios } from "../../../customHooks";
import { useCart, useWishlist } from "../../../contexts";
import { useState } from "react";

export const OverviewCard = ({ prod, btnTitle, featured }) => {
	const [disable, setDisable] = useState(false);
	const { axiosRequest } = useAxios();
	const { removeFromCart, updateQtyInCart } = useCart();
	const { addToWishlist, wishlist } = useWishlist();

	const isProductInWishlist =
		wishlist.findIndex((p) => p._id === prod._id) !== -1;

	const onClickHandler = () => {
		setDisable(true);
		isProductInWishlist ? null : addToWishlist(axiosRequest, prod);
		removeFromCart(axiosRequest, prod);
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
					</div>
				</div>
			</article>
		</li>
	);
};

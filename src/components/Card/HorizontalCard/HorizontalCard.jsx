import { Rating } from "../../../components";
import "./HorizontalCard.css";
import { useAxios } from "../../../customHooks";
import { useCart, useWishlist } from "../../../contexts";
import { useState } from "react";

export const HorizontalCard = ({ prod, btnTitle, featured }) => {
	const [disable, setDisable] = useState(false);
	const { axiosRequest } = useAxios();
	const { cart, removeFromCart, updateQtyInCart } = useCart();
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
				className={`card card--shopping card--cart card--horizontal_v2 ${
					featured ? "card--badge" : ""
				}`}
			>
				<div className="card__content flex">
					<header className="card__header flex-center">
						<figure className="card__figure">
							<img
								className="card_img image--responsive"
								src={prod.src}
								alt={prod.title}
							/>
						</figure>
					</header>
					<div className="card__body">
						<div className="card__header_text">
							<h2 className=" h6">{prod.title}</h2>
						</div>

						<p className="card__price flex">
							<span className="disc_price">₹{prod.price.discounted}</span>
							<span className="original_price">₹{prod.price.original}</span>
							<span className="pct_disc">
								{prod.price.percentageDiscount}% off
							</span>
						</p>

						<div className="card__quantity_wrapper">
							<div className="card__quantity form__input_box">
								<label className="label" htmlFor="">
									Quantity:
								</label>
								<select
									onChange={(e) => updateQtyInCart(e, axiosRequest, prod)}
									className="card__quantity_values"
									value={prod.qty}
								>
									{[1, 2, 3, 4, 5].map((val, i) => {
										return (
											<option key={i} className="input_box">
												{val}
											</option>
										);
									})}
								</select>
							</div>
							<button
								onClick={() => removeFromCart(axiosRequest, prod)}
								className="card_btn--delete btn btn--outline--danger btn--icon btn--round grid-center"
							>
								<i className="bx bxs-trash-alt"></i>
							</button>
						</div>
						<div className="card__footer">
							<div className="card__actions">
								<button
									disabled={disable}
									className="card__button btn btn--outline--primary"
									onClick={onClickHandler}
								>
									{btnTitle}
								</button>
							</div>
						</div>
					</div>
					<div className="card__badge ribbon">
						<span>popular</span>
					</div>
				</div>
				<Rating />
			</article>
		</li>
	);
};

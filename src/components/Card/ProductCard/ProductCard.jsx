import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Rating } from "../../../components";
import { useAuth, useWishlist } from "../../../contexts";
import { useAxios } from "../../../customHooks";
import { CardActionBtn } from "../CardActionBtn";
import "./ProductCard.css";

export const ProductCard = ({ prod, featured, isWishlist, btnTitle }) => {
	const { wishlist, addToWishlist, removeFromWishlist, getUpdatedWishlist } =
		useWishlist();
	const { isAuth } = useAuth();
	const { axiosRequest } = useAxios();
	const navigate = useNavigate();

	const isProductInWishlist =
		wishlist.findIndex((p) => p._id === prod._id) !== -1;

	const onClickHandler = () => {
		isAuth
			? isProductInWishlist
				? removeFromWishlist(axiosRequest, prod)
				: addToWishlist(axiosRequest, prod)
			: navigate("/login");
	};

	return (
		<li key={prod._id} className="categories__list">
			<article
				className={`card card--vertical_v2 card--shopping ${
					featured ? "card--badge" : ""
				}`}
			>
				<div className="card__content flex">
					<header className="card__header flex-center">
						<figure className="card__figure">
							<img
								className="card_img image--responsive"
								src={prod.src}
								alt="randomly generated"
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
					</div>
				</div>
				<div className="card__footer">
					<div className="card__actions">
						<CardActionBtn btnTitle={btnTitle} prod={prod} />
						{/* <button className="card__button btn btn--primary">Buy Now</button> */}
					</div>
					<ul className="card__icons">
						<li className="card__list flex-center">
							<button
								onClick={onClickHandler}
								className="card__link btn btn--outline--primary btn--icon like"
							>
								{isProductInWishlist ? (
									<i className="bx bxs-heart"></i>
								) : (
									<i className="bx bx-heart"></i>
								)}
							</button>
						</li>
						<li className="card__list share">
							<button className="card__link btn btn--outline--primary btn--icon btn--circular">
								<i className="bx bx-share-alt"></i>
							</button>
						</li>
						<li className="card__list options">
							<button className="card__link btn btn--outline--primary btn--icon btn--circular">
								<i className="bx bx-dots-vertical-rounded"></i>
							</button>
						</li>
					</ul>
				</div>
				<div className="card__badge ribbon">
					<span>popular</span>
				</div>
				<div className="card__dismiss dark btn btn--icon btn--close--transparent alert--btn__dismiss btn--circular">
					<i className="bx bx-x"></i>
				</div>
				<Rating />
			</article>
		</li>
	);
};

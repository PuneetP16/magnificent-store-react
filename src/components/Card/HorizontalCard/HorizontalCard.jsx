import { Rating } from "../../../components";
import "./HorizontalCard.css";
export const HorizontalCard = ({ prod, isWishlist, btnTitle, featured }) => {
	return (
		<li key={prod._id} className="categories__list">
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
								<label className="label" for="">
									Quantity:
								</label>
								<select className="card__quantity_values">
									<option className="input_box" value="1" selected>
										1
									</option>
									<option className="input_box" value="2">
										2
									</option>
									<option className="input_box" value="3">
										3
									</option>
									<option className="input_box" value="4">
										4
									</option>
									<option className="input_box" value="5">
										5
									</option>
									<option className="input_box" value="6">
										6
									</option>
									<option className="input_box" value="7">
										7
									</option>
									<option className="input_box" value="8">
										8
									</option>
									<option className="input_box" value="9">
										9
									</option>
									<option className="input_box" value="9">
										10
									</option>
								</select>
							</div>
							<a className="card_btn--delete btn btn--outline--danger btn--icon btn--round grid-center">
								<i className="bx bxs-trash-alt"></i>
							</a>
						</div>
						<div className="card__footer">
							<div className="card__actions">
								<button className="card__button btn btn--outline--primary">
									{btnTitle ?? "Add to Cart"}
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

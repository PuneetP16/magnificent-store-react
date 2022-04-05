import { useCart } from "../../../contexts";
import "./BillingCard.css";

export const BillingCard = () => {
	const { cart, totalQty, productPrice, totalPrice } = useCart();

	const { original, discount } = totalPrice;
	return (
		<aside className="aside--products billing_section">
			<form action="post" className="bill_wrapper">
				<h3 className="h5 bill__head">Price Details</h3>
				<hr />
				<section className="bill__section">
					<ul className="bill__items">
						<li className="bill__list">
							<div className="bill__item">
								Price (<span>{totalQty}</span> items)
							</div>
							<div className="bill__item">
								₹<span id="initial-total">{original}</span>
							</div>
						</li>
						<li className="bill__list">
							<div className="bill__item">Discount</div>
							<div className="bill__item">
								-₹<span id="discounted-amount">{discount}</span>
							</div>
						</li>
						<li className="bill__list">
							<div className="bill__item">Delivery Charges</div>
							<div className="bill__item">
								₹<span id="delivery-charges">499</span>
							</div>
						</li>
					</ul>
				</section>
				<hr />
				<ul className="bill__total">
					<li className="bill__item">TOTAL AMOUNT</li>
					<li className="bill__item">
						₹<span id="final-total">{original - discount + 499}</span>
					</li>
				</ul>
				<hr />
				<div className="bill__description">
					You will save ₹{discount} on this order
				</div>
				<a className="bill__submit_btn btn btn--primary" href="#">
					PLACE ORDER
				</a>
			</form>
		</aside>
	);
};

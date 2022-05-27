import { Link, Navigate, useNavigate } from "react-router-dom";
import { Toast } from "../../../components/UI/Toast/Toast";
import { useCart, useLoader, useTheme } from "../../../contexts";
import { useAxios } from "../../../customHooks";
import "./BillingCard.css";

export const BillingCard = ({ orderDetails, isAddress, setIsAddress }) => {
	const {
		cart,
		totalQty,
		productPrice,
		totalPrice,
		resetCart,
		initialCartState,
	} = useCart();
	const { toggleLoader } = useLoader();
	const { theme } = useTheme();
	const { axiosRequest } = useAxios();
	const { original, discount } = totalPrice;
	const navigate = useNavigate();

	const loadScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const makePaymentHandler = async () => {
		const amount = original - discount + 499;
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Razorpay SDK failed to load. Are you online?");
			return;
		}

		const options = {
			key: process.env.REACT_APP_RAZORPAY_API, // Enter the Key ID generated from the Dashboard
			currency: "INR",
			amount: amount * 100,
			name: "Magnificent Store",
			description: "Thank you for shopping with Magnificent Store",
			handler: async function (response) {
				console.log(response);
				if (!!response.razorpay_payment_id) {
					resetCart(axiosRequest, initialCartState);
				}
				navigate("/");
				Toast(
					"success",
					`Items purchased successfully with payment ID: ${response.razorpay_payment_id}`,
					theme
				);
			},

			prefill: {
				name: "Magnificent Store",
				email: "offer@magnificentstore.com",
				contact: "9999999999",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<aside className="aside--products billing_section">
			<section action="post" className="bill_wrapper">
				<h3 className="h5 bill__head">
					{orderDetails ? "Order Details" : "Price Details"}
				</h3>
				<hr />
				<section className="bill__section">
					<ul className="bill__items">
						{!orderDetails ? (
							<li className="bill__list">
								<div className="bill__item">
									Price (<span>{totalQty}</span> items)
								</div>
								<div className="bill__item">
									₹<span id="initial-total">{original}</span>
								</div>
							</li>
						) : (
							<li className="bill__list">
								<div className="bill__item">Total Items</div>
								<div className="bill__item">
									<span id="initial-total">{totalQty}</span>
								</div>
							</li>
						)}
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
					{orderDetails
						? "Add/Select address to checkout the items"
						: `You will save ₹${discount} on this order`}
				</div>
				{!orderDetails && (
					<Link to="/checkout" className="bill__submit_btn btn btn--primary">
						PLACE ORDER
					</Link>
				)}
				{isAddress && orderDetails && (
					<button
						onClick={makePaymentHandler}
						className="bill__submit_btn btn btn--primary"
					>
						Checkout
					</button>
				)}
			</section>
		</aside>
	);
};

import { Link } from "react-router-dom";
import { Loader, OrderCard, OverviewCard } from "../../components";
import { useLoader } from "../../contexts";
import "./Order.css";
import { v4 as uuid } from "uuid";
import { bat2 } from "../../data/image/productImages";

export const Order = () => {
	const { loader } = useLoader();

	const orders = [
		{
			_id: uuid(),
			title: "MRF Wizard Power Edition Cricket Bat 2022",
			price: {
				original: 18000,
				discounted: 13500,
				percentageDiscount: 25,
			},
			src: bat2,
			categoryName: "bats",
			inStock: true,
			featured: true,
			rating: 4,
			qty: 2,
		},
	];

	return (
		<div className="order_page_wrapper">
			{loader && <Loader />}
			<main className="main--cart">
				<section className="cart__section">
					<h2 className="h3 section__heading">
						My Orders (<span>0</span>)
					</h2>
				</section>

				{/* <!-- loadS if order's empty  --> */}
				{orders.length === 0 && (
					<section className="cart__section items_container">
						<div className="cart--empty h3">
							<div className="h4">No orders made so far</div>
							<div className="h4">Purchase items from product page</div>
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

						{orders.length !== 0 &&
							orders.map((prod) => (
								<OverviewCard
									prod={prod}
									featured={false}
									key={prod._id}
									isWishlist={false}
									isCart={true}
									btnTitle={"Reorder"}
									reorder={true}
								/>
							))}
					</ul>
				</section>
			</main>
		</div>
	);
};

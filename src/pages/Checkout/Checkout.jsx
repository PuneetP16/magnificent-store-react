import { Link } from "react-router-dom";
import { useState } from "react";
import {
	Accordian,
	AddressCard,
	Loader,
	Modal,
	OverviewCard,
} from "../../components/index.js";
import { useCart } from "../../contexts/cartContext.js";
import { useLoader } from "../../contexts/loaderContext.js";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle.js";
import { bxIcons } from "../../data/icons.jsx";
import { BillingCard } from "../Cart/BillingCard/BillingCard.jsx";
import "./Checkout.css";
import { NewAddress } from "./Address/NewAddress/NewAddress.jsx";
import { useModal } from "../../contexts/modalContext.js";
import { useAuth } from "../../contexts/authContext.js";

export const Checkout = () => {
	useDocumentTitle("Checkout | MS");
	const { modal, setModal } = useModal();
	const {
		addressState: { addresses },
	} = useAuth();
	const { cart, totalQty } = useCart();
	const { loader } = useLoader();
	const openAddressModal = () => {
		setModal((prevModal) => !prevModal);
	};

	const [isAddress, setIsAddress] = useState(false);

	const getCheckIcon = () => {
		if (!isAddress || addresses.length < 1) {
			return bxIcons.checkCircle;
		}

		if (isAddress && addresses.length > 0) {
			return bxIcons.checkedCircle;
		}
	};

	return (
		<div className="cart_page_wrapper">
			{loader && <Loader />}

			<main className="main--checkout">
				<section className="checkout__section">
					<h2 className="h3 section__heading">
						Checkout (<span>{totalQty} item</span>)
					</h2>
				</section>

				{cart.length !== 0 && (
					<section className="checkout__wrapper items_container">
						{/* <!-- --- CARDS SECTION---- --> */}
						<div className="accordian__wrapper">
							<Accordian title="Items overview" icon={bxIcons.checkedCircle}>
								<ul className="categories__items_cart">
									{cart.map((prod) => (
										<OverviewCard prod={prod} key={prod._id} />
									))}
								</ul>
							</Accordian>
							<Accordian
								title="Contact & Delivery Address"
								icon={getCheckIcon()}
							>
								<ul className="addresses">
									{addresses.length > 0 &&
										addresses.map((address) => (
											<AddressCard
												key={address._id}
												address={address}
												setIsAddress={setIsAddress}
											/>
										))}
								</ul>
								<div className="addresses_actions">
									<button
										className="btn btn--outline--primary address__add_Btn"
										onClick={openAddressModal}
									>
										Add new address
									</button>
								</div>
							</Accordian>
						</div>

						{cart.length !== 0 && (
							<BillingCard
								orderDetails={true}
								isAddress={isAddress}
								setIsAddress={setIsAddress}
							/>
						)}
					</section>
				)}
				{modal && (
					<Modal>
						<NewAddress />
					</Modal>
				)}
			</main>
		</div>
	);
};

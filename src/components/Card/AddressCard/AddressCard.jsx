import { useAuth } from "../../../contexts";
import { useAxios } from "../../../customHooks";
import { bxIcons } from "../../../data/icons";
import "./AddressCard.css";

export const AddressCard = ({ address, setIsAddress }) => {
	const { removeFromAddresses } = useAuth();
	const { axiosRequest } = useAxios();
	const checkIsAddressSelected = (e) => {
		setIsAddress(true);
	};

	const addressDeleteHandler = () => {
		removeFromAddresses(axiosRequest, address);
		setIsAddress(false);
	};

	return (
		<label htmlFor={address._id}>
			<article className="address_card">
				<section className="address_card__text">
					<h6>{address.name}</h6>
					<p className="address_card__address">{address.address}</p>
					<p>Contact: {address.phoneNumber}</p>
					<p>Pincode: {address.pincode}</p>
				</section>
				<section className="address_card__cta">
					<div onClick={addressDeleteHandler}>{bxIcons.trash}</div>
					<div
						onClick={() => {
							console.log("Yet to Implement");
						}}
					>
						{bxIcons.edit}
					</div>
				</section>
				<input
					name="address_radio"
					type="radio"
					id={address._id}
					className="address_card__radio"
					onChange={checkIsAddressSelected}
				/>
			</article>
		</label>
	);
};

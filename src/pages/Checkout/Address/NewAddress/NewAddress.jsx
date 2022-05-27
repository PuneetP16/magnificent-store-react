import { useState } from "react";
import { InputTypeOne } from "../../../../components";
import { bxIcons } from "../../../../data/icons";
import "./NewAddress.css";
import { useAuth, useModal, useTheme } from "../../../../contexts";
import { useAxios } from "../../../../customHooks";
import { Toast } from "../../../../components/UI/Toast/Toast";

export const NewAddress = () => {
	const { modal, setModal } = useModal();
	const { theme } = useTheme();
	const { addressState, addToAddresses } = useAuth();
	const { axiosRequest } = useAxios();
	const initialAddress = {
		name: "",
		address: "",
		phoneNumber: "",
		pincode: "",
	};

	const [addressObj, setAddressObj] = useState(initialAddress);

	const saveAddressHandler = () => {
		if (
			(addressObj.name === "") |
			(addressObj.address === "") |
			(addressObj.phoneNumber === "") |
			(addressObj.pincode === "")
		) {
			Toast("info", "all fields are compulsory", theme);
			return;
		} else {
			addToAddresses(axiosRequest, addressObj);
			setAddressObj(initialAddress);
			setModal((t) => !t);
		}
	};

	const onChangeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setAddressObj((prevAddress) => ({
			...prevAddress,
			[name]: value,
		}));
	};

	const closeModal = () => {
		setModal((t) => !t);
	};

	const setDummyAddress = () => {
		setAddressObj({
			name: "Travis Balistreri",
			address: "83150 Blick Grove",
			phoneNumber: 12326760792,
			pincode: 1330881,
		});
	};

	return (
		<section className="address__section">
			<section className="address__header">
				<div className="h4">Address</div>
				<button
					to="/checkout"
					className="btn btn--outline--primary btn--circular btn--dismiss"
					title="Close Modal"
					onClick={closeModal}
				>
					{bxIcons.cross}
				</button>
			</section>
			<form className="form">
				<InputTypeOne
					wrapperClassName="form__item form__input_box"
					htmlFor="text"
					labelClassName="label"
					labelText="Full Name"
					type="text"
					className="input_box"
					placeholder="Enter your name"
					name="name"
					onChange={onChangeHandler}
					value={addressObj.name}
				/>

				<InputTypeOne
					wrapperClassName="form__item form__input_box"
					htmlFor="text"
					labelClassName="label"
					labelText="Address"
					type="text"
					className="input_box"
					placeholder="Enter your address"
					name="address"
					onChange={onChangeHandler}
					value={addressObj.address}
				/>
				<InputTypeOne
					wrapperClassName="form__item form__input_box"
					htmlFor="number"
					labelClassName="label"
					labelText="Contact Number"
					type="number"
					className="input_box"
					placeholder="Enter your Contact Number"
					name="phoneNumber"
					onChange={onChangeHandler}
					value={addressObj.phoneNumber}
				/>
				<InputTypeOne
					wrapperClassName="form__item form__input_box"
					htmlFor="number"
					labelClassName="label"
					labelText="Pincode"
					type="number"
					className="input_box"
					placeholder="Enter your Pincode"
					name="pincode"
					onChange={onChangeHandler}
					value={addressObj.pincode}
				/>
			</form>
			<section className="save_address__btn">
				<button
					className="btn btn--primary"
					onClick={saveAddressHandler}
				>
					Add Address
				</button>
				<button className="btn btn--outline--primary" onClick={setDummyAddress}>
					Dummy Address
				</button>
			</section>
		</section>
	);
};

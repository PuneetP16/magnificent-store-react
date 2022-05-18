import { useState, useContext, createContext, useReducer } from "react";
import { Toast } from "../components/UI/Toast/Toast";
import { addressReducer } from "../reducers";
import { useTheme } from "./themeContext";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const initialAddressState = {
	addresses: [],
};

export const AuthProvider = ({ children }) => {
	const token = localStorage.getItem("storeToken");
	const { theme } = useTheme();
	const [isAuth, setIsAuth] = useState(!!token);

	const [addressState, addressDispatch] = useReducer(
		addressReducer,
		initialAddressState
	);

	const toggleAuth = () => {
		setIsAuth((auth) => !auth);
	};

	const addToAddresses = async (axiosRequest, address) => {
		try {
			const addToAddressesURL = "/api/user/addresses";
			const { output, error } = await axiosRequest({
				method: "POST",
				url: addToAddressesURL,
				resKey: "addresses",
				data: { address: address },
			});
			if (!!output) {
				addressDispatch({ type: "ADD", payload: output });
				Toast("success", "Added New Address", theme);
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.response.data.errors[0], theme);
		}
	};

	const removeFromAddresses = async (axiosRequest, address) => {
		try {
			const removeFromAddressesURL = `/api/user/addresses/${address._id}`;
			const { output, error } = await axiosRequest({
				method: "DELETE",
				url: removeFromAddressesURL,
				resKey: "addresses",
				data: { address: address },
			});
			if (!!output) {
				addressDispatch({ type: "REMOVE", payload: output });
				Toast("success", "Removed Address", theme);
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.response.data.errors[0], theme);
		}
	};

	const value = {
		isAuth,
		toggleAuth,
		token,
		addToAddresses,
		addressState,
		addressDispatch,
		initialAddressState,
		removeFromAddresses,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

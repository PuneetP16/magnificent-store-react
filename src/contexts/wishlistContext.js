import { useContext, createContext, useReducer } from "react";
import { Toast } from "../components/UI/Toast/Toast";
import { axiosRequest } from "../customHooks";
import { useTheme } from "./themeContext";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

const wishlistReducer = ({ wishlist, totalQty }, { type, payload }) => {
	switch (type) {
		case "GET":
			wishlist = [...payload];
			return { wishlist, totalQty };
		case "ADD":
			wishlist = [...payload];
			totalQty += 1;
			return { wishlist, totalQty };

		case "REMOVE":
			wishlist = [...payload];
			totalQty -= 1;
			return { wishlist, totalQty };
	}
};

export const WishlistProvider = ({ children }) => {
	const initialWishlistState = {
		wishlist: [],
		totalQty: 0,
	};
	const { theme } = useTheme();
	const [{ wishlist, totalQty }, wishlistDispatch] = useReducer(
		wishlistReducer,
		initialWishlistState
	);

	const addToWishlist = async (axiosRequest, prod) => {
		try {
			const addToWishlistURL = "/api/user/wishlist";
			const { output, error } = await axiosRequest({
				method: "POST",
				url: addToWishlistURL,
				resKey: "wishlist",
				data: { product: prod },
			});
			if (!!output) {
				wishlistDispatch({ type: "ADD", payload: output, product: prod });
				Toast("success", "Added to Wishlist", theme);
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.message, theme);
		}
	};

	const removeFromWishlist = async (axiosRequest, prod) => {
		try {
			const wishlistProductURL = `/api/user/wishlist/${prod._id}`;
			const { output, error } = await axiosRequest({
				method: "DELETE",
				url: wishlistProductURL,
				resKey: "wishlist",
				data: { product: prod },
			});

			if (!!output) {
				wishlistDispatch({ type: "REMOVE", payload: output, product: prod });
				Toast("success", "Remove from Wishlist", theme);
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.message, theme);
		}
	};

	const getUpdatedWishlist = async (axiosRequest) => {
		const wishlistProductURL = `/api/user/wishlist/`;
		const { output } = await axiosRequest({
			method: "GET",
			url: wishlistProductURL,
			resKey: "wishlist",
		});
		wishlistDispatch({ type: "GET", payload: output });
	};

	const value = {
		wishlist,
		totalQty,
		wishlistDispatch,
		initialWishlistState,
		addToWishlist,
		removeFromWishlist,
		getUpdatedWishlist,
	};
	return (
		<WishlistContext.Provider value={value}>
			{children}
		</WishlistContext.Provider>
	);
};

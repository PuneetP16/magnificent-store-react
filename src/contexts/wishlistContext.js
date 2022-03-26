import { useContext, createContext, useReducer } from "react";
import { axiosRequest } from "../customHooks";

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

	const [{ wishlist, totalQty }, wishlistDispatch] = useReducer(
		wishlistReducer,
		initialWishlistState
	);

	const addToWishlist = async (axiosRequest, prod) => {
		const addToWishlistURL = "/api/user/wishlist";
		const { output } = await axiosRequest({
			method: "POST",
			url: addToWishlistURL,
			resKey: "wishlist",
			data: { product: prod },
		});
		wishlistDispatch({ type: "ADD", payload: output, product: prod });
	};

	const removeFromWishlist = async (axiosRequest, prod) => {
		console.log(prod)
		const wishlistProductURL = `/api/user/wishlist/${prod._id}`;
		const { output } = await axiosRequest({
			method: "DELETE",
			url: wishlistProductURL,
			resKey: "wishlist",
			data: { product: prod },
		});
		console.log("from wish", output)

		wishlistDispatch({ type: "REMOVE", payload: output, product: prod });
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

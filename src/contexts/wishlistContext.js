import { useContext, createContext, useReducer } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

const wishlistReducer = ({wishlist, totalQty}, {payload}) = {
    
}

export const WishlistProvider = ({ children }) => {
	// const { isAuth } = useAuth();
	// const ecomUsers = JSON.stringify(localStorage.getItem("ecom-users"));
	const initialWishlistState = {
		wishlist: [],
		totalQty: 0,
	};

	const [{ wishlist, totalQty}, wishlistDispatch] = useReducer(
		wishlistReducer,
		initialWishlistState
	);

	const value = {
         wishlist, totalQty, wishlistDispatch, initialWishlistState
	};
	return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

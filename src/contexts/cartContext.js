import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	// const { isAuth } = useAuth();
	// const ecomUsers = JSON.stringify(localStorage.getItem("ecom-users"));
	const initialCartState = {
		cart: [],
		totalQty: 0,
		totalPrice: {
			original: 0,
			discount: 0,
		},
	};

	const [{ cart, totalQty, totalPrice }, cartDispatch] = useReducer(
		cartReducer,
		initialCartState
	);

	const value = {
		cart,
		cartDispatch,
		initialCartState,
		totalQty,
		totalPrice,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

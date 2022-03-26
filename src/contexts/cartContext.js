import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
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

	const addToCart = async (axiosRequest, prod) => {
		const existingProduct = cart.find((p) => p._id === prod._id);
		if (existingProduct) {
			return;
		}
		const addToCartURL = "/api/user/cart";
		const { output } = await axiosRequest({
			method: "POST",
			url: addToCartURL,
			resKey: "cart",
			data: { product: prod },
		});
		cartDispatch({ type: "ADD", payload: output, product: prod });
		//Client Side Update
		// cartDispatch({ type: "ADD", payload: prod });
	};

	const removeFromCart = async (axiosRequest, prod) => {
		const cartProductURL = `/api/user/cart/${prod._id}`;
		const { output } = await axiosRequest({
			method: "DELETE",
			url: cartProductURL,
			resKey: "cart",
			data: { product: prod },
		});
		cartDispatch({ type: "REMOVE", payload: output, product: prod });
		//Client Side Update
		// cartDispatch({ type: "REMOVE", payload: prod });
	};

	const updateQtyInCart = async (e, axiosRequest, prod) => {
		const cartProductURL = `/api/user/cart/${prod._id}`;
		const itemQty = Number(e.target.value);
		const action = { type: "update", qty: itemQty };
		const { output } = await axiosRequest({
			method: "POST",
			url: cartProductURL,
			resKey: "cart",
			data: { action: action },
		});
		cartDispatch({ type: "UPDATE", payload: output, product: prod });
	};

	const value = {
		cart,
		cartDispatch,
		initialCartState,
		totalQty,
		totalPrice,
		addToCart,
		removeFromCart,
		updateQtyInCart,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

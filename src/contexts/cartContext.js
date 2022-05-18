import { useContext, createContext, useReducer } from "react";
import { Toast } from "../components/UI/Toast/Toast";
import { cartReducer } from "../reducers";
import { useTheme } from "./themeContext";

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
	const { theme } = useTheme();

	const [{ cart, totalQty, totalPrice }, cartDispatch] = useReducer(
		cartReducer,
		initialCartState
	);

	const addToCart = async (axiosRequest, prod) => {
		try {
			const existingProduct = cart.find((p) => p._id === prod._id);
			if (existingProduct) {
				return;
			}
			const addToCartURL = "/api/user/cart";
			const { output, error } = await axiosRequest({
				method: "POST",
				url: addToCartURL,
				resKey: "cart",
				data: { product: prod },
			});
			if (!!output) {
				cartDispatch({ type: "ADD", payload: output, product: prod });
				Toast("success", "Added to Cart", theme);
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.message, theme);
		}
	};

	const removeFromCart = async (axiosRequest, prod) => {
		try {
			const cartProductURL = `/api/user/cart/${prod._id}`;
			const { output, error } = await axiosRequest({
				method: "DELETE",
				url: cartProductURL,
				resKey: "cart",
				data: { product: prod },
			});

			if (!!output) {
				cartDispatch({ type: "REMOVE", payload: output, product: prod });
				Toast("success", "Removed from Cart", theme);
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.message, theme);
		}
	};

	const updateQtyInCart = async (e, axiosRequest, prod) => {
		try {
			const cartProductURL = `/api/user/cart/${prod._id}`;
			const itemQty = Number(e.target.value);
			const action = { type: "update", qty: itemQty };
			const { output, error } = await axiosRequest({
				method: "POST",
				url: cartProductURL,
				resKey: "cart",
				data: { action: action },
			});
			if (!!output) {
				cartDispatch({ type: "UPDATE", payload: output, product: prod });
				Toast(
					"success",
					`Updated Cart quantity to ${itemQty} for selected product`,
					theme
				);
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.message, theme);
		}
	};

	const resetCart = async (axiosRequest, initialCartState) => {
		try {
			const cartURL = `/api/user/cart`;
			const { output, error } = await axiosRequest({
				method: "DELETE",
				url: cartURL,
				resKey: "cart",
			});
			console.log(output);
			if (!!output) {
				cartDispatch({ type: "RESET", payload: initialCartState });
			} else {
				Toast("warning", error.response.data.errors[0], theme);
			}
		} catch (error) {
			Toast("warning", error.message, theme);
		}
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
		resetCart,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

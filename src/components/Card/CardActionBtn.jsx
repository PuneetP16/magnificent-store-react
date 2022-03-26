import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../contexts";
import { useAxios } from "../../customHooks";

export const CardActionBtn = ({ btnTitle, prod }) => {
	const addToCartURL = "/api/user/cart";
	const { isAuth } = useAuth();
	const { axiosRequest } = useAxios();
	const { cart, totalQty, cartDispatch } = useCart();

	const navigate = useNavigate();

	const isProductInCart = cart.findIndex((p) => p._id === prod._id) !== -1;

	const addToCart = async () => {
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

	const onClickHandler = () => {
		isProductInCart
			? navigate("/cart")
			: isAuth
			? addToCart()
			: navigate("/login");
	};

	return (
		<button
			className="card__button btn btn--outline--primary"
			onClick={onClickHandler}
		>
			{isProductInCart ? "Go to Cart" : btnTitle}
		</button>
	);
};

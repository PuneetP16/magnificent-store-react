import { useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../contexts";
import { useAxios } from "../../customHooks";

export const CardActionBtn = ({ btnTitle, prod }) => {
	const { isAuth } = useAuth();
	const { axiosRequest } = useAxios();
	const { cart, addToCart } = useCart();

	const navigate = useNavigate();

	const isProductInCart = cart.findIndex((p) => p._id === prod._id) !== -1;

	const onClickHandler = () => {
		isProductInCart
			? navigate("/cart")
			: isAuth
			? addToCart(axiosRequest, prod)
			: navigate("/login");
	};

	return (
		<button
			className="card__button btn btn--outline--primary btn--icon"
			onClick={onClickHandler}
		>
			{isProductInCart ? "Go to Cart" : btnTitle}
			{isProductInCart ? (
				<i className="bx bx-cart"></i>
			) : (
				<i className="bx bxs-cart-add"></i>
			)}
		</button>
	);
};

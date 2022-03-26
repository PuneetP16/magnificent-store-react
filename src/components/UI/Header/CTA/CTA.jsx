import "./CTA.css";
import { ThemeToggle } from "../../../../components";
import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../../../contexts";
import { useLocation } from "react-router-dom";

export const CTA = () => {
	const { isAuth, toggleAuth } = useAuth();
	const { totalQty: cartTotalQty } = useCart();

	const { pathname } = useLocation();

	const onClickHandler = () => {
		if (isAuth) {
			localStorage.removeItem("storeToken");
			toggleAuth();
		}
	};
	return (
		<div className="header__nav_btns">
			<Link
				onClick={onClickHandler}
				className="btn btn--primary"
				to={isAuth ? "/" : pathname === "/login" ? "/signup" : "/login"}
			>
				{isAuth ? "Logout" : pathname === "/login" ? "Sign Up" : "Login"}
			</Link>
			<Link
				className="header__links badge_base btn btn--primary btn--icon btn--circular"
				to="/wishlist"
			>
				<i className="bx bxs-heart"></i>
				<span className="badge color--primary width_height--sm">5+</span>
			</Link>
			<Link
				className="header__links badge_base btn btn--primary btn--icon btn--circular"
				to="/cart"
			>
				<i className="bx bxs-cart"></i>
				<span className="badge color--primary width_height--sm">
					{cartTotalQty}
				</span>
			</Link>
			<ThemeToggle />
		</div>
	);
};

import "./CTA.css";
import { ThemeToggle } from "../../../../components";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../../../contexts";
import { useLocation } from "react-router-dom";

export const CTA = () => {
	const { isAuth, toggleAuth } = useAuth();
	const { totalQty: cartTotalQty } = useCart();
	const { totalQty: wishlistTotalQty } = useWishlist();

	const { pathname } = useLocation();

	const onClickHandler = () => {
		if (isAuth) {
			localStorage.removeItem("storeToken");
			toggleAuth();
		}
	};

	const isLoginPage = (() => pathname === "/login")();
	const getBtnName = (() =>
		isAuth ? "Logout" : pathname === "/login" ? "Sign Up" : "Login")();
	const getBtnIcon = (() =>
		isAuth ? (
			<i className="bx bx-log-out"></i>
		) : isLoginPage ? (
			<i className="bx bx-user-plus"></i>
		) : (
			<i className="bx bx-log-in"></i>
		))();
	const getLinkPath = (() =>
		isAuth ? "/" : pathname === "/login" ? "/signup" : "/login")();

	return (
		<div className="header__nav_btns">
			<Link
				onClick={onClickHandler}
				className="btn btn--primary btn--icon"
				to={getLinkPath}
			>
				{getBtnName}
				{getBtnIcon}
			</Link>
			<Link
				className="header__links badge_base btn btn--primary btn--icon btn--circular"
				to="/wishlist"
			>
				<i className="bx bxs-heart"></i>
				<span className="badge color--primary width_height--lg">
					{wishlistTotalQty}
				</span>
			</Link>
			<Link
				className="header__links badge_base btn btn--primary btn--icon btn--circular"
				to="/cart"
			>
				<i className="bx bxs-cart"></i>
				<span className="badge color--primary width_height--lg">
					{cartTotalQty}
				</span>
			</Link>
			<ThemeToggle />
		</div>
	);
};

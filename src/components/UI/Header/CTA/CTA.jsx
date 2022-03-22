import "./CTA.css";
import { ThemeToggle } from "../../../../components";
import { Link } from "react-router-dom";

export const CTA = ({ currentPath }) => {
	return (
		<div className="header__nav_btns">
			<Link
				className="btn btn--primary"
				to={currentPath === "/login" ? "/signup" : "/login"}
			>
				{currentPath === "/login" ? "Sign Up" : "Login"}
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
				<span className="badge color--primary width_height--sm">5+</span>
			</Link>
			<ThemeToggle />
		</div>
	);
};

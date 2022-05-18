import { Link } from "react-router-dom";
import { CTA, SearchBox } from "../../../components";
import { icon } from "../../../data/Logo/logo";
import "./Header.css";

export const Header = () => {
	return (
		<header className="header">
			<Link className="brand__text grid-center" to="/">
				<img className="logo__img" src={icon} alt="logo" /> Store
			</Link>
			<SearchBox />
			<CTA />
		</header>
	);
};

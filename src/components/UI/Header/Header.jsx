import { Link } from "react-router-dom";
import { CTA, SearchBox } from "../../../components";
import "./Header.css";

export const Header = ({currentPath}) => {
	return (
		<header className="header">
			<Link className="brand__text grid-center" to="/">
				Magnificent Store
			</Link>
			<SearchBox />
			<CTA currentPath={currentPath}/>
		</header>
	);
};

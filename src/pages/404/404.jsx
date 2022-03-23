import { Link } from "react-router-dom";
import { Home } from "../../pages";
import "./404.css";
export const NotFound = () => {
	return (
		<div className="page_not_found_wrapper">
			<h1 className="page_not_found__body">
				404 Page Not Found <br />
				Go back to <br />
				<Link to="/" className="homepage__link">
					Home Page{" "}
				</Link>
			</h1>
		</div>
	);
};

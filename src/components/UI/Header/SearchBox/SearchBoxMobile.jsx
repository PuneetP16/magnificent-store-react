import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBox.css";

export const SearchBoxMobile = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const onChangeSearchHandler = (e) => {
		setQuery(e.target.value);
	};

	const passQuery = (e) => {
		e.preventDefault();
		navigate(`/productlisting/search?query=${query}`);
		setQuery("");
	};

	const showSearchMobile = (() => {
		switch (pathname) {
			case "/checkout":
				return true;
			case "/cart":
				return true;
			case "/login":
				return true;
			case "/signup":
				return true;
			default:
				return false;
		}
	})();

	return (
		<form
			onSubmit={passQuery}
			className={` search_on_mobile ${
				showSearchMobile ? "set_visibility_hidden" : ""
			}`}
		>
			<input
				type="search"
				className="input_box"
				placeholder="Search for items"
				required
				value={query}
				onChange={onChangeSearchHandler}
			/>

			<button
				type="submit"
				onClick={passQuery}
				className="btn btn--primary btn--icon"
			>
				<i className="bx bx-search-alt-2"></i>
			</button>
		</form>
	);
};

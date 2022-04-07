import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../../contexts";
import "./SearchBox.css";

export const SearchBox = () => {
	const { filterDispatch, initialFilterState } = useFilter();
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const onChangeSearchHandler = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		if (query) {
			filterDispatch({ type: "SEARCH", payload: query });
		} else {
			filterDispatch({ type: "RESET", payload: initialFilterState });
		}
	}, [filterDispatch, query]);

	const passQuery = (e) => {
		e.preventDefault();
		if (query) {
			navigate(`/productListing/search?query=${query}`);
			setQuery("");
		} else {
			navigate("/productListing");
			setQuery("");
		}
	};

	return (
		<form
			onSubmit={passQuery}
			className="search_box search_on_header"
			method="get"
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

import "./CategoryCard.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../../contexts";

export const CategoryCard = ({ prodCat }) => {
	const { filterDispatch: dispatch } = useFilter();
	return (
		<li
			key={prodCat._id}
			style={{ backgroundColor: "white" }}
			className="categories__list category_card__list"
		>
			<Link
				onClick={() =>
					dispatch({
						type: "CATEGORY_SELECTION",
						payload: prodCat.categoryName,
					})
				}
				to="/productlisting"
				className="categories__links"
			>
				<img
					style={{ backgroundColor: "white" }}
					src={prodCat.src}
					alt="bat"
					className="image--responsive"
				/>
			</Link>
			<span className="catergories__name">Cricket {prodCat.categoryName}</span>
		</li>
	);
};

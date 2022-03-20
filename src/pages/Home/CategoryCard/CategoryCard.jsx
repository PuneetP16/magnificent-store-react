import "./CategoryCard.css";
import { Link } from "react-router-dom";

export const CategoryCard = ({ categories }) => {
	return categories.map((prodCat) => (
		<li
			key={prodCat._id}
			style={{ backgroundColor: "white" }}
			className="categories__list"
		>
			<Link to="/productlisting" className="categories__links">
				<img
					style={{ backgroundColor: "white" }}
					src={prodCat.src}
					alt="bat"
					className="image--responsive"
				/>
				<span className="catergories__name">
					Cricket {prodCat.categoryName}
				</span>
			</Link>
		</li>
	));
};

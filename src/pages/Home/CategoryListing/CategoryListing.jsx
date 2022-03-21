import "./CategoryListing.css";
import { CategoryCard } from "../../../components";

export const CategoryListing = ({ categories }) => {
	return categories.map((prodCat) => <CategoryCard prodCat={prodCat} />);
};

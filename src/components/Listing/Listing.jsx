import "./Listing.css";
import { ProductCard } from "../../components";

export const Listing = ({ products, featured }) => {
	return products.map((prod) => (
		<ProductCard prod={prod} featured={featured} key={prod._id}/>
	));
};

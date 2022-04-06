import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilter } from "./filterContext";

export const ScrollToTopProvider = ({ children }) => {
	const location = useLocation();
	const { category, rating, sortByPrice, priceRange } = useFilter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location, category, rating, sortByPrice, priceRange]);

	return <>{children}</>;
};

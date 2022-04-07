import { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

const filterReducer = (
	{ category, rating, sortByPrice, priceRange, search},
	{ type, payload }
) => {
	switch (type) {
		case "CATEGORY_SELECTION":
			category = [payload];

			return {
				category,
				rating,
				sortByPrice,
				priceRange,
				search,
			};

		case "CATEGORY":
			const newCategoryList = [...category];
			const isCategoryPresent =
				newCategoryList.findIndex((c) => c === payload) !== -1;
			category = newCategoryList;
			isCategoryPresent
				? (category = [...newCategoryList].filter((c) => c !== payload))
				: newCategoryList.push(payload);

			return {
				category,
				rating,
				sortByPrice,
				priceRange,
				search,
			};

		case "RATING":
			if (rating === payload) {
				rating = 10;
				return {
					category,
					rating,
					sortByPrice,
					priceRange,
					search,
				};
			}
			rating = payload;
			return {
				category,
				rating,
				sortByPrice,
				priceRange,
				search,
			};

		case "SORT_BY_PRICE":
			sortByPrice = payload;
			return {
				category,
				rating,
				sortByPrice,
				priceRange,
				search,
			};

		case "PRICE_RANGE":
			priceRange = payload;
			return {
				category,
				rating,
				sortByPrice,
				priceRange,
				search,
			};

		case "SEARCH":
			search = payload;
			return {
				category,
				rating,
				sortByPrice,
				priceRange,
				search,
			};

		case "RESET":
			return { ...payload };

		default:
			return {
				category,
				rating,
				sortByPrice,
				priceRange,
				search,
			};
	}
};

export const FilterProvider = ({ children }) => {
	const initialFilterState = {
		category: [],
		rating: null,
		sortByPrice: null,
		priceRange: 15000,
		search: "",
	};

	const [
		{ category, rating, sortByPrice, priceRange, search },
		filterDispatch,
	] = useReducer(filterReducer, initialFilterState);

	const value = {
		filterDispatch,
		category,
		rating,
		sortByPrice,
		priceRange,
		search,
		initialFilterState,
	};

	return (
		<FilterContext.Provider value={value}>{children}</FilterContext.Provider>
	);
};

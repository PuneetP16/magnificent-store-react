export const sortByPrice = (productList, sortByPrice) => {
	const ascending = (a, b) => {
		return a.price.original - b.price.original;
	};

	const descending = (a, b) => {
		return b.price.original - a.price.original;
	};
	return [...productList].sort(
		sortByPrice === "ASCENDING" ? ascending : descending
	);
};
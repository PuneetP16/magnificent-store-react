export const getSearchedProducts = (list, query) => {
	if (query === "empty") return [...list];
	let lowerCaseQuery = query?.toLowerCase();
	return list?.filter(
		(product) =>
			product.title.toLowerCase().includes(lowerCaseQuery) ||
			product.categoryName.toLowerCase().includes(lowerCaseQuery)
	);
};

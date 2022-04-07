export const getSearchedProducts = (list, query) => {
	if (query === "empty") return [...list];
	return list.filter(
		(product) =>
			product.title.toLowerCase().includes(query) ||
			product.categoryName.toLowerCase().includes(query)
	);
};

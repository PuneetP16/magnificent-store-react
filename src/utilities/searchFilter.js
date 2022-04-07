export const getSearchedProducts = (list, query) => {
	return list.filter(
		(product) =>
			product.title.toLowerCase().includes(query) ||
			product.categoryName.toLowerCase().includes(query)
	);
};

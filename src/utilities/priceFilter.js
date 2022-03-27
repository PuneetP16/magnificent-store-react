export const priceFilter = (productList, priceRange) => {
	return productList.filter((p) => p.price.discounted <= priceRange);
};

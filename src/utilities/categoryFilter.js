export const categoryFilter = (productList, category) => {
    if (category.length === 0) return productList;
    return productList.filter((p) => category.includes(p.categoryName));
};
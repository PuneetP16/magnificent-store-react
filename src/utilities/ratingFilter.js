export const ratingFilter = (productList, rating) => {
    if (!rating) return productList;
    return productList.filter((p) => p.rating >= rating);
};
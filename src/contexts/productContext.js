import { useReducer, useEffect, useContext, createContext } from "react";
import { useAxios } from "../customHooks";
import { useAuth } from "./authContext";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

const productReducer = (
	{ productList, categoryList, filteredList },
	{ type, payload }
) => {
	switch (type) {
		case "PRODUCT_LIST":
			productList = [...payload];

			return { productList, categoryList, filteredList };
		case "CATEGORY_LIST":
			categoryList = [...payload];

			return { productList, categoryList, filteredList };
	}
};

export const ProductProvider = ({ children }) => {
	const initialProductState = {
		productList: [],
		categoryList: [],
	};

	const { toggleLoader } = useAuth();
	const { axiosRequest } = useAxios();

	const [{ productList, categoryList }, productDispatch] = useReducer(
		productReducer,
		initialProductState
	);

	useEffect(() => {
		(async () => {
			const fetchProductsURL = "/api/products";
			const { output } = await axiosRequest({
				method: "GET",
				url: fetchProductsURL,
				resKey: "products",
			});
			if (output) productDispatch({ type: "PRODUCT_LIST", payload: output });
		})();

		(async () => {
			const fetchCategoryURL = "/api/categories";
			const { output } = await axiosRequest({
				method: "GET",
				url: fetchCategoryURL,
				resKey: "categories",
			});
			if (output) productDispatch({ type: "CATEGORY_LIST", payload: output });
		})();
	}, [productDispatch]);

	const value = { productList, categoryList, productDispatch };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};

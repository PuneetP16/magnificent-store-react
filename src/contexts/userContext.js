import { useState, useReducer, useContext, createContext } from "react";
import { formReducer } from "../reducers";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const lastLoginDetails = JSON.parse(localStorage.getItem("initialLoginFill"));
	const initialFormState = lastLoginDetails ?? {
		loginData: {
			email: "patelpunit95@gmail.com",
			password: "Puneet@1995",
		},
		userData: {
			firstName: "",
			lastName: "",
			email: "",
			encodedToken: "",
		},
	};

	const [{ loginData, userData }, dispatch] = useReducer(
		formReducer,
		initialFormState
	);

	const value = { loginData, userData, dispatch, initialFormState };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

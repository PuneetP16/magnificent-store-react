import { useState, useReducer, useContext, createContext } from "react";
import { formReducer } from "../reducers";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const lastLoginDetails = JSON.parse(
		sessionStorage.getItem("initialLoginFill")
	);
	const initialFormState = lastLoginDetails ?? {
		loginData: {
			email: "adarshbalika@gmail.com",
			password: "adarshBalika123",
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

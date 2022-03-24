import axios from "axios";

export const signIn = async ({
	loginData,
	userData,
	dispatch,
	initialFormState,
	toggleAuth,
	navigate,
	rememberMe,
	toggleLoader,
}) => {
	try {
		toggleLoader();

		const res = await axios.post("/api/auth/login", loginData);
		if (res.status === 200) {
			sessionStorage.setItem("storeToken", res.data.encodedToken);
			toggleAuth();
			const currentInitial = { loginData: { ...loginData } };
			rememberMe
				? sessionStorage.setItem(
						"initialLoginFill",
						JSON.stringify(currentInitial)
				  )
				: sessionStorage.setItem(
						"initialLoginFill",
						JSON.stringify(initialFormState)
				  );

			dispatch({
				type: "HANDLE_SUBMIT",
				initialFormState: rememberMe
					? { loginData: { ...loginData } }
					: initialFormState,
				payload: {
					...loginData,
					userData: {
						...userData,
						email: res.data.foundUser.email,
						firstName: res.data.foundUser.firstName,
						lastName: res.data.foundUser.lastName,
						encodedToken: res.data.encodedToken,
					},
				},
			});
			toggleLoader();
		}

		if (res.status === 201) {
			throw console.log("Invalid Password, Try Again");
		}
	} catch (err) {
		console.log(err, "Invalid Credentials");
		toggleLoader();
	}
};

import axios from "axios";

export const signIn = async ({
	loginData,
	userData,
	dispatch,
	initialFormState,
	toggleAuth,
	setAlert,
	rememberMe,
	toggleLoader,
}) => {
	try {
		toggleLoader();

		const res = await axios.post("/api/auth/login", loginData);
		if (res.status === 200) {
			localStorage.setItem("storeToken", res.data.encodedToken);
			toggleAuth();
			console.log(res);
			const currentUserData = {
				loginData: { ...loginData },
				userData: {
					...userData,
					email: res.data.foundUser.email,
					firstName: res.data.foundUser.firstName,
					lastName: res.data.foundUser.lastName,
					encodedToken: res.data.encodedToken,
				},
			};
			rememberMe
				? localStorage.setItem(
						"initialLoginFill",
						JSON.stringify(currentUserData)
				  )
				: localStorage.setItem(
						"initialLoginFill",
						JSON.stringify(initialFormState)
				  );

			dispatch({
				type: "HANDLE_SUBMIT",
				initialFormState: rememberMe
					? { loginData: { ...loginData } }
					: initialFormState,
				payload: currentUserData,
			});
			toggleLoader();
		}

		if (res.status === 201) {
			setAlert((a) => ({
				...a,
				text: "Invalid Password, Try Again",
				type: "alert--danger",
				visibility: true,
			}));
			toggleLoader();
			return;
		}
	} catch (error) {
		console.log(error, "Invalid Credentials");
		let msg = JSON.stringify(error);

		let parsedMsg = JSON.parse(msg);
		const alertText =
			parsedMsg.status === 404
				? "Email Address doesn't Exist, Please Signup"
				: "Server Error, Try Again";

		setAlert((a) => ({
			...a,
			text: alertText,
			type: "alert--danger",
			visibility: true,
		}));
		toggleLoader();
	}
};

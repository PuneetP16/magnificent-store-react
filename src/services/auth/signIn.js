import axios from "axios";
import { Toast } from "../../components/UI/Toast/Toast";

export const signIn = async ({
	loginData,
	userData,
	dispatch,
	initialFormState,
	toggleAuth,
	rememberMe,
	toggleLoader,
	theme,
}) => {
	try {
		toggleLoader();

		const res = await axios.post("/api/auth/login", loginData);
		if (res.status === 200) {
			localStorage.setItem("storeToken", res.data.encodedToken);
			toggleAuth();
			Toast("success", "Successfully logged in", theme);
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
			Toast("error", "Invalid Password, Try Again", theme);

			toggleLoader();
			return;
		}
	} catch (error) {
		Toast("error", error.message, theme);
		let msg = JSON.stringify(error);

		let parsedMsg = JSON.parse(msg);
		const alertText =
			parsedMsg.status === 404
				? "Email Address doesn't Exist, Please Signup"
				: "Server Error, Try Again";

		Toast("error", alertText, theme);

		toggleLoader();
	}
};

import axios from "axios";

export const signUp = async ({
	signUpData,
	navigate,
	loginData,
	userData,
	dispatch,
}) => {
	try {
		const res = await axios.post("/api/auth/signup", signUpData);
		if (res.status === 201) {
			dispatch({
				type: "HANDLE_SUBMIT",
				initialFormState: { loginData: { ...signUpData } },
				payload: {
					...loginData,
					userData: {
						...userData,
					},
				},
			});
			navigate("/login");
		}
	} catch (error) {
		console.log(err, "Invalid Credentials");
	}
};

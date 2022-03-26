export const formReducer = ({ loginData, userData }, action) => {
	switch (action.type) {
		case "HANDLE_LOGIN_INPUT":
			return {
				loginData: { ...loginData, [action.field]: action.payload },
				userData: { ...userData },
			};

		case "HANDLE_SUBMIT":
			return {
				loginData: { ...loginData, ...action.initialFormState.loginData },
				userData: { ...userData, ...action.payload.userData },
			};
		default:
			return formState;
	}
};

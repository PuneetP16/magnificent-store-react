export const addressReducer = (state, action) => {
	let { addresses } = state;
	switch (action.type) {
		case "ADD":
			addresses = [...action.payload];
			return { ...state, addresses };

		case "REMOVE":
			addresses = [...action.payload];
			return { ...state, addresses };

		default:
			return state;
	}
};

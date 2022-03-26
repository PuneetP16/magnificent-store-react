import axios from "axios";
import { useAuth, useLoader } from "../contexts";

export const useAxios = () => {
	const { isAuth, token } = useAuth();
	const { toggleLoader } = useLoader();
	let headers = {};
	let output;

	const axiosRequest = async ({ method, url, resKey, data = {} }) => {
		headers = {
			authorization: token,
		};

		try {
			toggleLoader();

			const res = await axios({ url, method, data, headers });
			console.log(res, "from axios")
			if (res.status === 200 || res.status === 201) {
				toggleLoader();
				output = res.data[resKey];
			}
		} catch (err) {
			console.log(err);
			toggleLoader();
		}
		return { output };
	};

	// const sendData = async ({ method, url, resKey, data = {} }) => {
	// 	headers = {
	// 		authorization: token,
	// 	};

	// 	try {
	// 		toggleLoader();

	// 		const res = await axios({ method, url, data, headers });
	// 		if (res.status === 200 || res.status === 201) {
	// 			toggleLoader();
	// 			output = res.data[resKey];
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 		toggleLoader();
	// 	}

	// 	return { output };
	// };

	return { axiosRequest };
};

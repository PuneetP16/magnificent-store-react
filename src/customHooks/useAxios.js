import axios from "axios";
import { Toast } from "../components/UI/Toast/Toast";
import { useAuth, useLoader, useTheme } from "../contexts";

export const useAxios = () => {
	const { token } = useAuth();
	const { theme } = useTheme();
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
			console.log(res);
			if (res.status === 200 || res.status === 201) {
				output = res.data[resKey];
				toggleLoader();
			}
		} catch (error) {
			Toast("error", error.message, theme);
			toggleLoader();
		}
		return { output };
	};

	return { axiosRequest };
};

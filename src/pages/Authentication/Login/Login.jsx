import { Footer, Header } from "../../../components";
import { useDocumentTitle } from "../../../customHooks/useDocumentTitle";
import "./Login.css";

export const Login = () => {
	useDocumentTitle("Login | MS");

	return (
		<div className="body--homepage">
			<Header />
			<h2>Login</h2>
			<Footer />
		</div>
	);
};

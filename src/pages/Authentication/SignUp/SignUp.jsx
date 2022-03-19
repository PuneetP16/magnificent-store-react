import { Footer, Header } from "../../../components";
import { useDocumentTitle } from "../../../customHooks/useDocumentTitle";
import "./SignUp.css";

export const SignUp = () => {
	useDocumentTitle("SignUp | MS");

	return (
		<div className="body--homepage">
			<Header />
			<h2>SignUp</h2>
			<Footer />
		</div>
	);
};

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	InputTypeOne,
	InputTypeThree,
	InputTypeTwo,
} from "../../../components";
import { useUser } from "../../../contexts";
import { useDocumentTitle } from "../../../customHooks/useDocumentTitle";
import { signUp } from "../../../services";
import "./SignUp.css";

export const SignUp = () => {
	useDocumentTitle("Signup | MS");
	const initialSignUpData = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		consent: "	",
	};

	const [isVisible, setIsVisible] = useState(false);
	const [signUpData, setSignUpData] = useState(initialSignUpData);
	const { loginData, userData, dispatch } = useUser();
	const navigate = useNavigate();
	const toggleVisibility = () => {
		setIsVisible((visible) => !visible);
	};

	const onChangeHandler = (e) => {
		setSignUpData((obj) => ({
			...obj,
			[e.target.name]:
				e.target.value === "on" ? e.target.checked : e.target.value,
		}));
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		signUp({
			signUpData,
			navigate,
			loginData,
			userData,
			dispatch,
		});
	};

	return (
		<main>
			<div className="center">
				<form onSubmit={onSubmitHandler} className="form flex" method="get">
					<h2 className="h3">Sign Up</h2>
					<InputTypeOne
						wrapperClassName="form__item form__first_name form__input_box"
						htmlFor="first_name"
						labelClassName="label"
						labelText="First Name"
						type="text"
						className="input_box"
						placeholder="John"
						name="firstName"
						onChange={onChangeHandler}
						value={signUpData["firstName"]}
					/>
					<InputTypeOne
						wrapperClassName="form__item form__last_name form__input_box"
						htmlFor="last_name"
						labelClassName="label"
						labelText="Last Name"
						type="text"
						className="input_box"
						placeholder="Doe"
						name="lastName"
						onChange={onChangeHandler}
						value={signUpData["lastName"]}
					/>
					<InputTypeOne
						wrapperClassName="form__item form__email form__input_box"
						htmlFor="email"
						labelClassName="label"
						labelText="Email Address"
						type="email"
						className="input_box"
						placeholder="JohnDoe@email.com"
						name="email"
						onChange={onChangeHandler}
						value={signUpData["email"]}
					/>

					<InputTypeThree
						wrapperClassName="form__item form__password form__input_box"
						htmlFor="password"
						labelClassName="label"
						labelText="Password"
						type={isVisible ? "text" : "password"}
						className="input_box"
						placeholder="********"
						name="password"
						onChange={onChangeHandler}
						value={signUpData["password"]}
						iconClassName={`bx ${isVisible ? "bxs-hide" : "bxs-show"}`}
						toggleVisibility={toggleVisibility}
					/>
					<section className="form__item form__actions">
						<InputTypeTwo
							wrapperClassName="form__item form__actions"
							type="checkbox"
							className="checkbox"
							placeholder=""
							id="consent"
							htmlFor="consent"
							labelText="I accept all Terms & Conditions"
							required={true}
							name="consent"
							onChange={onChangeHandler}
							value={signUpData["consent"]}
						/>
					</section>
					<button className="form__signup_btn btn btn--primary">Sign Up</button>
					<Link className="btn btn--icon" to="/login">
						Already have an Account? Login
						<i className="bx bx-right-arrow-alt"></i>
					</Link>
				</form>
			</div>
		</main>
	);
};

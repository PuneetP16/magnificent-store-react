import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
	InputTypeOne,
	InputTypeThree,
	InputTypeTwo,
} from "../../../components";
import { useUser, useAuth, useLoader, useTheme } from "../../../contexts";
import { useDocumentTitle } from "../../../customHooks";
import { signIn } from "../../../services";
import "./Login.css";

export const Login = () => {
	const { theme } = useTheme();
	useDocumentTitle("Login | MS");
	const navigate = useNavigate();
	const { loginData, userData, dispatch, initialFormState } = useUser();

	const { toggleAuth } = useAuth();

	const [rememberMe, setRememberMe] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const { loader, toggleLoader } = useLoader();
	const toggleRememberMe = () => {
		setRememberMe((rememberMe) => !rememberMe);
	};
	const toggleVisibility = () => {
		setIsVisible((visible) => !visible);
	};

	const onChangeHandler = (e) => {
		dispatch({
			type: "HANDLE_LOGIN_INPUT",
			field: e.target.name,
			payload: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		signIn({
			loginData,
			userData,
			dispatch,
			initialFormState,
			toggleAuth,
			navigate,
			rememberMe,
			toggleLoader,
			theme,
		});
	};

	return (
		<main>
			<div className="center">
				<form onSubmit={onSubmitHandler} className="form flex" method="get">
					<h2 className="h3">Login</h2>
					<InputTypeOne
						wrapperClassName="form__item form__email form__input_box"
						htmlFor="email"
						labelClassName="label"
						labelText="Email Address"
						type="email"
						className="input_box"
						placeholder="yours@mail.com"
						name="email"
						onChange={onChangeHandler}
						value={loginData["email"]}
					/>

					<InputTypeThree
						wrapperClassName="form__item form__password form__input_box"
						htmlFor="password"
						labelClassName="label"
						labelText="Password"
						className="input_box"
						placeholder="********"
						name="password"
						onChange={onChangeHandler}
						value={loginData["password"]}
						type={isVisible ? "text" : "password"}
						iconClassName={`bx ${isVisible ? "bxs-hide" : "bxs-show"}`}
						toggleVisibility={toggleVisibility}
					/>
					<section className="form__item form__actions">
						<InputTypeTwo
							wrapperClassName="remember_me"
							type="checkbox"
							className="checkbox"
							placeholder=""
							name="remember_me"
							id="remember_me"
							htmlFor="remember_me"
							labelClassName="checkbox"
							labelText="Remember me"
							onClick={toggleRememberMe}
							value={rememberMe}
							required={false}
						/>

						<button className="btn btn--primary btn--link forgot_pass">
							Forgot your Password?
						</button>
					</section>
					<button className="form__login_btn btn btn--primary">Login</button>
					<Link className="form__signup_btn btn btn--icon" to="/signup">
						New here? Create New Account
						<i className="bx bx-right-arrow-alt"></i>
					</Link>
				</form>
			</div>
		</main>
	);
};

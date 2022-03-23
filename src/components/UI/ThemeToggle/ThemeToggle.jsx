import { useTheme } from "../../../contexts";
import "./Theme.css";
export const ThemeToggle = () => {
	const { theme, themeHandler } = useTheme();

	return (
		<>
			<button
				onClick={themeHandler}
				className="header__links badge_base btn btn--primary btn--icon btn--circular theme__toggler"
			>
				{theme === "light" ? (
					<i className="bx bxs-moon"></i>
				) : (
					<i className="bx bxs-sun"></i>
				)}
			</button>
		</>
	);
};

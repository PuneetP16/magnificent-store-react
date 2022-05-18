import "./Accordian.css";

export const Accordian = ({ children, title, icon }) => {
	return (
		<details className="details">
			<summary>
				<h5>{title}</h5>
				{icon}
			</summary>
			{children}
		</details>
	);
};

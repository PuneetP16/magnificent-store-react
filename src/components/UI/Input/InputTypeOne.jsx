import "./InputTypeOne.css";
export const InputTypeOne = (props) => {
	const {
		wrapperClassName,
		htmlFor,
		labelClassName,
		labelText,
		type,
		className,
		placeholder,
		name,
	} = props;
	return (
		<div className={wrapperClassName}>
			<label htmlFor={htmlFor} className={labelClassName}>
				{labelText}
			</label>
			<input
				type={type}
				className={className}
				placeholder={placeholder}
				required
			/>
		</div>
	);
};

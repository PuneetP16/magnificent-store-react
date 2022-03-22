import "./InputTypeThree.css";
export const InputTypeThree = (props) => {
	const {
		wrapperClassName,
		htmlFor,
		labelClassName,
		labelText,
		type,
		className,
		placeholder,
		name,
		iconClassName,
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
			<button class="btn--icon">
				<i class={iconClassName} />
			</button>
		</div>
	);
};

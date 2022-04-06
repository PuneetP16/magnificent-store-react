import "./Rating.css";

export const Rating = ({ rating }) => {
	return (
		<div
			className="card__rating"
			style={
				rating > 3
					? { backgroundColor: "#009000", border: "2px solid #167403" }
					: {
							backgroundColor: "var(--COLOR-PRIMARY)",
					  }
			}
		>
			<span className="rating-badge-number">{rating}</span>
			<span className="rating">
				<i className="bx bxs-star"></i>
			</span>
		</div>
	);
};

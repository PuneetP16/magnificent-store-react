import "./Rating.css";

export const Rating = ({ rating }) => {
	return (
		<div className="card__rating">
			<span className="rating-badge-number">{rating}</span>
			<span className="rating">
				<i className="bx bxs-star"></i>
			</span>
		</div>
	);
};

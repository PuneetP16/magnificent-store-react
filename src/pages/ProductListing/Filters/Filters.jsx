import { CategoryCard } from "../../../components";
import { useFilter, useProduct } from "../../../contexts";
import "./Filters.css";
export const Filters = () => {
	const {
		category,
		rating,
		sortByPrice,
		priceRange,
		filterDispatch: dispatch,
		initialFilterState,
	} = useFilter();

	return (
		<aside className="aside aside--products">
			<form className="filter">
				<header className="filter__header">
					<h3 className="h5 filter__head">Filters</h3>
					<button
						onClick={(e) => {
							e.preventDefault();
							dispatch({ type: "RESET", payload: initialFilterState });
						}}
						className="filter--reset"
					>
						Clear All
					</button>
				</header>
				<div className="filter">
					<section className="filter__section">
						<h3 className="h5 filter__head">Price</h3>

						<ul className="range__head">
							<li className="range__amount">0</li>
							<li className="range__amount">7500</li>
							<li className="range__amount">15000</li>
						</ul>

						<input
							onChange={(e) =>
								dispatch({
									type: "PRICE_RANGE",
									payload: Number(e.target.value),
								})
							}
							step="1000"
							type="range"
							min="0"
							max="15000"
							value={priceRange}
							className="range__sliders"
						/>
						{priceRange}
					</section>
					<section className="filter__section">
						<h3 className="h5 filter__head">Category</h3>

						<ul className="filter__items">
							<li className="filter__list">
								<input
									checked={category.includes("bats")}
									onChange={() =>
										dispatch({ type: "CATEGORY", payload: "bats" })
									}
									type="checkbox"
									id="bats"
									className="filter__checkbox"
								/>
								<label htmlFor="bats" className="filter__item_label">
									Cricket Bat
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={category.includes("balls")}
									onChange={() =>
										dispatch({ type: "CATEGORY", payload: "balls" })
									}
									type="checkbox"
									id="balls"
									className="filter__checkbox"
								/>
								<label htmlFor="balls" className="filter__item_label">
									Cricket Ball
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={category.includes("helmets")}
									onChange={() =>
										dispatch({ type: "CATEGORY", payload: "helmets" })
									}
									type="checkbox"
									id="helmets"
									className="filter__checkbox"
								/>
								<label htmlFor="helmets" className="filter__item_label">
									Cricket helmet
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={category.includes("pads")}
									onChange={() =>
										dispatch({ type: "CATEGORY", payload: "pads" })
									}
									type="checkbox"
									id="pads"
									className="filter__checkbox"
								/>
								<label htmlFor="pads" className="filter__item_label">
									Cricket pad
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={category.includes("bags")}
									onChange={() =>
										dispatch({ type: "CATEGORY", payload: "bags" })
									}
									type="checkbox"
									id="bags"
									className="filter__checkbox"
								/>
								<label htmlFor="bags" className="filter__item_label">
									Cricket bag
								</label>
							</li>
						</ul>
					</section>
					<section className="filter__section">
						<h3 className="h5 filter__head">Rating</h3>
						<ul className="filter__items">
							<li className="filter__list">
								<input
									checked={4 === rating}
									onChange={() => dispatch({ type: "RATING", payload: 4 })}
									type="radio"
									className="filter__radio"
									name="star_ratings"
									id="rating4"
								/>
								<label htmlFor="rating4" className="filter__item_label">
									4 Stars and above
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={3 === rating}
									onChange={() => dispatch({ type: "RATING", payload: 3 })}
									type="radio"
									className="filter__radio"
									name="star_ratings"
									id="rating3"
								/>
								<label htmlFor="rating3" className="filter__item_label">
									3 Stars and above
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={2 === rating}
									onChange={() => dispatch({ type: "RATING", payload: 2 })}
									type="radio"
									className="filter__radio"
									name="star_ratings"
									id="rating2"
								/>
								<label htmlFor="rating2" className="filter__item_label">
									2 Stars and above
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={1 === rating}
									onChange={() => dispatch({ type: "RATING", payload: 1 })}
									type="radio"
									className="filter__radio"
									name="star_ratings"
									id="rating1"
								/>
								<label htmlFor="rating1" className="filter__item_label">
									1 Stars and above
								</label>
							</li>
						</ul>
					</section>
					<section className="filter__section">
						<h3 className="h5 filter__head">Sort By</h3>
						<ul className="filter__items">
							<li className="filter__list">
								<input
									checked={sortByPrice === "ASCENDING"}
									onChange={() =>
										dispatch({ type: "SORT_BY_PRICE", payload: "ASCENDING" })
									}
									type="radio"
									className="filter__radio"
									id="filter1"
									name="sort_by"
								/>
								<label htmlFor="filter1" className="filter__item_label">
									Price - Low to High
								</label>
							</li>
							<li className="filter__list">
								<input
									checked={sortByPrice === "DESCENDING"}
									onChange={() =>
										dispatch({ type: "SORT_BY_PRICE", payload: "DESCENDING" })
									}
									type="radio"
									className="filter__radio"
									id="filter2"
									name="sort_by"
								/>
								<label htmlFor="filter2" className="filter__item_label">
									Price - High to Low
								</label>
							</li>
						</ul>
					</section>
				</div>
			</form>
		</aside>
	);
};

import "./Filters.css";
export const Filters = () => {
	return (
		<aside className="aside aside--products">
			<form action="post" className="filter">
				<header className="filter__header">
					<h3 className="h5 filter__head">Filters</h3>
					<input type="reset" value="Clear All" className="filter--reset" />
				</header>

				<section className="filter__section">
					<h3 className="h5 filter__head">Price</h3>

					<ul className="range__head">
						<li className="range__amount">500</li>
						<li className="range__amount">1500</li>
						<li className="range__amount">2500</li>
					</ul>

					<input
						type="range"
						min="500"
						max="2500"
						defaultValue="1500"
						className="range__sliders"
					/>
				</section>
				<section className="filter__section">
					<h3 className="h5 filter__head">Category</h3>

					<ul className="filter__items">
						<li className="filter__list">
							<input
								type="checkbox"
								id="category1"
								className="filter__checkbox"
							/>
							<label htmlFor="category1" className="filter__item_label">
								Cricket Bats
							</label>
						</li>
						<li className="filter__list">
							<input
								type="checkbox"
								id="category2"
								className="filter__checkbox"
							/>
							<label htmlFor="category2" className="filter__item_label">
								Cricket Clothwears
							</label>
						</li>
						<li className="filter__list">
							<input
								type="checkbox"
								id="category3"
								className="filter__checkbox"
							/>
							<label htmlFor="category3" className="filter__item_label">
								Cricket Bats
							</label>
						</li>
					</ul>
				</section>
				<section className="filter__section">
					<h3 className="h5 filter__head">Rating</h3>
					<ul className="filter__items">
						<li className="filter__list">
							<input
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
			</form>
		</aside>
	);
};

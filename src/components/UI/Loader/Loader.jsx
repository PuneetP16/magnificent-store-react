import "./Loader.css";
import {
	ballLoader,
	ballLoaderwp,
	primaryBallLoader,
	primaryLoader,
} from "../../../data/image/productImages";

export const Loader = ({ children, modalHeading, modalActionFunc }) => {
	return (
		<div className="modal_container" style={{ display: "flex" }}>
			<article className="modal">
				<header className="modal__header">
					<div className="loader_wrapper flex-center">
						<img
							src={primaryLoader}
							alt="loader"
							className="image--responsive image--round"
						/>
					</div>
				</header>
				{children}
				<p className="modal-description"></p>
			</article>
		</div>
	);
};
 
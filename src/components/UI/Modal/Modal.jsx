import { useModal } from "../../../contexts";
import "./Modal.css";

export const Modal = ({ modalClass, children }) => {
	const { setModal } = useModal();
	const hideModal = (e) => {
		if (e.target.classList.contains("modal__wrapper")) {
			setModal(false);
		}
	};
	return (
		<div
			className={`${
				modalClass ? modalClass : "modal__wrapper backdrop-blur"
			} modal__wrapper_center_child`}
			// onClick={hideModal} kept for development purpose
		>
			{children}
		</div>
	);
};

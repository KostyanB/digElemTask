import disableScroll from '../helpers/disableScroll';
import validateForm from '../form/validateForm';

const openPopup = overlay => {
	overlay.classList.add('popup__overlay-open');

  disableScroll();
  validateForm();
};
export default openPopup;
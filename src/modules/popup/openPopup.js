import disableScroll from '../helpers/disableScroll';
import validForm from '../form/validForm';

const openPopup = overlay => {
	overlay.classList.add('popup__overlay-open');

  disableScroll();
  validForm();
};
export default openPopup;
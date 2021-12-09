import disableScroll from '../helpers/disableScroll';

const openPopup = overlay => {
	overlay.classList.add('popup__overlay-open');

  disableScroll();
};
export default openPopup;
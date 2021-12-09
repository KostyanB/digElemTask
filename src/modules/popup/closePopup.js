import enableScroll from '../helpers/enableScroll';

const closePopup = overlay => {
  overlay.classList.remove('popup__overlay-open');
  enableScroll();
};
export default closePopup;
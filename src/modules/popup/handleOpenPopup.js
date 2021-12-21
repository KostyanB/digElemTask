import openPopup from './openPopup';
import closePopup from './closePopup';

const handleOpenPopup = () => {
  let targetPopup;

  const checkTarget = elem => {
    const isBtnClose = elem.classList.contains('popup__close');
    const isOverlay = elem.classList.contains('popup__overlay');
    const isBtnLetsTalk = elem.classList.contains('lets-talk__btn');

    if (isBtnClose) {
      targetPopup = elem.closest('.popup__overlay');
      closePopup(targetPopup);
    } else if (isOverlay) {
      targetPopup = elem;
      closePopup(targetPopup);
    } else if (isBtnLetsTalk) {
      targetPopup = document.getElementById('send-popup');
      openPopup(targetPopup);
    } else {
      return;
    }
  };

  document.addEventListener('click', event => checkTarget(event.target));

  document.addEventListener('keydown', event => {
    const isEscape = event.repeat === false && event.code === 'Escape';

    if (isEscape) closePopup(targetPopup);
  });
};
export default handleOpenPopup;
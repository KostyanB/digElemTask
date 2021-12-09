import openPopup from './openPopup';
import closePopup from './closePopup';

const handleOpenPopup = () => {
  let targetPopup;

  const checkTarget = elem => {
    if (elem.classList.contains('popup__close')) {
      // клик по button close
      targetPopup = elem.closest('.popup__overlay');
      closePopup(targetPopup);
    } else if (elem.classList.contains('popup__overlay')) {
      // клик по overlay
      targetPopup = elem;
      closePopup(targetPopup);
    } else if (elem.classList.contains('lets-talk__btn')) {
      //  клик по button let's talk
      targetPopup = document.getElementById('send-popup');
      openPopup(targetPopup);
    } else {
      return;
    }
  };

  document.addEventListener('click', e => checkTarget(e.target));

  document.addEventListener('keydown', e => {
    (e.repeat === false && e.code === 'Escape') && closePopup(targetPopup);
  });
};
export default handleOpenPopup;
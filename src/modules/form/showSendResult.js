import openPopup from '../popup/openPopup';
import closePopup from '../popup/closePopup';
import env from '../../env.json';

const showSendResult = (status, text) => {
  const messagePopup = document.getElementById('message-popup');
  const popupMessage = document.querySelector('.popup__message');

  popupMessage.textContent = text || 'Your message successfully sent';

  const showMessage = () => {
    openPopup(messagePopup);
    setTimeout(() => {
      closePopup(messagePopup);
      popupMessage.classList.remove('error-send');
    }, env.autoclose);
  };

  if (!status) popupMessage.classList.add('error-send');

  showMessage();
};
export default showSendResult;
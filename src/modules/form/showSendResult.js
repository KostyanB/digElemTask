import openPopup from '../popup/openPopup';
import closePopup from '../popup/closePopup';

const showSendResult = (status, text) => {
  const messagePopup = document.getElementById('message-popup');
  const popupMessage = document.querySelector('.popup__message');

  popupMessage.textContent = text || 'Your message successfully sent';

  const showMessage = () => {
    openPopup(messagePopup);
    setTimeout(() => {
      closePopup(messagePopup);
      popupMessage.classList.remove('error-send');
    }, 5000);
  };

  if (!status) popupMessage.classList.add('error-send');

  showMessage();
};
export default showSendResult;
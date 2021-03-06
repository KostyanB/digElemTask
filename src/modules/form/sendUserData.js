import env from '../../env.json';
import showSendResult from './showSendResult';
import closePopup from '../popup/closePopup';

const sendUserData = async form => {
  const formData = new FormData(form);

  try {
    const response = await fetch(env.backend, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) throw new Error(`Server error`);

    form.reset();
    showSendResult(true);
  } catch (err) {
    showSendResult(false, `Sorry, error: ${err.message}`);
  } finally {
    closePopup(form.closest('.popup__overlay'));
  }
};
export default sendUserData;
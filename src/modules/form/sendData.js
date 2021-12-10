import env from '../../env.json';
import showSendResult from './showSendResult';
import closePopup from '../popup/closePopup';

const sendData = async form => {
  const body = new FormData(form);

  try {
    const response = await fetch(env.backend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) throw new Error(`Server error`);

    form.reset();
    showSendResult(true);
  } catch (err) {
    showSendResult(false, err.message);
  } finally {
    closePopup(form.closest('.popup__overlay'));
  }
};
export default sendData;
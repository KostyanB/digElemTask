import sendData from './sendData';
import validForm from './validForm';

const handleForm = () => {
  const form = document.forms.popup__form;


  const sendForm = (e) => {
    e.preventDefault();
    sendData(form);
  };

  form.addEventListener('submit', sendForm);
  form.addEventListener('change', validForm);
  form.addEventListener('input', validForm);
  form.addEventListener('paste', validForm);
};
export default handleForm;
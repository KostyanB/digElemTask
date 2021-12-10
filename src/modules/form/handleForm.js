import sendData from './sendData';
import validForm from './validForm';

const handleForm = () => {
  const form = document.forms.popup__form;

  const sendForm = (e) => {
    e.preventDefault();
    sendData(form);
  };

  form.addEventListener('submit', sendForm);
  form.addEventListener('change', e => validForm(e.target));
  form.addEventListener('input', e => validForm(e.target));
  form.addEventListener('paste', e => validForm(e.target));
};
export default handleForm;
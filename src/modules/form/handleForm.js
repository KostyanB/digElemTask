import sendUserData from './sendUserData';
import validateForm from './validateForm';

const handleForm = () => {
  const form = document.forms.popup__form;


  const sendForm = (e) => {
    e.preventDefault();
    sendUserData(form);
  };

  form.addEventListener('submit', sendForm);
  form.addEventListener('change', validateForm);
  form.addEventListener('input', validateForm);
  form.addEventListener('paste', validateForm);
};
export default handleForm;
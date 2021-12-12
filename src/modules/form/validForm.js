import { validMessageField, validNameField, validEmailField } from './validInputs';

const checkObj = {
  nameCheck: false,
  emailCheck: false,
  msgCheck: false,
};

const handleSubmitBtn = () => {
  const formButton = document.querySelector('.form__submit');
  if (Object.values(checkObj).every((item) => item)) {
    formButton.removeAttribute('disabled');
  } else {
    formButton.setAttribute('disabled', true);
  }
};

const validForm = () => {
  const form = document.forms.popup__form;

  [...form].slice(0, form.length - 1).forEach(item => {
    if (item.name === 'form__msg') checkObj.msgCheck = validMessageField(item);
    if (item.name === 'form__name') checkObj.nameCheck = validNameField(item);
    if (item.name === 'form__email') checkObj.emailCheck = validEmailField(item);
  });

  handleSubmitBtn();
};
export default validForm;
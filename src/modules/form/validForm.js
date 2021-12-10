import { validMessageField, validNameField, validEmailField } from './validInputs';

const checkObj = {
  nameCheck: false,
  emailCheck: false,
  msgCheck: false,
};

const handleSubmitBtn = () => {
  const formButton = document.querySelector('.form__button');
  if (Object.values(checkObj).every((item) => item)) {
    formButton.removeAttribute('disabled');
  } else {
    formButton.setAttribute('disabled', true);
  }
};

const validForm = target => {
  if (target.name === 'form__msg') checkObj.msgCheck = validMessageField(target);
  if (target.name === 'form__name') checkObj.nameCheck = validNameField(target);
  if (target.name === 'form__email') checkObj.emailCheck = validEmailField(target);

  handleSubmitBtn();
};
export default validForm;
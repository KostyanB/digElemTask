import { validateMessageField, validateUserNameField, validateEmailField } from './validateInputs';

const validateForm = () => {
  const checkObj = {
    nameCheck: false,
    emailCheck: false,
    msgCheck: false,
  };

  const form = document.forms.popup__form;
  const formButton = form[form.length - 1];

  const selectValidFunction = input => {
    switch (input.name) {
      case 'form__msg':
        checkObj.msgCheck = validateMessageField(input);
        break;
      case 'form__name':
        checkObj.nameCheck = validateUserNameField(input);
        break;
      case 'form__email':
        checkObj.emailCheck = validateEmailField(input);
        break;
      default:
        return;
    }
  };

  const handleSubmitBtn = () => {
    if (Object.values(checkObj).every((item) => item)) {
      formButton.removeAttribute('disabled');
    } else {
      formButton.setAttribute('disabled', true);
    }
  };

  const handleFormInputsValidation = () => {
    [...form].slice(0, form.length - 1).forEach(item => {
      selectValidFunction(item);
      handleSubmitBtn();
    });
  }

  handleFormInputsValidation();
};
export default validateForm;
export const validateUserNameField = elem => {
  const user = elem.value.replace(/\s+/g, ' ');

  if (user.length === 0) {
    elem.value = '';
    return false;
  } else {
    elem.value = user;

    if (user.length < 3) {
      return false;
    } else {
      return true;
    }
  }
};

export const validateEmailField = elem => {
  elem.value = elem.value.replace(/[а-яёА-ЯЁ\s+]/g, '');
  const emailChecker = /^[\w\-\.\!\~\*\']+@[\w\-\.\!\~\*\']+(\.[a-z]{2,})$/;

  if (!emailChecker.test(elem.value)) {
    return false;
  } else {
    return true;
  }
};

export const validateMessageField = elem => {
  const changedSymbols = [' ', '-', ',', ';', ':', '.'];
  const changeRegExp = [/\s+/gm, /-+/gm, /,+/gm, /;+/gm, /:+/gm, /\.+/gm];

  changedSymbols.forEach((item, i) => {
    elem.value = elem.value.replace(changeRegExp[i], item);
  });

  if (elem.value === ' ' || elem.value === '') {
    elem.value = '';
    return false;
  } else {
    return true;
  }
};
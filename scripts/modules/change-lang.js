import keyboardLayoutUkraine from './keyboard-in-ua.js';
import keyboardLayoutEnglish from './keyboard-in-en.js';

// let language = JSON.parse(localStorage.getItem('keyboardLanguage'));
let language;
if (!language) language = keyboardLayoutEnglish;

function changeLanguage(currentLanguage) {
  const updateLanguage =
    currentLanguage === keyboardLayoutEnglish
      ? keyboardLayoutUkraine
      : keyboardLayoutEnglish;
  // localStorage.setItem('keyboardLanguage', JSON.stringify(updateLanguage));
  language = updateLanguage;
  console.log(language);

  return updateLanguage;
}

function checkLanguage() {
  const keyboardLanguage = Array.isArray(language[0][0]) ? 'En' : 'Ua';
  return keyboardLanguage;
}

export { language, changeLanguage, checkLanguage };

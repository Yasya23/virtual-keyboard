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
  return updateLanguage;
}

export { language, changeLanguage };

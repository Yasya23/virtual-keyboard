import keyboardLayoutUkraine from './keyboard-in-ua.js';
import keyboardLayoutEnglish from './keyboard-in-en.js';

function changeLanguage(currentLanguage) {
  const updateLanguage =
    currentLanguage === keyboardLayoutEnglish
      ? keyboardLayoutUkraine
      : keyboardLayoutEnglish;
  localStorage.setItem('keyboardLanguage', JSON.stringify(updateLanguage));
  return updateLanguage;
}

export default changeLanguage;

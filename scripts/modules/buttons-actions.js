import keyboardLayoutUkraine from './keyboard-in-ua.js';
import keyboardLayoutEnglish from './keyboard-in-en.js';

function changeLanguage(language) {
  return (language =
    language === keyboardLayoutEnglish
      ? keyboardLayoutUkraine
      : keyboardLayoutEnglish);
}

export default changeLanguage;

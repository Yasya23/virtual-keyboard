import keyboardLayoutUkraine from './keyboard-in-ua.js';
import keyboardLayoutEnglish from './keyboard-in-en.js';

// let language = JSON.parse(localStorage.getItem('keyboardLanguageSave'));
let language;
if (!language) language = keyboardLayoutEnglish;
let keyboardLanguage = 'En';

function changeLanguage(currentLanguage) {
  const updateLanguage = currentLanguage === keyboardLayoutEnglish
    ? (keyboardLayoutUkraine, (keyboardLanguage = 'Ua'))
    : (keyboardLayoutEnglish, (keyboardLanguage = 'En'));
  // localStorage.setItem('keyboardLanguageSave', JSON.stringify(updateLanguage));
  language = updateLanguage;
  return updateLanguage;
}

function checkLanguage() {
  return keyboardLanguage;
}

function returnLanguage() {
  return language;
}

export { returnLanguage, changeLanguage, checkLanguage };

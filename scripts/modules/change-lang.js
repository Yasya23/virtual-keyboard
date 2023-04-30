import keyboardLayoutUkraine from './keyboard-in-ua.js';
import keyboardLayoutEnglish from './keyboard-in-en.js';

let language = JSON.parse(localStorage.getItem('keyboardLanguageSave'));
if (!language) language = keyboardLayoutEnglish;

function changeLanguage(currentLanguage) {
  const updateLanguage = currentLanguage === keyboardLayoutEnglish
    ? keyboardLayoutUkraine
    : keyboardLayoutEnglish;
  localStorage.setItem('keyboardLanguageSave', JSON.stringify(updateLanguage));
  language = updateLanguage;
  return updateLanguage;
}

function checkLanguage() {
  return language[4][1] === 'EN' ? 'En' : 'Ua';
}

function returnLanguage() {
  return language;
}

export { returnLanguage, changeLanguage, checkLanguage };

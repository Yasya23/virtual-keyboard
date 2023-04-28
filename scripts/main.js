import keyboardLayoutEnglish from './modules/keyboard-in-en.js';
import createPageStructure from './modules/page-structure.js';
import createKeyboard from './modules/create-keyboard.js';
import changeLanguage from './modules/buttons-actions.js';

let language = JSON.parse(localStorage.getItem('keyboardLanguage'));
if (!language) language = keyboardLayoutEnglish;

document.addEventListener('click', function (event) {
  const id = event.target.getAttribute('data-id');
  if (id === 'Fn') {
    language = changeLanguage(language);
    console.log(language);
    init(language);
  }
});

const pressedBtn = new Set();

document.addEventListener('keydown', function (event) {
  pressedBtn.add(event.key);
  if (pressedBtn.has('Control') && pressedBtn.has('Alt')) {
    event.preventDefault();
    language = changeLanguage(language);
    init(language);
  }
});

document.addEventListener('keyup', function (event) {
  pressedBtn.delete(event.key); // remove the key code or key name from the Set
});

function init(lang) {
  createPageStructure();
  createKeyboard(lang);
}

init(language);

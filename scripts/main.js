import keyboardLayoutEnglish from './modules/keyboard-in-en.js';
import createPageStructure from './modules/page-structure.js';
import createKeyboard from './modules/create-keyboard.js';
import changeLanguage from './modules/buttons-actions.js';
let language = keyboardLayoutEnglish;

document.addEventListener('click', function (event) {
  const id = event.target.getAttribute('data-id');
  if (id === 'Fn') {
    language = changeLanguage(language);
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
  // if (event.key === 'Control' && event.key === 'Alt') {
  //   console.log(1);
  // }
  // document.querySelectorAll('.button').forEach((el) => {
  //   if (el.getAttribute('data-id') === event.key) {
  //     console.log(event.key, el.getAttribute('data-id'));
  //   }
  // });
});

document.addEventListener('keyup', function (event) {
  pressedBtn.delete(event.key); // remove the key code or key name from the Set
});

function init(lang) {
  createPageStructure();
  createKeyboard(lang);
}

init(language);

import createPageStructure from './modules/page-structure.js';
import createKeyboard from './modules/create-keyboard.js';
import showTextInTextearea from './modules/textarea-actions.js';
import { language, changeLanguage } from './modules/change-lang.js';
import { buttons } from './modules/keyboard-in-en.js';

console.log(language);

let pressedBtn = [];

document.addEventListener('click', function (event) {
  const id = event.target.getAttribute('data-id');
  if (id) {
    if (!buttons.includes(id)) {
      showTextInTextearea(event, id);
      pressedBtn.push(id);
      // document.querySelector(`${id}`).classList.add('button-press');
    }

    if (id === 'Fn') {
      createKeyboard(changeLanguage(language));
    }
  }
});

document.addEventListener('keydown', function (event) {
  // event.preventDefault();

  if (!buttons.includes(event.key)) showTextInTextearea(event, event.key);

  if (event.key === 'Shift' || event.key === 'Alt') {
    pressedBtn.push(event.code);
  } else {
    pressedBtn.push(event.key);
  }

  if (
    pressedBtn.includes('Control') &&
    (pressedBtn.includes('AltLeft') || pressedBtn.includes('AltRight'))
  ) {
    createKeyboard(changeLanguage(language));
  }

  highlighteButtons();
});

function highlighteButtons() {
  document.querySelectorAll('.button').forEach((el) => {
    const element =
      el.getAttribute('data-id') === pressedBtn[0] ||
      el.getAttribute('data-id') === pressedBtn[1];
    if (element) el.classList.add('button-press');
  });
}

document.addEventListener('keyup', function () {
  pressedBtn = [];
  document
    .querySelectorAll('.button-press')
    .forEach((el) => el.classList.remove('button-press'));
});

function init(lang) {
  createPageStructure();
  createKeyboard(lang);
}

init(language);

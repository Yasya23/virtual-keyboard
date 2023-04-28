import createPageStructure from './modules/page-structure.js';
import createKeyboard from './modules/create-keyboard.js';
import { language, changeLanguage } from './modules/change-lang.js';

document.addEventListener('click', function (event) {
  const id = event.target.getAttribute('data-id');
  if (id === 'Fn') {
    init(changeLanguage(language));
  }
});

let pressedBtn = [];

document.addEventListener('keydown', function (event) {
  if (event.key === 'Shift' || event.key === 'Alt') {
    pressedBtn.push(event.code);
  } else {
    pressedBtn.push(event.key);
  }

  if (
    pressedBtn.includes('Control') &&
    (pressedBtn.includes('AltLeft') || pressedBtn.includes('AltRight'))
  ) {
    init(changeLanguage(language));
  }

  highlighteButtons();

  console.log(pressedBtn);
});

function highlighteButtons() {
  document.querySelectorAll('.button').forEach((el) => {
    const element =
      el.getAttribute('data-id') === pressedBtn[0] ||
      el.getAttribute('data-id') === pressedBtn[1];
    if (element) el.classList.add('button-press');
  });
}

document.addEventListener('keyup', function (event) {
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

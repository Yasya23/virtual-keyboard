import createPageStructure from './modules/page-structure.js';
import createKeyboard from './modules/create-keyboard.js';
import showTextInTextearea from './modules/textarea-actions.js';
import { returnLanguage, changeLanguage } from './modules/change-lang.js';
import { buttons } from './modules/keyboard-in-en.js';
import { returnIsShift, updateIsShift } from './modules/buttons-actions.js';

// console.log(language);

const pressedBtn = [];

document.addEventListener('click', (event) => {
  const id = event.target.getAttribute('data-id');
  if (id) {
    if (!buttons.includes(id)) {
      showTextInTextearea(event, id);
      pressedBtn.push(id);
      // document.querySelector(`${id}`).classList.add('button-press');
    }

    if (id === 'Fn') {
      createKeyboard(changeLanguage(returnLanguage()));
    }
  }
});

function toggleClassWhenShiftPress() {
  document
    .querySelectorAll('.button-value')
    .forEach((el) => el.classList.toggle('button-value-none'));
  document
    .querySelectorAll('.button-letters')
    .forEach((el) => el.classList.toggle('uppercase'));
}

function highlighteButtons() {
  document.querySelectorAll('.button').forEach((el) => {
    const element = el.getAttribute('data-id');
    if (element === pressedBtn[0] || element === pressedBtn[1]) el.classList.add('button-press');
  });
}

document.addEventListener('keydown', (event) => {
  // event.preventDefault();

  if (!buttons.includes(event.key)) showTextInTextearea(event, event.key);
  if (event.key === 'Shift') {
    updateIsShift(true);
    toggleClassWhenShiftPress();
  }

  if (event.key === 'Shift' || event.key === 'Alt') {
    pressedBtn.push(event.code);
  } else {
    pressedBtn.push(event.key);
  }

  if (pressedBtn.includes('Control') && (pressedBtn.includes('AltLeft') || pressedBtn.includes('AltRight'))) {
    createKeyboard(changeLanguage(returnLanguage()));
  }

  highlighteButtons();
});

document.addEventListener('keyup', (event) => {
  document.querySelectorAll('.button-press').forEach((el) => el.classList.remove('button-press'));
  if (event.key === 'Shift' && returnIsShift() === true) {
    updateIsShift(false);
    toggleClassWhenShiftPress();
  }
});

function init(lang) {
  createPageStructure();
  createKeyboard(lang);
}

init(returnLanguage());

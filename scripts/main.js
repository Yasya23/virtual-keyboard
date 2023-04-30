import createPageStructure from './modules/page-structure.js';
import createKeyboard from './modules/create-keyboard.js';
import { showTextInTextearea, actionsWithButtonsTextarea } from './modules/textarea-actions.js';
import { returnLanguage, changeLanguage } from './modules/change-lang.js';
import {
  returnIsShift, updateIsShift, returnIsCapsLock, updateIsCapsLock,
} from './modules/is-buttons.js';
import buttons from './not-show-buttons.js';

let pressedBtn = [];

function lettersFontCase() {
  document.querySelectorAll('.button-letters')
    .forEach((el) => el.classList.toggle('uppercase'));
  document.querySelectorAll('.button-value')
    .forEach((el) => el.classList.toggle('uppercase'));
}

function toggleClassWhenShiftPress() {
  document.querySelectorAll('.button-value')
    .forEach((el) => el.classList.toggle('button-value-none'));
  lettersFontCase();
}

function highlighteButtons() {
  document.querySelectorAll('.button').forEach((el) => {
    const element = el.getAttribute('data-id');
    if (element === pressedBtn[0] || element === pressedBtn[1]) {
      el.classList.add('button-press');
    }
  });
}

function removeButtonshighlighte() {
  document.querySelectorAll('.button-press')
    .forEach((el) => {
      if (returnIsShift() && (el.getAttribute('data-id') === 'ShiftLeft'
        || el.getAttribute('data-id') === 'ShiftRight')) {
        return;
      }
      if (returnIsCapsLock() && el.getAttribute('data-id') === 'CapsLock') {
        return;
      }
      el.classList.remove('button-press');
    });
}

function capsLockClicked(id) {
  const element = document.querySelector(`[data-id="${id}"]`);
  if (element) {
    element.classList.toggle('button-press');
    lettersFontCase();
    const isElement = returnIsCapsLock();
    updateIsCapsLock(!isElement);
  }
}

function init(language) {
  createPageStructure();
  createKeyboard(language);
}

init(returnLanguage());

document.addEventListener('click', (event) => {
  const parentElement = event.target.closest('[data-id]');
  const { id } = parentElement?.dataset ?? {};
  if (id) {
    if (!buttons.includes(id)) showTextInTextearea(event, id);
    if (id === 'Fn') createKeyboard(changeLanguage(returnLanguage()));
    if (id === 'CapsLock') capsLockClicked(id);
    if (id === 'Space') actionsWithButtonsTextarea('Space');
    if (id === 'Enter') actionsWithButtonsTextarea('Enter');
    if (id === 'Backspace') actionsWithButtonsTextarea('Backspace');
  }
});

document.addEventListener('keyup', (event) => {
  pressedBtn = [];
  if (event.key === 'Shift' && returnIsShift()) {
    updateIsShift(false);
    toggleClassWhenShiftPress();
  }
  if (event.key === 'CapsLock' && returnIsCapsLock()) {
    updateIsCapsLock(false);
    lettersFontCase();
  }
  if (event.code === 'Space') actionsWithButtonsTextarea('Space');
  if (event.code === 'Enter') actionsWithButtonsTextarea('Enter');
  if (event.code === 'Backspace') actionsWithButtonsTextarea('Backspace');
  removeButtonshighlighte();
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  if (event.key === 'Shift') {
    updateIsShift(true);
    toggleClassWhenShiftPress();
  }
  if (event.code === 'CapsLock') {
    updateIsCapsLock(true);
    lettersFontCase();
  }
  if (!buttons.includes(event.key)) showTextInTextearea(event, event.code);

  pressedBtn.push(event.code);

  if (
    pressedBtn.includes('ControlLeft') && (pressedBtn.includes('AltLeft') || pressedBtn.includes('AltRight'))
  ) {
    createKeyboard(changeLanguage(returnLanguage()));
  }
  highlighteButtons();
});

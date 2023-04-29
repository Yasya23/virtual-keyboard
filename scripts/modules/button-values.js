import { checkLanguage } from './change-lang.js';
import { keys } from './keyboard-in-ua.js';

const classes = [
  'button',
  'button button-meduim content-right-side',
  'button button-meduim content-left-side',
  'button button-large',
  'button button-arrow',
  'button button-arrow button-arrow-top',
  'button-text',
];

function addButtonValues(value, index, buttonType) {
  if (buttonType === 'simpleButton') return simpleButton(value, index);
  if (buttonType === 'arrows') return arrowsButtons();
  if (buttonType === 'buttonWithTwoValues') return buttonWithTwoValues(value);
}

function simpleButton(value, index) {
  const keyboardLanguage = checkLanguage();

  if (value === 'Backspace') return ['&#x232b;', 'Backspace', classes[1]];
  if (value === 'Tab') return ['&#x21e5;', 'Tab', classes[2]];
  if (value === 'CapsLock') return ['&#x21ea;', 'CapsLock', classes[2]];
  if (value === 'Enter') return ['&#x21a9;', 'Enter', classes[1]];
  if (value === 'ShiftLeft' || value === 'ShiftRight')
    return ['&#x21e7;', value, index < 2 ? classes[2] : classes[1]];
  if (value === 'EN' || value === 'UA') return [value, 'Fn', classes[0]];
  if (value === ' ') return [' ', ' ', classes[3]];

  return keyboardLanguage === 'En'
    ? [value, value, classes[0]]
    : createUaSimpleButtons(value);
}

function arrowsButtons() {
  const arrows = ['&#x25C0;', '&#x25B2;', '&#x25BC;', '&#x25B6;'];
  const left = [arrows[0], 'ArrowLeft', classes[4]];
  const up = [arrows[1], 'ArrowUp', classes[5]];
  const down = [arrows[2], 'ArrowDown', classes[4]];
  const right = [arrows[3], 'ArrowRight', classes[4]];
  return [left, up, down, right];
}

function buttonWithTwoValues(value) {
  const keyboardLanguage = checkLanguage();

  switch (value[1]) {
    case 'Control':
      return [value[0], 'control', value[1], value[1], classes[0], classes[6]];
    case 'AltLeft':
    case 'AltRight':
      return [value[0], 'option', value[1], value[1], classes[0], classes[6]];
    case 'MetaLeft':
    case 'MetaRight':
      return [value[0], 'command', value[1], value[1], classes[0], classes[6]];
    default:
      return keyboardLanguage === 'En'
        ? [value[0], value[1], value[1], value[0], classes[0]]
        : createUaButtonWithTwoValues(value);
  }
}

function createUaSimpleButtons(value) {
  return (keys[value] || [value, value]).concat(classes[0]);
}

function createUaButtonWithTwoValues(value) {
  return [value[0], value[1], value[1], value[0], classes[0]];
}

export default addButtonValues;

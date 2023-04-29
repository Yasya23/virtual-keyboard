import { checkLanguage } from './change-lang.js';

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
  if (value[1] === 'Control') {
    return [value[0], 'control', value[1], value[1], classes[0], classes[6]];
  }
  if (value[1] === 'AltLeft' || value[1] === 'AltRight') {
    return [value[0], 'option', value[1], value[1], classes[0], classes[6]];
  }
  if (value[1] === 'MetaLeft' || value[1] === 'MetaRight') {
    return [value[0], 'command', value[1], value[1], classes[0], classes[6]];
  }
  return [value[0], value[1], value[1], value[0], classes[0]];
}

function createUaSimpleButtons(value) {
  if (value === '&#92;') return ['&#92;', '§', classes[0]];
  if (value === 'й') return ['й', 'q', classes[0]];
  if (value === 'ц') return ['ц', 'w', classes[0]];
  if (value === 'у') return ['у', 'e', classes[0]];
  if (value === 'к') return ['к', 'r', classes[0]];
  if (value === 'е') return ['е', 't', classes[0]];
  if (value === 'н') return ['н', 'y', classes[0]];
  if (value === 'г') return ['г', 'u', classes[0]];
  if (value === 'ш') return ['ш', 'i', classes[0]];
  if (value === 'щ') return ['щ', 'o', classes[0]];
  if (value === 'з') return ['з', 'p', classes[0]];
  if (value === 'х') return ['х', '[', classes[0]];
  if (value === 'ї') return ['ї', ']', classes[0]];
  if (value === 'ф') return ['ф', 'a', classes[0]];
  if (value === 'і') return ['і', 's', classes[0]];
  if (value === 'в') return ['в', 'd', classes[0]];
  if (value === 'а') return ['а', 'f', classes[0]];
  if (value === 'п') return ['п', 'g', classes[0]];
  if (value === 'р') return ['р', 'h', classes[0]];
  if (value === 'о') return ['о', 'j', classes[0]];
  if (value === 'л') return ['л', 'k', classes[0]];
  if (value === 'д') return ['д', 'l', classes[0]];
  if (value === 'ж') return ['ж', ';', classes[0]];
  if (value === 'є') return ['є', "'", classes[0]];

  if (value === 'ґ') return ['ґ', '`', classes[0]];
  if (value === 'я') return ['я', 'z', classes[0]];
  if (value === 'ч') return ['ч', 'x', classes[0]];
  if (value === 'с') return ['с', 'c', classes[0]];
  if (value === 'м') return ['м', 'v', classes[0]];
  if (value === 'и') return ['и', 'b', classes[0]];
  if (value === 'т') return ['т', 'n', classes[0]];
  if (value === 'ь') return ['ь', 'm', classes[0]];
  if (value === 'б') return ['б', ',', classes[0]];
  if (value === 'ю') return ['ю', '.', classes[0]];
  if (value === '.') return ['.', '&#47;', classes[0]];

  // return [value, value, classes[0]];
}

export default addButtonValues;

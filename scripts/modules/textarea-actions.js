import { checkLanguage } from './change-lang.js';
import isShift from '../main.js';

function insertTextAtCursor(textareaElement, text) {
  let newText = text;
  const textarea = textareaElement;
  if (isShift) newText = newText.toUpperCase();
  const { selectionStart: cursorPosition, value: currentValue } = textarea;
  const prefix = currentValue.slice(0, cursorPosition);
  const suffix = currentValue.slice(cursorPosition);
  textarea.value = prefix + newText + suffix;
  textarea.setSelectionRange(
    cursorPosition + newText.length,
    cursorPosition + newText.length,
  );
}

function keyboardInUkraine(key, lowerecaseKey, textarea) {
  // console.log(key);
  const keysEn = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    '|',
    '?',
    '>',
    '<',
    '~',
    '{',
    '}',
    '"',
    ':',
  ];
  const keysUa = [
    '!',
    '"',
    '№',
    ';',
    '%',
    ':',
    '?',
    '*',
    '(',
    ')',
    '_',
    '+',
    '₴',
    '.',
    'ю',
    'б',
    'ґ',
    'х',
    'ї',
    'є',
    'ж',
  ];

  if (!keysEn.includes(key)) {
    // console.log(1);
    // const element = document.querySelector(`[data-id='${lowerecaseKey}']`);
    // insertTextAtCursor(textarea, element.textContent);
  } else if (keysEn.includes(key)) {
    const keyNumber = keysEn.indexOf(key);
    return insertTextAtCursor(textarea, keysUa[keyNumber]);
  }
}

function showTextInTextearea(event, key) {
  const textarea = document.querySelector('textarea');
  const keyboardLanguage = checkLanguage();

  if (key) {
    event.preventDefault();
    const lowerecaseKey = isShift ? key.toLowerCase() : key;
    if (keyboardLanguage === 'Ua') {
      keyboardInUkraine(key, lowerecaseKey, textarea);
    } else {
      insertTextAtCursor(textarea, key);
    }
    textarea.focus();
  }
}

export default showTextInTextearea;

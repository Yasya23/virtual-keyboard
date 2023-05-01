import { returnIsCapsLock, returnIsShift } from './is-true-buttons.js';

function changeTextAtCursor(text) {
  const textarea = document.querySelector('.textarea');
  let newText = text;
  if (returnIsShift() || returnIsCapsLock()) newText = newText.toUpperCase();
  if (returnIsShift() && returnIsCapsLock()) newText = newText.toLowerCase();
  const { selectionStart: cursorPosition, value: currentValue } = textarea;
  const prefix = currentValue.slice(0, cursorPosition);
  const suffix = currentValue.slice(cursorPosition);
  textarea.value = prefix + newText + suffix;
  textarea.setSelectionRange(
    cursorPosition + newText.length,
    cursorPosition + newText.length,
  );
}

function actionsWithButtonsTextarea(key) {
  const textarea = document.querySelector('.textarea');
  const { selectionStart, value } = textarea;
  if (key === 'Space') changeTextAtCursor(' ');
  if (key === 'Enter') changeTextAtCursor('\n');
  if (key === 'Backspace') {
    const prefix = value.slice(0, selectionStart - 1);
    const suffix = value.slice(selectionStart);
    textarea.value = prefix + suffix;
    textarea.setSelectionRange(
      selectionStart - 1,
      selectionStart - 1,
    );
  }
  if (key === 'Delete') {
    const prefix = value.slice(0, selectionStart);
    const suffix = value.slice(selectionStart + 1);
    textarea.value = prefix + suffix;
    textarea.setSelectionRange(
      selectionStart,
      selectionStart,
    );
  }
  if (key === 'Tab') changeTextAtCursor('\t');
  if (key === 'ArrowLeft') changeTextAtCursor('◀');
  if (key === 'ArrowRight') changeTextAtCursor('▶');
  if (key === 'ArrowUp') changeTextAtCursor('▲');
  if (key === 'ArrowDown') changeTextAtCursor('▼');
  textarea.focus();
}

function showTextInTextearea(event, key) {
  const textarea = document.querySelector('.textarea');
  if (key) {
    event.preventDefault();
    const element = document.querySelector(`[data-id="${key}"]`);
    const { children } = element;
    if (children.length > 0) {
      let text;
      Array.from(children).forEach((child) => {
        if (!child.classList.contains('button-value-none')) {
          text = child.textContent;
        }
      });
      changeTextAtCursor(text);
    } else {
      changeTextAtCursor(element.textContent.trim());
    }
    textarea.focus();
  }
}

export { showTextInTextearea, actionsWithButtonsTextarea };

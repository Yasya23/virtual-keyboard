import { returnIsCapsLock, returnIsShift } from './is-buttons.js';

// function insertTextAtCursor(textareaElement, text) {
//   let newText = text;
//   const textarea = textareaElement;
//   if (returnIsShift() || returnIsCapsLock()) newText = newText.toUpperCase();
//   const { selectionStart: cursorPosition, value: currentValue } = textarea;
//   const prefix = currentValue.slice(0, cursorPosition);
//   const suffix = currentValue.slice(cursorPosition);
//   textarea.value = prefix + newText + suffix;
//   textarea.setSelectionRange(
//     cursorPosition + newText.length,
//     cursorPosition + newText.length,
//   );
// }

function showTextInTextearea(event, key) {
  const textarea = document.querySelector('.textarea');
  if (key) {
    let result;
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
      result = text;
    } else {
      result = element.textContent.trim();
    }
    if (returnIsShift() || returnIsCapsLock()) result = result.toUpperCase();
    textarea.value += result;
    textarea.focus();
  }
}

function actionsWithButtonsTextarea(key) {
  const textarea = document.querySelector('.textarea');
  if (key === 'Space') textarea.value += ' ';
  if (key === 'Enter') textarea.value += '\n';
  textarea.focus();
}

export { showTextInTextearea, actionsWithButtonsTextarea };

function checkKeyboardButton(value, index) {
  const classes = [
    'button',
    'button button-meduim content-right-side',
    'button button-meduim content-left-side',
    'button button-large',
  ];

  if (value === 'Backspace') return ['&#x232b;', 'Backspace', classes[1]];
  if (value === 'Tab') return ['&#x21e5;', 'Tab', classes[2]];
  if (value === 'CapsLock') return ['&#x21ea;', 'CapsLock', classes[2]];
  if (value === 'Enter') return ['&#x21a9;', 'Enter', classes[1]];
  if (value === 'Shift')
    return ['&#x21e7;', 'Shift', index < 2 ? classes[2] : classes[1]];
  if (value === 'Fn') return ['Fn', 'Fn', classes[0]];
  if (value === ' ') return [' ', ' ', classes[3]];
  if (value === ' ') return [' ', ' ', classes[3]];

  return [value, value, classes[0]];
}

export default checkKeyboardButton;

const buttons = [
  // 'Tab',
  // 'CapsLock',
  // 'Backspace',
  // 'Enter',
  // 'Shift',
  // ' ',
  // 'Fn',
  'Control',
  'Meta',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
];

let isShift = false;
let isCapsLock = false;

function updateIsShift(value) {
  isShift = value;
}

function returnIsShift() {
  return isShift;
}

function updateIsCapsLock(value) {
  isCapsLock = value;
}

function returnIsCapsLock() {
  return isCapsLock;
}

export {
  updateIsShift, returnIsShift, updateIsCapsLock, returnIsCapsLock,
};

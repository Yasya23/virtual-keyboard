import addButtonValues from './button-values.js';

class Button {
  constructor(value) {
    this.value = value;
    this.valueTwo = null;
    this.id = value;
    this.class = null;
    this.extraClassOne = null;
    this.extraClassTwo = null;
  }

  checkValue() {
    if (this.value.length === 3) {
      const buttonsValues = addButtonValues(this.value, 'buttonWithTwoValues');
      [this.value, this.valueTwo, this.id, this.class,
        this.extraClassOne, this.extraClassTwo] = buttonsValues;
      return this.buttonWithTwoValues();
    }
    if (this.value.length === 4) {
      this.value = addButtonValues(this.value, 'arrows');
      return this.arrows();
    }
    const buttonsValues = addButtonValues(this.value, 'simpleButton');
    [this.value, this.id, this.class] = buttonsValues;
    return this.simpleButton();
  }

  simpleButton() {
    return ` <div class="${this.class}" data-id="${this.id}">${this.value}</div>`;
  }

  buttonWithTwoValues() {
    return ` <div class="${this.class}" data-id="${this.id}">
      <div class="${this.extraClassTwo}">${this.value}</div>
      <div class="${this.extraClassOne}">${this.valueTwo}</div>
    </div>`;
  }

  arrows() {
    const [leftId, upId, downId, rightId] = this.value.map((el) => el[1]);
    const [leftValue, upValue, downValue, rightValue] = this.value.map(
      (el) => el[0],
    );
    const [leftClasses, upClasses, downClasses, rightClasses] = this.value.map(
      (el) => el[2],
    );
    return `<div class="arrows">
      <div class="${leftClasses}" data-id="${leftId}">${leftValue}</div>
      <div>
        <div class="${upClasses}" data-id="${upId}">${upValue}</div>
        <div class="${downClasses}" data-id="${downId}">${downValue}</div>
      </div>
      <div class="${rightClasses}" data-id="${rightId}">${rightValue}</div>
    </div>`;
  }
}

function createButton(buttonValue) {
  const newButton = new Button(buttonValue);
  return newButton.checkValue();
}

function createRow(row) {
  const rowArray = row.map((button) => createButton(button))
    .join('');
  return `<div class="row">${rowArray}</div>`;
}

function createKeyboard(data) {
  const result = data.map((row) => createRow(row)).join('');
  document.querySelector('.container').innerHTML = result;
}

export default createKeyboard;

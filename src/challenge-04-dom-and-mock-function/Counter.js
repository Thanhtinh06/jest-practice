export class Counter {
  constructor({ selector, value = 0, onChange }) {
    this.el = document.querySelector(selector);
    this.value = value;
    this.onChange = onChange;
  }

  _handleChangeValue(action) {
    action === 'increase' ? this.value++ : this.value--;
    this._renderValue();
    this.onChange && this.onChange(this.value);
  }

  render() {
    const container = document.createElement('div');
    this.el.appendChild(container);

    container.innerHTML = `
        <button class="js-decrease-btn">▼</button>
        <span class="js-value"></span>
        <button class="js-increase-btn">▲</button>
    `;

    container
      .querySelector('.js-decrease-btn')
      .addEventListener(
        'click',
        this._handleChangeValue.bind(this, 'decrease')
      );

    container
      .querySelector('.js-increase-btn')
      .addEventListener(
        'click',
        this._handleChangeValue.bind(this, 'increase')
      );

    this.valueEl = container.querySelector('.js-value');
    this._renderValue();
  }

  _renderValue() {
    this.valueEl.textContent = this.value;
  }
}

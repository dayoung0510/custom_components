class A1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
    <div class="question flex-ver mg-t4 mg-b5">
    <div class="mg-r2">1. 성명</div>
    <div>
      <input type="text" class="lined-input" name="a1" required />
    </div>
  </div>
    `;
  }
}

window.customElements.define('a-1', A1);

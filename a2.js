class A2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
    <div class="question flex-ver mg-b5">
    <div class="mg-r2">2. 연락처</div>
    <div>
      <input type="text" class="lined-input" name="a2" required />
    </div>
  </div>
    `;
  }
}

window.customElements.define('a-2', A2);

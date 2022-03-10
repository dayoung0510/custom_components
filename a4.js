class A4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
    <div class="question">4. 연령을 선택해 주세요.</div>
    <div class="answer block">
      <label class="radio-label">
        <input
          class="radio-input"
          type="radio"
          name="a4"
          value="1"
          required
        />
        <span class="checkmark">1</span>
        <span class="text">20대 </span>
      </label>
      <label class="radio-label">
        <input class="radio-input" type="radio" name="a4" value="2" />
        <span class="checkmark">2</span>
        <span class="text">30대 </span>
      </label>
      <label class="radio-label">
        <input class="radio-input" type="radio" name="a4" value="3" />
        <span class="checkmark">3</span>
        <span class="text">40대 </span>
      </label>
      <label class="radio-label">
        <input class="radio-input" type="radio" name="a4" value="4" />
        <span class="checkmark">4</span>
        <span class="text">50대 이상 </span>
      </label>
    </div>
    `;
  }
}

window.customElements.define('a-4', A4);

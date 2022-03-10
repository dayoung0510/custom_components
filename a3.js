class A3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
    <div class="question">3. 성별을 선택해 주세요.</div>
    <div class="answer block">
      <label class="radio-label">
        <input
          class="radio-input"
          type="radio"
          name="a3"
          value="1"
          required
        />
        <span class="checkmark">1</span>
        <span class="text">남자</span>
      </label>
      <label class="radio-label">
        <input class="radio-input" type="radio" name="a3" value="2" />
        <span class="checkmark">2</span>
        <span class="text">여자</span>
      </label>
    </div>
    `;
  }
}

window.customElements.define('a-3', A3);

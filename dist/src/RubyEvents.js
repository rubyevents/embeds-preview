import { __decorate } from 'tslib'
import { html, css, LitElement } from 'lit'
import { property } from 'lit/decorators.js'
export class RubyEvents extends LitElement {
  constructor () {
    super(...arguments)
    this.header = 'Hey there'
    this.counter = 5
  }

  __increment () {
    this.counter += 1
  }

  render () {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `
  }
}
RubyEvents.styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--ruby-events-text-color, #000);
    }
  `
__decorate([
  property({ type: String })
], RubyEvents.prototype, 'header', void 0)
__decorate([
  property({ type: Number })
], RubyEvents.prototype, 'counter', void 0)
// # sourceMappingURL=RubyEvents.js.map

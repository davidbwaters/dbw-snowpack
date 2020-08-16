/*
 *  Components - Top Bar
 */
import { LitElement, html, css } from 'lit-element'

export class TopBar extends LitElement {

  static get styles() {

    return css`
      :host {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        position: fixed;
        width: 100%;
        z-index: 2;
      }
      ::slotted(a:not(:last-child)) {
        margin-right: 1rem;
      }
    `

  }

  render() {

    return html`
      <slot name="logo">
      </slot>
      <nav class="c-top-bar__nav">
        <slot name="link">
        </slot>
      </nav>
    `

  }

}

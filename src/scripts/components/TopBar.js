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
        padding: 1.5rem;
        position: fixed;
        width: 100%;
        z-index: 2;
      }
      .c-top-bar__nav {
        display: flex;
        flex-direction: column;
        font-size: 125%;
      }
      ::slotted([slot="logo"]) {
        height: 100%;
        width: 2rem;
      }
      ::slotted([slot="link"]) {
        text-align: center;
        width: 2rem;
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

/*
 *  Components - Top Bar
 */
import { LitElement, html, css } from 'lit-element'

export class GlitchImage extends LitElement {

  static get styles() {

    return css`
      :host {
        position: relative;
        width: var(--glitch-width);
        max-width: 400px;
        height: var(--glitch-height);
        max-height: calc(400px * 1.25);
        overflow: hidden;
        margin: 0 auto;
      }
      
      :host:hover {
        cursor: pointer;
      }
      
      .c-glitch__img {
        position: absolute;
        top: calc(-1 * var(--gap-vertical));
        left: calc(-1 * var(--gap-horizontal));
        width: calc(100% + var(--gap-horizontal) * 2);
        height: calc(100% + var(--gap-vertical) * 2);
        background: url(../img/1.jpg) no-repeat 50% 0;
        background-color: var(--blend-color-1);
        background-size: cover;
        transform: translate3d(0,0,0);
        background-blend-mode: var(--blend-mode-1);
      }

      .c-glitch--style-1 {
        --gap-horizontal: 20px;
        --gap-vertical: 2px;
        --time-anim: 2.25s;
        --blend-mode-1: none;
        --blend-mode-2: none;
        --blend-mode-3: none;
        --blend-mode-4: none;
        --blend-mode-5: none;
        --blend-color-1: transparent;
        --blend-color-2: transparent;
        --blend-color-3: transparent;
        --blend-color-4: transparent;
        --blend-color-5: transparent;
      }
      
      .c-glitch--style-2 {
        --gap-horizontal: 5px;
        --gap-vertical: 10px;
        --time-anim: 2s;
        --blend-mode-1: none;
        --blend-mode-2: none;
        --blend-mode-3: luminosity;
        --blend-mode-4: none;
        --blend-mode-5: none;
        --blend-color-1: transparent;
        --blend-color-2: transparent;
        --blend-color-3: #4d8c60;
        --blend-color-4: transparent;
        --blend-color-5: #c9b09a;
      }
      
      .c-glitch--style-3 {
        --gap-horizontal: 20px;
        --gap-vertical: 2px;
        --time-anim: 2.25s;
        --blend-mode-1: none;
        --blend-mode-2: none;
        --blend-mode-3: multiply;
        --blend-mode-4: none;
        --blend-mode-5: none;
        --blend-color-1: transparent;
        --blend-color-2: transparent;
        --blend-color-3: #af4563;
        --blend-color-4: transparent;
        --blend-color-5: transparent;
      }
      
      .c-glitch--style-4 {
        --gap-horizontal: 5px;
        --gap-vertical: 20px;
        --time-anim: 5s;
        --blend-mode-1: none;
        --blend-mode-2: exclusion;
        --blend-mode-3: hard-light;
        --blend-mode-4: overlay;
        --blend-mode-5: none;
        --blend-color-1: transparent;
        --blend-color-2: #52f1cd;
        --blend-color-3: #525df1;
        --blend-color-4: #f19b52;
        --blend-color-5: transparent;
      }
      
      .c-glitch--style-5 {
        --gap-horizontal: 50px;
        --gap-vertical: 100px;
        --time-anim: 2.25s;
        --blend-mode-1: none;
        --blend-mode-2: none;
        --blend-mode-3: none;
        --blend-mode-4: overlay;
        --blend-mode-5: overlay;
        --blend-color-1: transparent;
        --blend-color-2: transparent;
        --blend-color-3: transparent;
        --blend-color-4: #000;
        --blend-color-5: #8d16f2;
      }
      
      .c-glitch--style-6 {
        --gap-horizontal: 3px;
        --gap-vertical: 70px;
        --time-anim: 2.25s;
        --blend-mode-1: none;
        --blend-mode-2: none;
        --blend-mode-3: overlay;
        --blend-mode-4: none;
        --blend-mode-5: none;
        --blend-color-1: transparent;
        --blend-color-2: transparent;
        --blend-color-3: rgba(255,255,255,0.2);
        --blend-color-4: transparent;
        --blend-color-5: transparent;
      }
    `

  }

  static get properties() {

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

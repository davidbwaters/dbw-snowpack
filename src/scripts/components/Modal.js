/*
 *  Components - Modal
 */

import { LitElement, html, css } from 'lit-element'

export class Modal extends LitElement {

  static get styles() {

    return css`
      :root {
        --modal-transition-duration: var(--transition-duration);
      }

      .c-modal__content:not([open]) {
        display: none;
        visibility: hidden;
      }

      .c-modal__content {
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 9;
      }

    `

  }

  static get properties() {

    return {
      open: { type: Boolean, attribute: true }
    }

  }

  constructor() {

    super()

    this.open = false
    

  }

  _setOpen() {

    if (this.open && this.dialog) {

      this.dialog.showModal()

    }

  }

  _setClosed() {
    const styles = window.getComputedStyle(this)
    console.log(styles)
    this.removeAttribute('open')
    this.dialog.close()
  }

  update() {

    super.update()

    this._setOpen()

  }

  firstUpdated() {

    const target = this.dataset.modalTrigger
    const triggerSelector = 
      '[data-modal-target=' + target + ']'
    
    this.triggerEl = document.querySelector(
      triggerSelector
    )

    if (this.triggerEl) {

      this.triggerEl.addEventListener('click', (e) => {
        
        this.triggerEl.classList.add('is-expanded')
        
        this.setAttribute('open', '')

      })

    }

    this.dialog = this.shadowRoot.querySelector('dialog')

    this._setOpen()

  }

  render() {

    return html`
      <dialog class="c-modal__content">
        <button 
          class="c-modal__close-button"
          @click=${this._setClosed}
        >
          X
        </button>
        <slot>

        </slot>
      </dialog>
    `

  }

}

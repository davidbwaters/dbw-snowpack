/*
 *  Components - Glitch Image
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

      :host(.c-glitch-image--style-1) {
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
      
      :host(.c-glitch-image--style-2) {
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
      
      :host(.c-glitch-image--style-3) {
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
      
      :host(.c-glitch-image--style-4) {
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
      
      :host(.c-glitch-image--style-5) {
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
      
      :host(.c-glitch-image--style-6) {
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

      .c-glitch-image__image {
        background-blend-mode: var(--blend-mode-1);
        background-color: var(--blend-color-1);        
        background-position: 50% 0;
        background-repeat: no-repeat;
        background-size: cover;
        height: calc(100% + var(--gap-vertical) * 2);
        left: calc(-1 * var(--gap-horizontal));
        position: absolute;
        top: calc(-1 * var(--gap-vertical));
        transform: translate3d(0,0,0);        
        width: calc(100% + var(--gap-horizontal) * 2);
      }

      .glitch__img:nth-child(2) {
        background-color: var(--blend-color-2);
        background-blend-mode: var(--blend-mode-2);
      }

      .glitch__img:nth-child(3) {
        background-color: var(--blend-color-3);
        background-blend-mode: var(--blend-mode-3);
      }

      .glitch__img:nth-child(4) {
        background-color: var(--blend-color-4);
        background-blend-mode: var(--blend-mode-4);
      }

      .glitch__img:nth-child(5) {
        background-color: var(--blend-color-5);
        background-blend-mode: var(--blend-mode-5);
      }

      .glitch__img:nth-child(n+2) {
        opacity: 0;
      }

      .glitch:hover .glitch__img:nth-child(n+2) {
        opacity: 1;
      }

      .glitch:hover .glitch__img:nth-child(2) {
        transform: translate3d(var(--gap-horizontal),0,0);
        animation: glitch-anim-1-horizontal var(--time-anim) infinite linear alternate;
      }

      .glitch:hover > .glitch__img:nth-child(3) {
        transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0);
        animation: glitch-anim-2-horizontal var(--time-anim) infinite linear alternate;
      }

      .glitch:hover > .glitch__img:nth-child(4) {
        transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
        animation: glitch-anim-3-horizontal var(--time-anim) infinite linear alternate;
      }

      /* Hover flash animation on last image */
      .glitch:hover > .glitch__img:nth-child(5) {
        animation: glitch-anim-flash 0.5s steps(1,end) infinite;
      }

      @keyframes glitch-anim-1-horizontal {
        0% { 
          -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
        }
        10% {
          -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
          clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
        }
        20% {
          -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
          clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
        }
        30% {
          -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
          clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
        }
        40% {
          -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
          clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
        }
        50% {
          -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
          clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        }
        60% {
          -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
          clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
        }
        70% {
          -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
          clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        }
        80% {
          -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
          clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        }
        90% {
          -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
          clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        }
        100% {
          -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
          clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
        }
      }

      @keyframes glitch-anim-2-horizontal {
        0% { 
          -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
          clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
        }
        15% {
          -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
          clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        }
        22% {
          -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
          clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
        }
        31% {
          -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
          clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        }
        45% {
          -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
          clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
        }
        51% {
          -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
          clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
        }
        63% {
          -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
          clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        }
        76% {
          -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
          clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
        }
        81% {
          -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
          clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
        }
        94% {
          -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
          clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
        }
        100% {
          -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
          clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
        }
      }

      @keyframes glitch-anim-3-horizontal {
        0% { 
          -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
          clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
        }
        5% {
          -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
          clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
        }
        10% {
          -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
          clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
        }
        25% {
          -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
          clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        }
        27% {
          -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
          clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
        }
        30% {
          -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
          clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
        }
        33% {
          -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
          clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
        }
        37% {
          -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
          clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
        }
        40% {
          -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
          clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        }
        45% {
          -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
          clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
        }
        50% {
          -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
          clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
        }
        53% {
          -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
          clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
        }
        57% {
          -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
          clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
        }
        60% {
          -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
          clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
        }
        65% {
          -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
          clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
        }
        70% {
          -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
          clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
        }
        73% {
          -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
          clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        }
        80% {
          -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
          clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
        }
        100% {
          -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
          clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
        }
      }

      @keyframes glitch-anim-flash {
        0% { 
          opacity: 0.2; 
          transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
        }
        33%, 100% { 
          opacity: 0;
          transform: translate3d(0,0,0);
        }
      }      
    `

  }

  static get properties() {

    return {
      glitch: { type: String, attribute: true },
      src: { type: String, attribute: true }
    }

  }

  constructor() {

    super()

    this.glitch = '1'

  }

  connectedCallback() {

    this.classList.add('c-glitch-image--style-' + this.glitch)

  }

  render() {

    return html`
      <img 
        src=#{this.src} 
        class="c-glitch-image__image}"
        style="background-image: url(${this.src});"
      />
      <img 
        src=#{this.src} 
        class="c-glitch-image__image}"
        style="background-image: url(${this.src});"
      />
      <img 
        src=#{this.src} 
        class="c-glitch-image__image}"
        style="background-image: url(${this.src});"
      />
      <img 
        src=#{this.src} 
        class="c-glitch-image__image}"
        style="background-image: url(${this.src});"
      />
      <img 
        src=#{this.src} 
        class="c-glitch-image__image}"
        style="background-image: url(${this.src});"
      />
    `

  }

}

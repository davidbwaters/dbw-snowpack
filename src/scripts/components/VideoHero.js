import { LitElement, html, css } from 'lit-element'

export class VideoHero extends LitElement {

  static get styles() {

    return css`
      :host {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        overflow: hidden;
        position: relative;
      }
      .c-video-hero__inner {
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        box-shadow: inset 0 0 1em 1em rgba(0,0,0,.1);
        height: 100%;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
      }
      ::slotted(video) {
        height: 100%;
        left: 50%;
        min-width: 100%;
        min-height: 56.25vw;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 177.77777778vh;
      }
      .c-video-hero__content::slotted(*) {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 1;
      }
      .c-video-hero__overlay {
        height: 100%;
        position: absolute;
        width: 100%;
      }
      .c-video-hero__noise {
        mix-blend-mode: hard-light;
        opacity: .2;
        position: absolute;
      }
      :host([blur]) .c-video-hero__inner,
      .c-video-hero--blur  .c-video-hero__inner {
        filter: blur(3px);
      }
      :host([opaque]) .c-video-hero__inner,
      .c-video-hero--opaque .c-video-hero__video {
        opacity: 0.6
      }
      :host(.c-video-hero--scanlines) 
      .c-video-hero__overlay {
        background-image: linear-gradient(
          0deg,
          rgba(0,0,0,0.05) 0%,
          rgba(0,0,0,0.05) 50%,
          rgba(255,255,255,0.05) 50%,
          rgba(255,255,255,0.05) 100%
        );
        background-size: 4px 2px;
      }
    `

  }


  generateNoise() {

    let noise

    if (this.noise) {

      noise = html`
        <svg 
          class="c-video-hero__noise"
          height="100%"
          width="100%"
        >
          <filter 
            id='noise'
            x='0%' 
            y='0%' 
            width='100%' 
            height='100%'
          >
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8"
              numOctaves="1"
            />
          </filter>
          <rect 
            filter="url(#noise)"
            width='100%' 
            height='100%'
          />
        </svg>
      `

    }

    return noise

  }

  static get properties() {

    return {
      banner: { type: String, attribute: true },
      scanlines: { type: Boolean, attribute: true },
      noise: { type: Boolean, attribute: true },
      opaque: { type: Boolean, attribute: true }
    }

  }

  connectedCallback() {

    super.connectedCallback()

    const video = this.querySelector('video')
    video.muted = true
    video.autoplay = true
    video.loop = true

    if (this.banner) {

      this.style.backgroundImage = `url( ${this.banner} )`

    }

    if (this.scanlines) {

      this.classList.add('c-video-hero--scanlines')

    }

    if (this.opaque) {

      video.style.opacity = '.6'

    }

  }


  render() {

    return html`
      <span class="c-video-hero__inner">
        <slot name="video" class="c-video-hero__video">
        </slot>
      </span>
      <slot class="c-video-hero__content" name="content">
      </slot>
      <div class="c-video-hero__overlay"></div>
      ${this.generateNoise()}
    `

  }

}

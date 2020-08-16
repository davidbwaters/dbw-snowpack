import { LitElement, html, css } from 'lit-element'
import { Curtains } from 'curtainsjs'

const fragmentShader = `
  uniform float time;
  uniform float progress;
  uniform sampler2D texture1;
  uniform vec4 resolution;
  varying vec2 vUv;


  void main()	{
    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
    // newUV.x += 0.02*sin(newUV.y*20. + time);
    gl_FragColor = texture2D(texture1,newUV);
  }`

const vertexShader = `
  uniform float time;
  uniform float progress;
  uniform vec4 resolution;
  varying vec2 vUv;
  uniform sampler2D texture1;

  const float pi = 3.1415925;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
  }`

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
        width: 100%;
      }
      .c-video-hero__video {
        height: 100%;
        position: absolute;
        width: 100%;
      }
      .c-video-hero__canvas {
        height: 100%;
        position: absolute;
        width: 100%;
      }
      .c-video-hero__content {
        position: relative;
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
    `

  }

  static get properties() {

    return {
      banner: { type: String, attribute: true }
    }

  }

  firstUpdated() {

    super.firstUpdated()

    const video = this.querySelector('video')
    console.log(this.shadowRoot.querySelector('js-canvas'))
    const curtains = new Curtains({
      container: this.shadowRoot.querySelector('js-canvas'),
      watchScroll: false
    })

    const planeElement = this.shadowRoot
      .querySelector('js-plane')

    video.muted = true
    video.autoplay = true
    video.loop = true

  }


  render() {

    return html`
      <div class="c-video-hero__video js-plane">
        <slot name="video"></slot>
      </div>
      <canvas class="c-video-hero__canvas js-canvas">
      </canvas>
      <div class="c-video-hero__content">
        <slot name="content"></slot>
      </div>
      <div class="c-video-hero__overlay"></div>
    `

  }

}

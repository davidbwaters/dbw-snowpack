import { LitElement, html, css } from 'lit-element'
import { Curtains } from 'curtainsjs'
import { fragment, vertex } from '../shaders/warp.js'


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
      .c-video-hero__video video {
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

  constructor() {
    super()
  }

  firstUpdated() {

    super.firstUpdated()

    const lerp = (start, end, amt) => {
      return (1 - amt) * start + amt * end
    }

    const mousePosition = {
      x: 0,
      y: 0
    }

    const mouseLastPosition = {
      x: 0,
      y: 0
    }

    const deltas = {
      max: 0,
      applied: 0
    }
  
    function handleMovement(e, plane) {

      mouseLastPosition.x = mousePosition.x
      mouseLastPosition.y = mousePosition.y

      const mouse = {}

      if (e.targetTouches) {

        mouse.x = e.targetTouches[0].clientX
        mouse.y = e.targetTouches[0].clientY
      }
      
      else {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      mousePosition.x = lerp( 
        mousePosition.x, mouse.x, 0.3 
      )

      mousePosition.y = lerp( 
        mousePosition.y, mouse.y, 0.3 
      )

      console.log(mouse)
      
      let mouseCoords = plane.mouseToPlaneCoords(
        mousePosition.x, mousePosition.y
      )
      
      plane.uniforms.mousePosition.value = [
        mouseCoords.x, mouseCoords.y
      ]

      if (mouseLastPosition.x && mouseLastPosition.y) {

        let delta = Math.sqrt( 
          Math.pow(
            mousePosition.x - mouseLastPosition.x, 2
          ) + Math.pow(
            mousePosition.y - mouseLastPosition.y, 2
          )
        ) / 30

        delta = Math.min(4, delta)
        
        if (delta >= deltas.max) {
          deltas.max = delta;
        }

      }

    }

    const planeElement = this.shadowRoot
      .querySelector('.js-plane')

    const video = this.querySelector('video')

    video.muted = true
    video.loop = true
    video.autoplay = true

    planeElement.appendChild(video)

    const params = {
      vertexShader: vertex,
      fragmentShader: fragment,
      widthSegments: 20,
      heightSegments: 20,
      uniforms: {
        resolution: { 
          name: 'uResolution',
          type: '2f',
          value: [
            planeElement.clientWidth, 
            planeElement.clientHeight
          ]
        },
        time: {
          name: 'uTime',
          type: '1f',
          value: 0,
        },
        mousePosition: {
          name: 'uMousePosition',
          type: '2f',
          value: [
            mousePosition.x, 
            mousePosition.y
          ]
        },
        mouseMoveStrength: {
          name: 'uMouseMoveStrength',
          type: '1f',
          value: 0,
        }
      }
    }

    const containerElement = this.shadowRoot.querySelector('.js-canvas')

    const curtains = new Curtains({
      container: containerElement,
      watchScroll: false
    })

    curtains.onContextLost(function () {
      webGLCurtain.restoreContext()
    })

    const plane = curtains.addPlane(planeElement, params)

    plane.onReady(() => {

      plane.setPerspective(35)
      plane.playVideos()

      containerElement.addEventListener('mousemove',
        e => {
          handleMovement(e, plane);
        }
      )

      containerElement.addEventListener('touchmove',
        e => {
          handleMovement(e, plane);
        }
      )

    })

    plane.onRender(() => {

      plane.uniforms.time.value++

      deltas.applied += (deltas.max - deltas.applied) * 0.02
      deltas.max += (0 - deltas.max) * 0.01

      plane.uniforms.mouseMoveStrength.value =
        deltas.applied

    })

    plane.onAfterResize(function () {

      const planeBoundingRect = simplePlane.getBoundingRect()

      plane.uniforms.resolution.value = [
        planeBoundingRect.width, planeBoundingRect.height
      ]

    })

  }

  render() {

    return html`
      <div class='c-video-hero__video js-plane'>
      </div>
      <div class='c-video-hero__canvas js-canvas'>
      </div>
      <div class='c-video-hero__content'>
        <slot name='content'></slot>
      </div>
      <div class='c-video-hero__overlay'></div>
    `
  }

}

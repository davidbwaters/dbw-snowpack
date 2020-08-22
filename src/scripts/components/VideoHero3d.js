/*
import * as THREE from 'three/src/Three.js'

import RenderPass from 'three/examples/jsm/postprocessing/RenderPass'
import ShaderPass from 'three/examples/jsm/postprocessing/ShaderPass'

import { 
  EffectComposer,
  Pass
} from 'three/examples/jsm/postprocessing/EffectComposer'
*/

import { LitElement, html, css } from 'lit-element'

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.119.1/src/Three.js'

import { 
  EffectComposer,
  Pass
} from 'three/examples/jsm/postprocessing/EffectComposer'

import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/postprocessing/ShaderPass.js'
import { FilmPass } from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/postprocessing/FilmPass.js'
import colorShader from '../shaders/color.js'

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
        bottom: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        width: 1px;
      }
      .c-video-hero__canvas {
        opacity: 1;
        position: absolute;
      }
      .c-video-hero__content {
        position: relative;
        z-index: 2;
      }
      .c-video-hero__overlay {
        background-color: #1D1726;
        height: 100%;
        opacity: .5;
        position: absolute;
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      banner:  { type: String, attribute: true }
    }
  }

  firstUpdated() {

    super.firstUpdated()

    const scene = new THREE.Scene();
    const aspectRatio = window.innerWidth/window.innerHeight
    const camera = new THREE.PerspectiveCamera( 
      75, aspectRatio, 0.1, 1000 
    )
    
    const canvas = this.shadowRoot.querySelector('canvas')
    const renderer = new THREE.WebGLRenderer({'canvas': canvas})

    renderer.setSize( window.innerWidth, window.innerHeight )
    
    function onWindowResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener( 'resize', onWindowResize, false );

    const video = this.querySelector('video')
    video.muted = true
    video.autoplay = true
    video.loop = true
    
    const texture = new THREE.VideoTexture( video )

    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.format = THREE.RGBFormat

    const planeHeight = 10
    const planeWidth = aspectRatio * planeHeight
    const mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(planeWidth, planeHeight),
      new THREE.MeshBasicMaterial({ map: texture })
    )

    scene.add(mesh)
    camera.position.z = 5

    const dist = camera.position.z - mesh.position.z

    camera.fov = 2 * Math.atan(planeHeight / (2 * dist)) * (180 / Math.PI)
    camera.updateProjectionMatrix()

    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)

    composer.addPass(renderPass)

    const customPass = new ShaderPass(colorShader)
    customPass.renderToScreen = true
    composer.addPass(customPass)

    const filmPass = new FilmPass(
      0.2,    // noise intensity
      0.2,    // scanline intensity
      1200,    // scanline count
      false,  // grayscale
    )
    filmPass.renderToScreen = true
    composer.addPass(filmPass)

    function animate() {
      requestAnimationFrame( animate )
      composer.render()
    }
    animate()
  }


  render() {
    return html`
      <div  class="c-video-hero__video">
        <slot name="video"></slot>
      </div>
      <canvas class="c-video-hero__canvas">
      </canvas>
      <div class="c-video-hero__content">
        <slot name="content"></slot>
      </div>
      <div class="c-video-hero__overlay"></div>
    `;
  }
}

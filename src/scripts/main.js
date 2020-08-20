/*
 *  Scripts - Main
 */

import { html, render } from 'lit-html'

import { VideoHero } from './components/VideoHero3d.js'
import { TopBar } from './components/TopBar.js'

customElements.define('c-top-bar', TopBar)
customElements.define('c-video-hero', VideoHero)

render(
  html`
    <c-top-bar>
      <a slot="logo" href="/">
        <img src="images/logo.svg" alt="logo" />
      </a>
      <a slot="link" href="#about">About</a>
      <a slot="link" href="#work">Work</a>
    </c-top-bar>
    <c-video-hero halftone>
      <video slot="video" class="u-filter-trippy">
        <source
          src="videos/mold-hq-mono.mp4"
          type="video/mp4"
        >
        <source 
          src="videos/mold-tint.webm"
          type="video/webm"
        >
      </video>
      <span slot="content">
        <div class="o-wrapper">
          <div class="o-layout o-layout--center">
            <div class="o-layout--cell u-5/6">
              <h1 class="u-text-accent">
              I Create Digital Solutions to Promote Growth.
              </h1>
              <h3 class="u-text-medium">
                Hello, I’m David. I am a graphic designer, 
                illustrator, and frontend web developer with
                a passion for clean, functional design.
              </h3>
              </span>
            </div>
          </div>
        </div>
      </span>
    </c-video-hero>
  `, document.body
)

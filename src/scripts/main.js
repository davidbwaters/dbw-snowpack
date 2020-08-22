/*
 *  Scripts - Main
 */

import { html, render } from 'lit-html'

import { VideoHero } from './components/VideoHero3d.js'
import { TopBar } from './components/TopBar.js'
import WebFont from 'webfontloader'
import Scrambler from 'scrambling-letters'

WebFont.load({
  classes: false,
  custom: {
    families: [
      'aileron'
    ],
    urls: ['https://use.typekit.net/rcd4wxv.css'],
    timeout: 4000
  }
})

Scrambler({
  target: '[data-scrambler]',
  speed: 50
})

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
          src="videos/mold-hq-tint.mp4"
          type="video/mp4"
        >
        <source 
          src="videos/mold-hq-tint.webm"
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
              <h3 class="u-text-large">
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

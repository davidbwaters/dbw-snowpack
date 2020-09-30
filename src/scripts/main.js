/*
 *  Scripts - Main
 */

import { html, render } from 'lit-html'
import WebFont from 'webfontloader'
import Scrambler from 'scrambling-letters'
import { TopBar } from './components/TopBar.js'

WebFont.load({
  classes: false,
  custom: {
    families: [
      'gangster_grotesklight',
      'gangster_groteskregular',
      'league_monoregular',
      'synebold',
      'syneextrabold'
    ],
    timeout: 4000
  }
})

Scrambler({
  target: '[data-scrambler]',
  speed: 50
})

customElements.define('c-top-bar', TopBar)

render(
  html`
    <c-top-bar>
      <a slot="logo" href="/">
        <img src="images/Logo.svg" alt="logo" />
      </a>
      <a slot="link" href="mailto:mrdavidbwaters@gmail.com">
        <i class="c-icon c-icon--mail"></i>
      </a>
      <a slot="link" href="https://twitter.com/dbwatersdesigns">
        <i class="c-icon c-icon--twitter"></i>
      </a>
      <a slot="link" href="https://dribbble.com/dbwatersdesigns">
        <i class="c-icon c-icon--dribbble"></i>
      </a>
      <a slot="link" href="https://github.com/davidbwaters">
        <i class="c-icon c-icon--github"></i>
      </a>
    </c-top-bar>
    <div class="c-hero">
      <div class="c-hero__upper">
        <div class="c-hero__paint"></div>
        <div class="c-hero__tagline">
        <div class="c-hero__tagline-main">
            Artist & <br/>
            Designer & <br/>
            Developer
          </div>
          <div class="c-hero__tagline-accent-1">
            Artist & <br/>
            Designer & <br/>
            Developer
          </div>
          <div class="c-hero__tagline-accent-2">
            Artist & <br/>
            Designer & <br/>
            Developer
          </div>
          <div class="c-hero__tagline-accent-3">
            Artist & <br/>
            Designer & <br/>
            Developer
          </div>
        </div>
        <div class="c-hero__name">David B. Waters</div>
        <div class="c-hero__location">Charleston, SC</div>
      </div>
      <div class="c-hero__lower">

      </div>
    </div>
  `, document.body
)

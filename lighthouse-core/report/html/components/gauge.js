/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const template = document.createElement('template');
template.innerHTML = `
  <style>
  :host {

    /* Palette using Material Design Colors
    * https://www.materialui.co/colors */
   --color-amber-50: #FFF8E1;
   --color-blue-200: #90CAF9;
   --color-blue-900: #0D47A1;
   --color-blue-A700: #2962FF;
   --color-cyan-500: #00BCD4;
   --color-gray-100: #F5F5F5;
   --color-gray-200: #E0E0E0;
   --color-gray-400: #BDBDBD;
   --color-gray-50: #FAFAFA;
   --color-gray-500: #9E9E9E;
   --color-gray-600: #757575;
   --color-gray-700: #616161;
   --color-gray-800: #424242;
   --color-gray-900: #212121;
   --color-gray: #000000;
   --color-green-700: #018642;
   --color-green: #0CCE6B;
   --color-orange-700: #D04900;
   --color-orange: #FFA400;
   --color-red-700: #EB0F00;
   --color-red: #FF4E42;
   --color-teal-600: #00897B;
   --color-white: #FFFFFF;

   /* Context-specific colors */
   --color-average-secondary: var(--color-orange-700);
   --color-average: var(--color-orange);
   --color-fail-secondary: var(--color-red-700);
   --color-fail: var(--color-red);
   --color-informative: var(--color-blue-900);
   --color-pass-secondary: var(--color-green-700);
   --color-pass: var(--color-green);
   --color-hover: var(--color-gray-50);

   /* Component variables */
   --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));
   --audit-explanation-line-height: 16px;
   --audit-group-margin-bottom: 40px;
   --audit-group-padding-vertical: 8px;
   --audit-margin-horizontal: 5px;
   --audit-padding-vertical: 8px;
   --category-header-font-size: 20px;
   --category-padding: 40px;
   --chevron-line-stroke: var(--color-gray-600);
   --chevron-size: 12px;
   --default-padding: 12px;
   --env-item-background-color: var(--color-gray-100);
   --env-item-font-size: 28px;
   --env-item-line-height: 36px;
   --env-item-padding: 10px 0px;
   --env-name-min-width: 220px;
   --footer-padding-vertical: 16px;
   --gauge-circle-size-big: 112px;
   --gauge-circle-size: 80px;
   --gauge-label-font-size-big: 28px;
   --gauge-label-font-size: 20px;
   --gauge-label-line-height-big: 36px;
   --gauge-label-line-height: 26px;
   --gauge-percentage-font-size-big: 38px;
   --gauge-percentage-font-size: 28px;
   --gauge-wrapper-width: 148px;
   --header-line-height: 24px;
   --highlighter-background-color: var(--report-text-color);
   --icon-square-size: calc(var(--score-icon-size) * 0.88);
   --image-preview-size: 48px;
   --metric-toggle-lines-fill: #7F7F7F;
   --metrics-toggle-background-color: var(--color-gray-200);
   --plugin-badge-background-color: var(--color-white);
   --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);
   --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);
   --plugin-icon-size: 65%;
   --pwa-icon-margin: 0 6px 0 -2px;
   --pwa-icon-size: var(--topbar-logo-size);
   --report-background-color: #fff;
   --report-border-color-secondary: #ebebeb;
   --report-font-family-monospace: 'Roboto Mono', 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
   --report-font-family: Roboto, Helvetica, Arial, sans-serif;
   --report-font-size: 16px;
   --report-line-height: 24px;
   --report-min-width: 400px;
   --report-text-color-secondary: var(--color-gray-800);
   --report-text-color: var(--color-gray-900);
   --report-width: calc(60 * var(--report-font-size));
   --score-container-padding: 8px;
   --score-icon-background-size: 24px;
   --score-icon-margin-left: 4px;
   --score-icon-margin-right: 12px;
   --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);
   --score-icon-size: 12px;
   --scores-container-padding: 20px 0 20px 0;
   --scorescale-height: 6px;
   --scorescale-width: 18px;
   --section-padding-vertical: 12px;
   --snippet-background-color: var(--color-gray-50);
   --snippet-color: var(--color-gray-800);
   --sparkline-height: 5px;
   --stackpack-padding-horizontal: 10px;
   --sticky-header-background-color: var(--report-background-color);
   --table-higlight-background-color: hsla(0, 0%, 75%, 0.1);
   --tools-icon-color: var(--color-gray-600);
   --tools-icon-size: var(--score-icon-background-size);
   --topbar-background-color: var(--color-gray-100);
   --topbar-height: 32px;
   --topbar-logo-size: 24px;
   --topbar-padding: 0 8px;
   --toplevel-warning-padding: 22px;








    --color-amber-50: #FFF8E1;
    --color-blue-200: #90CAF9;
    --color-blue-900: #0D47A1;
    --color-blue-A700: #2962FF;
    --color-cyan-500: #00BCD4;
    --color-gray-100: #F5F5F5;
    --color-gray-200: #E0E0E0;
    --color-gray-400: #BDBDBD;
    --color-gray-50: #FAFAFA;
    --color-gray-500: #9E9E9E;
    --color-gray-600: #757575;
    --color-gray-700: #616161;
    --color-gray-800: #424242;
    --color-gray-900: #212121;
    --color-gray: #000000;
    --color-green-700: #018642;
    --color-green: #0CCE6B;
    --color-orange-700: #D04900;
    --color-orange: #FFA400;
    --color-red-700: #EB0F00;
    --color-red: #FF4E42;
    --color-teal-600: #00897B;
    --color-white: #FFFFFF;
    --color-average-secondary: var(--color-orange-700);
    --color-average: var(--color-orange);
    --color-fail-secondary: var(--color-red-700);
    --color-fail: var(--color-red);
    --color-informative: var(--color-blue-900);
    --color-pass-secondary: var(--color-green-700);
    --color-pass: var(--color-green);
    --color-hover: var(--color-gray-50);

    --gauge-circle-size-big: 112px;
    --gauge-circle-size: 80px;
    --gauge-label-font-size-big: 28px;
    --gauge-label-font-size: 20px;
    --gauge-label-line-height-big: 36px;
    --gauge-label-line-height: 26px;
    --gauge-percentage-font-size-big: 38px;
    --gauge-percentage-font-size: 28px;
    --gauge-wrapper-width: 148px;
    --header-line-height: 24px;
  }

.lh-gauge__wrapper--pass {
  color: var(--color-pass);
  fill: var(--color-pass);
  stroke: var(--color-pass);
}

.lh-gauge__wrapper--average {
  color: var(--color-average);
  fill: var(--color-average);
  stroke: var(--color-average);
}

.lh-gauge__wrapper--fail {
  color: var(--color-fail);
  fill: var(--color-fail);
  stroke: var(--color-fail);
}

.lh-gauge {
  stroke-linecap: round;
  width: var(--gauge-circle-size);
  height: var(--gauge-circle-size);
}

.lh-category .lh-gauge {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

.lh-gauge-base {
    opacity: 0.1;
    stroke: var(--circle-background);
    stroke-width: var(--circle-border-width);
}

.lh-gauge-arc {
    fill: none;
    stroke: var(--circle-color);
    stroke-width: var(--circle-border-width);
    animation: load-gauge var(--transition-length) ease forwards;
    animation-delay: 250ms;
}

.lh-gauge__svg-wrapper {
  position: relative;
  height: var(--gauge-circle-size);
}
.lh-category .lh-gauge__svg-wrapper {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

/* The plugin badge overlay */
.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size);
  height: var(--plugin-badge-size);
  background-color: var(--plugin-badge-background-color);
  background-image: var(--plugin-icon-url);
  background-repeat: no-repeat;
  background-size: var(--plugin-icon-size);
  background-position: 58% 50%;
  content: "";
  position: absolute;
  right: -6px;
  bottom: 0px;
  display: block;
  z-index: 100;
  box-shadow: 0 0 4px rgba(0,0,0,.2);
  border-radius: 25%;
}
.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size-big);
  height: var(--plugin-badge-size-big);
}

@keyframes load-gauge {
  from { stroke-dasharray: 0 352; }
}

.lh-gauge__percentage {
  width: 100%;
  height: var(--gauge-circle-size);
  position: absolute;
  font-family: var(--report-font-family-monospace);
  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);
  line-height: 0;
  text-align: center;
  top: calc(var(--score-container-padding) + var(--gauge-circle-size) / 2);
}

.lh-category .lh-gauge__percentage {
  --gauge-circle-size: var(--gauge-circle-size-big);
  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);
}

.lh-gauge__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  padding: var(--score-container-padding);

  --circle-border-width: 8;
  --transition-length: 1s;

  /* Contain the layout style paint & layers during animation*/
  contain: content;
  will-change: opacity; /* Only using for layer promotion */
}

.lh-gauge__label {
  font-size: var(--gauge-label-font-size);
  line-height: var(--gauge-label-line-height);
  margin-top: 10px;
  text-align: center;
  color: var(--report-text-color);
}

/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */
.lh-category .lh-gauge__label {
  --gauge-label-font-size: var(--gauge-label-font-size-big);
  --gauge-label-line-height: var(--gauge-label-line-height-big);
  margin-top: 14px;
}
  </style>

  <a href="#" class="lh-gauge__wrapper">
    <!-- Wrapper exists for the ::before plugin icon. Cannot create pseudo-elements on svgs. -->
    <div class="lh-gauge__svg-wrapper">
      <svg viewBox="0 0 120 120" class="lh-gauge">
        <circle class="lh-gauge-base" r="56" cx="60" cy="60"></circle>
        <circle class="lh-gauge-arc" transform="rotate(-90 60 60)" r="56" cx="60" cy="60"></circle>
      </svg>
    </div>
    <div class="lh-gauge__percentage"></div>
    <div class="lh-gauge__label"></div>
  </a>
`;

const attributes = {
  score: '0.5',
  variant: 'pass',
  label: 'Lighthouse',
};

class LighthouseGaugeElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this._attributes = {...attributes};

    for (const key in Object.keys(attributes)) {
      const attributeName = /** @type {keyof typeof attributes} */ (key);
      Object.defineProperty(this, attributeName, {
        get: () => this._attributes[attributeName],
        set: value => this.setAttribute(attributeName, String(value)),
      });
    }

    this._render();
  }

  static get observedAttributes() {
    return Object.keys(attributes);
  }


  connectedCallback() {
    for (const attribute of this.attributes) {
      // @ts-ignore
      this[attribute.name] = attribute.nodeValue;
    }
  }

  /** @param {string} name @param {string} oldValue @param {string} newValue */
  attributeChangedCallback(name, oldValue, newValue) {
    if (!(name in attributes) || oldValue === newValue) return;

    // @ts-ignore
    this._attributes[name] = newValue;
    this._render();
  }

  _render() {
    const wrapper = this._shadowRoot.querySelector('.lh-gauge__wrapper');
    if (!wrapper) throw new Error('Impossible');
    wrapper.classList.add(`lh-gauge__wrapper--${this._attributes.variant}`);

    // Cast `null` to 0
    const numericScore = Number(this._attributes.score) || 0;
    const gauge = this._shadowRoot.querySelector('.lh-gauge');
    if (!gauge) throw new Error('Impossible');

    // 352 is ~= 2 * Math.PI * gauge radius (56)
    // https://codepen.io/xgad/post/svg-radial-progress-meters
    // score of 50: `stroke-dasharray: 176 352`;
    /** @type {?SVGCircleElement} */
    const gaugeArc = gauge.querySelector('.lh-gauge-arc');
    if (gaugeArc) {
      gaugeArc.style.strokeDasharray = `${numericScore * 352} 352`;
    }

    const scoreOutOf100 = Math.round(numericScore * 100);
    const percentageEl = this._shadowRoot.querySelector('.lh-gauge__percentage');
    if (!percentageEl) throw new Error('Impossible');
    percentageEl.textContent = scoreOutOf100.toString();
    if (this._attributes.score === 'null') {
      percentageEl.textContent = '?';
      // @ts-ignore
      percentageEl.title = 'Error';
    }

    const labelEl = this._shadowRoot.querySelector('.lh-gauge__label');
    if (!labelEl) throw new Error('Impossible');
    labelEl.textContent = this._attributes.label;
  }
}

// Allow Node require()'ing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LighthouseGaugeElement;
} else {
  // @ts-ignore
  self.LighthouseGaugeElement = LighthouseGaugeElement;
  window.customElements.define('lh-gauge', LighthouseGaugeElement);
}

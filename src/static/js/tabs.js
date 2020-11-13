"use strict";

class Tabs {
  constructor(container) {
    this.container  = container;
    this.links      = this.container.querySelectorAll('.js-tabs-link');
    this.contents   = this.container.querySelectorAll('.js-tabs-content');
    this.init();
  }

  init() {
    for (let [index, element] of this.links.entries()) {
      element.addEventListener('click', this.switchContent.bind(this));
    }
  }

  switchContent(e) {
    e.preventDefault();
    let target = (e.target).closest('.js-tabs-link'),
        targetAttr = target.getAttribute('data-content'),
        targetContent;

    if (target.classList.contains('is-active')) { return; }

    for (let [index, element] of this.contents.entries()) {
      let itemAttr = element.getAttribute('data-content');

      if (itemAttr == targetAttr) {
        targetContent = element;
      }
    }

    this.cleanTabs();
    target.classList.add('is-active');
    targetContent.classList.add('is-active');
  }

  cleanTabs() {
    for (let [index, element] of this.links.entries()) {
      element.classList.remove('is-active');
    }
    for (let [index, element] of this.contents.entries()) {
      element.classList.remove('is-active');
    }
  }
}

export default Tabs;

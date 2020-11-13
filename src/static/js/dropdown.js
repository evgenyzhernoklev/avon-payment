"use strict";

import $ from "jquery";

class Dropdowns {
  constructor() {
    this.DURATION = 400;
    this.body     = $('body');
    this.init();
  }

  init() {
    this.listenEvents();
  }

  listenEvents() {
    this.body.on('click', this._checkDropdown.bind(this));
  }

  _checkDropdown(e) {
    let $target = $(e.target);

    if (!$target.closest('.js-dropdown').length) {
      this._hideAllDropdowns();
    } else {
      let $link = $target.closest('.js-dropdown-link');

      if ($link.length) {
        if ($link.hasClass('is-active')) {
          this._hideAllDropdowns();
        } else {
          this._hideAllDropdowns();
          this._showDropdown($link);
        }
      }
    }
  }

  _hideAllDropdowns() {
    $('.js-dropdown-link').removeClass('is-active');
    $('.js-dropdown').removeClass('is-active')
      .find('.js-dropdown-content').stop().slideUp(this.DURATION);
  }

  _showDropdown($link) {
    $link.addClass('is-active')
      .closest('.js-dropdown').addClass('is-active')
      .find('.js-dropdown-content').stop().slideDown(this.DURATION);
  }
}

export default Dropdowns;

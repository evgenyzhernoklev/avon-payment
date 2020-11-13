"use strict";

import Dropdowns  from "../js/dropdown";
import Tabs       from "../js/tabs";
import pickmeup   from "pickmeup";

document.addEventListener('DOMContentLoaded', function () {
  new Dropdowns();

  for (let [key, element] of document.querySelectorAll('.js-tabs').entries()) {
    new Tabs(element);
  }

  for (let [key, element] of document.querySelectorAll('.js-button-history-back').entries()) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      window.history.back();
    });
  }

  for (let [key, element] of document.querySelectorAll('.js-button-print').entries()) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      window.print();
    });
  }

  let cardNumberInput = document.querySelector('.js-card-fieldNumber');
  for (let [key, element] of document.querySelectorAll('.js-card-item').entries()) {
    element.addEventListener('click', function() {
      cardNumberInput.value = this.textContent.trim();
      this.closest('.js-dropdown').querySelector('.js-dropdown-link').click();
    });
  }

  // strange localization according to great design
  pickmeup.defaults.locales['avon'] = {
    days:             ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort:        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin:          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    months:           ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort:      ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  };
  for (let [key, element] of document.querySelectorAll('.js-field-date-range').entries()) {
    pickmeup(element, {
      first_day:      0,
      format:         'd/m/Y',
      mode:           'range',
      hide_on_select: true,
      locale:         'avon'
    });
  }
});

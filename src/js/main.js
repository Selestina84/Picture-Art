import modals from './modules/modals';
import sliders from './modules/sliders';
import showMoreStyles from './modules/showMoreStyles';
import forms from './modules/forms';
import dragEndDrop from './modules/dragEndDrop';
import changeImage from './modules/changeImage';
import filter from './modules/filter';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import accordion from './modules/accordion';
import checkTextInputs from './modules/checkTextInputs';
import calcForm from './modules/calcForm';
import mask from './modules/mask';

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  modals();
  sliders('.feedback-slider-item','gorizontal','.main-prev-btn','.main-next-btn');
  sliders('.main-slider-item','vertical');
  showMoreStyles('.button-styles','.styles-2');
  forms();
  dragEndDrop();
  changeImage('.sizes-block');
  filter();
  burger('.burger-menu', '.burger');
  scrolling('.pageup');
  accordion('.accordion-heading');
  checkTextInputs('[name = "name"]');
  checkTextInputs('[name = "message"]');
  calcForm('#size', '#material', '#options', '.promocode', '.calc-price');
  mask('[name = "phone"]');
})
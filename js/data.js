'use strict';

(function () {
  var fadedMap = document.querySelector('.map--faded');
  var fadedForm = document.querySelector('.ad-form--disabled');
  var form = document.querySelector('.ad-form');
  var mapWight = document.querySelector('.map').offsetWidth;
  var pins = document.querySelector('.map__pins');
  var buttonMain = document.querySelector('.map__pin--main');
  var adressInp = document.querySelector('#address');
  var mapOverlay = document.querySelector('.map__overlay');
  var DIMENSIONS_IMG = 40;
  var selectType = document.querySelector('#type');
  var priceType = document.querySelector('#price');
  var selectTimeIn = document.querySelector('#timein');
  var selectTimeOut = document.querySelector('#timeout');
  var URL = 'https://js.dump.academy/keksobooking/data';
  var error = document.querySelector('#error');
  var mainBlock = document.querySelector('main');
  var cards = [];
  var housingType = document.querySelector('#housing-type');
  var fragObjPin = document.createDocumentFragment();

  window.data = {
    fadedMap: fadedMap,
    fadedForm: fadedForm,
    mapWight: mapWight,
    pins: pins,
    buttonMain: buttonMain,
    adressInp: adressInp,
    mapOverlay: mapOverlay,
    DIMENSIONS_IMG: DIMENSIONS_IMG,
    selectType: selectType,
    priceType: priceType,
    selectTimeIn: selectTimeIn,
    selectTimeOut: selectTimeOut,
    fragObjPin: fragObjPin,
    form: form,
    URL: URL,
    error: error,
    mainBlock: mainBlock,
    cards: cards,
    housingType: housingType
  };
})();

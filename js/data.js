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
  var DIMENSIONS_IMG_WIDTH = 45;
  var selectType = document.querySelector('#type');
  var priceType = document.querySelector('#price');
  var selectTimeIn = document.querySelector('#timein');
  var selectTimeOut = document.querySelector('#timeout');
  var URL_GET = 'https://js.dump.academy/keksobooking/data';
  var URL_POST = 'https://js.dump.academy/keksobooking';
  var error = document.querySelector('#error');
  var mainBlock = document.querySelector('main');
  var cards = [];
  var housingType = document.querySelector('#housing-type');
  var fragObjPin = document.createDocumentFragment();
  var pinCards = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  var templateCard = document.querySelector('#card');
  var map = document.querySelector('.map');
  var advertisingCards = templateCard.content.cloneNode(true);
  var popupCard = advertisingCards.querySelector('.popup');
  var closeAdvertisingCards = advertisingCards.querySelector('.popup__close');
  var inputRoomNumber = document.querySelector('#room_number');
  var inputCapacity = document.querySelector('#capacity');

  window.data = {
    fadedMap: fadedMap,
    fadedForm: fadedForm,
    mapWight: mapWight,
    pins: pins,
    buttonMain: buttonMain,
    adressInp: adressInp,
    mapOverlay: mapOverlay,
    DIMENSIONS_IMG: DIMENSIONS_IMG,
    DIMENSIONS_IMG_WIDTH: DIMENSIONS_IMG_WIDTH,
    selectType: selectType,
    priceType: priceType,
    selectTimeIn: selectTimeIn,
    selectTimeOut: selectTimeOut,
    fragObjPin: fragObjPin,
    form: form,
    URL_GET: URL_GET,
    URL_POST: URL_POST,
    error: error,
    mainBlock: mainBlock,
    cards: cards,
    housingType: housingType,
    pinCards: pinCards,
    // templateCard: templateCard,
    map: map,
    advertisingCards: advertisingCards,
    closeAdvertisingCards: closeAdvertisingCards,
    popupCard: popupCard,
    inputRoomNumber: inputRoomNumber,
    inputCapacity: inputCapacity,
  };
})();

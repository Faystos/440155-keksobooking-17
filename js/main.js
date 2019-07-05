'use strict';
var fadedMap = document.querySelector('.map--faded');
var fadedForm = document.querySelector('.ad-form--disabled');
var mapWight = document.querySelector('.map').offsetWidth;
var pins = document.querySelector('.map__pins');
var buttonMain = document.querySelector('.map__pin--main');
var adressInp = document.querySelector('#address');
var DIMENSIONS_IMG = 40;

// Кординаты главной метки
var buttonMainСoordinate = buttonMain.getBoundingClientRect();
adressInp.value = buttonMainСoordinate.left + ', ' + buttonMainСoordinate.top;
// *************************


// Генерация элементов на карте (pin)
var listResidentialObjects = [];
var listTypes = [
  'palace',
  'flat',
  'house',
  'bungalo'
];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (var i = 0; i <= 7; i++) {
  var prefixZeroImg = i < 9 ? 0 : '';
  var imgList = 'img/avatars/user' + prefixZeroImg + (i + 1) + '.png';
  var listType = listTypes[getRandomInt(0, 3)];
  var mapLocationX = getRandomInt(0 + DIMENSIONS_IMG / 2, mapWight - DIMENSIONS_IMG / 2);
  var mapLocationY = getRandomInt(130, 630);

  var author = {
    'avatar': imgList
  };

  var offer = {
    'type': listType
  };

  var locationMap = {
    'x': mapLocationX,
    'y': mapLocationY
  };

  var listResidentialObject = {
    'author': author,
    'offer': offer,
    'locationMap': locationMap
  };

  listResidentialObjects.push(listResidentialObject);
}

var fragObjPin = document.createDocumentFragment();
for (i = 0; i <= 7; i++) {
  var pin = document.createElement('button');
  var pinImg = document.createElement('img');
  pin.className = 'map__pin';
  pin.style.left = listResidentialObjects[i].locationMap.x + 'px';
  pin.style.top = listResidentialObjects[i].locationMap.y + 'px';
  pinImg.src = listResidentialObjects[i].author.avatar;
  pinImg.width = DIMENSIONS_IMG;
  pinImg.height = DIMENSIONS_IMG;
  pinImg.alt = 'заголовок объявления';
  pin.appendChild(pinImg);
  fragObjPin.appendChild(pin);
}

// pins.appendChild(fragObjPin);

// **********************************************************************

// Активация карты и меню формы

var onButtonMainClick = function () {
  fadedMap.classList.remove('map--faded');
  fadedForm.classList.remove('ad-form--disabled');
  pins.appendChild(fragObjPin);

};

buttonMain.addEventListener('click', onButtonMainClick);


// *************************************************************

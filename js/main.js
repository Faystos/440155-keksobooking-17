'use strict';
var fadedMap = document.querySelector('.map--faded');
var fadedForm = document.querySelector('.ad-form--disabled');
var mapWight = document.querySelector('.map').offsetWidth;
var pins = document.querySelector('.map__pins');
var buttonMain = document.querySelector('.map__pin--main');
var adressInp = document.querySelector('#address');
var DIMENSIONS_IMG = 40;

var selectType = document.querySelector('#type');
var priceType = document.querySelector('#price');

var selectTimeIn = document.querySelector('#timein');
var selectTimeOut = document.querySelector('#timeout');


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

// Кординаты главной метки

var getCoords = function (elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

};

var buttonMainСoordinate = getCoords(buttonMain);
adressInp.value = Math.round(buttonMainСoordinate.left) + ', ' + Math.round(buttonMainСoordinate.top);
// *************************

// Валидация формы Поле «Тип жилья»

// Рабочий вариан через условия №1
/* selectType.addEventListener('change', function () {
  if (this.value == 'bungalo') {
    priceType.min = 0;
    priceType.placeholder = 0;
  }
  if (this.value == 'flat') {
    priceType.min = 1000;
    priceType.placeholder = 1000;
  }
  if (this.value == 'house') {
    priceType.min = 5000;
    priceType.placeholder = 5000;
  }
  if (this.value == 'palace') {
    priceType.min = 10000;
    priceType.placeholder = 10000;
  }

}); */

// **************************************
// // Рабочий вариан через условия №2
var prices = [0, 1000, 5000, 10000];

var validSelectTypeHous = function () {
  for (i = 0; i < selectType.options.length; i++) {
    if (selectType.value === selectType.options[i].value) {
      priceType.min = prices[i];
      priceType.placeholder = prices[i];
    }

  }

};
selectType.addEventListener('change', validSelectTypeHous);
// ******************************************

// ************************************************************************

// Валидация формы Поля «Время заезда», «Время выезда».
selectTimeIn.onchange = function () {
  selectTimeOut.selectedIndex = this.selectedIndex;
};
selectTimeOut.onchange = function () {
  selectTimeIn.selectedIndex = this.selectedIndex;
};

// ************************************************************************

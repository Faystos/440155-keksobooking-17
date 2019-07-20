'use strict';
// var map = document.querySelector('.map');
var fadedMap = document.querySelector('.map--faded');
var fadedForm = document.querySelector('.ad-form--disabled');
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

// ***************************************************************************

// Активация карты и меню формы

var onButtonMainClick = function () {
  fadedMap.classList.remove('map--faded');
  fadedForm.classList.remove('ad-form--disabled');
  pins.appendChild(fragObjPin);

};

buttonMain.addEventListener('click', onButtonMainClick);


// ***************************************************************************

// Кординаты главной метки

var getCoords = function () {

  var posX = buttonMain.offsetTop + (buttonMain.offsetHeight / 2);
  var posY = buttonMain.offsetLeft + (buttonMain.offsetWidth / 2);

  adressInp.value = posX + ',' + posY;
};

getCoords(buttonMain);

// ***************************************************************************

// Заполнаем паратры формы Поле «Тип жилья»

var prices = {
  bungalo: {
    min: 0,
    placeholder: 0
  },
  flat: {
    min: 1000,
    placeholder: 1000
  },
  house: {
    min: 5000,
    placeholder: 5000
  },
  palace: {
    min: 10000,
    placeholder: 10000
  }
};

var ondSelectTypeHous = function (event) {

  var selectHouseType = event.currentTarget.value;
  var minPrice = prices[selectHouseType].min;
  var placeholderSelectType = prices[selectHouseType].placeholder;
  priceType.setAttribute('min', minPrice);
  priceType.setAttribute('placeholder', placeholderSelectType);

};

selectType.addEventListener('change', ondSelectTypeHous);
// ************************************************************************

// Валидация формы Поля «Время заезда», «Время выезда».
selectTimeIn.onchange = function () {
  selectTimeOut.selectedIndex = this.selectedIndex;
};
selectTimeOut.onchange = function () {
  selectTimeIn.selectedIndex = this.selectedIndex;
};

// ************************************************************************
/*
// Заставляем метку двигаться

var onMouseDown = function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    var newBlockX = buttonMain.offsetLeft - shift.x;
    var newBlockY = buttonMain.offsetTop - shift.y;

    if (newBlockX < mapOverlay.offsetLeft - buttonMain.offsetWidth / 2 ||
    newBlockY < mapOverlay.offsetTop ||
    newBlockX + buttonMain.offsetWidth > mapOverlay.offsetLeft + mapOverlay.offsetWidth + (buttonMain.offsetWidth / 2) ||
    newBlockY + buttonMain.offsetHeight > mapOverlay.offsetTop + mapOverlay.offsetHeight + (buttonMain.offsetHeight / 2)) {

      document.removeEventListener('mousemove', onMouseMove);

    } else {
      buttonMain.style.top = newBlockY + 'px';
      buttonMain.style.left = newBlockX + 'px';
    }

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    getCoords(buttonMain);

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function () {
        buttonMain.preventDefault();
        buttonMain.removeEventListener('click', onClickPreventDefault);
      };
      buttonMain.addEventListener('click', onClickPreventDefault);
    }

  };


  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

buttonMain.addEventListener('mousedown', onMouseDown);

// *************************************************************************
*/

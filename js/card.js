'use strict';

(function(){

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
    var mapLocationX = getRandomInt(0 + window.data.DIMENSIONS_IMG / 2, window.data.mapWight - window.data.DIMENSIONS_IMG / 2);
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

  for (i = 0; i <= 7; i++) {
    var pin = document.createElement('button');
    var pinImg = document.createElement('img');
    pin.className = 'map__pin';
    pin.style.left = listResidentialObjects[i].locationMap.x + 'px';
    pin.style.top = listResidentialObjects[i].locationMap.y + 'px';
    pinImg.src = listResidentialObjects[i].author.avatar;
    pinImg.width = window.data.DIMENSIONS_IMG;
    pinImg.height = window.data.DIMENSIONS_IMG;
    pinImg.alt = 'заголовок объявления';
    pin.appendChild(pinImg);
    window.data.fragObjPin.appendChild(pin);
  }

})();

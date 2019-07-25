'use strict';

(function () {

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var onSuccess = function (data) {
    for (var i = 0; i < data.length; i++) {
      var pin = document.createElement('button');
      var pinImg = document.createElement('img');
      pin.className = 'map__pin';
      pinImg.src = data[i].author.avatar;
      pinImg.width = window.data.DIMENSIONS_IMG;
      pinImg.height = window.data.DIMENSIONS_IMG;
      pinImg.alt = data[i].offer.title;
      pin.style.left = data[i].location.x + 'px';
      pin.style.top = data[i].location.y + 'px';
      pin.appendChild(pinImg);
      window.data.fragObjPin.appendChild(pin);
    }
  };

  window.load(onSuccess);

})();

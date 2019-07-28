'use strict';

(function () {
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

  var onError = function () {
    var errorMessage = document.createElement('div');
    errorMessage.appendChild(window.data.error.content.cloneNode(true));
    window.data.mainBlock.appendChild(errorMessage);
  };

  window.load(window.data.URL, onSuccess, onError);
})();

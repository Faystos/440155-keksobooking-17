'use strict';

(function () {
  window.renderCard = function (card) {
    var pin = document.createElement('button');
    var pinImg = document.createElement('img');
    pin.className = 'map__pin';
    pinImg.src = card.author.avatar;
    pinImg.width = window.data.DIMENSIONS_IMG;
    pinImg.height = window.data.DIMENSIONS_IMG;
    pinImg.alt = card.offer.title;
    pin.style.left = card.location.x + 'px';
    pin.style.top = card.location.y + 'px';
    pin.appendChild(pinImg);
    window.data.fragObjPin.appendChild(pin);
  };
})();

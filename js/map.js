'use strict';

(function () {
  var handlerButtonMainClick = function () {
    window.data.fadedMap.classList.remove('map--faded');
    window.data.fadedForm.classList.remove('ad-form--disabled');
    window.data.pins.appendChild(window.data.fragObjPin);
  };

  window.data.buttonMain.addEventListener('click', handlerButtonMainClick);

  window.getCoords = function () {
    var posX = Math.round(window.data.buttonMain.offsetTop + (window.data.buttonMain.offsetHeight / 2));
    var posY = Math.round(window.data.buttonMain.offsetLeft + (window.data.buttonMain.offsetWidth / 2));
    window.data.addressInp.value = posX + ',' + posY;
  };
  window.getCoords(window.data.buttonMain);
})();

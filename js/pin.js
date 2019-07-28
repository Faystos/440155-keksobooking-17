'use strict';

(function () {
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

      var newBlockX = window.data.buttonMain.offsetLeft - shift.x;
      var newBlockY = window.data.buttonMain.offsetTop - shift.y;

      if (newBlockX < window.data.mapOverlay.offsetLeft - window.data.buttonMain.offsetWidth / 2 ||
      newBlockY < window.data.mapOverlay.offsetTop ||
      newBlockX + window.data.buttonMain.offsetWidth > window.data.mapOverlay.offsetLeft + window.data.mapOverlay.offsetWidth + (window.data.buttonMain.offsetWidth / 2) ||
      newBlockY + window.data.buttonMain.offsetHeight > window.data.mapOverlay.offsetTop + window.data.mapOverlay.offsetHeight + (window.data.buttonMain.offsetHeight / 2)) {

        window.document.removeEventListener('mousemove', onMouseMove);

      } else {
        window.data.buttonMain.style.top = newBlockY + 'px';
        window.data.buttonMain.style.left = newBlockX + 'px';
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      window.getCoords(window.data.buttonMain);

      window.document.removeEventListener('mousemove', onMouseMove);
      window.document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function () {
          window.data.buttonMain.preventDefault();
          window.data.buttonMain.removeEventListener('click', onClickPreventDefault);
        };
        window.data.buttonMain.addEventListener('click', onClickPreventDefault);
      }
    };

    window.document.addEventListener('mousemove', onMouseMove);
    window.document.addEventListener('mouseup', onMouseUp);
  };

  window.data.buttonMain.addEventListener('mousedown', onMouseDown);
})();

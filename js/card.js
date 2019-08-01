'use strict';
// Отрисовка карточек

(function () {

  window.renderCards = function (card) {
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

  window.clearCards = function () {
    var pinCards = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    for (var i = 0; i < pinCards.length; i++) {
      pinCards[i].remove();
    }
  };

})();

// **********************************************************************

// Загруска карточек и алгоритм фильтрации

(function () {

  var onSuccess = function (data) {

    window.data.housingType.addEventListener('change', window.handlerSelectChange);

    for (var i = 0; i < 5; i++) {
      window.renderCards(data[i]);
    }

    window.filterDataByType = function (type) {

      var filteredData = [];
      for (i = 0; i < data.length; i++) {
        var item = data[i];
        if (type === 'any' || item.offer.type === type) {
          filteredData.push(item);
        }
      }
      return filteredData;
    };

  };

  // *************************************************************************

  // Алгоритм ошибки при загрузки карточек

  var onError = function () {
    var errorMessage = document.createElement('div');
    errorMessage.appendChild(window.data.error.content.cloneNode(true));
    window.data.mainBlock.appendChild(errorMessage);
  };

  window.load(window.data.URL, onSuccess, onError);
})();

// ******************************************************************

// Функции для взоимодействием с селектом пипов домов

(function () {

  window.handlerSelectChange = function (event) {
    window.clearCards();

    var totalCards = (window.limitDataByNumber(window.filterDataByType(event.target.value), 5));

    for (var i = 0; i < totalCards.length; i++) {
      window.renderCards(totalCards[i]);
    }
  };

  window.limitDataByNumber = function (data, number) {
    var limitedData = [];
    for (var i = 0; i < number; i++) {
      var item = data[i];
      if (item) {
        limitedData.push(item);
      }
    }
    return limitedData;
  };

})();

// **************************************************************************

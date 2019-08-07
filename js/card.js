'use strict';

// *************************Отрисовка карточек**********************************

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


    var hendlerClickPin = function () {
      if (document.querySelector('.popup')) {
        window.hendlerCloseAdvertisingCards();
        window.createCards(card);
      } else {
        window.createCards(card);
      }
    };

    pin.addEventListener('click', hendlerClickPin);

  };

  window.clearCards = function () {
    var pinCards = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    window.deleteElement(pinCards);
  };

  window.createCards = function (card) {
    window.data.popupCard.querySelector('.popup__avatar').src = card.author.avatar;
    window.data.popupCard.querySelector('.popup__title').textContent = card.offer.title;
    window.data.popupCard.querySelector('.popup__text--address').textContent = card.offer.address + ', ' + card.location.x + ', ' + card.location.y;
    window.data.popupCard.querySelector('.popup__text--price').textContent = card.offer.price + '₽/ночь';
    window.data.popupCard.querySelector('.popup__type').textContent = card.offer.type;
    window.data.popupCard.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
    window.data.popupCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
    window.data.popupCard.querySelector('.popup__description').textContent = card.offer.description;
    var features = window.data.popupCard.querySelector('ul');
    var photoBlock = window.data.popupCard.querySelector('.popup__photos');


    var photoFrag = document.createDocumentFragment();
    var listFrag = document.createDocumentFragment();

    card.offer.photos.forEach(function (elem) {
      var photo = document.createElement('img');
      photo.className = 'popup__photo';
      photo.width = window.data.DIMENSIONS_IMG_WIDTH;
      photo.height = window.data.DIMENSIONS_IMG;
      photo.src = elem;
      photoFrag.appendChild(photo);
    });
    photoBlock.appendChild(photoFrag);

    card.offer.features.forEach(function (elem) {
      var featuresLi = document.createElement('li');
      featuresLi.className = 'popup__feature popup__feature--' + elem;
      listFrag.appendChild(featuresLi);
    });
    features.appendChild(listFrag);

    window.data.map.appendChild(window.data.popupCard);
  };

})();

// *****************************************************************************

// ******************Загруска карточек и алгоритм фильтрации********************

(function () {

  window.onSuccess = function (data) {
    window.data.housingType.addEventListener('change', window.handlerSelectChangeTypeData);
    window.data.priceFilter.addEventListener('change', window.handlerSelectChangeTypeData);
    window.data.housingRooms.addEventListener('change', window.handlerSelectChangeTypeData);
    window.data.housingGuests.addEventListener('change', window.handlerSelectChangeTypeData);

    window.data.checkWiFi.addEventListener('change', window.handlerFilterDataByCheck);
    window.data.checkDishwasher.addEventListener('change', window.handlerFilterDataByCheck);
    window.data.checkParking.addEventListener('change', window.handlerFilterDataByCheck);
    window.data.checkWasher.addEventListener('change', window.handlerFilterDataByCheck);
    window.data.checkElevator.addEventListener('change', window.handlerFilterDataByCheck);
    window.data.chekConditioner.addEventListener('change', window.handlerFilterDataByCheck);

    for (var i = 0; i < 5; i++) {
      window.renderCards(data[i]);
    }

    // *************************************************************************
    window.filterDataByType = function (type) {

      var filteredData = [];
      for (i = 0; i < data.length; i++) {
        var item = data[i];
        if (type === 'any' ||
         item.offer.type === type ||
         item.offer.price >= 10000 && item.offer.price <= 50000 && type === 'middle' ||
         item.offer.price > 0 && item.offer.price <= 10000 && type === 'low' ||
         item.offer.price >= 50000 && type === 'high' ||
         item.offer.rooms === Number(type) ||
         item.offer.guests === Number(type) ||
         type.checked && item.offer.features.includes(type.value)) {
          filteredData.push(item);
        }
      }
      return filteredData;
    };

    // *************************************************************************

    window.filterDataByCheckWiFi = function (check) {
      var filteredRoomData = [];
      for (i = 0; i < data.length; i++) {
        var item = data[i];
        if (check.checked && item.offer.features.includes(check.value)) {
          filteredRoomData.push(item);
        }
      }
      return filteredRoomData;
    };
  };

  // ***************************************************************************

  // ***************Алгоритм ошибки при загрузки карточек***********************

  window.onError = function () {
    var errorMessage = document.createElement('div');
    errorMessage.appendChild(window.data.error.content.cloneNode(true));
    window.data.mainBlock.appendChild(errorMessage);
    var onErrorsWindow = document.querySelector('.error');


    var closeErrorButton = document.querySelector('.error__button');

    var hendlerСloseErrorWindow = function (e) {
      e.preventDefault();
      onErrorsWindow.remove();
    };

    var handlerKeydownCloseOnErrorsWindow = function (e) {
      if (e.keyCode === window.data.ESC_KEYCODE) {
        onErrorsWindow.remove();
      }
    };

    closeErrorButton.addEventListener('click', hendlerСloseErrorWindow);
    document.addEventListener('keydown', handlerKeydownCloseOnErrorsWindow);
    onErrorsWindow.addEventListener('click', hendlerСloseErrorWindow);

  };

  window.load(window.data.URL_GET, window.onSuccess, window.onError, 'GET');
})();

// *****************************************************************************

// **********Функции для взоимодействием с селектом пипов домов*****************

(function () {

  window.handlerSelectChangeTypeData = function (event) {
    window.clearCards();

    var filterСards = (window.limitDataByNumber(window.filterDataByType(event.target.value), 5));
    window.filteringCards(filterСards);
  };

  // ***************************************************************************

  window.handlerFilterDataByCheck = function (event) {
    window.clearCards();
    var filterTypeCheck = (window.limitDataByNumber(window.window.filterDataByType(event.target), 5));
    window.filteringCards(filterTypeCheck);
  };

  // ***************************************************************************

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

// *****************************************************************************

// ****************Закрытие карточки карточки удаление элементов****************

(function () {

  window.hendlerCloseAdvertisingCards = function () {
    var popupCard = document.querySelector('.popup');

    var photo = popupCard.querySelector('.popup__photos');
    var photos = photo.querySelectorAll('.popup__photo');

    var ulFeature = popupCard.querySelector('ul');
    var listFeature = ulFeature.querySelectorAll('li');

    popupCard.remove();
    window.deleteElement(photos);
    window.deleteElement(listFeature);
  };

  window.hendlerCloseKeydownAdvertisingCards = function (e) {
    if (document.querySelector('.popup')) {
      if (e.keyCode === window.data.ESC_KEYCODE) {
        window.hendlerCloseAdvertisingCards();
      }
    } else {
      document.removeEventListener('keydown', window.hendlerCloseKeydownAdvertisingCards);
    }
  };

  document.addEventListener('keydown', window.hendlerCloseKeydownAdvertisingCards);
  window.data.closeAdvertisingCards.addEventListener('click', window.hendlerCloseAdvertisingCards);

  window.deleteElement = function (elemet) {
    for (var i = 0; i < elemet.length; i++) {
      elemet[i].remove();
    }
  };

})();

(function () {
  window.filteringCards = function (typeFilter) {
    for (var i = 0; i < typeFilter.length; i++) {
      window.renderCards(typeFilter[i]);
    }

  };
})();

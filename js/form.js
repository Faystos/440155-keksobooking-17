'use strict';

(function () {

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

  var ondSelectTypeHouse = function (event) {
    var selectHouseType = event.currentTarget.value;
    var minPrice = prices[selectHouseType].min;
    var placeholderSelectType = prices[selectHouseType].placeholder;
    window.data.priceType.setAttribute('min', minPrice);
    window.data.priceType.setAttribute('placeholder', placeholderSelectType);
  };

  window.data.selectType.addEventListener('change', ondSelectTypeHouse);

  window.data.selectTimeIn.onchange = function () {
    window.data.selectTimeOut.selectedIndex = this.selectedIndex;
  };
  window.data.selectTimeOut.onchange = function () {
    window.data.selectTimeIn.selectedIndex = this.selectedIndex;
  };

  var capacityAll = window.data.inputCapacity.querySelectorAll('option');
  var roomNumber = window.data.inputRoomNumber.querySelectorAll('option');

  if (roomNumber[0].selected) {
    capacityAll[2].removeAttribute('disabled');
    capacityAll[2].selected = true;
  }

  window.data.inputRoomNumber.addEventListener('change', validRoomInput);

  var validRoomInput = function () {
    if (roomNumber[1].selected) {
      capacityAll[1].selected = true;
      capacityAll[2].removeAttribute('disabled');
      capacityAll[1].removeAttribute('disabled');
    }
    if (roomNumber[2].selected) {
      capacityAll[0].removeAttribute('disabled');
      capacityAll[1].removeAttribute('disabled');
      capacityAll[2].removeAttribute('disabled');
      capacityAll[0].selected = true;
    }
    if (roomNumber[3].selected) {
      capacityAll[3].removeAttribute('disabled');
      capacityAll[0].setAttribute('disabled', 'true');
      capacityAll[1].setAttribute('disabled', 'true');
      capacityAll[2].setAttribute('disabled', 'true');
      capacityAll[3].selected = true;
    }
  };


  var buttonForm = document.querySelector('.ad-form__submit');
  var resetButton = document.querySelector('.ad-form__reset');
  var inputTitle = document.querySelector('#title');

  document.querySelector('.ad-form').addEventListener('submit', function (e) {
    e.preventDefault();
  });

  var hendlerClickButtonForm = function () {
    if (inputTitle.value === '') {
      return;
    }
    window.onSuccessForm();
    window.upLoad(window.onSuccessForm, window.onError);
  };

  var hendlerClickButtonReset = function () {
    window.closeMap();
  };

  buttonForm.addEventListener('click', hendlerClickButtonForm);
  resetButton.addEventListener('click', hendlerClickButtonReset);


  window.closeMap = function () {
    window.data.fadedMap.classList.add('map--faded');
    window.data.fadedForm.classList.add('ad-form--disabled');

    var pinCards = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    window.deleteElement(pinCards);

    document.querySelector('.ad-form').reset();

    window.data.buttonMain.style.left = window.data.startMainPinCoordX;
    window.data.buttonMain.style.top = window.data.startMainPinCoordY;
  };

  window.onSuccessForm = function () {
    var successMessage = window.data.successOK.content.cloneNode(true);
    window.data.mainBlock.appendChild(successMessage);

    var hendlerСloseSuccessWindow = function () {

      document.querySelector('.success').remove();
      window.closeMap();
      document.removeEventListener('click', hendlerСloseSuccessWindow);
    };

    var handlerKeydownСloseSuccessWindow = function (e) {
      if (e.keyCode === window.data.ESC_KEYCODE) {
        document.querySelector('.success').remove();
        window.closeMap();
        document.removeEventListener('keydown', handlerKeydownСloseSuccessWindow);
      }
    };

    document.addEventListener('click', hendlerСloseSuccessWindow);
    document.addEventListener('keydown', handlerKeydownСloseSuccessWindow);
  };


})();

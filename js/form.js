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

  var ondSelectTypeHous = function (event) {
    var selectHouseType = event.currentTarget.value;
    var minPrice = prices[selectHouseType].min;
    var placeholderSelectType = prices[selectHouseType].placeholder;
    window.data.priceType.setAttribute('min', minPrice);
    window.data.priceType.setAttribute('placeholder', placeholderSelectType);
  };

  window.data.selectType.addEventListener('change', ondSelectTypeHous);
})();

(function () {
  window.data.selectTimeIn.onchange = function () {
    window.data.selectTimeOut.selectedIndex = this.selectedIndex;
  };
  window.data.selectTimeOut.onchange = function () {
    window.data.selectTimeIn.selectedIndex = this.selectedIndex;
  };
})();

(function () {
  var capacityAll = window.data.inputCapacity.querySelectorAll('option');
  var roomNumber = window.data.inputRoomNumber.querySelectorAll('option');

  if (roomNumber[0].selected) {
    capacityAll[2].removeAttribute('disabled');
    capacityAll[2].selected = true;
  }

  window.data.inputRoomNumber.addEventListener('change', function () {
    if (roomNumber[3].selected) {
      capacityAll[3].removeAttribute('disabled');
      capacityAll[0].setAttribute('disabled', 'true');
      capacityAll[1].setAttribute('disabled', 'true');
      capacityAll[2].setAttribute('disabled', 'true');
    }

    if (roomNumber[1].selected) {
      capacityAll[1].removeAttribute('disabled');
      capacityAll[2].removeAttribute('disabled');
    }

    if (roomNumber[2].selected) {
      capacityAll[0].removeAttribute('disabled');
      capacityAll[1].removeAttribute('disabled');
      capacityAll[2].removeAttribute('disabled');
    }
  });

})();

(function () {

  var buttonForm = document.querySelector('.ad-form__submit');

  var hendlerClickButtonForm = function (e) {
    e.preventDefault();

    window.upLoad(onError);

    var onError = function () {
      var errorMessage = document.createElement('div');
      errorMessage.appendChild(window.data.error.content.cloneNode(true));
      window.data.mainBlock.appendChild(errorMessage);
    };
  };

  buttonForm.addEventListener('click', hendlerClickButtonForm);

  // var onSuccess = function () {
  //
  // };

})();

(function () {

})();

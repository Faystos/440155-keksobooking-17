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
  // window.data.housingType.addEventListener('change', function () {
  //   if (window.data.housingType.value = 'bungalo') {
  //     window.houseTypeBungalo.forEach(function (item) {
  //       window.renderCard(item);
  //     });
  //   }
  //   // console.log(window.data.housingType.value);
  // });
// console.log(window.data.housingType.value);
})();

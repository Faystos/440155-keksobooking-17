'use strict';

(function () {
  var onSuccess = function (data) {
    // window.data.cards = data;
    // console.log(window.data.cards[0].offer.type);

    // *****

    window.data.housingType.addEventListener('change', function () {

    });

    var filterHouseType = function (type) {
      var filteredData = []
      for (var i = 0; i < data.length; i++) {
        var item = data[i].offer.type;
        if (type === 'any' || item.offer.type === type) {
          filteredData.push(item);
        }
      }
      console.log(filteredData);
      return filteredData;
    };

    filterHouseType();


  };

  // *************************************************************************

  var onError = function () {
    var errorMessage = document.createElement('div');
    errorMessage.appendChild(window.data.error.content.cloneNode(true));
    window.data.mainBlock.appendChild(errorMessage);
  };

  window.load(window.data.URL, onSuccess, onError);
})();

// фильтр

(function () {

// console.log(window.data.cards);
})();

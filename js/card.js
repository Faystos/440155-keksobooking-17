'use strict';

(function () {
  var onSuccess = function (data) {
    // console.log(data);


    window.data.housingType.addEventListener('change', handleSelectChange);
    for (var i = 0; i < 5; i++) {
      window.renderCard(data[i]);
    }

    function handleSelectChange(event) {
      // window.clearCard();

      var totalCards = (limitDataByNumber(filterDataByType(event.target.value), 5));

      for (i = 0; i < totalCards.length; i++) {
        window.renderCard(totalCards[i]);
        window.clearCard();
      }

      console.log(totalCards);
    }


    function filterDataByType(type) {

      var filteredData = [];
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (type === 'any' || item.offer.type === type) {
          filteredData.push(item);
        }
      }
      return filteredData;
    }

    function limitDataByNumber(data, number) {
      var limitedData = [];
      for (var i = 0; i < number; i++) {
        var item = data[i];
        if (item) {
          limitedData.push(item);
        }
      }
      return limitedData;
    }

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

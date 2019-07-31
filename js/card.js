'use strict';

(function () {
  var onSuccess = function (data) {
    var cards = data;


    window.data.housingType.addEventListener('change', handleSelectChange);

    function handleSelectChange(event) {
      var totalCards = (limitDataByNumber(filterDataByType(event.target.value), 5));

      // window.renderCard(totalCards[0]);


      console.log(totalCards);
    }

    function filterDataByType(type) {

      var filteredData = [];
      for (var i = 0; i < cards.length; i++) {
        var item = cards[i];
        if (type === 'any' || item.offer.type === type) {
          filteredData.push(item);
        }
      }
      return filteredData;
    }

    function limitDataByNumber(totalCards, number) {
      var limitedData = [];
      for (var i = 0; i < number; i++) {
        var item = totalCards[i];
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

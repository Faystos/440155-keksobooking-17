// 'use strict';
//
// (function () {
//
//   window.renderCards = function (card) {
//     var pin = document.createElement('button');
//     var pinImg = document.createElement('img');
//     pin.className = 'map__pin';
//     pinImg.src = card.author.avatar;
//     pinImg.width = window.data.DIMENSIONS_IMG;
//     pinImg.height = window.data.DIMENSIONS_IMG;
//     pinImg.alt = card.offer.title;
//     pin.style.left = card.location.x + 'px';
//     pin.style.top = card.location.y + 'px';
//     pin.appendChild(pinImg);
//     window.data.fragObjPin.appendChild(pin);
//   };
//
//   window.clearCards = function () {
//     var pinCards = document.querySelectorAll('.map__pin:not(.map__pin--main)');
//     for (var i = 0; i < pinCards.length; i++) {
//       pinCards[i].remove();
//     }
//   };
//
// })();

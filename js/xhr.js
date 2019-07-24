'use strict';

// var URL = 'https://js.dump.academy/keksobooking/data';

(function () {

  window.load = function (onSuccess) {
    var xhr = new XMLHttpRequest();
    var URL = 'https://js.dump.academy/keksobooking/data';

    xhr.responseType = 'json';
    // **************************************
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      }
      // else {
      //   onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      // }
    });
    // *****************************************
    // xhr.addEventListener('error', function () {
    //   onError('Произошла ошибка соединения');
    // });
    // ***********************************************
    // xhr.addEventListener('timeout', function () {
    //   onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    // });
    // // *******************************************
    // xhr.timeout = 10000; // 10s

    xhr.open('GET', URL);
    xhr.send();
  };
})();
// **********************************************************************
// (function () {
  // var onError = function (message) {
  //   console.error(message);
  // };
  // *****************************************************************
  // var onSuccess = function (data) {
  //   console.log(data);
  // };
  // *****************************************************************
// window.load(URL,onSuccess, onError);

// })();

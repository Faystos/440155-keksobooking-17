'use strict';
// загрузка карточек

(function () {

  window.load = function (url, onSuccess, onError, methodType) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    // **************************************
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    // *****************************************
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    // ***********************************************
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    // // *******************************************
    xhr.timeout = 10000; // 10s

    xhr.open(methodType, url);
    xhr.send();
  };
})();

// отправка формы

(function () {

  window.upLoad = function (onSuccess, onErrors) {
    var formSubmission = document.querySelector('.ad-form');
    var formData = new FormData(formSubmission);
    var req = new XMLHttpRequest();
    req.open('POST', window.data.URL_POST, true);
    req.send(formData);
    // // **************************************
    req.addEventListener('load', function () {
      if (req.status === 200) {
        onSuccess('Cтатус ответа: ' + req.status + ' ' + req.statusText);
      } else {
        onErrors('Cтатус ответа: ' + req.status + ' ' + req.statusText);
      }
    });
    // *****************************************
    req.addEventListener('error', function () {
      onErrors('Произошла ошибка соединения');
    });
    // ***********************************************
    req.addEventListener('timeout', function () {
      onErrors('Запрос не успел выполниться за ' + req.timeout + 'мс');
    });
    // // *******************************************
    req.timeout = 10000; // 10s
  };
})();

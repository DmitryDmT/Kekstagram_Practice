(function () {
  const URL = 'https://js.dump.academy/kekstagram';
  const SUCCESS_STATUS = 200;
  const TIMEOUT = 10000;
  
  window.backend = {
    download: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      
      xhr.responeType = 'json';
      
      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case SUCCESS_STATUS:
            onLoad(xhr.response);
            break;
          default:
            onError(`Неизвестная ошибка: ${xhr.status}, ${xhr.statusText}`);
            break;
        }
      });
      
      xhr.addEventListener('error', function () {
        onError(`Ошибка соединения`);
      });
      
      xhr.addEventListener('timeout', function () {
        onError(`Превышено время ожидания ответа от сервера`);
      });
      
      xhr.timeout = TIMEOUT;
      
      xhr.open('GET', `${URL}/data`);
      xhr.send();
    },
    
    upload: function (formData, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      
      xhr.responseType = 'json';
      
      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case SUCCESS_STATUS:
            onLoad(xhr.response);
            break;
          default:
            onError('Превышено время ожидания ответа от сервера');
            break;
        }
      });
      
      xhr.addEventListener('error', function () {
        onError('Ошибка соединения');
      });
      
      xhr.addEventListener('timeout', function () {
        onError('Превышено время ожидания ответа от сервера');
      });
      
      xhr.timeout = TIMEOUT;
      
      xhr.open('POST', URL);
      xhr.send(formData);
    }
  };
})();
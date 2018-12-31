(function () {
  var formUpload = document.querySelector('.upload-form');
  var fileUploadField = formUpload.querySelector('#upload-file');
  
  var overlayUploadContainer = formUpload.querySelector('.upload-overlay');
  var formCancelButton = formUpload.querySelector('.upload-form-cancel');
  
  var OnEscCancelForm = function (evt) {
    if (evt.keyCode === 27) {
      overlayUploadContainer.classList.add('hidden');
      document.removeEventListener('keydown', OnEscCancelForm);
    }
  };
  
  var OnClickCancelForm = function () {
    overlayUploadContainer.classList.add('hidden');
    formCancelButton.removeEventListener('keydown', OnEscCancelForm);
  };
  
  fileUploadField.addEventListener('change', function () {
    overlayUploadContainer.classList.remove('hidden');
    
    formCancelButton.addEventListener('click', OnClickCancelForm);
    document.addEventListener('keydown', OnEscCancelForm);
  });
})();
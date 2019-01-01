(function () {
  var formUpload = document.querySelector('.upload-form');
  var fileUploadField = formUpload.querySelector('#upload-file');
  
  var overlayUploadContainer = formUpload.querySelector('.upload-overlay');
  var formCancelButton = formUpload.querySelector('.upload-form-cancel');
  
  var formUploadDescription = formUpload.querySelector('.upload-form-description');
  
  var CloseForm = function () {
    overlayUploadContainer.classList.add('hidden');
    document.removeEventListener('keydown', OnEscCancelForm);
  };
  
  var OnEscCancelForm = function (evt) {
    if (evt.keyCode === 27) {
      CloseForm();
    }
  };
  
  var OnClickCancelForm = function () {
    CloseForm();
  };
  
  fileUploadField.addEventListener('change', function () {
    overlayUploadContainer.classList.remove('hidden');
    
    formCancelButton.addEventListener('click', OnClickCancelForm);
    document.addEventListener('keydown', OnEscCancelForm);
    
    formUploadDescription.addEventListener('focus', function () {
      formCancelButton.disabled = true;
      document.removeEventListener('keydown', OnEscCancelForm);
    });
    
    formUploadDescription.addEventListener('blur', function () {
      formCancelButton.disabled = false;
      document.addEventListener('keydown', OnEscCancelForm);
    });
  });
})();
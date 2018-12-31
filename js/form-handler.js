(function () {
  var formUpload = document.querySelector('.upload-form');
  var fileUploadField = formUpload.querySelector('#upload-file');
  
  var overlayUploadContainer = formUpload.querySelector('.upload-overlay');
  var formCancelButton = formUpload.querySelector('.upload-form-cancel');
  
  fileUploadField.addEventListener('change', function () {
    overlayUploadContainer.classList.remove('hidden');
    
    formCancelButton.addEventListener('click', function () {
      overlayUploadContainer.classList.add('hidden');
    });
  });
})();
(function () {
  var formUpload = document.querySelector('.upload-form');
  var fileUploadField = formUpload.querySelector('#upload-file');
  
  var overlayUploadContainer = formUpload.querySelector('.upload-overlay');
  var formCancelButton = formUpload.querySelector('.upload-form-cancel');
  var formUploadDescription = formUpload.querySelector('.upload-form-description');
  
  var formUploadResizeControls = formUpload.querySelector('.upload-resize-controls-value');
  var formUploadResizeDecrement = formUpload.querySelector('.upload-resize-controls-button-dec');
  var formUploadResizeIncrement = formUpload.querySelector('.upload-resize-controls-button-inc');
  const resizeStep = 25;
  const resizeMax = 100;
  const resizeMin = 25;
  
  var formUploadEffectControls = formUpload.querySelector('.upload-effect-controls');
  var formUploadImage = formUpload.querySelector('.effect-image-preview');
  
  /* Setup form picture */
  
  formUploadResizeIncrement.addEventListener('click', function () {
    var resizeUpValue = parseInt(formUploadResizeControls.getAttribute('value'));
    if (resizeUpValue < resizeMax) {
      var upValue = resizeUpValue + resizeStep;
      formUploadResizeControls.setAttribute('value', `${upValue}%`);
      if (upValue < 100) {
        formUploadImage.style.transform = `scale(0.${upValue})`;
      }
      else {
        formUploadImage.style.transform = `scale(${upValue / 100})`;
      }
    }
  });
  
  formUploadResizeDecrement.addEventListener('click', function () {
    var resizeDownValue = parseInt(formUploadResizeControls.getAttribute('value'));
    if (resizeDownValue > resizeMin) {
      var downValue = resizeDownValue - resizeStep;
      formUploadResizeControls.setAttribute('value', `${downValue}%`);
      formUploadImage.style.transform = `scale(0.${downValue})`;
    }
  });
  
  formUploadEffectControls.addEventListener('change', function (evt) {
    var effectValue = evt.target.value;
    formUploadImage.className = `effect-image-preview effect-${effectValue}`;
  });
  
  /* Open/Close form picture */
  
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
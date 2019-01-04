(function () {
  var formUpload = document.querySelector('.upload-form');
  var formUploadEffectLevel = formUpload.querySelector('.upload-effect-level');
  var formUploadEffectLevelLine = formUpload.querySelector('.upload-effect-level-line');
  
  var effectLevelMax;
  var checkedFilter = null; // for cooperation between checked filter and slider filter
  
  /* Open/Close form picture */
  
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
    
    effectLevelMax = formUploadEffectLevel.clientWidth - (formUploadEffectLevelLine.offsetLeft * 2); // for automate communication between css and js
    
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
  
  /* Setup form picture */
  
  var formUploadResizeControls = formUpload.querySelector('.upload-resize-controls-value');
  var formUploadResizeDecrement = formUpload.querySelector('.upload-resize-controls-button-dec');
  var formUploadResizeIncrement = formUpload.querySelector('.upload-resize-controls-button-inc');
  
  const resizeStep = 25;
  const resizeMax = 100;
  const resizeMin = 25;
  
  var formUploadEffectControls = formUpload.querySelector('.upload-effect-controls');
  var formUploadImage = formUpload.querySelector('.effect-image-preview');
  
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
    checkedFilter = effectValue;
    
    if (checkedFilter === 'none') {
      formUploadEffectLevel.classList.add('hidden');
    }
    else {
      formUploadEffectLevel.classList.remove('hidden');
    }
    
    formUploadImage.className = `effect-image-preview effect-${effectValue}`;
  });
  
  /* Check hashtags input field */
  
  var formUploadHashtags = formUpload.querySelector('.upload-form-hashtags');
  
  var CheckHashTagsRepeat = function (hashTags, evt) {
    for (var i = 0; i < hashTags.length - 1; i++) {
      for (var j = i + 1; j < hashTags.length; j++) {
        if (hashTags[i] === hashTags[j]) {
          evt.target.setCustomValidity('Повторяющиеся хэш-теги!');
        }
      }
    }
  };
  
  var CheckHashTagsLength = function (hashTags, evt) {
    if (hashTags.length > 5) {
      evt.target.setCustomValidity(`Должно быть не больше 5-ти хэш-тегов! Сейчас - ${hashTags.length}`);
    }
  };
  
  var CheckHashTagsValidity = function (hashTags, evt) {
    hashTags.forEach(function (hashtag) {
      if (hashtag.charAt(0) !== '#') {
        evt.target.setCustomValidity(`Первый символ должен быть "#" в слове ${hashtag}.`);
      }
      if (hashtag.length > 20) {
        evt.target.setCustomValidity(`Максимальная длина хэш-тега - 20 символов. Сейчас длина - ${hashtag.length}.`);
      }
    });
  };
  
  formUploadHashtags.addEventListener('input', function (evt) {
    var hashTagsValue = formUploadHashtags.value;
    hashTagsValue = hashTagsValue.toLowerCase();
    var hashTags = hashTagsValue.split(' ');
    
    evt.target.setCustomValidity('');
    CheckHashTagsRepeat(hashTags, evt);
    CheckHashTagsLength(hashTags, evt);
    CheckHashTagsValidity(hashTags, evt);
  });
  
  /* Dragging filter picture */
  
  
  var effectLevelValue = formUploadEffectLevel.querySelector('.upload-effect-level-value');
  var effectLevelValuePin = formUploadEffectLevel.querySelector('.upload-effect-level-pin');
  var effectLevelValueLine = formUploadEffectLevel.querySelector('.upload-effect-level-val');
  
  effectLevelValuePin.addEventListener('mousedown', function (downEvt) {
    downEvt.preventDefault();
    
    var start = {
      x: downEvt.clientX
    };
    
    var OnMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      
      var diff = {
        x: moveEvt.clientX - start.x
      };
      
      start = {
        x: moveEvt.clientX
      };
      
      var leftPos = effectLevelValuePin.offsetLeft + diff.x;
      
      if (leftPos >= 0 && leftPos <= effectLevelMax) {
        effectLevelValuePin.style.left = `${leftPos}px`;
        effectLevelValueLine.style.width = `${leftPos}px`;
        
        var correctLeftPos = Math.floor(leftPos / effectLevelMax * 100);
        
        switch (checkedFilter) {
          case 'chrome':
            effectLevelValue.value = correctLeftPos / 100;
            formUploadImage.style.filter = `grayscale(${correctLeftPos / 100})`;
            break;
          case 'sepia':
            effectLevelValue.value = correctLeftPos / 100;
            formUploadImage.style.filter = `sepia(${correctLeftPos / 100})`;
            break;
          case 'marvin':
            effectLevelValue.value = correctLeftPos;
            formUploadImage.style.filter = `invert(${correctLeftPos}%)`;
            break;
          case 'phobos':
            correctLeftPos = Math.floor(leftPos / effectLevelMax * 300);
            effectLevelValue.value = correctLeftPos / 100;
            formUploadImage.style.filter = `blur(${correctLeftPos / 100}px)`;
            break;
          case 'heat':
            correctLeftPos = Math.floor(leftPos / effectLevelMax * 300);
            effectLevelValue.value = correctLeftPos / 100;
            formUploadImage.style.filter = `brightness(${correctLeftPos / 100})`;
            break;
          default:
            break;
        }
      }
    };
    
    var OnMouseUp = function (upEvt) {
      upEvt.preventDefault();
      
      document.removeEventListener('mousemove', OnMouseMove);
      document.removeEventListener('mouseup', OnMouseUp);
    };
    
    document.addEventListener('mousemove', OnMouseMove);
    document.addEventListener('mouseup', OnMouseUp);
  });
})();
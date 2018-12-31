(function () {
  var picturesContainer = document.querySelector('.pictures');
  
  var galOverlay = document.querySelector('.gallery-overlay');
  var galOverlayCloseButton = galOverlay.querySelector('.gallery-overlay-close');
  var galOverlayImg = galOverlay.querySelector('.gallery-overlay-image');
  var galOverlayLikes = galOverlay.querySelector('.likes-count');
  var galOverlayComments = galOverlay.querySelector('.comments-count');
  
  var FillOverlayData = function (picture) {
    galOverlayImg.src = `${picture.querySelector('.picture-img').src}`;
    galOverlayLikes.textContent = `${picture.querySelector('.picture-likes').textContent}`;
    galOverlayComments.textContent = `${picture.querySelector('.picture-comments').textContent}`;
  };
  
  var ShowPicture = function (evt) {
    evt.preventDefault();
    var picture;
    
    if (evt.target.classList.contains('picture-img')) { // for click
      picture = evt.target.parentElement;
    }
    else if (evt.target.classList.contains('picture')) { // for tab and enter
      picture = evt.target;
    }
      
    FillOverlayData(picture);
      
    galOverlay.classList.remove('hidden');
      
    document.addEventListener('keydown', OnPictureEscClose);
    galOverlayCloseButton.addEventListener('keydown', OnPictureEnterClose);
    galOverlayCloseButton.addEventListener('click', OnPictureClickClose);
  };
  
  var OnPictureClickClose = function (evt) {
    evt.preventDefault();
    
    galOverlay.classList.add('hidden');
    document.removeEventListener('keydown', OnPictureEscClose);
  };
  
  var OnPictureEnterClose = function (evt) {
    evt.preventDefault();
    
    if (evt.keyCode === 13) {
      galOverlay.classList.add('hidden');
      document.removeEventListener('keydown', OnPictureEscClose);
    }
  };
  
  var OnPictureEscClose = function (evt) {
    if (evt.keyCode === 27) {
      galOverlay.classList.add('hidden');
      document.removeEventListener('keydown', OnPictureEscClose);
    }
  };
  
  picturesContainer.addEventListener('click', function (evt) {
    ShowPicture(evt);
  });
  
  picturesContainer.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      console.log(evt.target);
      ShowPicture(evt);
    }
  });
})();
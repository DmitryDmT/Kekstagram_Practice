(function () {
  var picturesContainer = document.querySelector('.pictures');
  
  var galOverlay = document.querySelector('.gallery-overlay');
  var galOverlayCloseButton = galOverlay.querySelector('.gallery-overlay-close');
  var galOverlayImg = galOverlay.querySelector('.gallery-overlay-image');
  var galOverlayLikes = galOverlay.querySelector('.likes-count');
  var galOverlayComments = galOverlay.querySelector('.comments-count');
  
  picturesContainer.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('picture-img')) {
      var picture = evt.target.parentElement;
      
      galOverlayImg.src = `${picture.querySelector('.picture-img').src}`;
      galOverlayLikes.textContent = `${picture.querySelector('.picture-likes').textContent}`;
      galOverlayComments.textContent = `${picture.querySelector('.picture-comments').textContent}`;
      galOverlay.classList.remove('hidden');
    }
  });
  
  galOverlayCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    
    galOverlay.classList.add('hidden');
  });
})();
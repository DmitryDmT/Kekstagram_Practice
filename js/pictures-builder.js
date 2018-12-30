(function () {
    var pictures = window.elementsGenerator.CreatePictures();
    
    var picturesContainer = document.querySelector('.pictures');
    var galleryOverlay = document.querySelector('.gallery-overlay');
    var galleryOverlayPreview = galleryOverlay.querySelector('.gallery-overlay-preview');
    var galleryOverlayImg = galleryOverlayPreview.querySelector('.gallery-overlay-image');
    var galleryOverlayLikes = galleryOverlayPreview.querySelector('.gallery-overlay-controls-like').querySelector('.likes-count');
    var galleryOverlayComments = galleryOverlayPreview.querySelector('.gallery-overlay-controls-comments');
    
    var picturesFragment = document.createDocumentFragment();
    for (var picNum = 0; picNum < window.elementsGenerator.picturesCount; picNum++) {
        picturesFragment.appendChild(window.elementsGenerator.GeneratePicture(pictures[picNum]));
    }
    picturesContainer.appendChild(picturesFragment);
    
    var picturesDom = picturesContainer.querySelectorAll('.picture');
    
    galleryOverlayImg.src = `${picturesDom[0].querySelector('.picture-img').getAttribute('src')}`;
    galleryOverlayLikes.textContent = `${picturesDom[0].querySelector('.picture-likes').textContent}`;
    galleryOverlayComments.querySelector('.comments-count').textContent = `${picturesDom[0].querySelector('.picture-comments').textContent}`;
})();
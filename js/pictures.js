(function () {
    var pictures = window.elementsGenerator.CreatePictures();
    
    var picturesContainer = document.querySelector('.pictures');
    var galleryOverlay = document.querySelector('.gallery-overlay');
    var galleryOverlayPreview = galleryOverlay.querySelector('.gallery-overlay-preview');
    var galleryOverlayImg = galleryOverlayPreview.querySelector('.gallery-overlay-image');
    var galleryOverlayImgLikes = galleryOverlayImg.querySelector('.gallery-overlay-controls-like');
    var galleryOverlayImgComments = galleryOverlayImg.querySelector('.gallery-overlay-controls-comments');
    
    var picturesFragment = document.createDocumentFragment();
    for (var picNum = 0; picNum < window.elementsGenerator.picturesCount; picNum++) {
        picturesFragment.appendChild(window.elementsGenerator.GeneratePicture(pictures[picNum]));
    }
    picturesContainer.appendChild(picturesFragment);
    
    galleryOverlay.classList.remove('hidden');
})();
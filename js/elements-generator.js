(function () {
    const picturesCount = 25;
    
    const likesCountMin = 15;
    const likesCountMax = 200;
    
    var pictureTemplate = document.querySelector('.picture-template').content.querySelector('.picture');
    
    
    
    
    window.elementsGenerator = {
        picturesCount: picturesCount,
        CreatePictures: function () {
            var pictures = [];
            
            for (var picNum = 1; picNum < 26; picNum++) {
                pictures[i] = {
                    url: `photos/${picNum}.jpg`,
                    likes: window.randomizer.GenerateRandomNumber(likesCountMin, likesCountMax),
                    comments: window.data.GetRandomComments()
                };
            }
            
            return pictures;
        },
        
        GeneratePicture: function () {
            var nodePicture = pictureTemplate.cloneNode(true);
            
            nodePicture.querySelector('.picture-img').setAttribute('src', `${pictures.url}`);
            nodePicture.querySelector('.picture-likes').textContent = `${picture.likes}`;
            
            picture.comments.forEach(function (comment) {
                nodePicture.querySelector('.picture-comments').textContent += comment;
            });
            
            return nodePicture;
        }
    };
})();
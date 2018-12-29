(function () {
    const picturesCount = 25;
    
    const likesCountMin = 15;
    const likesCountMax = 200;
    
    var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
    
    window.elementsGenerator = {
        picturesCount: picturesCount,
        CreatePictures: function () {
            var pictures = [];
            
            for (var picNum = 0; picNum < 25; picNum++) {
                pictures[picNum] = {
                    url: `photos/${picNum + 1}.jpg`,
                    likes: window.randomizer.GenerateRandomNumber(likesCountMin, likesCountMax),
                    comments: window.data.GetRandomComments()
                };
            }
            
            return pictures;
        },
        
        GeneratePicture: function (picture) {
            var nodePicture = pictureTemplate.cloneNode(true);
            
            nodePicture.querySelector('.picture-img').setAttribute('src', `${picture.url}`);
            nodePicture.querySelector('.picture-likes').textContent = `${picture.likes}`;
            
            for (var comNum = 0; comNum < picture.comments.length; comNum++) {
                nodePicture.querySelector('.picture-comments').textContent += picture.comments[comNum];
            }
            
            return nodePicture;
        }
    };
})();
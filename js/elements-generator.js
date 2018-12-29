(function () {
    const picturesCount = 25;
    
    const likesCountMin = 15;
    const likesCountMax = 200;
    
    var pictures = [];
    
    for (var picNum = 1; picNum < 26; picNum++) {
        pictures[i] = {
            url: `photos/${picNum}.jpg`,
            likes: window.randomizer.GenerateRandomNumber(likesCountMin, likesCountMax),
            comments: window.data.GetRandomComments();
        };
    }
});
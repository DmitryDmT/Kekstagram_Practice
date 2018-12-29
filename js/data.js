(function () {
    var comments = [
        'Всё отлично!',
        'В целом всё неплохо. Но не всё.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ];
    
    window.data = {
        GetRandomComments: function () {
            var randomBetweenTwo = window.randomizer.GenerateRandomNumber(1, 2);
            
            var firstRandom = window.randomizer.GenerateRandomNumber(0, comments.length);
            var secondRandom = window.randomizer.GenerateRandomNumber(0, comments.length);
            
            if (randomBetweenTwo === 1) {
                return comments[firstRandom];
            }
            else {
                return [comments[firstRandom], comments[secondRandom]];
            }
        }
    };
})();
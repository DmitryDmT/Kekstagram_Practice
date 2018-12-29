(function () {
    window.randomizer = {
        GenerateRandomNumber: function (min, max) {
            var randomNumber = Math.floor((Math.random() * max) + min);
            
            if (randomNumber > max) {
                randomNumber = randomNumber - min;
            }
            
            return randomNumber;
        },
        
        GenerateUniqueElement: function (array, min, max) {
            var randomNumber = randomizer.GenerateRandomNumber(min, max);
            
            return array.splice(randomNumber, 1)[0];
        }
    };
})();
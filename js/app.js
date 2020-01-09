console.log('Game of dice started ...');

const getRandomNumber = (min, max) =>  Math.floor(Math.random()*(max - min + 1) + min);

function Gamer (name, budget = 1000) {
    this.name = name,
    this.budget = budget,
    this.winMessage = function () {console.log(`${this.name}, you win!`)},
    this.lostMessage = function () {console.log(`${this.name}, you lost!`)}
};

const newGamer = new Gamer('Dima');

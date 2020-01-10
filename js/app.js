/* ========== ТЗ ===========

Бюджет = 1000;

    switch (true)
        case(бюджет > 0 && бюджет < 10 000) :
            Game:

            1 ввод ставки (в переделах бюджета)
            2 ввод числа (от 2 до 12)
            3 бросаем кости (кость1 и кость2):
                switch (true)
                    case( кость1 + кость2 = число) :
                        бюджет = ставка*2 
                    break;

                    case( кость1 + кость2 = число  && кость1 = кость2) :
                        бюджет = ставка*3 
                    break;



    break;

    switch (true)
        case(бюджет < 0) :
            Game over
            break;


    switch (true)
        case(бюджет > 10 000) :
            Gamer Win !
        break;

*/
const getRandomValue = (min, max) => Math.floor(Math.random()*(max - min + 1) + min);

function RollTheDice () {
    this.dice1 = getRandomValue(1,6);
    this.dice2 = getRandomValue(1,6);
    this.summ = this.dice1 + this.dice2;
}

// let step = new RollTheDice();
// console.log(`Выпало: ${step.summ}. (${step.dice1} и ${step.dice2}).`);

const newGame = function (name) {
    let budget = 1000;
   
    while (budget > 0 && budget < 10000) {
        let bet = +prompt(`${name}, ваша ставка, макс: ${budget}`);
        let number = +prompt(`${name}, ваше число (от 2 до 12):`);
        let step = new RollTheDice();
        console.log(`Выпало: ${step.summ}. (${step.dice1} и ${step.dice2}).`);
            switch (true) {
                case (step.dice1 == step.dice2 && step.summ == number):
                    console.log(`:) ${name} вы загадывали ${number}, вы угадали и кости совпали. ставка х3`);
                    budget += (bet*3);
                break;
                case (step.summ == number):
                    console.log(`:) ${name} вы загадывали ${number} и вы угадали. ставка х2`);
                    budget += (bet*2);
                break;
                case (step.summ != number):
                    console.log(`:( ${name} вы загадывали ${number} и вы не угадали`);
                    budget = budget - bet;
                break;
            }
        console.log('В бюджете осталось:',budget);
        console.log('====== 1 цикл while ======');
    };
    switch (true) {
        case (budget <= 0):
            alert(`${name} Вы проиграли`);
        break;
        case (budget >= 10000):
            alert(`${name} Вы выиграли ${budget} !`);
        break;
    }
}

newGame('Дима');




// function Game (name = 'Игрок') {
//     (function () { console.log(`${name} let started?`)})();
//     this.name = name,
//     this.budget = 1000,
//     this.moves = {},
//     this.winMessage = function () {console.log(`${this.name}, you win!`)},
//     this.lostMessage = function () {console.log(`${this.name}, you lost!`)}
// }









//=========== Деструктуризация ==============

// data = {
//     value: {
//         min:100, 
//         max:500
//     }
// }
// console.log(data);
// console.log(data.value);
// const {min,max} = data.value;
// console.log(min);
// console.log(max);

//=========== Object.keys (масив из ключей обьекта) ==============

// brandsArr = ['Samsung', 'Xiaomi', 'Apple', 'Huawei'];
// modelsArr = ['Galaxy', 'XS', 'XM', 'Note', 'Redmi','Honor', 'H'];
// console.log(brandsArr);
// console.log(modelsArr);

// brandModelObj = {
//     'Samsung': ['Galaxy'],
//     'Xiaomi': ['Note', 'Redmi'],
//     'Apple': ['XS', 'XM'],
//     'Huawei': ['Honor', 'H']
// }
// console.log(brandModelObj);
// console.log(Object.keys(brandModelObj));  //массив из ключей обьекта brandModelObj  === brandsArr



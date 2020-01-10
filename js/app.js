
function RollTheDices () {
    this.value = [1, 6];
    this.getRandomValue = (min, max) =>  Math.floor(Math.random()*(max - min + 1) + min);
    this.dice1 = this.getRandomValue(...this.value);
    this.dice2 = this.getRandomValue(...this.value);
    this.summ = this.dice1 + this.dice2;
}

const newGame = function (name) {
    let history = [];
    let budget = 1000;
    let maxBudget = 2000;
   
    while (budget > 0 && budget < maxBudget) {
        let bet = +prompt(`${name}, ваша ставка, макс: ${budget}`);
        let number = +prompt(`${name}, ваше число (от 2 до 12):`);
        let step = new RollTheDices();
        history.push(step);
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
        console.log(`======== Сделано ходов: ${history.length} ========`)
        // console.log('====== 1 цикл while ======');
    };
    switch (true) {
        case (budget <= 0):
            alert(`${name} Вы проиграли`);
        break;
        case (budget >= maxBudget):
            alert(`${name} Вы выиграли ${budget} !`);
        break;
    }
    console.log('History', history)
}

newGame('Дима');




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



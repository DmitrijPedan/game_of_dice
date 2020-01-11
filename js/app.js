
function GetUserInfo() {
    this.user = {name: '', budget: 0, maxBudget: 0}
    this.user.name = 'Игрок'; //prompt('Ваше имя');
    this.user.budget = 1000; //+prompt('Стартовый бюджет:');
    this.user.maxBudget = 10000; //+prompt('Играем до:');
    return this.user;
}

function RollTheDices () {
    this.value = [1, 6];
    this.getRandomValue = (min, max) =>  Math.floor(Math.random()*(max - min + 1) + min);
    this.dice1 = this.getRandomValue(...this.value);
    this.dice2 = this.getRandomValue(...this.value);
    this.summ = this.dice1 + this.dice2;
}

function createNewGame() {
    userName.innerHTML=`${gamer.name}`;
    userMaxBudget.innerHTML=`Играем до: ${gamer.maxBudget}`;
    updateGameInfo();    
}

function updateGameInfo() {
    userSteps.innerHTML=`Ходов: ${history.length}`; 
    userBudget.innerHTML=`Бюджет: ${gamer.budget}`; 
    betLabel.innerHTML=`Сделайте ставку (от 1 до ${gamer.budget})`; 
    inputBet.max = gamer.budget;
}

function createGameAlert (type, text) {
    if (document.getElementById("gameAlert")){
        gameAlert.remove();
    }        
    let div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.role ="alert";
    div.id = "gameAlert";
    message.prepend(div);
    gameAlert.innerHTML = text;
}

function letGame () {
    if (gamer.budget > 0 && gamer.budget < gamer.maxBudget) {
        let bet = +inputBet.value;
        let number = +inputNumber.value;
        let step = new RollTheDices();
        history.push(step);
        console.log(`Выпало: ${step.summ}. (${step.dice1} и ${step.dice2}).`);
            switch (true) {
                case (step.dice1 == step.dice2 && step.summ == number):
                    createGameAlert('info', `Вы загадывали ${number}. Вы угадали и кости совпали. ставка х3`);
                    gamer.budget += (bet*3);
                break;
                case (step.summ == number):
                    createGameAlert('success', `Вы загадывали ${number} и угадали. ставка х2`);
                    gamer.budget += (bet*2);
                break;
                case (step.summ != number):
                    createGameAlert('warning', `Вы загадывали ${number} и вы не угадали`);
                    gamer.budget = gamer.budget - bet;
                break;
            }
            updateGameInfo();
    }
    switch (true) {
        case (gamer.budget <= 0):
            createGameAlert('danger', `${gamer.name} Вы проиграли. Конец игры`);
        break;
        case (gamer.budget >= gamer.maxBudget):
            createGameAlert('success', `${gamer.name} Вы выиграли ${gamer.budget} !`);
        break;
    }
};

let gamer = new GetUserInfo()
let history = [];  
createNewGame();
game.onclick = letGame






























// const newGame = function () {
//     let gamer = new GetUserInfo()
//     userName.innerHTML=`${gamer.name}`;
//     userBudget.innerHTML=`Бюджет: ${gamer.budget}`;
//     userMaxBudget.innerHTML=`Играем до: ${gamer.maxBudget}`;
//     let history = [];
     
//     while (gamer.budget > 0 && gamer.budget < gamer.maxBudget) {
//         let bet = +prompt(`${gamer.name}, ваша ставка, макс: ${gamer.budget}`);
//         let number = +prompt(`${gamer.name}, ваше число (от 2 до 12):`);
//         let step = new RollTheDices();
//         history.push(step);
//         console.log(`Выпало: ${step.summ}. (${step.dice1} и ${step.dice2}).`);
//             switch (true) {
//                 case (step.dice1 == step.dice2 && step.summ == number):
//                     console.log(`:) ${gamer.name} вы загадывали ${number}, вы угадали и кости совпали. ставка х3`);
//                     gamer.budget += (bet*3);
//                 break;
//                 case (step.summ == number):
//                     console.log(`:) ${gamer.name} вы загадывали ${number} и вы угадали. ставка х2`);
//                     gamer.budget += (bet*2);
//                 break;
//                 case (step.summ != number):
//                     console.log(`:( ${gamer.name} вы загадывали ${number} и вы не угадали`);
//                     gamer.budget = gamer.budget - bet;
//                 break;
//             }
//         console.log('В бюджете осталось:',gamer.budget);
//         console.log(`======== Сделано ходов: ${history.length} ========`)
//         // console.log('====== 1 цикл while ======');
//     };
//     switch (true) {
//         case (gamer.budget <= 0):
//             alert(`${gamer.name} Вы проиграли`);
//         break;
//         case (gamer.budget >= gamer.maxBudget):
//             alert(`${gamer.name} Вы выиграли ${gamer.budget} !`);
//         break;
//     }
//     // history
//     document.getElementById("historyID").innerHTML=`История: ${history}`;
//     console.log('History', history)
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



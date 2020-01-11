
function GetUserInfo() {
    this.user = {name: '', budget: 0, maxBudget: 0}
    this.user.name = prompt('Ваше имя');
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

function createDicesAlert (type, text) {
    if (document.getElementById("diceAlert")){
        diceAlert.remove();
    }        
    let div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.role ="alert";
    div.id = "diceAlert";
    message.prepend(div);
    diceAlert.innerHTML = text;
}

function letGame () {
    if (gamer.budget > 0 && gamer.budget < gamer.maxBudget) {
        let bet = +inputBet.value;
        let number = +inputNumber.value;
        let step = new RollTheDices();
        history.push(step);
        createDicesAlert('primary', `Выпало <span class="badge badge-primary result">${step.summ}</span> (${step.dice1} и ${step.dice2}).`);
        // console.log(`Выпало: ${step.summ}. (${step.dice1} и ${step.dice2}).`);
            switch (true) {
                case (step.dice1 == step.dice2 && step.summ == number):
                    createGameAlert('info', `Вы загадали <span class="badge badge-info result">${number}</span>. Вы угадали и кости совпали! ставка х3`);
                    gamer.budget += (bet*3);
                break;
                case (step.summ == number):
                    createGameAlert('success', `Вы загадали <span class="badge badge-success result">${number}</span> и угадали. ставка х2`);
                    gamer.budget += (bet*2);
                break;
                case (step.summ != number):
                    createGameAlert('warning', `Вы загадали <span class="badge badge-danger result">${number}</span> и вы не угадали`);
                    gamer.budget = gamer.budget - bet;
                break;
            }
            updateGameInfo();
    }
    switch (true) {
        case (gamer.budget <= 0):
            createGameAlert('danger', `<span class="badge badge-danger result">${gamer.name}</span> Вы проиграли. Конец игры`);
        break;
        case (gamer.budget >= gamer.maxBudget):
            createGameAlert('success', `<span class="badge badge-success result">${gamer.name}</span> Вы выиграли <span class="badge badge-success result">${gamer.budget}</span> !`);
        break;
    }
};

let gamer = new GetUserInfo()
let history = [];  
createNewGame();
createGameAlert('primary', `Сделайте первую ставку и нажмите "Играть"`);
game.onclick = letGame

// https://dmitrijpedan.github.io/game_of_dice/

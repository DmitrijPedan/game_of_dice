function RollTheDices () {
    this.values = name === 'IMT' ? [6, 6] : [1, 6];
    this.getRandomValue = (min, max) =>  Math.floor(Math.random()*(max - min + 1) + min);
    this.dice1 = this.getRandomValue(...this.values);
    this.dice2 = this.getRandomValue(...this.values);
    this.summ = this.dice1 + this.dice2;
}


const updateGameInfo = () => {
    document.getElementById('userSteps').innerHTML=`Ходов: ${stephistory}`; 
    document.getElementById('userBudget').innerHTML=`Бюджет: ${budget}`; 
    document.getElementById('betLabel').innerHTML=`Сделайте ставку (от 1 до ${budget})`; 
    document.getElementById('inputBet').max = budget;
}

const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => {element.setAttribute(attr.name, attr.value.join(' '))});
    inner ? (Array.isArray(inner) ? inner.map(el => element.appendChild(el)) : element.innerHTML=inner) : null;
    return element;
};

const createGameAlert = (type, text, span) => {
    document.getElementById("gameAlert") && document.getElementById("gameAlert").remove()
    const div = createHTMLNode('div', [
        {name: 'class', value: [`alert alert-${type}`, 'game-message']}, 
        {name: 'role', value: ['alert']}, 
        {name: 'id', value: ['gameAlert']}], text);
    document.getElementById("message").appendChild(div);
}

const createDicesAlert = (type, text) => {
    [...document.getElementsByClassName('game-message')].map(el => el.remove());
    const div = createHTMLNode('div', [
        {name: 'class', value: [`alert alert-${type}`, 'game-message']}, 
        {name: 'role', value: ['alert']}, 
        {name: 'id', value: ['diceAlert']}], text)
    document.getElementById("message").appendChild(div);
}

const createBetAlert = (type, text) => {
    [...document.getElementsByClassName('game-message')].map(el => el.remove());
    const div = createHTMLNode('div', [
        {name: 'class', value: [`alert alert-${type}`, 'game-message']}, 
        {name: 'role', value: ['alert']}, 
        {name: 'id', value: ['betAlert']}], text)
    document.getElementById("message").appendChild(div);
}

const letGame = () => {
   if (+inputBet.value > 0 && +inputBet.value <= budget) {
        if (budget > 0 && budget < maxBudget) {
            let bet = +inputBet.value;
            let number = +inputNumber.value;
            let step = new RollTheDices();
            stephistory += 1;
            createDicesAlert('primary', `Выпало <span class="badge badge-primary result">${step.summ}</span> (${step.dice1} и ${step.dice2}).`);
                switch (true) {
                    case (step.dice1 == step.dice2 && step.summ == number):
                        createGameAlert('info', `Вы загадали <span class="badge badge-info result">${number}</span>. Вы угадали и кости совпали! ставка х3`);
                        budget += (bet*3);
                    break;
                    case (step.summ == number):
                        createGameAlert('success', `Вы загадали <span class="badge badge-success result">${number}</span> и угадали. ставка х2`);
                        budget += (bet*2);
                    break;
                    case (step.summ != number):
                        createGameAlert('warning', `Вы загадали <span class="badge badge-danger result">${number}</span> и вы не угадали`);
                        budget = budget - bet;
                    break;
                }
            updateGameInfo();
        }
        switch (true) {
            case (budget <= 0):
                createGameAlert('danger', `<span class="badge badge-danger result">${name}</span> Вы проиграли. Конец игры`);
            break;
            case (budget >= maxBudget):
                createGameAlert('success', `Поздравляем! <span class="badge badge-success result">${name}</span> Вы выиграли <span class="badge badge-success result">${budget}</span> !`);
            break;
        }
    } else {
        createBetAlert('danger', `Ставка должна быть в пределах бюджета (${budget})`);
    }
};

const name = prompt('Ваше имя:') || 'Игрок';
let stephistory = 0; 
let budget = 2000; 
const maxBudget = 10000;
const inputBet = document.getElementById('inputBet');
document.getElementById('userName').innerHTML = `${name}`;
document.getElementById('userMaxBudget').innerHTML = `Играем до: ${maxBudget}`; 
document.getElementById('game').onclick = letGame;
updateGameInfo();   
createGameAlert('primary', 'Сделайте первую ставку и нажмите "Играть');
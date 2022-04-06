const cardArray = [
    {
        name: 'A lion',
        image: 'images/lion.jpg'
    },
    {
        name: 'an ape',
        image: 'images/monkey.jpg'
    },
    {
        name: 'elephants',
        image: 'images/elephants.jpg'
    },
    {
        name: '2 owls',
        image: 'images/owls.jpg'
    },
    {
        name: 'a panther',
        image: 'images/panther.jpg'
    },
    {
        name: 'a raycoon',
        image: 'images/raycoon.jpg'
    },
    {
        name: 'A lion',
        image: 'images/lion.jpg'
    },
    {
        name: 'an ape',
        image: 'images/monkey.jpg'
    },
    {
        name: 'elephants',
        image: 'images/elephants.jpg'
    },
    {
        name: '2 owls',
        image: 'images/owls.jpg'
    },
    {
        name: 'a panther',
        image: 'images/panther.jpg'
    },
    {
        name: 'a raycoon',
        image: 'images/raycoon.jpg'
    }
]

cardArray.sort((a, b) => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const result = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/moon.jpg');
        card.setAttribute('alt', 'The moon');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.append(card);
    } 

}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/moon.jpg');
        cards[optionTwoId].setAttribute('src', 'images/moon.jpg');
        alert('You have chosen the same picture');  
        
    } else if (cardsChosen[0] == cardsChosen[1]) {
        alert('it matches');
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    
    } else {
        cards[optionOneId].setAttribute('src', 'images/moon.jpg');
        cards[optionTwoId].setAttribute('src', 'images/moon.jpg');
        alert('sorry try again');
    }
    result.innerHTML = cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];

    if (cardsWon.length === (cardArray.length / 2)) {
        
        result.innerHTML = "You have found all the card"
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].image);
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }

}

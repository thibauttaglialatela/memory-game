const cardArray = [
    {
        name: 'a tiger',
        image: 'images/tiger.jpg'
    },
    {
        name: '2 cows',
        image: 'images/2-cows.jpg'
    },
    {
        name: 'a blue paon',
        image: 'images/blue-paon.jpg'
    },
    {
        name: 'a cerf',
        image: 'images/cerf.jpg'
    },
    {
        name: 'a girafe',
        image: 'images/girafe.jpg'
    },
    {
        name: 'jellyfish',
        image: 'images/jellyfish.jpg'
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
        name: 'blank',
        image: 'images/moon.jpg'
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

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");

function createBoard() {
    for (let i = 0; i < 11; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/moon.jpg');
        card.setAttribute('alt', 'The moon');
        card.setAttribute('data-id', i);
        grid.append(card);
        console.log(grid);
    }
}
createBoard();
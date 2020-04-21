const CARDS_ARRAY = [
	{
		name: 'blue',
		img: 'images/blue.png'
	},
	{
		name: 'blue',
		img: 'images/blue.png'
	},
	{
		name: 'cyan',
		img: 'images/cyan.png'
	},
	{
		name: 'cyan',
		img: 'images/cyan.png'
	},
	{
		name: 'green',
		img: 'images/green.png'
	},
	{
		name: 'green',
		img: 'images/green.png'
	},
	{
		name: 'orange',
		img: 'images/orange.png'
	},
	{
		name: 'orange',
		img: 'images/orange.png'
	},
	{
		name: 'red',
		img: 'images/red.png'
	},
	{
		name: 'red',
		img: 'images/red.png'
	},
	{
		name: 'pink',
		img: 'images/pink.png'
	},
	{
		name: 'pink',
		img: 'images/pink.png'
	}
];

CARDS_ARRAY.sort(() => 0.5 - Math.random);

const GRID = document.querySelector('.grid');
const DISPLAY_RESULT = document.querySelector('#result');
let chosenCards = [];
let chosenCardsID = [];
let cardsWon = [];

function createGameBoard() {
	for (let i = 0; i < CARDS_ARRAY.length; i++) {
		const CARD = document.createElement('IMG');
		CARD.setAttribute('src', 'images/guess.png');
		CARD.setAttribute('data-id', i);
		CARD.setAttribute('onclick', 'flipCard(this)');
		GRID.appendChild(CARD);
	}
}

function flipCard(event) {
	let cardID = event.getAttribute('data-id');
	chosenCards.push(CARDS_ARRAY[cardID].name);
	chosenCardsID.push(cardID);
	event.setAttribute('src', CARDS_ARRAY[cardID].img);
	if (chosenCards.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}

function checkForMatch() {
	const CARDS = document.querySelectorAll('img');
	const cardOneID = chosenCardsID[0];
	const cardTwoID = chosenCardsID[1];
	if (chosenCards[0] === chosenCards[1]) {
		alert('You found a match!');
		CARDS[cardOneID].setAttribute('src', 'images/blank.png');
		CARDS[cardTwoID].setAttribute('src', 'images/blank.png');
		cardsWon.push(chosenCards);
	} else {
		CARDS[cardOneID].setAttribute('src', 'images/guess.png');
		CARDS[cardTwoID].setAttribute('src', 'images/guess.png');
		alert('Sorry, try again!');
	}
	chosenCards = [];
	chosenCardsID = [];
	DISPLAY_RESULT.textContent = cardsWon.length;
	if (cardsWon.length === CARDS_ARRAY.length / 2) {
		DISPLAY_RESULT.textContent = 'Yeyy! You found them all!';
	}
}

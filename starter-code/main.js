console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


/* 
if (cardTwo === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again");
}
*/

/*if (cardOne === cardTwo) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again");
}

if (cardThree === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again");
}*/

var gameBoard = document.getElementById('game-board');

	function createCards() {
		for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);

		}
	}

function isTwoCards() {
	  cardsInPlay.push(this.getAttribute('data-card'));
	  console.log(this.getAttribute('data-card'));
	  if(this.getAttribute('data-card') === 'king'){
	  	this.innerHTML = '<img src = "King_of_Hearts.png" alt="king of hearts">';
	  }
	  else{
	  	this.innerHTML = '<img src = "Queen_of_Hearts.png" alt="queen of hearts">';	
	  }
	  	
}

if (cardsInPlay.length === 2){
	isMatch(cardsInPlay);
	cardsInPlay = [];
}

var isMatch = function(cards) {
	if (cards[0] === cards[1]){
		alert("You Found a Match!");
	}
	else {
		alert("No Match, Try Again");
	};

}

createCards();
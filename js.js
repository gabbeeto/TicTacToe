
function selectElement(element) {
	return document.querySelector(element)

}






let amountOfComputerChoices = 0;


const computerChoice = (function () {

	let _humanChoices = []
	let AmountOfChoicesForHumans = 0;
	//mode has to be on computer and the maximum amount of computer choices has to be 3 in order for this to work properly
	if (mode == 'computer' && amountOfComputerChoices <= 3) {

//iterate inside the gameboard to get the amount of human choices for the random number generated for the computer
		for (let index0 = 0; index0 < gameboard.length; index0++) {
			if (gameboard[index0] == 'o') {
				AmountOfChoicesForHumans = AmountOfChoicesForHumans + 1;
				_humanChoices.push(index0);
			}
		}



		function _getRandomNumber(number) {
			return Math.floor(Math.random() * number);
		}


		//if the human plays there are less places avaiable, that's way we need to substract the random number by the amount of choices made by the player and the computer
		let pickedNumber = _getRandomNumber(8 - (_humanChoices.length - 1 + amountOfComputerChoices))


		//if the human already used the random number picked by the computer, the computer is going to select the next number until it reaches the number 8, and then it's going to start selecting the previous number 
		for (let foundNumber = false, revert = false; foundNumber == false;) {

			if (gameboard[pickedNumber]) {
				pickedNumber = pickedNumber + 1

			}

			else if (revert == true) {
				pickedNumber = pickedNumber - 2;
			}

			else if (pickedNumber > 8) {
				pickedNumber = 7;
				revert = true
			}

			else if (pickedNumber < 0) {
				pickedNumber = 0
				revert = false;
			}


			else {
				foundNumber = true;
			}


		}


		gameboard[pickedNumber] = 'x';
		updateArrayIntoHtml(pickedNumber);
		amountOfComputerChoices = amountOfComputerChoices + 1;
	}
})













let playerOneTurn = true;


function switchPlayerAndReturnPlayerScore() {
	if (mode == 'player') {
		if (playerOneTurn) {
			playerOneTurn = false;
			return 'o';
		}
		else {
			playerOneTurn = true;
			return 'x';
		}

	}

	else {
		return 'o';

	}
}




//this is where all the scores of the players belong
gameboard = []


const field = selectElement('section:first-of-type');
field.addEventListener('click', fillContainer);

function returnPlayerTurn() {
	if (playerOneTurn) {
		return `it's player one turn`;
	}
	else {
		return `it's player two turn`;
	}


}


function stopPlayersIfMatchEnded() {
	if (evaluateWinnerBasedOnElection() != '') {
		document.querySelector('section:nth-of-type(2) > button').style.display = 'inline-block';
		field.removeEventListener("click", fillContainer)

	}
}

function returnColorDependingOnThePlayer() {
	if (returnPlayerTurn() == `it's player two turn`) {
		document.querySelector('h3').classList.add('playerTwo');
		document.querySelector('h3').classList.remove('playerOne');
	}
	else {
		document.querySelector('h3').classList.add('playerOne');
		document.querySelector('h3').classList.remove('playerTwo');
	}


}


function fillContainer(event) {
	switch (event.target.id) {
		case 'one':
			if (!gameboard[0]) {
				gameboard[0] = switchPlayerAndReturnPlayerScore();
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`;
				returnColorDependingOnThePlayer();
				updateArrayIntoHtml(0);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
		case 'two':
			if (!gameboard[1]) {
				gameboard[1] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(1);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
		case 'three':
			if (!gameboard[2]) {
				gameboard[2] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(2);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
		case 'four':
			if (!gameboard[3]) {
				gameboard[3] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(3);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
		case 'five':
			if (!gameboard[4]) {
				gameboard[4] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(4);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
		case 'six':
			if (!gameboard[5]) {
				gameboard[5] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(5);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
		case 'seven':
			if (!gameboard[6]) {
				gameboard[6] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(6);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
		case 'eight':
			if (!gameboard[7]) {
				gameboard[7] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(7);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded(); } break;
		case 'nine':
			if (!gameboard[8]) {
				gameboard[8] = switchPlayerAndReturnPlayerScore()
				document.querySelector('h3').innerText = `${returnPlayerTurn()}`
				returnColorDependingOnThePlayer();
				console.log(gameboard);
				updateArrayIntoHtml(8);
				computerChoice();
				document.querySelector('h2').innerText = evaluateWinnerBasedOnElection();
				stopPlayersIfMatchEnded();
			}
			break;
	}
}








function updateArrayIntoHtml(number) {
	img = document.createElement('img');
	//add different images depending on the player 
	switch (gameboard[number]) {
		case 'o':
			img.src = 'images/face1.png';
			img.classList.add('container');
			break;
		case 'x':
			img.src = 'images/face2.png';
			img.classList.add('container');
			break;
	}

	document.querySelectorAll('section > div')[number].appendChild(img);
}



let evaluateWinnerBasedOnElection = (function () {


	const _matchWinningPatternsForPlayers = function (symbol) {

		//horizontal winning
		if (gameboard[0] == symbol && gameboard[1] == symbol && gameboard[2] == symbol) {
			return true;
		}
		else if (gameboard[3] == symbol && gameboard[4] == symbol && gameboard[5] == symbol) {
			return true;
		}
		else if (gameboard[6] == symbol && gameboard[7] == symbol && gameboard[8] == symbol) {
			return true;
		}

		//vertical winning
		else if (gameboard[0] == symbol && gameboard[3] == symbol && gameboard[6] == symbol) {
			return true;
		}
		else if (gameboard[1] == symbol && gameboard[4] == symbol && gameboard[7] == symbol) {
			return true;
		}
		else if (gameboard[2] == symbol && gameboard[5] == symbol && gameboard[8] == symbol) {
			return true;
		}

		//diagonal winning
		else if (gameboard[0] == symbol && gameboard[4] == symbol && gameboard[8] == symbol) {
			return true;
		}
		else if (gameboard[2] == symbol && gameboard[4] == symbol && gameboard[6] == symbol) {
			return true;
		}


		else {
			return false;
		}

	}


	let _numberOfElements = 0;
	//this is for when nobody wins and they filled all the containers
	function checkForTie() {
		for (let i = 0; gameboard.length > i; i++) {
			if (gameboard[i] == 'o' || gameboard[i] == 'x') {
				_numberOfElements = _numberOfElements + 1;

			}

		}

		if (_numberOfElements == 9) {
			return true;
		}
		else {
			_numberOfElements = 0;
		}
	}



	_matchWinningPatternsForPlayers('o');
	_matchWinningPatternsForPlayers('x');

	if (_matchWinningPatternsForPlayers('o')) {
		return 'player One Won';
	}
	else if (_matchWinningPatternsForPlayers('x')) {
		return 'player two won';
	}
	else if (checkForTie()) {
		return `it's a tie`;
	}
	else {
		return '';

	}

})














let mode = 'player'

const Settings = (function () {




	//let the user know that it's the first player turn at the beginning of the game
	document.querySelector('h3').innerText = `${returnPlayerTurn()}`

	playAgainButton = document.querySelector('section:nth-of-type(2) > button')
	playAgainButton.addEventListener('click', _resetTheGame);

	function _resetTheGame() {
		//reset the scores
		gameboard = [];
		//unfill all the divs that have images
		itemsForTheFirstDiv = document.querySelectorAll('section:first-of-type > *');
		for (index = 0; index < itemsForTheFirstDiv.length; index++) {
			itemsForTheFirstDiv[index].innerHTML = '';
		}
		//add the event listener back
		field.addEventListener('click', fillContainer)

		//get the player one turn back
		playerOneTurn = true;

		//empty the heading elements
		document.querySelector('h2').innerText = '';
		document.querySelector('h3').innerText = '';

		//reset the amount of computer choices 
    amountOfComputerChoices = 0;
	}

  _playAgainstComputerButton = document.querySelector('section:last-of-type button');
	_playAgainstComputerButton.addEventListener('click', _switchModes)
	function _switchModes() {
		if (mode == 'player') {
			mode = 'computer';
			document.querySelector('section:last-of-type p').innerText = 'human vs computer'
			_playAgainstComputerButton.innerText = 'Play Agaisnt Human';
			document.querySelector('section:last-of-type img:nth-of-type(2)').src = 'images/face3.png'
			_resetTheGame()
		}
		else {
			mode = 'player';
			document.querySelector('section:last-of-type p').innerText = 'human vs human'
			_playAgainstComputerButton.innerText = 'Play Agaisnt Computer';
			document.querySelector('section:last-of-type img:nth-of-type(2)').src = 'images/face2.png'
			_resetTheGame()
		}

	}

})()

function selectElement(element){
return document.querySelector(element)

}

let playerOneTurn = true;


function switchPlayerAndReturnPlayerScore(){
if(playerOneTurn){
playerOneTurn = false;
return 'o';
}
else{
playerOneTurn = true;
return 'x';
}
}



//this is where all the scores of the players belong
gameboard = []


const field = selectElement('section:first-of-type');
field.addEventListener('click', fillContainer );

function returnPlayerTurn(){
if(playerOneTurn){
return `it's player one turn`;
}
else{
return `it's player two turn`;
}


}


function stopPlayersIfMatchEnded(){
if(checkWinner() != ''){
document.querySelector('section:nth-of-type(2) > button').style.display = 'inline-block';
field.removeEventListener("click", fillContainer)

		}
}

function returnColorDependingOnThePlayer(){
if(returnPlayerTurn() == `it's player two turn`){
	  document.querySelector('h3').classList.add('playerTwo');
	  document.querySelector('h3').classList.remove('playerOne');
}
else{
	  document.querySelector('h3').classList.add('playerOne');
	  document.querySelector('h3').classList.remove('playerTwo');
}


}


function fillContainer(event){
switch(event.target.id){
	case 'one':
		if(!gameboard[0]){
		gameboard[0] = switchPlayerAndReturnPlayerScore();
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`;
		returnColorDependingOnThePlayer();
		updateArrayIntoHtml(0);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'two':
		if(!gameboard[1]){
		gameboard[1] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(1);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'three':
		if(!gameboard[2]){
		gameboard[2] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(2);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'four':
		if(!gameboard[3]){
		gameboard[3] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(3);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'five':
		if(!gameboard[4]){
		gameboard[4] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(4);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'six':
		if(!gameboard[5]){
		gameboard[5] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(5);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'seven':
		if(!gameboard[6]){
		gameboard[6] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(6);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'eight':
		if(!gameboard[7]){
		gameboard[7] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(7);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
	case 'nine':
		if(!gameboard[8]){
		gameboard[8] = switchPlayerAndReturnPlayerScore()
	  document.querySelector('h3').innerText = `${returnPlayerTurn()}`
		returnColorDependingOnThePlayer();
		console.log(gameboard);
		updateArrayIntoHtml(8);
		document.querySelector('h2').innerText = checkWinner();
		stopPlayersIfMatchEnded();
		}
		break;
}
}


function updateArrayIntoHtml(number)  {
img = document.createElement('img');
//add different images depending on the player 
switch(gameboard[number]){
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



let checkWinner = (function (){


const matchWinningPatternsForPlayers = function(symbol) {

//horizontal winning
if(gameboard[0] == symbol && gameboard[1] == symbol && gameboard[2] == symbol){
return true;
}
else if(gameboard[3] == symbol && gameboard[4] == symbol && gameboard[5] == symbol){
return true;
}
else if(gameboard[6] == symbol && gameboard[7] == symbol && gameboard[8] == symbol){
return true;
}

//vertical winning
else if(gameboard[0] == symbol && gameboard[3] == symbol && gameboard[6] == symbol){
return true;
}
else if(gameboard[1] == symbol && gameboard[4] == symbol && gameboard[7] == symbol){
return true;
}
else if(gameboard[2] == symbol && gameboard[5] == symbol && gameboard[8] == symbol){
return true;
}

//diagonal winning
else if(gameboard[0] == symbol && gameboard[4] == symbol && gameboard[8] == symbol){
return true;
}
else if(gameboard[2] == symbol && gameboard[4] == symbol && gameboard[6] == symbol){
return true;
}


else{
return false;
}

}


let _numberOfElements = 0;
//this is for when nobody wins and they filled all the containers
function checkForTie(){
for(let i =0;gameboard.length > i;i++){
if(gameboard[i] == 'o' || gameboard[i] == 'x' ){
_numberOfElements = _numberOfElements +1;

}

}

if(_numberOfElements == 9){
return true;
}
else{
_numberOfElements = 0;
}
}



matchWinningPatternsForPlayers('o');
matchWinningPatternsForPlayers('x');

if(matchWinningPatternsForPlayers('o')){
return 'player One Won';
}
else if(matchWinningPatternsForPlayers('x')){
return 'player two won';
}
else if(checkForTie()){
return `it's a tie`;
}
else{
return '';

}

})

//let the user know that it's the first player turn at the beginning of the game
document.querySelector('h3').innerText = `${returnPlayerTurn()}`

playAgainButton = document.querySelector('section:nth-of-type(2) > button')
playAgainButton.addEventListener('click', resetTheGame);

function resetTheGame(){
//reset the scores
gameboard = [];
//unfill all the divs that have images
itemsForTheFirstDiv = document.querySelectorAll('section:first-of-type > *');
for(index =0; index < itemsForTheFirstDiv.length; index++){
itemsForTheFirstDiv[index].innerHTML = '';
}
//add the event listener back
field.addEventListener('click', fillContainer)

//get the player one turn back
playerOneTurn = true;

//empty the heading elements
document.querySelector('h2').innerText = '';
document.querySelector('h3').innerText = '';
}

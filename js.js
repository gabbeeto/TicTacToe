function selectElement(element){
return document.querySelector(element)
}

function selectElementAll(element){
return document.querySelectorAll(element)
}

function mkElement(element){
return document.createElement(element);

}



const returnPlayer = (function() {

let _playerOneTurn = true;

function switchPlayer(){
if(_playerOneTurn){
_playerOneTurn = false;
return 'o';
}
else{
_playerOneTurn = true;
return 'x';
}
}

return {switchPlayer}

})();


gameboard = []

const field = selectElement('section:first-of-type');
field.addEventListener('click', fillContainer );

function fillContainer(event){
switch(event.target.id){
	case 'one':
		if(!gameboard[0]){
		gameboard[0] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(0);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'two':
		if(!gameboard[1]){
		gameboard[1] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(1);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'three':
		if(!gameboard[2]){
		gameboard[2] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(2);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'four':
		if(!gameboard[3]){
		gameboard[3] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(3);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'five':
		if(!gameboard[4]){
		gameboard[4] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(4);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'six':
		if(!gameboard[5]){
		gameboard[5] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(5);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'seven':
		if(!gameboard[6]){
		gameboard[6] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(6);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'eight':
		if(!gameboard[7]){
		gameboard[7] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(7);
		//checkWinner();
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
	case 'nine':
		if(!gameboard[8]){
		gameboard[8] = returnPlayer.switchPlayer()
		console.log(gameboard);
		updateArrayIntoHtml(8);
		document.querySelector('h2').innerText = checkWinner();
		}
		break;
}
}


function updateArrayIntoHtml(number)  {
img = document.createElement('img');
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



let checkWinner = (function checkWinner(){

const winningPatterns = function(symbol) {
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



winningPatterns('o');
winningPatterns('x');
if(winningPatterns('o')){
return 'player One Won';
}
else if(winningPatterns('x')){
return 'player two won';
}
else{
return '';

}

})


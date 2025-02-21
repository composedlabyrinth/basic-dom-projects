let randomNumber = parseInt(Math.random() * 100 + 1)
let guessField = document.querySelector('.guessField')
let submit = document.querySelector('#subt')
let allGuesses = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let botdiv = document.querySelector('.resultParas')

const p = document.createElement('p');
p.classList.add('button');
p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

playgame = true
let numGuess = 1;

if(playgame){
submit.addEventListener('click', function(e){
  e.preventDefault()
  let userInput = guessField.value
  //console.log(userInput)
  validateGuess(userInput);
})
}
function validateGuess(guess){
 if(isNaN(guess) || guess >= 100 || guess <=0){
  displayMessage(`Please enter a valid integer between 1 and 100`)
 } else {
  if (numGuess === 10) {
    infoUpdate(guess);
    displayMessage(`Game Over!💀 \n Random number was ${randomNumber}`);
    endGame();
  } else {
    checkGuess(guess);
    infoUpdate(guess);
  }
 }
}

function checkGuess(guess){
  guess = parseInt(guess, 10);
  if(guess === randomNumber){
   displayMessage(`You Win! The random number was ${randomNumber}`)
   endGame();
  } else if (guess>randomNumber){
    displayMessage(`Guess is Too High`)}
    else {
      displayMessage(`Guess is Too Low`)
    }
}

function infoUpdate(guess){
  guessField.value = '';
  allGuesses.innerHTML += `${guess}, `
  remaining.innerHTML = `${10 - numGuess}`
  numGuess++
}


function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  botdiv.appendChild(p);
  guessField.value = '';
  guessField.setAttribute('disabled','');
  playgame= false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    e.preventDefault();
    guessField.value='';
    randomNumber = parseInt(Math.random() * 100 + 1);
    allGuesses.innerHTML='';
    numGuess=1;
    displayMessage(`New game begins`)
    guessField.removeAttribute('disabled');
    remaining.innerHTML=10
    if (botdiv.contains(p)) {
      botdiv.removeChild(p);
    }
    playgame=true;
  });


}
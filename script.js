/*
Camel Case -> yourScore
Snake Case -> GAME_OPTIONS
 */

const result = document.querySelector(".result")
const gamePlay = document.querySelector(".jogada")
const yourScore = document.querySelector(".your-score span")
const machineScore = document.querySelector(".machine-score span")
const resultEmoji = document.querySelector(".result-emoji")


const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors"
}


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
  const random = Math.floor(Math.random() * 3)

  return choices[random]
}



const playTheGame = (human, machine) => {


  if (human === machine) {
    result.innerHTML = "Draw Game!"
    resultEmoji.innerHTML = "&#128556"
    resultEmoji.style.fontSize = "50px"
  } else if (
             (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
             (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) || 
             (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
            ){
    result.innerHTML = "You Win!"
    yourScore.innerHTML = ++humanScoreNumber
    resultEmoji.innerHTML = "&#128513"
    resultEmoji.style.fontSize = "50px";
  
  } else {
    result.innerHTML = "You Loose!"
    machineScore.innerHTML = ++machineScoreNumber
    resultEmoji.innerHTML = "&#128545"
    resultEmoji.style.fontSize = "50px";

  }
  gamePlay.innerHTML = "Humano : " + human + " /" + " Maquina: " + machine
}


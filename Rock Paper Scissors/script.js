
let totalScores = { "playerScore": 0, "computerScore": 0 }


function getComputerChoice() {
  const rps = ['Rock', 'Paper', 'Scissors']
  let random = Math.floor(Math.random() * rps.length)
  return rps[random]
}

function getResult(playerChoice, computerChoice) {
  let score
  
  if (playerChoice == computerChoice) { 
    score = 0 
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else {
    score = -1
  }

  return score

}

function showResult(score, playerChoice, computerChoice) {
  const scoreTotal = document.getElementById('playerScore')
  const hands = document.getElementById('hands')
  const result = document.getElementById('result')
  hands.innerText = `${playerChoice} vs ${computerChoice}`

  if (score == 1) {
    result.innerText = `You Win!`
  } else if (score == 0) {
    result.innerText = `It's a Draw!`
  } else {
    result.innerText = `You Loss!`
  }

  totalScores["playerScore"] += score
  totalScores["computerScore"] -= score
  scoreTotal.innerText =
    `Your Score: ${totalScores["playerScore"]} | Computer Score: ${totalScores["computerScore"]}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)

  showResult(score, playerChoice, computerChoice)
}

const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => 
  endGame()


function playGame() {
  
  let rpsButton = document.querySelectorAll('.rpsButton')
 
  rpsButton.forEach(button => {
    button.onclick = () => onClickRPS(button.value)
  })

}

function endGame() {
  totalScores['playerScore'] = 0
  totalScores['computerScore'] = 0
  const scoreTotal = document.getElementById('playerScore')
  const hands = document.getElementById('hands')
  const result = document.getElementById('result')
  scoreTotal.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()
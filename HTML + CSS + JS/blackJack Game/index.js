//using the isAlive, hasBlackJack, and emptyBalance to know when to start or stop the game.

let cards = []
let sum = 0
let message = ''
let isAlive = false
let hasBlackJack = false
let docMessage = document.getElementById('message')
let docCards = document.getElementById('cards')
let docSum = document.getElementById('sum')
let docBalance = document.getElementById('balance')

//created player object to store player details i.e name and balance details
////Assigning 100 to balance as amount i have to bet with
let player = {
  name: 'john',
  balance: 100,
  emptyBalance: false,
}

//function to generate a random Card. It generates a number between 1-11 because i multiplied Math.random() by 11 and added 1
function randomCard() {
  //Math.random() generates a random number between 0 - 0.999
  //Math.floor() removes the decimals of a number
  let randomNumber = Math.floor(Math.random() * 13) + 1
  //In blackJack, Ace which is 1 is treated as 11 and king, queen, and jack which is 11-13 is treated as 10
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  } else {
    return randomNumber
  }
}

//function to start game
//isAlive is true because clicking on startgame, we want the game to start
//put if statement in startgame() function to check whether account balance is empty or not. If yes, game wont start and will eun else statement
function startgame() {
  if (player.emptyBalance === false) {
    let card1 = randomCard()
    let card2 = randomCard()
    cards = [card1, card2]
    sum = card1 + card2

    isAlive = true

    rendergame()
  } else {
    docMessage.textContent = 'Account Balance is empty'
  }
}

//Function to render game. Checks value of sum of the Cards and renders to screen approriate message, cards and sum of cards
function rendergame() {
  docCards.textContent = 'Cards: '
  //A for loop thats displays the cards currently in array
  for (let i = 0; i < cards.length; i++) {
    docCards.textContent += cards[i] + ' | '
  }
  docSum.textContent = 'Sum: ' + sum

  //Made it so that balance is incremented when i have blackjack, or decremented when cards sum is over 21.
  if (sum < 21) {
    message = 'Do you want to draw a new card?'
    isAlive = true
  } else if (sum === 21) {
    message = "You've got blackjack!!"
    player.balance += 50
    hasBlackJack = true
    isAlive = false
  } else {
    message = "You're out of the game!"
    player.balance -= 10
    isAlive = false
  }
  docMessage.textContent = message
  docBalance.textContent = player.name + ': ' + '$' + player.balance

  //modifies boolean value of emptyBalance when balance reaches 0
  if (player.balance === 0) {
    player.emptyBalance = true
  }
}

//Adds a new card to existing array of cards, calculates new sum and rerun the rendergame() funcion with new card included
//put if statement in newcard() function to check whether game has started or not. If no, button wont work
function newcard() {
  if (isAlive === true) {
    let newcard = randomCard()
    cards.push(newcard)
    sum += newcard

    rendergame()
  }
}

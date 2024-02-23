let countId = document.getElementById('Count')

//Addition Button - Adds to people entered
//could use below as onclick event listener but added onclick attribute to button in HTMl
//document.getElementById('Add').addEventListener('click', add)

function add() {
  countId.innerText = parseInt(countId.innerText) + parseInt(1)
}

//Subtraction Button - Subtracts from people Entered
//could use below as onclick event listener but added onclick attribute to button in HTMl
//document.getElementById('Subtract').addEventListener('click', subtract)

function subtract() {
  if (countId.innerText > 0) {
    countId.innerText = parseInt(countId.innerText) - parseInt(1)
  }
}

//Reset Button - Resets count to 0
//could use below as onclick event listener but added onclick attribute to button in HTMl
//document.getElementById('reset').addEventListener('click', reset)

function reset() {
  countId.innerText = 0
}

//Save Button - Saves and resets count
//able to access save function cause i added onclick attribute to save button with save() value
//created a paragraph 'entries' that stores my saved values. I concatenate new value of count to it.
let entry = document.getElementById('entries')
function save() {
  let count = countId.innerText + ' - '
  entry.innerText += ' ' + count

  countId.innerText = 0
}

let leads = []
const docInputLead = document.getElementById('inputLead')
const docSaveLead = document.getElementById('saveLead')
const docList = document.getElementById('list')
const docDeleteLead = document.getElementById('deleteLead')
const docSaveTab = document.getElementById('saveTab')
//getting all items saved in the local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

//checking for truthy. if local storage is empty, dont do anything. if not, render to screen all elements in leads array
if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage
  render(leads)
}

//a function that renders our list items to the page
function render(x) {
  //a list items variable to hold array values as iteration occurs then gets rendered to page after loop is done
  let listItems = ''
  //for loop to display array content
  //using the innerHTML property to be able to use hmtl tags and render them in javascript
  for (let i = 0; i < x.length; i++) {
    //used string template here. it allows you to write strings without things like the + symbol. then variables are called using the ${variable_name}. it is wrapped in ``.
    listItems += `
    <li>
        <a href="${x[i]}" target="_blank">
            ${x[i]} 
        </a>
    </li>
    `
  }
  docList.innerHTML = listItems
}

//Using the event listener to add onclick attribute
//listener to add and save Leads to array when the save button is clicked
docSaveLead.addEventListener('click', function () {
  //the value property is used to get value from a text or input box
  leads.push(docInputLead.value)
  docInputLead.value = ''

  //Using JSON.stringify to turn arrays into strings and store them in local storage. this is neccesary because localstorage can only accept strings
  localStorage.setItem('myLeads', JSON.stringify(leads))

  render(leads)
})

//Listener to push fetched tabs to my leads array, save in local storage, and render them to page
//used chrome tabs API to grab a hold of current tab and pushed it to array and render it.
docSaveTab.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    leads.push(tabs[0].url)

    localStorage.setItem('myleads', JSON.stringify(leads))
    render(leads)
  })
})

//a function to delete all leads from array, local storage, and the DOM when delete button is double clicked. (dblclick) listens to double clicks.
docDeleteLead.addEventListener('dblclick', function () {
  localStorage.clear()
  leads = []
  render(leads)
})

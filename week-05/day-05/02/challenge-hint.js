// require inquirer
var inquirer = require('inquirer');


// define our initial quotes
var quotes = [{
    author: 'Bryan',
    quote: 'I wanna be the very best'
  },
  {
    author: 'Ash',
    quote: 'Like no one ever was'
  },
  {
    author: 'Pikachu',
    quote: 'To catch them is my real test'
  },
  {
    author: 'Test',
    quote: 'To train them is my cause'
  }
]


// call on the function that displays our main menu

mainMenu();

// define a function that displays the main menu
function mainMenu() {

  // prompt the user to choose between three options
  inquirer.prompt([{
    type: 'list',
    message: 'What would you like to do?',
    choices: ['add', 'display', 'exit'],
    name: 'choice'
  }]).then(function (response) {


    // depending on the user selection, 


    // call on a function to show the quotes
    if (response.choice === 'display') {
      display();
    }


    // call on a function to add a new quote
    else if (response.choice === 'add') {
      add();
    }


    // exit the application by not calling on any functions
    else if (response.choice === 'exit') {
      
    }
  })
}




// define a function that will show the user all the quotes to choose from
function display() {



  // create a new array of all the authors of the quotes to use for the user prompt
  var array = [];
  for (var i = 0; i < quotes.length; i++) {
    array.push(quotes[i].author);
  }

  // ask the user to choose which author's quote they want to see
  inquirer.prompt([{
    type: 'list',
    message: 'Whose quote do you want to see?',
    choices: array,
    name: 'choice'
  }]).then(function (response) {
    // find the quote by the chosen author and display it
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].author === response.choice) {
        console.log(quotes[i].quote)
      }
    }
    mainMenu();
  })





}

// define a function that lets the user add quotes to the display list
function add() {



  // ask the user to input the author and then the quote
  inquirer.prompt([{
      type: 'input',
      message: 'Who said this quote?',
      name: 'author'
    },
    {
      type: 'input',
      message: 'What did they say?',
      name: 'quote'
    }

  ]).then(function (response) {
    // add the new quote with the corresponding author into our quote storage

    var object = {}
    object['author'] = response.author;
    object['quote'] = response.quote;
    quotes.push(object);
    mainMenu();
  })



}
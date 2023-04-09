
const fs = require('fs');
const inquirer = require('inquirer');



    function someFunc(this_is_correct) {
      return new Promise((resolve, reject) => {
      if (this_is_correct) return resolve('we resolved it kez!');



      reject('your work just got rejected');
      })
      }

      //include questions regarding my name, my github username, email, other networks to reach me,

   const questions = [

    {
        
        type: 'input',
        message: 'What is your name?',
        name: 'myName'
    },
    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'gitHubUsername'
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'myEmailAddress'
    },
    {
        type: 'input',
        message: 'Where else can I reach you?',
        name: 'reachMeAt'

    }

]

inquirer.prompt(questions).then (answers => {
answers.mainCharacter


console.log(answers)
})
.catch (err => {
console.log(err);


})




// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

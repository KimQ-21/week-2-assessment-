console.log("Welcome to the password validator tool!");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userPass = ''

reader.question("What is your password?", (answer) => {
if (answer.length >= 10){
    console.log ('Password input success!')
  }
  else {
    console.log ('Password input failure. Please try again.')
  }
  reader.close()
});
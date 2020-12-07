

//ex.02 : read the name of your user

var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question("what is your name.?");

// ex03: welcome your user
var welcomeMsg = `Hey ${chalk.bold.white.bgYellow(username)} Welcome!!! Good to see you here...` 

console.log(chalk.blue.underline(welcomeMsg))

//End Game 

var UserIntrest =  readlineSync.question("Are you ready to play my CLI Game..?");

if(UserIntrest == "yes"){
  console.log("ALl the best..!!1 This Small fun Quiz will test how Well do you Know me ")
  console.log(chalk.red("---------------------------------------------"))
}else{
  console.log("Okay..!! Then to You have to Play the game...hahah")
   console.log(chalk.red("--------------------------------------------"))
}

var score = 0 ;



function playGame(UserQuestion   , correctAnswer ){
  var questions = readlineSync.question(UserQuestion);

  if(questions === correctAnswer){
    // console.log(explanation)
    console.log(chalk.bold.black.bgGreen("Yes it's Right..!!"));
    score = score + 2;
  console.log(chalk.red("------------------"))

  }else{
    console.log( chalk.bgRed("It's wrong.."));
    score = score - 2;

  }
    console.log("your score is " + score);

}




 var Game = [{
  Question : `Who was the captain of Mumbai Indians
  a : Rohit sharma
  b : KL Rahul
  c : MS Dhoni`,
  Answer : "a",
  // explanation: "A/26 cidco colony",
  
},
{
  Question : `Who won the IPL 2020..? 
  a : Delhi Capitals
  b : Mumbai Indians
  c : Kings XI Punjab`,  
  Answer : "b",
},
{
  Question : `Who was the Orange Cap Holdar
  a: Quinton de Kock
  b: Kl Rahul
  c: Shikar Dhawan`,
  Answer : "b",
},
{
  Question : `Who was the Purple Cap Holdar..?
  a: Jasprit Bhumrha
  b: Trent Bolt
  c: Kagiso Rabada`,
  Answer : "c",
},
{
  Question : `Where was the IPL 2020 conducted..?
  a: dubai
  b: India
  c: England`,
  Answer : "a",
},

]

for(var i = 0; i < Game.length; i++){
  var currentQuestion = Game[i]
  playGame(currentQuestion.Question + `  ` ,currentQuestion.Answer)
  // playGame(currentQuestion.explanation)
  
  console.log(chalk.red("------------------"))

  }
  console.log("Thank you for Playing..!!! send Me the screenshot of your final score")
  



var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question("Hi! What's your name?")

console.log(chalk.cyan("Welcome "+chalk.blue.bold(userName)+ " ! to a quiz on Cricket, Let's see how well you know Cricket"));

var score = 0;
var highScore = 0;
var tryAgain = "1";
var num = 1;                             
while(tryAgain=="1")
{
  //play fuction
  function play(question, answer)
  {
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer)
    {
      console.log(chalk.green("You are right!"));
      score++;
    }
    else
    {
      console.log(chalk.red("You are wrong!"));
    }
    console.log("current score is "+score);
    console.log("\n");
  }

  var questionsL1 = [
    {question : "Who invented Cricket?",
    answer : "england" },
    {question : "Which countries played the first ever international Cricket match?(format:- first_country " +chalk.yellow("and") +" second_country)",
    answer : "england and australia"},
    {question : "In which year was the first ever international Cricket match played?(format:-yyyy)",
    answer : "1877"},
    {question : "Where was the first ever international Cricket match played?",
    answer : "melbourne"}
    ];

  var questionsL2 = [
    {question : "In which year did India win their first ODI world cup?",
    answer : "1983" },
    {question : "Who captained team INDIA during their first ODI world cup win?",
    answer : "kapil dev"},
    {question : "In which year did India win their second ODI world cup?",
    answer : "2011"},
    {question : "Who captained team INDIA during their second ODI world cup win?",
    answer : "dhoni"}
    ];

  var questionsL3 = [
    {question : "In which year did INDIA win their first T20 world cup?",
    answer : "2007" },
    {question : "In which year did INDIA win their first Champions Trophy?",
    answer : "2013"}
    ];

  console.log("\n");
  console.log("Level 1");
  console.log("\n");
  for(var i=0; i<questionsL1.length; i++)
  {
    play(questionsL1[i].question, questionsL1[i].answer);
  }

  if(score === 4)
  {
    console.log("\n");
    console.log("Congrats! now you are eligible to take up level 2");
    console.log("\n");
    console.log("Level 2");
    console.log("\n");

      for(var i=0; i<questionsL2.length; i++)
      {
        play(questionsL2[i].question, questionsL2[i].answer);
      }
  }
  else
  {
    console.log("\n");
    var req = 4-score
    console.log("You require "+req+" more point/s to unlock level 2");
  }

  if(score === 8)
  {
    console.log("\n");
    console.log("Congrats! now you are eligible to take up the final Level");
    console.log("\n");
    console.log("Final level");
    console.log("\n");23

      for(var i=0; i<questionsL3.length; i++)
      {
        play(questionsL3[i].question, questionsL3[i].answer);
      }
  }
  else if(score>=4 && score<8)
  {
    console.log("\n");
    var req1 = 8-score
    console.log("You require "+req1+" more point/s to unlock the final level");
  }

  if(score === 10)
  {
    console.log("\n");
    console.log("You seem to be a die hard fan of cricket!!! You have answered all the questions correctly \n");
  }

  console.log(chalk.blue.bgWhite("Your final score is "+chalk.bold(score)));
  console.log("\n");
  if(score>=highScore)
  {
    if(score === highScore)
    {
      console.log(chalk.yellow("Congrats! You have equalled your previous high score."));
    }
    else
    {
      console.log(chalk.yellow("Congrats! You have set a new high score."));
    }
    console.log("\n");
    highScore = score;
  }
  tryAgain = readlineSync.question(chalk.blue("Do you want to try again? \n If yes press else "+chalk.red("1") +"\n If you want to exit press "+ chalk.red("0")));
  console.log("\n");
  if(tryAgain=="1")
  {
    num++;
    console.log("------------------------------------------");
    console.log("attempt "+(num));
    console.log("\n");
    score=0;
  }
  else
  {
    console.log("Thank you for taking the quiz");
  }
}

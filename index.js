/* Create a quiz app about Gomathi - use the data structure to hold data and add score for every correct answer*/
//install readline-sync module
var readlineSync = require("readline-sync");

//initialise variable to store the score
var score = 0;

//array of objects which contains questions and answers for quiz
var qna = [{
        question: "Which is my native place? ",
        answer: "Coimbatore"
    },
    {
        question: "What is my favorite colour? ",
        answer: "Green"
    },
    {
        question: "Do I have siblings? ",
        answer: "no"
    },
    {
        question: "Which is my favourite book? ",
        answer: "Ponniyin selvan"
    },
    {
        question: "Am I a graduate? ",
        answer: "yes"
    }
];

//array of objects which contains highScorer's details
var highScore = [{
        name: "Sasi",
        score: 5
    },
    {
        name: "Kumar",
        score: 5
    }
];

//function to get the user name and display welcome message
function welcome() {
    console.log("QUIZ TO FRNDZ\n");
    var username = readlineSync.question("Hello friend, Please enter your name : ");
    console.log("\nHi " + username + "! Lets see how far you know about Gomathi. Here are some questions from her. Enjoy your quiz!!\n");
    console.log("-----------------------------------------------\n");
}

//function to check the correct answer and display current score
function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        score = score + 1;
        console.log("You are right!\nYour current score : " + score);
    } else {
        console.log("You are wrong!\nYour current score : " + score);
    }
}

//function to ask all the questions one by one to the user
function play() {
    for (var i = 0; i < qna.length; i++) {
        quiz(qna[i].question, qna[i].answer);
        console.log("-----------------------------------------------\n");
    }
}

/* Challenge - Show the user his score and the Highest score of all the user */
//function to display the overall top score of the quiz
function showHighScore() {
    console.log("Your Final score : " + score);
    console.log("\nCheck out the User who got high score.");

    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    for (var i = 1; i <= highScore.length; i++) {
        console.log(highScore[i - 1].name + " : " + highScore[i - 1].score);
    }
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    if (score === 5) {
        console.log("Congratulations!!✨🎉🎊\nYou have beaten the high score!!!\nPlease send the screenshot of your score to gomathicoder@gmail.com to add your name in the top scorer list");
    } else {
        console.log("Lets spend some more time together😀. I am sure that you will beat the high score next time!!😊");
    }
}

//calling all the required functions for the quiz one after another
welcome();
play();
showHighScore();
'use strict';


// we will asign all the QA object that we will need for the quiz
var quiz = [];

// keep track of the number of point that the user got for every question
var count = 0;

// Keep track of the current question being rendered


// QA constructor
var QA = function (question, answerArray, idQuestion, idAnswer) {
  this.question = question;
  this.answerArray = answerArray;
  this.selectedAnswer = -1;
  this.idQuestion = idQuestion;
  this.idAnswer = idAnswer;
  quiz.push(this);
};


// this instance method will create a new Answer and then add it to this.answerArray (I do not think i need this anymore because of line 29...)
QA.prototype.addAnswer = function (answer, point) {
  this.answerArray.push(new Answer(answer, point));
};

// Answer constructor
var Answer = function (answer, point) {
  this.answer = answer;
  this.point = point;
};

// This is where we create our questions
new QA(
  'When I\'m watching a movie I',
  [new Answer('<--Choose Option-->', 0),
    new Answer('Hope the Hero wins 100%', 1),
    new Answer('Secretly root for the villain', 2),
    new Answer('Cheer when the hero wins but feel bad for the villain...they are just misunderstood', 3),
    new Answer('I don\'t have time for movies...I\'m too busy trying to save the universe from evil sith Lords', 4),
    new Answer('Only pay attention when the characters are singing and dancing', 5)],
  'question1',
  'answer1');
new QA(
  'My preferred habitat is',
  [new Answer('<--Choose Option-->', 0),
    new Answer('English cottage', 1),
    new Answer('Gloomy castle', 2),
    new Answer('Pirate ship', 3),
    new Answer('Modern metal and glass building', 4),
    new Answer('Creepy cave in the Underworld', 5)],
  'question2',
  'answer2');
new QA(
  'My ideal pet would be:',
  [new Answer('<--Choose Option-->', 0),
    new Answer('Cat', 1),
    new Answer('Bunny', 2),
    new Answer('Cricket', 3),
    new Answer('Raven', 4),
    new Answer('Eel', 5)],
  'question3',
  'answer3');
new QA(
  'The best present I could receive would be:',
  [new Answer('<--Choose Option-->', 0),
    new Answer('A book', 1),
    new Answer('A watch', 2),
    new Answer('A sewing machine', 3),
    new Answer('A roll of scotch tape', 4),
    new Answer('The soul of my enemy in a box', 5)],
  'question4',
  'answer4');
new QA(
  'When I grow up, I want to be:',
  [new Answer('<--Choose Option-->', 0),
    new Answer('A King', 1),
    new Answer('Stinkin\' Rich', 2),
    new Answer('A Super Hero!!!', 3),
    new Answer('Robot/Android', 4),
    new Answer('Lord of the Underworld', 5)],
  'question5',
  'answer5');


function renderQuiz() {
  for (var i = 0; i < quiz.length; i++) {
    var buttomEl = document.getElementById(quiz[i].idAnswer);
    var questionEl = document.getElementById(quiz[i].idQuestion);
    questionEl.textContent = quiz[i].question;
    for (var j = 0; j < quiz[i].answerArray.length; j++) {
      quiz[i].selectedAnswer++;
      var answerEl = document.createElement('option');
      answerEl.textContent = quiz[i].answerArray[j].answer;
      buttomEl.appendChild(answerEl);
    }
  }

}




// We need to store the answers for the selected answer
function addSelectedAnswer() {

  for (var i = 0; i < quiz.length; i++) {
    var selectElement = document.getElementById(quiz[i].idAnswer);
    var answerValue = selectElement.value;
    console.log(answerValue);
    for (var j = 0; j < quiz[i].answerArray.length; j++) {
      var a = quiz[i].answerArray[j].answer;
      if (answerValue === a) {
        count += quiz[i].answerArray[j].point;
      }
    }
  }
// add a new item to localstorage with th key of "score" value ## (count)
  localStorage.setItem('score', count);
  console.log(count);

}




// Creating a function for the submit button
function handleSubmit(event) {
  
  event.preventDefault();
  // window.localStorage.clear();
  addSelectedAnswer();

}

// Create event listener to submit quiz answers
var submitQuiz = document.getElementById('submit');

console.log(submitQuiz);
submitQuiz.addEventListener('submit', handleSubmit);
renderQuiz();








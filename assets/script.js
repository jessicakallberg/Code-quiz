//variables for dom elements
var startBox = document.querySelector('#start-box')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBox = document.getElementById('question-box')
const question = document.getElementById('question')
const answerButton = document.getElementById('answer-button')
const score = document.getElementById('score')
const highScore = document.getElementById('high-score')
const timer = document.getElementById('timer')
const timeLeft = document.getElementById('time-left')
const startingMinutes = 60
var actualTimer;
let currentQuestionIndex;
let time = 60;

//the timer

function startCountdown() {
    actualTimer = setInterval(updateCountdown, 1000);
}

function updateCountdown() {

    let seconds = time;
    timeLeft.innerHTML = `${seconds}`;
    time--;
    console.log(parseInt(timeLeft.innerHTML));
    if (time < 1) {
        stopCountdown();

    }
}

function stopCountdown() {
    clearInterval(actualTimer);
    timeLeft.innerHTML = "Time's Up"
}
//attach event listener to start btn

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', setNextQuestion)
//create function to start quiz
function startQuiz() {
    console.log('starting quiz')
    startCountdown();
    //hide start box
    startBox.classList.add('hide')
    currentQuestionIndex = 0
    questionBox.classList.remove('hide')
    score.classList.remove('hide')
    highScore.classList.remove('hide')
    timer.classList.remove('hide')
    timeLeft.classList.remove('hide')

    //create a function to get questions to render on screen
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(currentQuestionIndex)
}

//use the inner html to inject a question into the question box
function showQuestion(questionIndex) {
    question.innerText = questions[questionIndex].name
    currentQuestionIndex++

    let answer = questions[questionIndex].answers



    answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        else {
            button.dataset.correct = answer.correct

        }
        button.addEventListener('click', function (e) {
            selectAnswer(e, answer);
        })
        answerButton.appendChild(button)
    })
}

function resetState() {

    //nextButton.classList.add('hide')
    while (answerButton.firstChild) {
        answerButton.removeChild
            (answerButton.firstChild)
    }
}

function selectAnswer(e, answer) {
    const selectedButton = e.target
    console.log(selectedButton, answer.correct);

    const correct = selectedButton.dataset.correct;


    setStatusClass(selectedButton, correct)

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct == "true") {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
        time = time - 10;
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

//variable for questions
const questions = [
    {
        name: 'what does html stand for?',
        answers: [
            { text: 'Hyper text markup language', correct: true },
            { text: 'Hot tamale meat lovers', correct: false },
            { text: 'Height mark lingo', correct: false },
        ]
    },
    {
        name: 'What does var stand for in JavaScript?',
        answers: [
            { text: 'Victory allocation reason', correct: false },
            { text: 'Height mark lingo', correct: false },
            { text: 'Variable', correct: true },
        ]
    },
    {
        name: 'The "script" element is used to incorporate which type of code?',
        answers: [
            { text: 'Javascript', correct: true },
            { text: 'HTML', correct: false },
            { text: 'Python', correct: false },
        ]
    },
    {
        name: 'What does the "alert()" function tells the browser to do?',
        answers: [
            { text: 'Alert the user their cell phone battery is low', correct: false },
            { text: 'Tell the browser to turn off the screen', correct: false },
            { text: 'To display a message in form of a pop up window', correct: true },
        ]
    },
    {
        name: 'What is the name for the code between the curly braces?',
        answers: [
            { text: 'Curly code', correct: false },
            { text: 'C++', correct: false },
            { text: 'code block', correct: true },
        ]
    },
]



//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
























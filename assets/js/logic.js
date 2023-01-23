// this file will hold all of the logic for this task.


// ------- pseudo code ------------------------//
//step1: when i press start quiz, the timer will count down and the first screen will be hidden. I will then see displayed the first question in the quiz and its choices.

//step2: when i click a choice it will say either "correct" or "wrong" - if wrong, 10 seconds will come off the timer; if correct the screen will be hidden and the next question and choices will appear. 

//step3: this process repeats until the quiz is over or until the timer counts down to zero.

//step4: when the quiz is over, the user will be presented with a form to add their initials along with their score. - this will be logged to the local storage.

//step5: the highscores page will display the users initails and their scores. they will have the option to clear the high scores if they wish.

// ---------------------------------------------//

// below i will start with creating variables for clickable actions

let startbtn = document.getElementById("start");
let time = document.getElementById("time");
let timer = questions.length * 15;
let countDownTimer;
let startScreen = document.getElementById("start-screen");





// function for starting the countdown of the clock
function countDown (){
timer--;
time.textContent = timer;
if (timer == 0){
    endQuiz();
}
}


function startQuiz(){
    countDownTimer = setInterval(countDown, 1000)
    time.textContent = timer;
}


//add event listener to start button - this will be used to start the quiz (start timer and reveal questions)
startbtn.addEventListener("click", startQuiz);
// this file will hold all of the logic for this task.


// ------- pseudo code ------------------------//
//step1: when i press start quiz, the timer will count down and the first screen will be hidden. I will then see displayed the first question in the quiz and its choices.

//step2: when i click a choice it will say either "correct" or "wrong" - if wrong, 15 seconds will come off the timer; if correct the screen will be hidden and the next question and choices will appear. 

//step3: this process repeats until the quiz is over or until the timer counts down to zero.

//step4: when the quiz is over, the user will be presented with a form to add their initials along with their score. - this will be logged to the local storage.

//step5: the highscores page will display the users initails and their scores. they will have the option to clear the high scores if they wish.

// ---------------------------------------------//

// below i will start with creating variables for clickable actions

let startbtn = document.getElementById("start");
let time = document.getElementById("time");
let timer = questions.length * 15;
let countDownTimer;

let submit = document.getElementById("submit");
let startScreen = document.getElementById("start-screen");
let questionScreen = document.getElementById("questions");
 let questionTitle = document.getElementById("question-title");
 let questionChoices = document.getElementById("choices");
let questionIndex = 0;
let feedback = document.getElementById("feedback");


function saveScore(){
let initialsForm = document.getElementById("initials");

let initials = initialsForm.value.trim();

if(initials !== ""){
        let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
        let newScore = {
            score: timer,
            initials: initials
        }
        highScores.push(newScore);

        localStorage.setItem("highscores", JSON.stringify(highScores));

        window.location.href = "highscores.html";
    }
}

function checkForEnter(event){
    if(event.key === "Enter") {
        saveScore();
    }

}




function endQuiz(){
    clearInterval(countDownTimer);
    questionScreen.setAttribute("class","hide");

    let end = document.getElementById("end-screen");
    end.removeAttribute("class")

    let finalScore = document.getElementById("final-score");
    finalScore.textContent = timer;


}


// function for starting the countdown of the clock, for for terminating it if it reaches zero. it will the run the end quiz if this happens
function countDown (){
timer--;
time.textContent = timer;
if (timer === 0){
    endQuiz();
}
}



function displayQuestions(){
    // creating a current question value linked to the array index of my question so that i can easily increase this value in the future
    let currentQuestion = questions[questionIndex];
    questionTitle.textContent = currentQuestion.question;
// i am using the 'forEach method' below to print a new button within the html for each question choice. I am then setting the value to be the same as the choice so that i can see if this matches the questions correct answer
    questionChoices.innerHTML = "";

    currentQuestion.choices.forEach(function(item,index){
        let choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class","choice");
        choiceBtn.setAttribute("value", item);

        choiceBtn.textContent = `${index + 1}. ${item}`

        //the code below displays the buttons and adds an event listener to log the users choice
        questionChoices.append(choiceBtn);
        choiceBtn.addEventListener("click", userChoice);
      
    })


}

function userChoice(){
//console.log(this.value);
if (this.value == questions[questionIndex].answer){   feedback.setAttribute("class", "feedback")
    feedback.textContent = "correct!"
    questionIndex++; // if correct the next question is displayed
   
    setTimeout(function(){
        feedback.setAttribute("class","feedback hide")
    }, 600);
    setTimeout(function(){
        displayQuestions()
    }, 600);
} else {
        feedback.setAttribute("class","feedback")
        feedback.textContent = "Wrong - try again"
        timer -= 15;

        if(timer < 0){timer = 0;
        endQuiz()}

        time.textContent = timer;
        setTimeout(function(){
        feedback.setAttribute("class","feedback hide")
    }, 1000);
}
//this code below stops the quiz once the user has answered all the questions
if (questionIndex === questions.length){
    endQuiz();
}
}

function startQuiz(){
    countDownTimer = setInterval(countDown, 1000)
    time.textContent = timer;
    startScreen.setAttribute("class","hide"); //hide the start screen so that questions can be displayed.

    questionScreen.removeAttribute("class","hide");//remove hide class from questions id so that the questions become visable

    displayQuestions();

}


//add event listener to start button - this will be used to start the quiz (start timer and reveal questions)
startbtn.addEventListener("click", startQuiz);

//this code stars the save score function when the submit button is clicked.
submit.addEventListener("click", saveScore);

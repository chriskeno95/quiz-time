function PrintHighScore(){
let highScores = JSON.parse(localStorage.getItem("highscores")) || [] // this code displays the values stored within the highscores object within the local storage or displays nothing (empty array)

//this code uses the sort method to compare two values. This allows the scores to presented in desending order - the highest score first.
highScores.sort(function(a,b){
    return b.score - a.score;
})

//this is a forEach function that grabs all the score values from the highscores, and then creates and logs them into list items with initials and score as the text content.
highScores.forEach(function(score){
    let li = document.createElement("li");
    li.textContent = `${score.initials} - ${score.score}`

    let ol = document.getElementById("highscores");
    ol.appendChild(li);
// above code displays the list items on the page as children to the ordered list.
})
}
// deleted the highscores from the page and local storage. and reloads the page so they are visually removed
function clearHighScores(){
    localStorage.removeItem("highscores");
    window.location.reload();
}
//below code runs the function above when the clear button is clicked by the user
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);

//this prints any highscores that are saved within the local storage.
PrintHighScore();
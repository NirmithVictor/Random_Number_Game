// Variable to store the list of guesses 
guessedvalues=[];
// Variable for store the correct random number 
let correctNumber=getRandomNumber();
console.log(correctNumber);

//load it onto the windows and activate the buttons to what they are supposed to do!!
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", resetGame);
    //showYouWon();
}

//to start the game
function playGame(){
  let number=document.getElementById("number-guess").value;
  //console.log(number);
  replystatement(number);
  saveGuessHistory(number);
  displayHistory();
}

//if statements to help the person guessing the values are closer to the answer or not
function replystatement(number){
  if(number<correctNumber){
    //document.getElementById("result").innerHTML="Too far off Boi!!";
    //console.log("Too far off Boi!!");
    showNumberBelow();
  }
  else if(number>correctNumber){
    //document.getElementById("result").innerHTML="Too ahead off Boi!!";
    //console.log("Too ahead Boi!!");
    showNumberAbove();
  }else if(number=="" || number==0){
    alert("The Value Is Either Lesser Than 0 Or Empty")
  }
  else{
    //document.getElementById("result").innerHTML="Damn Nailed It!!";
    //console.log("Damn Nailed It")
    showYouWon();
  }
}

//To Reset The Game
function resetGame(){
  // Reset The Correct Value, Result, Guess History And The Array With The Values In It
  correctNumber=getRandomNumber();
  console.log(correctNumber);
  guessedvalues=[];
  displayHistory();
}
//generate random number
function getRandomNumber(){
  let random=Math.floor(Math.random(1,100)*100)+1;
  return random;
}
//saves it in order to show the history of the number of inputs and guesses
function saveGuessHistory(guess) {
  guessedvalues.push(guess);
  console.log(guessedvalues);
}
//To Display The History Of Your Guesses!!!
function displayHistory() {
  let index=0; 
  let list = "<ul class='list-group'>";
  while(index<guessedvalues.length){
    list+="<li class='list-group-item'>"+"You guessed "+guessedvalues[index]+"</li>";
    index+=1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}
//To Show The Text And Add It To Your Dialog Statement If The Case Is A Win
function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog=getDialog("won",text);
  document.getElementById("result").innerHTML = dialog;
}
//If The Case Is Above
function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog=getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}
//If The Case Is Below
function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog=getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}
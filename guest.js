let guestNumber=79;
let guestButton = document.querySelector(".guess-btn")
let progressBar =document.querySelector("#progress");
let inputBar =document.querySelector(".number-input");
let guessses = document.querySelector(".guesses");
let startNewGame = document.querySelector(".main-btn")
let defeat = document.querySelector(".main-header")


const checkGuest = function(){
    if(inputBar.value>guestNumber){
        guessses.innerHTML = "Number is high"
    }
}
guestButton.addEventListener("click",checkGuest)

const progresss = function(){
    if(inputBar.value!=guestNumber){
        progressBar.value = progressBar.value +25
    }
}
guestButton.addEventListener("click",progresss)

const start = function(){
        inputBar.value=0
        progressBar.value=0
    }
startNewGame.addEventListener("click",start)

const progress = function(){
    if(inputBar.value==100){
      progressBar.value=100
      inputBar.setAttribute("disabled","disabled")
      guestButton.setAttribute("disabled","disabled")
      defeat.innerHTML="Game over"
    }
}
const progres = function(){
    if(inputBar.value==guestNumber){
      progressBar.value=100
      inputBar.setAttribute("disabled","disabled")
      guestButton.setAttribute("disabled","disabled")
      defeat.innerHTML="You win"
    }
}
guestButton.addEventListener("click",progress)
guestButton.addEventListener("click",progres)

const startt = function(){
        inputBar.value=0
        progressBar.value=0
        defeat.innerHTML="Guessing Game"
        inputBar.removeAttribute("disabled")
        guestButton.removeAttribute("disabled")
    }
startNewGame.addEventListener("click",startt)
const progressss = function(){
    if(inputBar.value==100){
      progressBar.value=100
      inputBar.setAttribute("disabled","disabled")
      guestButton.setAttribute("disabled","disabled")
      defeat.innerHTML="Game over"
    }
}
guestButton.addEventListener("click",progressss)
startNewGame.addEventListener("click",startt)
// guestNumber=Math.floor*(Math.random)
// guestButton.addEventListener("click", function () {
//   if (numberInput.value > guestNumber) {
//     progressBar.value += 25;
//     guessses.innerHTML = `${inputBar.value} is higer than the number`;
//   } if (progress.value === 100) {
//     guessBtn.setAttribute('disabled', 'disabled')
//     numberInput.setAttribute('disabled', 'disabled')
//     content.innerHTML = 'Game Over!'
//   } else if (numberInput.value < guestNumber) {
//     progressBar.value += 25;
//     guessses.innerHTML = `${inputBar.value} is lower than the number`;
//   } else {
//     progressBar.value  = 100;
//     guessses.innerHTML = `${inputBar.value} is true number`;
//     content.innerHTML = 'You Won!'
//   }
// });

// startBtn.addEventListener("click", function () {
//   progressBar.value  = 0;
//   guessses.innerHTML = "You started a new game!!!";
//   numberInput.value = 0;
// });

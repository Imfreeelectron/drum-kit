// document.querySelector(".button").addEventListner("click", handleClick);
//
// function handleClick() {
// alert("Hello");
// }

// When drum button will be pressed
var Length = document.querySelectorAll("button").length;
for (let i = 0; i < Length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}

function playSound() {
  setKeySound(this.innerHTML);
  console.log(this.innerHTML);
  buttonAnimation(this.innerHTML);
}


// When specific keys pressed in key-board
document.onkeypress = function(event) {
  setKeySound(event.key);
  buttonAnimation(event.key);
}


function setKeySound(key) {
  //alert("Hello!");

  console.log(key);

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:

  }
}
// To set animation after button or key ptressed in keyboard
function buttonAnimation(currentKey){
document.querySelector("." + currentKey).classList.add("pressed");
setTimeout(function(){document.querySelector("." + currentKey).classList.remove("pressed")},100);
}

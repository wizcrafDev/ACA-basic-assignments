let box = document.getElementById("box");
let position = { top: 0, left: 0 };
const step = 40;

// getting the width and height of the ur pc screen
const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

// this update the width and height of the screen when the screen is resized
window.addEventListener("resize", () => {
  maxWidth = window.innerWidth;
  maxHeight = window.innerHeight;
});

const handleKeyBoard = (event) => {
  // when keyup is pressed it checks what the position of the top is then sets the position new position
  // remember that top = 0 move div more upwards that why position.top is minus from steps
  // this && position.top > 0 checks if the position.top is already 0 so that means the function will not run (0 is not greater than 0)
  if (event.key === "ArrowUp" && position.top > 0) {
    console.log("up is clicked");

    position.top -= step;
  }

  // when keydown is pressed it checks what the position of the top is then sets the position new position
  // remember when top = 100px makes the box move downward that why position.top is plus from steps. so that it goes downwards
  // this && position.top < maxHeight - box.clientHeight checks if the position.top is less than maxHeight - box.clientHeight so that means the function will not run
  // example how this works (&& position.top < maxHeight - box.clientHeight) --- (100 < 1000 - 100) --- (100 < 900) --- true so the function will run
  // example how this works (&& position.top < maxHeight - box.clientHeight) --- (900 < 1000 - 100) --- (900 < 900) --- false so the function will not run
  if (
    event.key === "ArrowDown" &&
    position.top < maxHeight - box.clientHeight
  ) {
    console.log("down is clicked");

    position.top += step;
  }

  // when keyleft is pressed it checks what the position of the left is then sets the position new position
  // remember that left = 0 move div more leftwards that why position.left is minus from steps
  // this && position.left > 0 checks if the position.left is already 0 so that means the function will not run (0 is not greater than 0)

  if (event.key === "ArrowLeft" && position.left > 0) {
    console.log("left is clicked");

    position.left -= step;
  }

  // when keyright is pressed it checks what the position of the left is then sets the position new position
  // remember when left = 100px makes the box move rightward that why position.left is plus from steps. so that it goes rightwards
  // this && position.left < maxWidth - box.clientWidth checks if the position.left is less than maxWidth - box.clientWidth so that means the function will not run
  // example how this works (&& position.left < maxWidth - box.clientWidth) --- (100 < 1000 - 100) --- (100 < 900) --- true so the function will run
  // example how this works (&& position.left < maxWidth - box.clientWidth) --- (900 < 1000 - 100) --- (900 < 900) --- false so the function will not run
  if (
    event.key === "ArrowRight" &&
    position.left < maxWidth - box.clientWidth
  ) {
    console.log("right is clicked");

    position.left += step;
  }

  // this sets the position of the box to the new position
  // example if the position.top = 100px and position.left = 100px
  // box.style.top = 100px
  // box.style.left = 100px
  box.style.top = position.top + "px";
  box.style.left = position.left + "px";
};

document.addEventListener("keydown", handleKeyBoard);

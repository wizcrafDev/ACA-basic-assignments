// getting the html tags using javascript document
const form = document.getElementById("greetingForm");
const input = document.getElementById("nameInput");
const greetingElement = document.getElementById("greeting");

const handleGreeting = (event) => {
  // prevent the browser from refreshing
  event.preventDefault();

  // assigning user input to a variable
  const inputValue = input.value;

  // check if the user input is empty
  if (inputValue === "") {
    greetingElement.textContent = "Please enter a valid name.";
  } else {
    // display the greeting message
    greetingElement.textContent = `Hello, ${inputValue}!`;
  }
};

form.addEventListener("submit", handleGreeting);

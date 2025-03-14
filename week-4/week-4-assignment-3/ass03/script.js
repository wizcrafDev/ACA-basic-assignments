// getting all the required elements from the html element tags
let input = document.getElementById("taskInput");
let error = document.getElementById("error");

// getting the taskList element Id
let taskList = document.getElementById("taskList");

function addTask() {
  let taskText = input.value.trim();
  // if the input is empty then it will show the error message
  if (taskText === "") {
    error.textContent = "Empty in input, Enter a task ";
  }

  // creating a div element and adding the class name to it
  // the class name which is already added to the css file
  let taskCard = document.createElement("div");
  taskCard.classList.add("taskCard");

  // adding the inner html to the taskCard element
  // inserting span element with the input(task) the user entered <span class="cardDesc">${taskText}</span>
  // inserting the checkbox and delete button using checkbox to mark completed and delete button to delete the task
  // remember that its written like the way it will be in html format with function calls
  taskCard.innerHTML = `
            <span class="cardDesc">${taskText}</span>
            <div>
                <input type="checkbox" onclick="toggleComplete(this)">
                <span class="del" onclick="deleteTask(this)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </div>
        `;

  // appending the taskCard to the taskList
  taskList.appendChild(taskCard);
  // clearing the input field after adding the task
  // it clears input once tasks is added successfully
  input.value = "";
}

// what happens here is when the checkbox is clicked it get that exact checkbox and then get the closest parent element with the class name (.taskCard)
// then it toggles the class name completed to that element
// so if the class name is not there it adds it and if its there it removes it vice versa
// classList is used to assign the class name to the element from javscript
// what " this " does is to get that exact checkbox that ia clicked and then get the closest parent element with the class name (.taskCard)
// so it can toggle the class name of that element
function toggleComplete(checkbox) {
  let taskCard = checkbox.closest(".taskCard");
  taskCard.classList.toggle("completed");
}

// what happens here is when the delete button is clicked it gets the exact delete button element and then get the closest parent element with the class name (.taskCard)
// then it removes the element from the parent element
// so the task is deleted from the taskList
// what " this " does is to get that exact delete button that is clicked and then get the closest parent element with the class name (.taskCard)
// so it can remove the element from the parent element
function deleteTask(element) {
  element.closest(".taskCard").remove();
}

// remove() is used to remove the element from the parent element
// i was confused i thought .remove() will remove the class name but it removes the element itself
// to remove class name we use classList.remove("className")

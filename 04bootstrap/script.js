const form = document.getElementById("myForm");
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const avatar = document.getElementById("avatar").files[0];
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMessage = document.querySelector(".errorMessage");

  // Validate form fields
z
  if (!name || !email || !password || !confirmPassword) {
    errorMessage.innerHTML = "Please fill in all required fields.";
    errorMessage.classList.add("text-danger");
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.innerHTML = "Passwords do not match!.";
    errorMessage.classList.add("text-danger");
    return;
  }

  console.log({
    name,
    email,
    avatar,
    password,
    confirmPassword,
  });

  errorMessage.classList.remove("text-danger");
  errorMessage.classList.add("text-success");
  errorMessage.innerHTML = "Successfully Submitted.";
}

form.addEventListener("submit", handleFormSubmit);

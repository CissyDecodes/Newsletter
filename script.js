const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("signup-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  emailInput.classList.remove("error");
  message.classList.remove("success");

  if (!email || !email.includes("@") || !email.includes(".")) {
    emailInput.classList.add("error");
    message.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  message.classList.add("success");
  message.textContent = "You're in. Look for the next note in your inbox.";
  form.reset();
});

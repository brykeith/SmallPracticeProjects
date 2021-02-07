const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const containerOne = document.getElementById("containerOne");

signUpButton.addEventListener("click", () => {
  containerOne.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  containerOne.classList.remove("right-panel-active");
});

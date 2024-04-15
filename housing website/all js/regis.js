let signInBtn = document.getElementById("signinBtn");
let signUpBtn = document.getElementById("signupBtn");
let nameField = document.getElementById("nameField");
let titleBnt = document.getElementById("title");
let name = document.getElementById("name");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorElement = document.getElementById("error");
let emess = document.getElementById("emesss");

signInBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  titleBnt.innerHTML = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  signInBtn.innerHTML = `submit`;
  signUpBtn.innerHTML = `Sign Up`;
};

signUpBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  titleBnt.innerHTML = `Sign Up`;
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  signInBtn.innerHTML = `Sign In`;
  signUpBtn.innerHTML = `Submit`;

 
};

form.addEventListener("submit", (e) => {
  let messages = [];

  if (name.value === "" || name.value == null) {
    messages.push("name is required");
  }

  if (password.value.length <= 6) {
    messages.push("password must be longer than 6 characters");
    nameField.style.border = "1px solid red";
    errorElement.style.color = "red";
  }

  if (messages.length > 0) {
    e.preventDefault();

    errorElement.innerText = messages.join(",");
  }
});

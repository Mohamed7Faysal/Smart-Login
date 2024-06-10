var userEmailInput = document.getElementById("email");
var userPasswordInput = document.getElementById("password");

var users = JSON.parse(localStorage.getItem("userList"));
// console.log(users);

document.getElementById("signUp").addEventListener("click", function () {
  window.location = "./signup.html";
});


function btn_login() {
  if (checkEmptySign()) {
    displayRequiredSign();
  } else if (localStorage.getItem("userList") == null) {
    displayIncorrect()
  } else {
    if (existLogIn()) {
      console.log("done");
    } else {
      console.log("not done");
      displayIncorrect();
    }
  }
}

function existLogIn() {
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].email == userEmailInput.value &&
      users[i].password == userPasswordInput.value
    ) {
      console.log(users[i].name);
      var name = users[i].name;
      localStorage.setItem("homeList", JSON.stringify(name));
      window.location = "./home.html";
      return true;
    }
  }
}

function checkEmptySign() {
  if (userEmailInput.value == "" || userPasswordInput.value == "") {
    displayRequiredSign();
    return true;
  } else {
    return false;
  }
}

function displayRequiredSign() {
  document.getElementById(
    "login_result"
  ).innerHTML = `<span class=' text-danger'>All inputs is required</span>`;
}

function displayIncorrect() {
  document.getElementById(
    "login_result"
  ).innerHTML = `<span class=' text-danger'>incorrect email or password</span>`;
}

// document.getElementById("logIn").addEventListener('click', function(){
//     window.location = './index.html'
// })

var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("email");
var userPasswordInput = document.getElementById("password");

var users;
if (localStorage.getItem("userList") == null) {
  var users = []
}else{
users = JSON.parse(localStorage.getItem("userList"))
}
// console.log(JSON.parse(localStorage.getItem("userList")));
// localStorage.removeItem("homeList")
function addUser() {
  if (!checkIsEmpty()) {
    if (exist()) {
      displayExist();
    } else {
      var user = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value
      };
      users.push(user);
      localStorage.setItem("userList", JSON.stringify(users));
      displaySucess();
    }
  } else {
    displayRequired();
  }
}


// function addUser() {
//   if (!checkIsEmpty()) {
//     if (validationEmail()) {
//       if (exist()) {
//         displayExist();
//       } else {
//         var user = {
//           name: userNameInput.value,
//           email: userEmailInput.value,
//           password: userPasswordInput.value
//         };
//         users.push(user);
//         localStorage.setItem("userList", JSON.stringify(users));
//         displaySucess();
//       }
//     }
//   } else {
//     displayRequired();
//   }
// }


function addUserFinaly(){
  if (validationEmail()) {
    addUser()
  } else {
    displayRequired();
  }
}


// validationEmail
function validationEmail() {
  var text = userEmailInput.value;
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gim;
  var msgEmailElement = document.getElementById("msgEmail");
  if (regex.test(text) == true) {
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    msgEmailElement.classList.add("d-none");
    return true;
  } else {
    userEmailInput.classList.add("is-invalid");
    userEmailInput.classList.remove("is-valid");
    msgEmailElement.classList.remove("d-none");
    return false;
  }
}

function checkIsEmpty() {
  if (
    userNameInput.value != "" &&
    userEmailInput.value != "" &&
    userPasswordInput.value != ""
  ) {
    return false;
  } else {
    return true;
  }
}

function displayRequired() {
  document.getElementById(
    "required"
  ).innerHTML = `<span class=' text-danger'>All inputs is required</span>`;
}

function displayExist() {
  document.getElementById(
    "required"
  ).innerHTML = `<span class=' text-danger'>email already exists</span>`;
}

function displaySucess() {
  document.getElementById(
    "required"
  ).innerHTML = `<span class=' text-success'>Success</span>`;
}

function exist() {
  for (i = 0; i < users.length; i++) {
    if (users[i].email == userEmailInput.value) {
      return true;
    }
  }

  return false;
}



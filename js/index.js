const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");

var registerUserName = document.querySelector("#registerusername");
var emailUserName = document.querySelector("#email");
var registerpassword = document.querySelector("#registerpassword");

var loginusername = document.querySelector("#loginusername")
var loginpassowrd = document.querySelector("#loginpassowrd")

const registerbtn = document.querySelector(".register-btn");

const validUsername = /^\w/;
const validPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
const validEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

const WrongInputs = document.querySelector(".alert");


let allusers = JSON.parse(localStorage.getItem("users")) || [];

registerlink.addEventListener("click", () => {
  registerForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
});

loginlink.addEventListener("click", () => {
  registerForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
});

function isUsernameValid(username) {
  if (validUsername.test(username)) {
    return true;
  } else {
    return false;
  }
}

function isPasswordValid(password) {
  if (validPassword.test(password)) {
    return true;
  } else {
    return false;
  }
}
function isEmail(email) {
  if (validEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}

function isEmailExict(useremail) {
  for (let user = 0; user < allusers.length; user++) {
    if (allusers[user].email == useremail) {
      return true;
    }
  }
  return false;
}

function isVaild() {
  return (
    isUsernameValid(registerUserName.value) &&
    isPasswordValid(registerpassword.value) &&
    isEmail(emailUserName.value)
  );
}

function createUser(username, email, pass) {
  return {
    username: username,
    email: email,
    password: pass,
  };
}

function alertfunction(massage, backgroundcolor) {
  WrongInputs.classList.replace("d-none", "d-block");
  WrongInputs.classList.add(backgroundcolor);
  WrongInputs.innerHTML = massage;
}

function singup() {
  if (isVaild()) {
    var user = createUser(
      registerUserName.value,
      emailUserName.value,
      registerpassword.value
    );
    if (!isEmailExict(emailUserName.value)) {
      allusers.push(user);
      localStorage.setItem("users", JSON.stringify(allusers));
      resstresgisterform();
      alertfunction("User Added Sucessfuly", "bg-success");

    } else {
      alertfunction(
        `This Email is Exist Please Enter another Email`,
        "bg-danger"
      );
    }
    
  } else {
    alertfunction("Try a Vaild Data ", "bg-danger");
  }
}

function resstresgisterform() {
  registerUserName.value = "";
  emailUserName.value = "";
  registerpassword.value = "";
}


function AreEquivlant(loginusername, loginpassword) {
  for (let user = 0; user < allusers.length; user++) {
    if (
      allusers[user].username == loginusername.value &&
      allusers[user].password == loginpassword.value
    ) {
      localStorage.setItem("userlogin" , user)
      return true;
    }
  }
  return false;
}

function signin() {
  if (AreEquivlant(loginusername , loginpassowrd)) {
    window.location.href = "../homepage.html"
  }
  else{
    alertfunction("Username and password are not the same.", "bg-danger");
  }
}


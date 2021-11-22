const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formEngine(username, 0, "Username cannot be blank");
  formEngine(email, 1, "Email cannot be blank");
  formEngine(password, 2, "Password cannot be blank");
});

const formEngine = (field, serial, msg) => {
  if(field.value.trim() === "") {
    errorMsg[serial].innerHTML = msg;
    successIcon[serial].style.opacity = 0;
    failureIcon[serial].style.opacity = 1;
  } else {
    errorMsg[serial].innerHTML = "";
    successIcon[serial].style.opacity = 1;
    failureIcon[serial].style.opacity = 0;
  }

}
const form = document.querySelector("form");
const button = document.querySelector(".butn");
const fist = document.querySelector(".fist");
const last = document.querySelector(".last");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", (e) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let fistvl = fist.value;
  let lastvl = last.value;
  let emailvl = email.value;
  let pwvl = password.value;
  let dem = 0;

  if (fistvl == "" || fistvl == null) {
    fist.parentNode.classList.add("active");
    dem++;
  }

  if (lastvl == "" || lastvl == null) {
    last.parentNode.classList.add("active");
    dem++;
  }

  if (emailvl == "" || emailvl == null) {
    password.parentNode.classList.remove("active2");
    email.parentNode.classList.add("active");
    dem++;
  } else if (!emailvl.match(re)) {
    email.parentNode.classList.remove("active");
    email.parentNode.classList.add("active2");
    dem++;
  }

  if (pwvl == "" || pwvl == null) {
    password.parentNode.classList.remove("active2");
    password.parentNode.classList.add("active");
    dem++;
  } else if (pwvl.length < 6) {
    password.parentNode.classList.remove("active");
    password.parentNode.classList.add("active2");
    dem++;
  }

  if (dem > 0) {
    e.preventDefault();
  }

  removeError(password);
  removeError(email);
  removeError(fist);
  removeError(last);
});

removeError = (field) => {
  field.onclick = () => {
    field.parentNode.classList.remove("active");
    field.parentNode.classList.remove("active2");
  };
};

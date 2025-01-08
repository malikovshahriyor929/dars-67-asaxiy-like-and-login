import { useFetch } from "./utils/index.js";
let request = useFetch();
let local = JSON.parse(localStorage.getItem("access")) || [];

let form = document.getElementById("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  request({ url: "todohomework" })
    .then((data) => checkfunc(data))
    .catch((err) => console.log(err));
  function checkfunc(data) {
    data.filter((value) => {
      if (value.email == email.value && value.password == password.value) {
        localStorage.setItem("access", JSON.stringify(value.id));
        localStorage.setItem("name" , JSON.stringify(value.name))
        window.location.href = "../index.html";
      }
      
    });
  }
});

// jhon@gmail.com

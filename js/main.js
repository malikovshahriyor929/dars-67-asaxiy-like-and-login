import { useFetch, addData } from "./utils/index.js";
const request = useFetch()
let cards = document.querySelector(".cards");

let filter_header = document.querySelector(".Filter");
let cart_p = document.querySelector(".cart_p");
let like_p = document.querySelector(".like_p");
let like = JSON.parse(localStorage.getItem("like")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// login access func
let UserLogin = document.querySelector(".login");
let UserLogin2 = document.querySelector(".login2");

function access() {
  if (!localStorage.getItem("access")) {
    localStorage.removeItem("access");
    window.location.href = "./login.html";
  }
  UserLogin.innerHTML = JSON.parse(localStorage.getItem("name"));
  UserLogin2.innerHTML = JSON.parse(localStorage.getItem("name"));
}

export { access };

// fetch
request({ url: "figma_asaxiy" }).then((data) => {
  getData(data), Filter(data);
});

// load
function loading(action) {
  let loading = document.querySelector(".loading");
  action ? (loading.style.display = "flex") : (loading.style.display = "none");
}

// GEt
function getData(data) {
  loading(true);
  cards.innerHTML = "";
  data.forEach((value) => {
    addData(value, cards);
    access();
    loading(false);
  });
  let cart_btn = document.querySelectorAll(".cart_btn");
  cart_btn.forEach((value, idx) => {
    value.addEventListener("click", () => {
      addToCart(data[idx]);
    });
  });
  let like_btn = document.querySelectorAll(".like_btn");
  like_btn.forEach((value, idx) => {
    value.addEventListener("click", () => {
      addToLIke(data[idx]);
    });
  });
}

function addToCart(data) {
  if (cart.find((value) => value.id === data.id)) {
    cart = cart.map((value) => {
      if (value.id === data.id) {
        return { ...value, count: (value.count += 1) };
      }
      return value;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    return;
  }
  cart = [...cart, { ...data, count: 1 }];
  localStorage.setItem("cart", JSON.stringify(cart));
  cartlengthfunc();
}

function Filter(data) {
  filter_header.addEventListener("click", (e) => {
    let id = e.target.id;
    if (id !== "" && id !== "all") {
      let fill = data.filter((value) => value.type === id);
      cards.innerHTML = "";
      getData(fill);
    } else if (id === "all") {
      cards.innerHTML = "";
      getData(data);
    }
  });
}

function addToLIke(data) {
  like = [...like, data];
  localStorage.setItem("like", JSON.stringify(like));
  likelength();
}

function cartlengthfunc() {
  let cartlength = cart.length;
  cart_p.innerHTML = cartlength;
}

function likelength() {
  let cartlength = like.length;
  like_p.innerHTML = cartlength;
}

likelength();
cartlengthfunc();
access();

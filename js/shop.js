let products = document.querySelector(".products");
let emptycart = document.querySelector(".error");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cart);
import { access } from "./main.js";

access();
function emp() {
  if (cart.length|| cart ==[]) {
    // console.log(emptycart.style.display = "flex");
  
    emptycart.style.display = "block";
  } else {
    emptycart.style.display = "none";
  }
}

let allsuma = document.querySelector(".allsuma");

function addProduct(data) {
  products.innerHTML = "";
  data.forEach((value) => {
    let product = document.createElement("div");
    product.innerHTML = `
<div
      class="rounded-[20px] bg-white flex p-3 items-center gap-5 w-full justify-evenly px-10   max-[583px]:flex-col  
       hahha max-[583px]:gap-5"
    >
      <div class="flex p-3 items-center gap-10     
 dddfff  ">
        <div class="flex items-center flex-col gap-5">
          <img class="h-[160px] object-contain" src=${value.img} alt="" />
        </div>
        <div class="flex flex-col gap-2">
          <h2
            class="text-[18px] font-semibold text-[#141821] hover:text-primary duration-500"
          >
            ${value.name}
          </h2>
          <p class="text-[16px] text-[#94a3b8] line-through">
            ${value.old_price.toLocaleString()} сум
          </p>
          <p class="text-[24px] font-bold text-primary">
            ${value.price.toLocaleString()} сум
          </p>
          <p
            class="font-medium text-[#fe7300] border-[1.5px] py-0.5 px-2 rounded-lg border-[#fe7300]"
          >
            ${value.month_payment.toLocaleString()} сум x ${value.month} мес
          </p>
        </div>
      </div>
       <div class="  flex flex-col  justify-evenly gap-5 ">
      <div class="flex text-red-500 justify-center text-center gap-5">
        <i id=${
          value.id
        } class="delete text-[26px] text-red-500 fa-solid fa-trash"></i>
      </div> 
      <div class="flex items-center justify-center text-center gap-5">
        <i id=${value.id} class=" select-none text-[26px] fa-solid fa-minus"></i>
        <p class="count text-[26px] select-none ">${value.count}</p>
        <i id=${value.id} class=" select-none text-[26px] fa-solid fa-plus"></i>
      </div>
       </div>
    </div>
        `;
    products.append(product);
  });
}

// let count = document.querySelectorAll(".count")

products.addEventListener("click", (e) => {
  let id = e.target.id;
  if (e.target.classList.contains("delete")) {
    deleteFunc(id);
  }
  if (e.target.classList.contains("fa-minus")) {
    cart = cart.map((value) => {
      if (value.id == +id) {
        return { ...value, count: (value.count <= 1 ? 1 : (value.count -= 1)) };
      }
      return value;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    addProduct(cart);
    allsum(cart)
    return;
  }
  if (e.target.classList.contains("fa-plus")) {
    cart = cart.map((value) => {
      if (value.id == +id) {
        return { ...value, count: (value.count += 1) };
      }
      return value;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    addProduct(cart);
    allsum(cart)
    return;
  }
  

});

function deleteFunc(id) {
  cart = cart.filter((value) => value.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  addProduct(cart);
  allsum(cart)
  emp()
}

function allsum(data) {
  let count = 0;
 data.forEach((value) => {
   count += (value.price*value.count);
  });
  allsuma.innerHTML = count.toLocaleString();
  addProduct(cart)
}




let UserLogin = document.querySelector(".login");
UserLogin.innerHTML = JSON.parse(localStorage.getItem("name"));
let UserLogin2 = document.querySelector(".login2");
UserLogin2.innerHTML = JSON.parse(localStorage.getItem("name"));
emp()
allsum(cart);
addProduct(cart);

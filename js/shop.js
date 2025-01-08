let products = document.querySelector(".products");
let emptycart = document.querySelector(".Error");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cart);
import { access } from "./main.js";

access()
if (cart.length == 0) {
  emptycart.style.display = "flex";
} else {
  emptycart.style.display = "none";
}

let allsuma = document.querySelector(".allsuma");

function addProduct(data) {
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
      <div class="flex items-center justify-center text-center gap-5">
        <i class="text-[26px] fa-solid fa-minus"></i>
        <p class="count text-[26px]">1</p>
        <i class="text-[26px] fa-solid fa-plus"></i>
      </div>
    </div>
        `;
    products.append(product);
  });
}
let count = 0;
function allsum(data) {
  data.forEach((value) => {
    count += value.price;
  });
  allsuma.innerHTML = count.toLocaleString();
}
let UserLogin = document.querySelector(".login");
UserLogin.innerHTML = JSON.parse(localStorage.getItem("name"));
let UserLogin2 = document.querySelector(".login2");
UserLogin2.innerHTML = JSON.parse(localStorage.getItem("name"));

allsum(cart);
addProduct(cart);

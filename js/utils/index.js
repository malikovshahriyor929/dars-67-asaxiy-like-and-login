let BASE_URL = "https://676ac315863eaa5ac0df8bfd.mockapi.io";

const useFetch = () => {
  const request = ({ url, method = "GET", data }) => {
    return fetch(`${BASE_URL}/${url}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };
  return request;
};
function addData(value, cards) {
  let card = document.createElement("div");
  card.innerHTML = `
 <div class="rounded-[20px] bg-white p-3 cc relative">
      <i class="like_btn absolute top-3 left-4 fa-regular fa-heart"></i>
      <div class="flex items-center flex-col gap-5">
        <img class="h-[160px] object-cover im" src="${value.img}" alt="" />
      </div>
      <div class="flex flex-col gap-2">
        <h2
          class="text-[14px] font-medium text-[#141821] hover:text-primary duration-500"
        >
          ${value.name}
        </h2>
        <div class="flex items-center justify-between gap-4">
          <img class="w-[60px]" src="./assets/svg/star.svg" alt="" />
          <p class="text-[12px] text-[#c2c6d1] font-medium">
            ${value.have} отзывов
          </p>
        </div>
        <p class="text-[12px] text-[#94a3b8] line-through">
          ${value.old_price.toLocaleString()} сум
        </p>
        <p class="text-[18px] font-bold text-primary">
          ${value.price.toLocaleString()} сум
        </p>
        <p
          class="font-medium text-[#fe7300] border-[1.5px] py-0.5 px-2 rounded-lg border-[#fe7300]"
        >
          ${value.month_payment.toLocaleString()} сум x ${value.month} мес
        </p>
        <div class="flex items-center gap-1">
          <button
            class="rounded-xl bg-primary py-1.5 px-4 text-white w-full text-[14px]"
          >
            Купить в один клик
          </button>
          <button
            id=${value.id}
            class="cart_btn rounded-xl bg-[#00bfaf] py-2 px-4"
          >
            <img src="./assets/svg/cart-single.svg.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
    `;
  cards.append(card);
}
export { useFetch, addData };

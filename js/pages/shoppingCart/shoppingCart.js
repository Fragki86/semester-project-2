import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
import { counter } from "../../modules/utilities/counter.js";
import { api } from "../../modules/utilities/api.js"

nav();
footer();
counter();

const getCart = JSON.parse(localStorage.getItem("Items In Cart"));
const cartList = document.querySelector(".cart-list");
const totalAmount = document.querySelector(".total-amount");
const clearBtn = document.querySelector("#clearCartBtn");
const counterHtml = document.querySelector("#counter");
let sum = 0;

cartList.innerHTML = "";


function shoppingCartList() {

  for (let i = 0; i < getCart.length; i++) {
    const totalCost = parseFloat(getCart[i].price);

    if (!isNaN(totalCost)) {
      sum += totalCost;
    }
    console.log(sum)

    cartList.innerHTML += `<div class="cart-item">
                            <img src="${api}${getCart[i].image[0].url}">
                            <h3>${getCart[i].title}</h3>
                            <p class="card-price">${getCart[i].price}$</p>
                            <a href="productDetails.html?id=${getCart[i].id}">
                            <i class="fas fa-link"></i>
                            </a>
                          </div>
                          <div class="separator"></div>`

    totalAmount.innerHTML = `<h4>Total:</h4><p class="card-price">${sum}$</p>`
  }
}
shoppingCartList();

clearBtn.addEventListener("click", clearStorage);

  function clearStorage() {
    localStorage.removeItem("Items In Cart");
    cartList.innerHTML = "";
    totalAmount.innerHTML = "";
    counterHtml.innerHTML = "0";
    clearBtn.style.display = "none";
  }
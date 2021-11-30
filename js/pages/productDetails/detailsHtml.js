import { api } from "../../modules/utilities/api.js"
import { getFromCart, addToCart } from "../../localStorage/addToCart.js";

export function detailsHtml(results) {

  const detailsContainer = document.querySelector(".product-details-container");
  const getCartProducts = getFromCart();
  detailsContainer.innerHTML = "";

  const title = results.title;
  const price = results.price;
  const description = results.description;
  const image = results.image[0].url;
  const id = results.id;

  document.title = results.title;

  detailsContainer.innerHTML = `
                              <div class="details-title">
                                <h2>${title}</h2>
                                <img src="images/title-line.svg" class="title-custom-line">
                              </div>
                              <div class="details-image">
                                <img src="${api}${image}" alt="">
                              </div>

                                <p class="description">${description}</p>
                                <p class="card-price">${price}$</p>

                                <button id="cartBtn" class="button-styles" data-id="${id}" data-title="${title}" data-price="${price}">Add to cart<i class="fas fa-shopping-bag"></i></button>
                                `


                                // const idData = this.dataset.id;
                                // const titleData = this.dataset.title;
                                // const priceData = this.dataset.price;
  
                                // const addProduct = {id: idData, title: titleData, price: priceData};
  const cartBtn = document.querySelector("#cartBtn");
  cartBtn.addEventListener = ("click", addProduct);

  function addProduct() {
    cartApi.push(showInCart);
    localStorage.setItem("cartApi", JSON.stringify())
  }
};
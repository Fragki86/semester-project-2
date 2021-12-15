import { api } from "../../modules/utilities/api.js";
import { counter } from "../../modules/utilities/counter.js";
import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
import { detailsHtml } from "./detailsHtml.js";

// import { addToCart, getFromCart } from "../../localStorage/addToCart.js";

nav();
footer();
counter();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsContainer = document.querySelector(".product-details-container");
let showInCart = [];


if (!id) {
  document.location.href = "/";
}

const productUrl = api + "/products/" + id;

async function getDetails() {
  try {
    const response = await fetch(productUrl);
    const results = await response.json();
    results["quantity"] = 1;
    window.localStorage.setItem("Current Product Showing", JSON.stringify(results));
    showInCart = results;

    console.log(showInCart)
    detailsContainer.innerHTML = "";
    detailsHtml(results);
    
  } catch(error) {
    console.log(error)
  }
};
getDetails().then(() => {
  const cartBtn = document.querySelector("#cartBtn");

  const getShowedItem = JSON.parse(localStorage.getItem("Items In Cart")) || [];

  cartBtn.addEventListener("click", addProduct);


  function addProduct() {
    getShowedItem.push(showInCart);
    localStorage.setItem("Items In Cart", JSON.stringify(getShowedItem));
   
    const counter = document.querySelector("#counter");
    const cartLength = JSON.parse(localStorage.getItem("Items In Cart"))

    console.log(cartLength);
    
    counter.innerHTML = cartLength.length;
    // cartBtn.innerText = "Added";
  }
});
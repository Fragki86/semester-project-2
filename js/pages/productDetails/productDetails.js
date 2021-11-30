import { api } from "../../modules/utilities/api.js";
import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
// import { detailsHtml } from "./detailsHtml.js";

// import { addToCart, getFromCart } from "../../localStorage/addToCart.js";

nav();
footer();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsContainer = document.querySelector(".product-details-container");

if (!id) {
  document.location.href = "/";
}

const productUrl = api + "/products/" + id;


// /*------------------------   Fetch results -----------------------------*/
// async function getGameDetails() {
//   try {
//       const response = await fetch(productUrl);
//       const detailedInfo = await response.json();
//       window.localStorage.setItem("gamesAPI", JSON.stringify(detailedInfo));
//       detailsContainer.innerHTML = "";
//       showInCart = detailedInfo;
//       newDetails(detailedInfo);

//   } catch(error) {
//       console.log("Error");
//   }
// }



// /*------------------------   Create new innerHTML for individual product -----------------------------*/
// function newDetails(detailedInfo) {

//   const title = detailedInfo.title;
//     const price = detailedInfo.price;
//     const description = detailedInfo.description;
//     const image = detailedInfo.image[0].url;
//     const id = detailedInfo.id;

//   detailsContainer.innerHTML +=
//   `<div class="details-title">
//                                   <h2>${title}</h2>
//                                    <img src="images/title-line.svg" class="title-custom-line">
//                                  </div>
//                                <div class="details-image">
//                                 <img src="${api}${image}" alt="">
//                                </div>
  
//                                 <p class="description">${description}</p>
//                                  <p class="card-price">${price}$</p>
  
//                                <button id="cartBtn" class="button-styles">Add to cart<i class="fas fa-shopping-bag"></i></button>`
// }


// /*------------------------   Putting items in the cart -----------------------------*/
// getGameDetails().then(() => {
//   const putInCartButton = document.querySelector("#cartBtn");
//   const counter = document.querySelector("#counter");

//   const cartAPI = JSON.parse(localStorage.getItem("cartAPI")) || [];
  
//   putInCartButton.addEventListener("click", countItems);

//   function countItems() {  
//     cartAPI.push(showInCart);
//     localStorage.setItem("cartAPI", JSON.stringify(cartAPI));
    
//     // counter.style.display = "block";
//     // counter.innerHTML = cartAPI.length;

//     // putInCartButton.disabled = true;
//     // putInCartButton.textContent = "Already in cart";
//     // putInCartButton.style.background = "linear-gradient(45deg, #34433A, #269252)";
//     // putInCartButton.style.boxShadow = "0px 0px 5px inset black";
//   }
// });





async function getDetails() {
  try {
    const response = await fetch(productUrl);
    const results = await response.json();
    window.localStorage.setItem("Current Product Showing", JSON.stringify(results));
    detailsContainer.innerHTML = "";
    // showInCart = results;
    detailsHtml(results);
    
  } catch(error) {
    console.log(error)
  }
};

function detailsHtml(results) {

  const detailsContainer = document.querySelector(".product-details-container");
  // const getCartProducts = getFromCart();
  

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
  
}

getDetails().then(() => {
  const cartBtn = document.querySelector("#cartBtn");
  const counter = document.querySelector("#counter");

  const cartAPI = JSON.parse(localStorage.getItem("cartAPI")) || []

  cartBtn.addEventListener("click", addProduct);

  function addProduct() {
    console.log("WW")
    cartAPI.push(showInCart);
    localStorage.setItem("cartAPI", JSON.stringify(cartAPI))

    counter.innerHTML = cartAPI.length;
  }
});
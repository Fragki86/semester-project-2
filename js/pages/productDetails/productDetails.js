import { api } from "../../modules/utilities/api.js";
import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";

nav();
footer();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = api + "/products/" + id;

async function getDetails() {
  try {
    const response = await fetch(productUrl);
    const results = await response.json();
    const detailsContainer = document.querySelector(".product-details-container");
    console.log(results.image[0].url)
    const title = results.title;
    const price = results.price;
    const description = results.description;
    const image = results.image[0].url;
    
    document.title = results.title;


    detailsContainer.innerHTML = `
                                <div class="details-title">
                                  <h2>${title}</h2>
                                  <img src="images/title-line.svg" class="title-custom-line">
                                </div>
                                <div class="details-image">
                                  <img src="${api}${image}" alt="">
                                </div>
                                <div class="details-info">
                                  <p>${description}</p>
                                  <p class="card-price">${price}$</p>
                                </div>
                                  <button id="cartBtn" class="button-styles">Add to cart<i class="fas fa-shopping-bag"></i></button>
                                  `

  } catch(error) {
    console.log(error)
  }
}
getDetails()
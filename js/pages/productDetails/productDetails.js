import { api } from "../../modules/utilities/api.js";
import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
import { detailsHtml } from "./detailsHtml.js";

import { addToCart, getFromCart } from "../../localStorage/addToCart.js";

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

    detailsHtml(results);
    
    


    

  } catch(error) {
    console.log(error)
  }
}
getDetails()
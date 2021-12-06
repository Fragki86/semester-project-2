import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
import { counter } from "../../modules/utilities/counter.js";
import { api } from "../../modules/utilities/api.js";
// import { getToken } from "../../localStorage/tokenUser/getToken.js";


nav();
footer();
counter();

// Set new parameters 
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
};


// Getting the original api and setting variable names
const newUrl = api + "/products/" + id;
const editForm = document.querySelector("#editProductForm");
const title = document.querySelector("#titleInput");
const price = document.querySelector("#priceInput");
const description = document.querySelector("#descriptionInput");
const image = document.querySelector("#imageInput");

async function getApi() {
  try {
    const response = await fetch(newUrl);
    const results = await response.json();

    console.log(results);
  } catch(error) {
    console.log(error);
  }
}
getApi()



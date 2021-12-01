import { nav } from "../../modules/layout/nav.js"
import { footer } from "../../modules/layout/footer.js"
/* Delete in the end */ import { api } from "../../modules/utilities/api.js"
import { counter } from "../../modules/utilities/counter.js"
import { createProductsHtml } from "./createProductsHtml.js"
import { filterProducts } from "./filterProducts.js"

nav();
footer();
counter();


async function products() {
  const mainApi = api + "/products";

  try {
  const response = await fetch(mainApi);
  const results = await response.json();

  createProductsHtml(results);
  filterProducts(results);

  } catch(error) {
    console.log(error)
  }
}
products()




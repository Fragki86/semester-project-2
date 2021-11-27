import { footer } from "../../modules/layout/footer.js";
import { nav } from "../../modules/layout/nav.js";
import { api } from "../../modules/utilities/api.js";
import { banner } from "./banner.js";
import { newProducts } from "./newProducts.js";
import { exploreByAge } from "./exploreByAge.js";


nav();
footer();

async function getApi() {
  const mainApi = api + "/products";
  const bannerApi = api + "/home"

  try {
    const response = await fetch(mainApi);
    const results = await response.json();

    const bannerResponse = await fetch(bannerApi);
    const bannerResults = await bannerResponse.json();

    // createHomeHtml(results);
    banner(bannerResults)
    newProducts(results);
    exploreByAge();
    // titleFilter(results)    

  } catch(error) {
    console.log(error)
  }
}
getApi();
import { footer } from "../../modules/layout/footer.js";
import { nav } from "../../modules/layout/nav.js";
import { api } from "../../modules/utilities/api.js";
import { counter } from "../../modules/utilities/counter.js";
import { banner } from "./banner.js";
import { newProducts } from "./newProducts.js";
import { exploreByAge } from "./exploreByAge.js";


nav();
footer();
counter();


async function getApi() {
  const mainApi = api + "/products";
  const bannerApi = api + "/home"

  try {
    const response = await fetch(mainApi);
    const results = await response.json();

    const bannerResponse = await fetch(bannerApi);
    const bannerResults = await bannerResponse.json();
    // console.log(bannerResults.hero_banner_alt_text)
    
    banner(bannerResults);
    newProducts(results);
    exploreByAge(); 

  } catch(error) {
    console.log(error)
  }
}
getApi();
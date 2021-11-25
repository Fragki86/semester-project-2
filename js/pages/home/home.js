import { footer } from "../../modules/layout/footer.js";
import { nav } from "../../modules/layout/nav.js";
import { api } from "../../modules/utilities/api.js";


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
    // importImage(bannerResults)
    // titleFilter(results)    

  } catch(error) {
    console.log(error)
  }
}

getApi();


// function createHomeHtml(results) {
//   const container = document.querySelector(".container");

//   for (let i = 0; i < results.length; i++) {
//     console.log(results[i].image[0].url)

//     const featured = results[i].featured;

//     if (featured) {
//     container.innerHTML += `<div>
//                               <img src="${api}${results[i].image[0].url}"
//                             </div>`}

//   }


// }



// function importImage(bannerResults) {
//   const bannerContainer = document.querySelector("#bannerContainer");
//   const bannerUrl = bannerResults.hero_banner[0].url;
  
//   bannerContainer.innerHTML = `<img src="${api}${bannerUrl}" class="banner-img">`

// }

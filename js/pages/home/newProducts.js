import { api } from "../../modules/utilities/api.js";

export function newProducts(results) {
  const newProductsSection = document.querySelector(".carousel-inner");
  const largeScreensContainer = document.querySelector(".lg-screens-container");

  for (let i = 0; i < results.length; i++) {
  
    const featured = results[i].featured;

    if (featured) {
      newProductsSection.innerHTML += `
                            <div class="carousel-item active d-lg-none">
                              <div class="card" style="width: 85%">
                                <img src="${api}${results[i].image_url}" class="d-block w-100">
                                <div class="card-body">
                                  <h5 class="card-title">${results[i].title}</h5>
                                  <p class="card-price">${results[i].price}$</p>
                                </div>
                              </div>
                            </div>
                            `

      largeScreensContainer.innerHTML += `<a href="productDetails.html?id=${results[i].id}">
                                            <div id="newCont">
                                              <div class="card" style="width: 85%">
                                                <img src="${api}${results[i].image_url}" class="d-block w-100">
                                                <div class="card-body">
                                                  <h5 class="card-title">${results[i].title}</h5>
                                                  <p class="card-price">${results[i].price}$</p>
                                                </div>
                                              </div>
                                            </div>
                                          </a>`
    }

  }
}
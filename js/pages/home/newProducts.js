import { api } from "../../modules/utilities/api.js";

export function newProducts(results) {
  const newProductsSection = document.querySelector(".carousel-inner");

  for (let i = 0; i < results.length; i++) {
    console.log(results[i].price)

    const featured = results[i].featured;

    if (featured) {
      newProductsSection.innerHTML += `<div class="carousel-item active">
                              <div class="card" style="width: 85%">
                                <img src="${api}${results[i].image[0].url}" class="d-block w-100">
                                <div class="card-body">
                                  <h5 class="card-title">${results[i].title}</h5>
                                  <p class="card-price">${results[i].price}$</p>
                                </div>
                            </div>
                            `}

  }
}
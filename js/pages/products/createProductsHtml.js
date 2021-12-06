import { api } from "../../modules/utilities/api.js"

export function createProductsHtml(results) {
  const productsContainer = document.querySelector(".container");
  productsContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    
    const image = results[i].image_url;
    const title = results[i].title;
    const price = results[i].price;
    const productId = results[i].id;
    const description = results[i].description;
    

      productsContainer.innerHTML += `
                            
                              <a href="productDetails.html?id=${productId}">
                              <div class="card" style="width: 85%">
                                <img src="${api}${image}" class="d-block w-100" alt="">
                                <div class="card-body">
                                  <h5 class="card-title">${title}</h5>
                                  <p class="card-price">${price}$</p>
                                </div>
                              </div>
                              </a>
                            
                            `
  }
}
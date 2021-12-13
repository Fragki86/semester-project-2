import { getUser } from "../../localStorage/tokenUser.js"

export function createProductsHtml(results) {
  const productsContainer = document.querySelector(".container");
  const spinner = document.querySelector(".spinner");

  productsContainer.innerHTML = "";
  spinner.style.display = "none";

  let editLink = "";
  const username = getUser();

  for (let i = 0; i < results.length; i++) {

    const image = results[i].image_url;
    const title = results[i].title;
    const price = results[i].price;
    const productId = results[i].id;
    const description = results[i].description;
    const alt = results[i].alternative_text;
    const id = results[i].id;
    

    if (username) {
      editLink = `<a href="edit-product.html?id=${id}" class="edit-icon"><i class="far fa-edit"></i></a>`
    }

      productsContainer.innerHTML += `
                            <div class="card" style="width: 85%">
                              <a href="productDetails.html?id=${productId}">
                                <img src="${image}" class="d-block w-100" alt="${alt}">
                                <div class="card-body">
                                  <h5 class="card-title">${title}</h5>
                                  <p class="card-price">${price}$</p>
                                </div>
                              </a>
                             ${editLink}
                            </div>
                            `
  }
}
import { api } from "../../modules/utilities/api.js"
import { getUser } from "../../localStorage/tokenUser.js"


export function detailsHtml(results) {
  document.title = results.title;

  const detailsContainer = document.querySelector(".product-details-container");
  const username = getUser();
  const title = results.title;
  const price = results.price;
  const description = results.description;
  const image = results.image_url;
  const id = results.id;
  const alt = results.alternative_text
 

  let editLink = "";

  if (username) {
    editLink = `<a href="edit-product.html?id=${id}" class="edit-link">Edit <i class="far fa-edit"></i></a>`
  }


  detailsContainer.innerHTML = `
                              <div class="details-title">
                                <h2>${title}</h2>
                                <img src="images/title-line.svg" class="title-custom-line">
                              </div>
                              <div class="details-image">
                                <img src="${image}" alt="${alt}">
                              </div>

                                <p class="description">${description}</p>
                                <p class="card-price">${price}$</p>

                                <button id="cartBtn" class="button-styles" data-id="${id}" data-title="${title}" data-price="${price}">Add to cart<i class="fas fa-shopping-bag"></i></button>
                                ${editLink}
                                `  
}
import { getUser } from "../../localStorage/tokenUser.js"
import { getToken } from "../../localStorage/tokenUser.js"
import { deleteBtn } from "../../modules/utilities/deleteBtn.js"
import { api } from "../../modules/utilities/api.js"

export function createProductsHtml(results) {
  const productsContainer = document.querySelector(".container");
  const spinner = document.querySelector(".spinner");
  const username = getUser();
  
  productsContainer.innerHTML = "";
  spinner.style.display = "none";
  
  let editLink = "";
  // let deleteLink = "";
  
  for (let i = 0; i < results.length; i++) {

    
    const image = results[i].image_url;
    const title = results[i].title;
    const price = results[i].price;
    const productId = results[i].id;
    const description = results[i].description;
    const alt = results[i].alternative_text;
    const id = results[i].id;
    
    // const deleteItem = deleteBtn();

    if (username) {
      editLink = `<a href="edit-product.html?id=${id}" class="edit-icon"><i class="far fa-edit"></i></a>`
      // deleteLink = `<i class="fas fa-trash-alt" data-id="${id}"></i>`
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
  // const trashIcons = document.querySelectorAll("i");
  
  // trashIcons.forEach( (icons) => {
  //   icons.addEventListener("click", deleteItem)
  // })
}

// async function deleteItem(id) {
//     const deleteConfirmation = confirm("Are you sure you want to delete this product permanently?");

//     if (deleteConfirmation) {
//       const newUrl = api + "/products/" + id;
//       const token = getToken();
//       const options = {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };

//       try {
//         const response = await fetch(newUrl, options);
//         const results = await response.json();

//         console.log(results)
//         location.href = "products.html";


//       } catch(error) {
//         console.log(error)
//       }

//     }
//  }

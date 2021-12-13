export function newProducts(results) {
  const newProductsSection = document.querySelector(".carousel-inner");
  const largeScreensContainer = document.querySelector(".lg-screens-container");
  const spinner = document.querySelector(".spinner");


  spinner.style.display = "none";
  
  for (let i = 0; i < results.length; i++) {
  

    const featured = results[i].featured;

    if (featured) {
      newProductsSection.innerHTML += `
                            <div class="carousel-item active d-lg-none">
                              <div class="card" style="width: 85%">
                                <img src="${results[i].image_url}" class="d-block w-100" alt="${results[i].alternative_text}">
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
                                                <img src="${results[i].image_url}" class="d-block w-100" alt="${results[i].alternative_text}">
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

// import { baseUrl } from "../settings/api.js";
// import { getExitingFavs } from "../utils/favFunctions.js";
// import { getToken } from "../utils/storage.js";

// export default function deleteButton(id) {
//     const container = document.querySelector(".delete-container");

//     container.innerHTML = `<button type="button" class="btn btn-danger btn-admin" id="delete">Delete</button>`;

//     const button = document.querySelector("button#delete");

//     button.onclick = async function () {
//         const doDelete = confirm(
//             "Are you sure you want to delete this product?"
//         );

//         if (doDelete) {
//             const url = baseUrl + "products/" + id;
//             const token = getToken();
//             const options = {
//                 method: "DELETE",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             };

//             try {
//                 const response = await fetch(url, options);
//                 const json = await response.json();
//                 console.log(json);

//                 ///add
//                 // const favs = getExitingFavs();
//                 // const filtered = favs.filter((fav) => fav.id !== id);
//                 // console.log(filtered);
//                 // saveFavs(filtered);

//                 ///add

//                 removeFav();

//                 //location.href = "/"; //remove for test
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };
// }

// function removeFav() {
//     const favs = getExitingFavs();
//     const filtered = favs.filter((fav) => fav.id !== id);
//     console.log(filtered);
//     saveFavs(filtered);
// }

// function saveFavs(favs) {
//     localStorage.setItem("favorites", JSON.stringify(favs));
// }
// saveFavs(favs);
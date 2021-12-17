export function newProducts(results) {
  const newProductsSection = document.querySelector(".carousel-inner");
  const largeScreensContainer = document.querySelector(".lg-screens-container");
  const spinner = document.querySelector(".spinner");

  spinner.style.display = "none";
  
  for (let i = 0; i < results.length; i++) {
    const featured = results[i].featured;

    if (featured) {
      // Featured products for mobile
      newProductsSection.innerHTML += `
                            <div class="carousel-item ${!i ? "active" : ""} d-lg-none">
                              <div class="card" style="width: 85%">
                                <img src="${results[i].image_url}" class="d-block w-100" alt="${results[i].alternative_text}">
                                <div class="card-body">
                                  <h5 class="card-title">${results[i].title}</h5>
                                  <p class="card-price">${results[i].price}$</p>
                                </div>
                              </div>
                            </div>
                            `

      // Featured products for large screens
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
import { createProductsHtml } from "./createProductsHtml.js";

// Search for titles or description
export function filterProducts(results) {
  const searchForm = document.querySelector("#searchForm");
  
  searchForm.onkeyup = function(event) {
    const inputValue = event.target.value;

    const filteredProducts = results.filter(function (product) {
      if (product.title.toLowerCase().includes(inputValue) || product.description.toLowerCase().includes(inputValue))
      return true;
    });

    if (filteredProducts.length > 0) {
      createProductsHtml(filteredProducts)
    } else {
      createProductsHtml(results)
    };
  };
};
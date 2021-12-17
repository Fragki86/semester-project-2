export function counter()  {
const counter = document.querySelector("#counter");
const cartLength = JSON.parse(localStorage.getItem("Items In Cart")) || []
let totalProducts = 0

  for (let i = 0; i < cartLength.length; i++) {
  const productQuantity = parseFloat(cartLength[i].quantity);

    if (!isNaN(productQuantity)) {
      totalProducts += productQuantity;
    }

  }
  counter.innerHTML = totalProducts;
}

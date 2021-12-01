export function counter()  {
const counter = document.querySelector("#counter");
const cartLength = JSON.parse(localStorage.getItem("Items In Cart")) || []

counter.innerHTML = cartLength.length;
}

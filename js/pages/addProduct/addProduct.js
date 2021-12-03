import { nav } from "../../modules/layout/nav.js"
import { footer } from "../../modules/layout/footer.js"
import { counter } from "../../modules/utilities/counter.js"
import { api } from "../../modules/utilities/api.js"

nav();
footer();
counter();

const addProductForm = document.querySelector("#addProductForm");
const title = document.querySelector("#titleInput");
const price = document.querySelector("#priceInput");
const description = document.querySelector("#descriptionInput");
const radioRuttons = document.querySelector("#radio-buttons");
const image = document.querySelector("#imageInput");

addProductForm.addEventListener("submit", validateForm)

function validateForm(event) {
  event.preventDefault();

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();



}
validateForm()


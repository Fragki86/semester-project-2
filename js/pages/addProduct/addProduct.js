import { nav } from "../../modules/layout/nav.js"
import { footer } from "../../modules/layout/footer.js"
import { counter } from "../../modules/utilities/counter.js"
import { api } from "../../modules/utilities/api.js"
import { systemMessage } from "../../modules/utilities/systemMessage.js"
import { getToken } from "../../localStorage/tokenUser.js"

nav();
footer();
counter();

const addProductForm = document.querySelector("#addProductForm");
const title = document.querySelector("#titleInput");
const price = document.querySelector("#priceInput");
const description = document.querySelector("#descriptionInput");
// const featured = document.querySelector('input[name="featured"]:checked');
const image = document.querySelector("#imageInput");
const messageContainer = document.querySelector(".message-container");

addProductForm.addEventListener("submit", validateForm)

function validateForm(event) {
  event.preventDefault();
  const featuredValue = document.querySelector('input[name="featured"]:checked').value;
  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  // const featuredValue = featured.value;
  
  if (featuredValue === "no") {
    console.log("correct")
  } else {
    console.log("error")
  }
  // console.log(event)

  // if (titleValue.length < 3 || priceValue < 1 || descriptionValue.length < 8) {
  //   return systemMessage("error", "All fields required", ".message-container")
  // }


  addProduct(titleValue, priceValue, descriptionValue, featuredValue)
}


async function addProduct(title, price, description, ) {
  const newUrl = api + "/products";
  const token = getToken();
  const data = JSON.stringify({title: title, price: price, description: description,});
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  };

  try {
    const response = await fetch(newUrl, options);
    const results = await response.json();

    console.log(results);

  } catch(error) {
    systemMessage("warning", "Something went wrong", ".message-container");
    console.log(error);
  }


}

// validateForm();

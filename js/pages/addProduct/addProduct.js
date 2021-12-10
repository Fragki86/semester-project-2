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
const alt = document.querySelector("#altInput");
const image = document.querySelector("#imageInput");


image.addEventListener("click", openWidget);

function openWidget() {
  widgetUpload.open();
}

const widgetUpload = cloudinary.createUploadWidget({ 
  cloudName: "home2222", 
  uploadPreset: "myuploadspreset" }, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info); 
  };
});








addProductForm.addEventListener("submit", validateForm)

function validateForm(event) {
  event.preventDefault();
  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const altValue = alt.value.trim();




  let featuredBoolean = "";
  
  if (titleValue.length < 3 || priceValue < 1 || descriptionValue.length < 8 || alt.length < 3) {
    return systemMessage("error", "All fields required", ".message-container")
  }
  
  const featuredValue = document.querySelector('input[name="featured"]:checked').value;
  if (featuredValue === "yes") {
    featuredBoolean = "true";
  } else if (featuredValue === "no") {
    featuredBoolean = "false";
  }
  



  newProduct(titleValue, priceValue, descriptionValue, featuredBoolean, altValue)
}


async function newProduct(title, price, description, featured, alt) {
  const newUrl = api + "/products";
  const token = getToken();
  const data = JSON.stringify({title: title, price: price, description: description, featured: featured, alternative_text: alt});
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

    console.log(results)
    if (results.createdAt) {
      addProductForm.reset();
      systemMessage("success", "Product added successfully", ".message-container");
    }

  } catch(error) {
    systemMessage("warning", "Something went wrong", ".message-container");
    console.log(error);
  }


}

// validateForm();

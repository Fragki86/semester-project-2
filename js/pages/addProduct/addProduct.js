import { nav } from "../../modules/layout/nav.js"
import { footer } from "../../modules/layout/footer.js"
import { counter } from "../../modules/utilities/counter.js"
import { api } from "../../modules/utilities/api.js"
import { systemMessage } from "../../modules/utilities/systemMessage.js"
import { getToken } from "../../localStorage/tokenUser.js"

nav();
footer();
counter();

// Declare variables
const addProductForm = document.querySelector("#addProductForm");
const title = document.querySelector("#titleInput");
const price = document.querySelector("#priceInput");
const description = document.querySelector("#descriptionInput");
const alt = document.querySelector("#altInput");
const imageUploadBtn = document.querySelector("#imageUploadBtn");
const imageURL = document.querySelector("#imageURL");
const imagePreview = document.querySelector("#imagePreview");


// Widget for image-file upload to cloudinary and then in strapi
imageUploadBtn.addEventListener("click", openWidget);

function openWidget() {
  widgetUpload.open();
}

const widgetUpload = cloudinary.createUploadWidget({ 
  cloudName: "home2222", 
  uploadPreset: "myuploadspreset" }, (error, imgInfo) => {
    if (!error && imgInfo && imgInfo.event === "success") {
      console.log('Done! Here is the image info: ', imgInfo.info.url); 
      imageURL.value = `${imgInfo.info.url}`;
      imagePreview.innerHTML = `<img src="${imgInfo.info.url}">`
  };
});


// Validate form conditions
addProductForm.addEventListener("submit", validateForm)

function validateForm(event) {
  event.preventDefault();
  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const altValue = alt.value.trim();
  const newImageUrlValue = imageURL.value.trim();


  let featuredBoolean = "";
  
  if (titleValue.length < 3 || priceValue < 1 || descriptionValue.length < 8 || altValue.length < 3 || newImageUrlValue.length < 5) {
    return systemMessage("error", "All fields required", ".message-container")
  }
  
  const featuredValue = document.querySelector('input[name="featured"]:checked').value;
  if (featuredValue === "yes") {
    featuredBoolean = "true";
  } else if (featuredValue === "no") {
    featuredBoolean = "false";
  }
  
  newProduct(titleValue, priceValue, descriptionValue, featuredBoolean, altValue, newImageUrlValue)
}


// Adding the new item in the api
async function newProduct(title, price, description, featured, alt, image_url) {
  const newUrl = api + "/products";
  const token = getToken();
  const data = JSON.stringify({title: title, price: price, description: description, featured: featured, alternative_text: alt, image_url: image_url});
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

    if (results.createdAt) {
      addProductForm.reset();
      imagePreview.innerHTML = "";
      systemMessage("success", "Product added successfully", ".message-container");
    }

  } catch(error) {
    systemMessage("warning", "Something went wrong", ".message-container");
    console.log(error);
  }
}


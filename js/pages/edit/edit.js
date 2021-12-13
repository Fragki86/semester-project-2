import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
import { counter } from "../../modules/utilities/counter.js";
import { api } from "../../modules/utilities/api.js";
import { getToken } from "../../localStorage/tokenUser.js";
import { deleteBtn } from "../../modules/utilities/deleteBtn.js"
import { systemMessage } from "../../modules/utilities/systemMessage.js";


nav();
footer();
counter();

// Set new parameters 
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
};


// Getting the original api and setting variable names
const newUrl = api + "/products/" + id;
const editForm = document.querySelector("#editProductForm");
const title = document.querySelector("#titleInput");
const price = document.querySelector("#priceInput");
const description = document.querySelector("#descriptionInput");
const alt = document.querySelector("#altInput");
const imageURL = document.querySelector("#imageURL");
const imageUploadBtn = document.querySelector("#imageUploadBtn");
const productId = document.querySelector("#productId");
const imagePreview = document.querySelector("#imagePreview");
const featuredYes = document.querySelector('input[value="yes"]');
const featuredNo = document.querySelector('input[id="noInput"]');

async function getApi() {
  try {
    const response = await fetch(newUrl);
    const results = await response.json();
    deleteBtn(results.id)

    title.value = results.title;
    price.value = results.price;
    description.value = results.description;
    productId.value = results.id;
    alt.value = results.alternative_text;
    imageURL.value = results.image_url;
    imagePreview.innerHTML = `<img src="${results.image_url}">`

    const featuredBoolean = results.featured;


    if (featuredBoolean) {
      featuredYes.checked = true;
    } else {
      featuredNo.checked = true;
    }

    

  } catch(error) {
    console.log(error);
  }
}
getApi()


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
    };
  });




editForm.addEventListener("submit", formConditions);

// Validate form
function formConditions(event) {
  event.preventDefault();

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const altValue = alt.value.trim();
  const idValue = productId.value;
  const newImageUrlValue = imageURL.value.trim();

  if (titleValue.length === 0 || priceValue.length === 0 || descriptionValue.length === 0 || imageURL.length < 5) {
    return systemMessage("warning", "Supply values accordingly", ".message-container");
  }
  
  const featuredValue = document.querySelector('input[name="featured"]:checked').value;
  let featuredBooleanUpdate = "";
  if (featuredValue === "yes") {
    featuredBooleanUpdate = "true";
  } else if (featuredValue === "no") {
    featuredBooleanUpdate = "false";
  }
  
  // console.log(featuredBooleanUpdate)
  
  updateArticle(titleValue, priceValue, descriptionValue, idValue, featuredBooleanUpdate, altValue, newImageUrlValue);
}


async function updateArticle(title, price, description, id, featured, alt, image_url) {
  const updateUrl = api + "/products/" + id;
  const token = getToken();
  const data = JSON.stringify({title: title, price: price, description: description, featured: featured, alternative_text: alt, image_url: image_url})

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(updateUrl, options);
    const results = await response.json();
    systemMessage("success", "Product updated successfuly", ".message-container")

  } catch(error) {
    systemMessage("error", error, ".message-container")
    console.log(error)
  }
}


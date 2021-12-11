import { api } from "../../modules/utilities/api.js"

export function banner() {
  const bannerContainer = document.querySelector("#bannerContainer");
  const bannerUrl = "https://res.cloudinary.com/home2222/image/upload/v1639084937/banner_img_4102055563.jpg";
  
  bannerContainer.innerHTML = `<div class="banner">
                                <img src="${bannerUrl}" class="banner-img" alt="Child play with his father">
                                <div class="banner-title">
                                  <h2 class="banner-title-over">From nature</h2>
                                  <div class="separator"></div>
                                  <h2 class="banner-title-under">to children</h2>
                                </div>
                              </div>`             
}
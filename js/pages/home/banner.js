import { api } from "../../modules/utilities/api.js"

export function banner() {
  const bannerContainer = document.querySelector("#bannerContainer");
  const bannerUrl = "/uploads/banner_img_d1df18f497.jpg";
  
  bannerContainer.innerHTML = `<div class="banner">
                                <img src="${api}${bannerUrl}" class="banner-img">
                                <div class="banner-title">
                                  <h2 class="banner-title-over">Rer deu</h2>
                                  <div class="separator"></div>
                                  <h2 class="banner-title-under">ddetj oowa</h2>
                                </div>
                              </div>`             
}
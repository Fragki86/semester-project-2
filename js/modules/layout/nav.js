import { getUser } from "../../localStorage/tokenUser.js";


export function nav() {
  const navMenu = document.querySelector(".nav-menu");
  const { pathname } = document.location;
  
  const username = getUser();

  let authorisationLink = `
                            <a href="login.html"><i class="far fa-user"></i></a>
                            <a href="login.html" id="loggedUser">Login</a>`
  let adminLinks = "";
  
  if (username) {
    authorisationLink = `<a href="#"><i class="fas fa-user"></i></a>
                        <span class="greeting-span">Hi, ${username}<i class="fas fa-sign-out-alt"></i></span>`
    adminLinks = `
    <div class="nav-separator"></div>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Admin Panel<i class="fas fa-chevron-circle-down"></i>
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="add-product.html">Add Item</a></li>
      <li><a class="dropdown-item" href="edit-product.html">Edit / Delete Item</a></li>
    </ul>
  </li>`
  }


  navMenu.innerHTML = `
                <nav>
                    <a href="shopping-cart.html" id="cart">   
                      <div id="counter"></div>
                      <i class="fas fa-shopping-bag"></i>
                    </a>
                    <a href="index.html" id="logo">
                      <img src="images/logo.svg" alt="Eco-kids Logo">
                    </a>
                    <div id="burgerBtn">
                      <i class="fas fa-bars"></i>
                    </div>
                    <ul class="nav-list">
                      <li class="nav-links">
                        <a href="index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a>
                      </li>
                      <li class="nav-links">
                        <a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
                      </li>
                      ${adminLinks}
                    </ul>
                    <div class="login-container">
                      ${authorisationLink}
                    </div>
                </nav>
                `

if (username){
const logOutBtn = document.querySelector(".greeting-span")
logOutBtn.addEventListener ("click", logOut);

  function logOut() {
    const signOutConfirmation = confirm("Are you sure you want to sign out?");

    if (signOutConfirmation) {
      localStorage.removeItem("user");

      location.href = "/index.html";
    }
  }
}



const burgerBtn = document.querySelector("#burgerBtn");
const navMobile = document.querySelector("nav ul");

burgerBtn.addEventListener ("click", fadeInMenu);

function fadeInMenu() {
    navMobile.classList.toggle("nav-visible");

}
}
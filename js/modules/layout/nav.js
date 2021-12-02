import { getUser } from "../../localStorage/tokenUser.js";


export function nav() {
  const navMenu = document.querySelector(".nav-menu");
  const { pathname } = document.location;
  
  const username = getUser();

  console.log(username)
  let authorisationLink = `<a href="login.html" id="loggedUser">Login</a>`
  let adminLinks = "";

  if (username) {
    authorisationLink = `<span>Hi, ${username}</span>`
    adminLinks = `<li class="nav-item dropdown">
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
                      <a href="login.html"><i class="fas fa-user"></i></a>
                      ${authorisationLink}
                    </div>
                </nav>
                `



const burgerBtn = document.querySelector("#burgerBtn");
const navMobile = document.querySelector("nav ul");
const navList = document.querySelectorAll("nav li");

burgerBtn.addEventListener ("click", fadeInMenu);
// burgerBtn.addEventListener ("click", stylishLinks);

function fadeInMenu() {
    navMobile.classList.toggle("nav-visible");
}

// function stylishLinks() {
//     navList.forEach(function(links, length){
//         if (links.style.animation) {
//             links.style.animation = '';
//         } else {
//             links.style.animation = `fade-in 0.3s forwards  ${length / 15 + 0.3}s`
//         }

//     })
// }
}

{/* <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="container-fluid">
                    <a href="shopping-cart.html" id="cart">   
                      <div id="counter"></div>
                      <i class="fas fa-shopping-bag"></i>
                    </a>
                    <a class="navbar-brand" href="home" id="logo">
                      <img src="images/logo.svg" alt="Eco-kids Logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav text-center">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="products.html">Products</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav> */}
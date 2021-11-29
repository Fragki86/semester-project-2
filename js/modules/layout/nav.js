export function nav() {
  const navMenu = document.querySelector(".nav-menu");

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
                        <a href="index.html">Home</a>
                      </li>
                      <li class="nav-links">
                        <a href="products.html">Products</a>
                      </li>
                    </ul>
                    <div class="login-container">
                      <a href="login.html"><i class="fas fa-user"></i></a>
                      <a href="login.html" id="loggedUser">Login</a>
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
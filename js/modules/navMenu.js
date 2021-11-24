export function nav() {
  const navMenu = document.querySelector(".nav-menu");

  navMenu.innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-light">
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
                </nav>
                `




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
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Products</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav> */}
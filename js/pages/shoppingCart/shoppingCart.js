import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
import { counter } from "../../modules/utilities/counter.js";


nav();
footer();
counter();


let getCart = [];

getCart = JSON.parse(localStorage.getItem("Items In Cart"));
const cartList = document.querySelector(".cart-list");
const totalAmount = document.querySelector(".total-amount");
const emptyCartMessage = document.querySelector(".empty-cart-message");
const clearBtn = document.querySelector("#clearCartBtn");
const counterHtml = document.querySelector("#counter");



/* -- Creating the shopping list -- */
function createCartList() {
  emptyCartMessage.style.display = "block";
  cartList.innerHTML = "";
   
  getCart.forEach((product) => {
    totalPrice()
    emptyCartMessage.style.display = "none";

    clearBtn.style.display = "block";
    const imageUrl = product.image_url;
    const altText = product.alternative_text;
    const title = product.title;
    const price = product.price;
    const id = product.id;
    let quantity = product.quantity;

    cartList.innerHTML += ` <div class="cart-item">
                              <img src="${imageUrl}" alt="${altText}">
                              <h3>${title}</h3>
                              <p class="card-price">${price}$</p>
                              <div class="quantity">
                                <button type="button" class="minus-btn" data-id=${id}><i class="fas fa-minus-circle"></i></button>
                                <span>${quantity}</span>
                                <button type="button" class="plus-btn" data-id=${id}><i class="fas fa-plus-circle"></i></button>
                              </div>
                              <a href="productDetails.html?id=${id}">
                              <i class="fas fa-link"></i>
                              </a>
                              <div class="trash-icons" data-id="${id}" data-price="${price}">
                              <i class="fas fa-trash-alt"></i>
                              </div>
                            </div>`
  

    // -- Deccrease- Increase quantity
    const minusBtn = document.querySelectorAll(".minus-btn");
    minusBtn.forEach( (decBtn) => {
      decBtn.addEventListener("click", (event) => {
        const dataId = decBtn.dataset.id;
        
        for (let i = 0; i < getCart.length; i++) {
          if (getCart[i].quantity === 1) {
            event.target.disabled === true
          } else if (getCart[i].id === dataId) {
            getCart[i].quantity --;
          }
        }
        
        localStorage.setItem("Items In Cart", JSON.stringify(getCart));
        createCartList(getCart);
        
      });
    })


    const plusBtn = document.querySelectorAll(".plus-btn");
    plusBtn.forEach( (incBtn) => {
      incBtn.addEventListener("click", increase);
    })

    function increase() {
      const dataId = this.dataset.id

      for (let i = 0; i < getCart.length; i++) {
        if (getCart[i].id === dataId) {
          getCart[i].quantity ++
        }
      }
    
      localStorage.setItem("Items In Cart", JSON.stringify(getCart));
      createCartList(getCart);
    }           
    

  })
  
  
  
  // -- Declare trash icons to use them later
  const trashIcons = document.querySelectorAll(".trash-icons");
  
  trashIcons.forEach( (icons) => {
    icons.addEventListener("click", removeItem)
  })
  
  
  counter();
}
createCartList();
    


/* -- Calculate total price of shopping list -- */
function totalPrice() {
  let sum = 0;
  
  getCart.forEach( (product) => {
    sum += product.price * product.quantity;
  })

  totalAmount.innerHTML = `<h4>Total:</h4><p class="card-price">${sum.toFixed(2)}$</p>`
}




/* -- Remove items individually -- */
function removeItem() {
  const idData = this.dataset.id;
  
  for (let i = 0; i < getCart.length; i++) {
    if (getCart[i].id === idData) {
      getCart.splice(i, 1)

    }
  }
  
  if (getCart.length === 0) {
    clearStorage()
  }

  this.parentElement.remove();
  localStorage.setItem("Items In Cart", JSON.stringify(getCart));
  totalPrice();
  counter();
}



/* -- Clear cart and storage -- */  
clearBtn.addEventListener("click", clearStorage);

function clearStorage() {
  localStorage.removeItem("Items In Cart");
  cartList.innerHTML = "";
  totalAmount.innerHTML = "";
  counterHtml.innerHTML = "0";
  clearBtn.style.display = "none";
  emptyCartMessage.style.display = "block";
}
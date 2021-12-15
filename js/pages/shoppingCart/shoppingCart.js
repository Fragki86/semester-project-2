import { nav } from "../../modules/layout/nav.js";
import { footer } from "../../modules/layout/footer.js";
import { counter } from "../../modules/utilities/counter.js";


nav();
footer();
counter();

const getCart = JSON.parse(localStorage.getItem("Items In Cart"));
const cartList = document.querySelector(".cart-list");
const totalAmount = document.querySelector(".total-amount");
const emptyCartMessage = document.querySelector(".empty-cart-message");
const clearBtn = document.querySelector("#clearCartBtn");
const counterHtml = document.querySelector("#counter");
let sum = 0;

/* -- Creating the shopping list -- */
function shoppingCartList() {
  for (let i = 0; i < getCart.length; i++) {
    const imageUrl = getCart[i].image_url;
    const altText = getCart[i].alternative_text;
    const title = getCart[i].title;
    const price = getCart[i].price;
    const id = getCart[i].id;
    let quantity = getCart[i].quantity;
    
    
    
    emptyCartMessage.style.display = "none";
    clearBtn.style.display = "block";
    
    const totalCost = parseFloat(getCart[i].price);

    if (!isNaN(totalCost)) {
      sum += totalCost;
    }
    

    cartList.innerHTML += `<div class="cart-item">
                            <img src="${imageUrl}" alt="${altText}">
                            <h3>${title}</h3>
                            <p class="card-price">${price}$</p>
                            <div class="quantity">
                              <button type="button" id="minusBtn" data-id="${id}">-</button>
                              <span>${quantity}</span>
                              <button type="button" id="plusBtn" data-id="${id}">+</button>
                            </div>
                            <a href="productDetails.html?id=${id}">
                            <i class="fas fa-link"></i>
                            </a>
                            <div class="trash-icons" data-id="${id}" data-price="${price}">
                            <i class="fas fa-trash-alt"></i>
                            </div>
                          </div>
                          `

    totalAmount.innerHTML = `<h4>Total:</h4><p class="card-price">${sum}$</p>`
    

    const minusBtn = document.querySelector("#minusBtn");
    const plusBtn = document.querySelector("#plusBtn");
  
    minusBtn.addEventListener("click", decrease);
    plusBtn.addEventListener("click", increase);
  
    function decrease() {
      getCart[i].quantity--
      console.log(getCart[i].quantity)
      shoppingCartList(getCart)
    }
  
    function increase() {
      getCart[i].quantity++
      console.log(getCart[i].quantity)
      shoppingCartList(getCart)
    }
    
  }
  

  
  





  const trashIcons = document.querySelectorAll(".trash-icons");

  trashIcons.forEach( (icons) => {
    icons.addEventListener("click", removeItem)
  })
}
shoppingCartList();


// cartList.addEventListener("click", (e) => {
//   const plusBtn = e.target.classList.contains("plus-btn");
//   const minusBtn = e.target.classList.contains("minus-btn");

//   if (plusBtn || minusBtn) {
//     for (let i = 0; i < getCart.length; i++) {
//       if (getCart[i].id === e.target.dataset.id) {
//         if (plusBtn) {
//           getCart[i].quantity ++;
//         } else if (minusBtn) {
//           getCart[i].quantity --;
//         }
//       }
//     }
//   }

//   shoppingCartList(getCart)
// });



/* -- Function to remove each item -- */
  function removeItem() {
    const idData = this.dataset.id;
    const priceData = parseInt(this.dataset.price);

    let itemList = JSON.parse(localStorage.getItem("Items In Cart"));
    
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].id === idData) {
        itemList.splice(i, 1)
      }
    }

    console.log(itemList)


    if (itemList.length === 0) {
      clearStorage()
    }

    itemList = JSON.stringify(itemList);
    localStorage.setItem("Items In Cart", itemList);

    this.parentElement.remove();
    counter();
    sum -= priceData;
    totalAmount.innerHTML = `<h4>Total:</h4><p class="card-price">${sum}$</p>`
  }



/* -- Function to clear the list and the storge -- */  
clearBtn.addEventListener("click", clearStorage);

  function clearStorage() {
    localStorage.removeItem("Items In Cart");
    cartList.innerHTML = "";
    totalAmount.innerHTML = "";
    counterHtml.innerHTML = "0";
    clearBtn.style.display = "none";
    emptyCartMessage.style.display = "block";
  }
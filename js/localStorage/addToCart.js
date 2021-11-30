import { addInStorage, getFromStorage } from "./localStorageMain.js";

const shoppingCart = "Cart";

export function addToCart(itemInCart) {
  return addInStorage(shoppingCart, itemInCart);
};

export function getFromCart() {
  return getFromStorage(shoppingCart);
}
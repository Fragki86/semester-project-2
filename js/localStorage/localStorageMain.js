export function addInStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  const products = localStorage.getItem(key)

  if (!products) {
    return [];
  } else {
    return JSON.parse(products);
  }
}
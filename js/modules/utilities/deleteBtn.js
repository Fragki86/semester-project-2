import { api } from "./api.js";
import { getToken } from "../../localStorage/tokenUser.js";


// Deleting Items from the editing page
export function deleteBtn(id) {
  const deleteButton = document.querySelector("#deleteBtn");

  deleteButton.addEventListener("click", deleteProduct);

  async function deleteProduct() {
    const deleteConfirmation = confirm("Are you sure you want to delete this product permanently?");

    if (deleteConfirmation) {
      const newUrl = api + "/products/" + id;
      const token = getToken();
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      try {
        const response = await fetch(newUrl, options);
        const results = await response.json();

        location.href = "/";


      } catch(error) {
        console.log(error)
      }

    }
  }
}
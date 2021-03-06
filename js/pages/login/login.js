// import { nav } from "../../modules/layout/nav.js"
import { api } from "../../modules/utilities/api.js";
import { addToken, addUser, getToken, getUser } from "../../localStorage/tokenUser.js";
import { systemMessage } from "../../modules/utilities/systemMessage.js";

const loginForm = document.querySelector(".log-in-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Validate form for Login
loginForm.addEventListener("submit", validateLogin);

function validateLogin(event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValidation(emailValue) !== true || passwordValue.length < 2) {
    return systemMessage("error", "Wrong username or password", ".message-container")
  }

  login(emailValue, passwordValue);
}


// Save credentials and give access
async function login(username, password) {
  const authUrl = api + "/auth/local";

  const data = JSON.stringify({identifier: username, password: password});

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json",
    }
  };

  try {
    const response = await fetch(authUrl, options);
    const results = await response.json();

    if (results.user) {
      addToken(results.jwt);
      addUser(results.user);
      console.log(addUser)
      console.log(getUser())
      console.log(getToken())
      location.href = "/index.html";
    }
    
    if (results.error) {
      systemMessage("error", "Invalid user", ".message-container");
    }


  } catch(error) {
    systemMessage("error", "Something unexpected happened", ".message-container");
    console.log(error);
  }
}




// Validate email
function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}



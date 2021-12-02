import { addInStorage, getFromStorage} from "./localStorageMain.js";

const uniqueToken = "token";
const myUser = "user";

export function addToken(token) {
  return addInStorage(uniqueToken, token)
};

export function getToken() {
  return getFromStorage(uniqueToken)
};

export function addUser(user) {
  return addInStorage(myUser, user)
};

export function getUser() {
  const user = getFromStorage(myUser);

  if (user) {
    return user.username;
  }

  return console.log("error");
}
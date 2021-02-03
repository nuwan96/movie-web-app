//               Example 06   logging user     ////
///           video  -  171 , 172
///                  loginFrom.jsx        &&       authService.js            ------

import jwtDecode from "jwt-decode"; /// importing the JWT Decoding functions
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth"; // this is a htpp end point of the registring user

const tokenKey = "token";
///  login details pass to the  server

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt); // save the fisrt login time created JWT in browser storage
}

// loginwith JWT function (when register time craete the JWt token)
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

//
//  logout function
export function logout() {
  localStorage.removeItem(tokenKey); // remove the token when user is logout
}

//
// get the current user using JWT token

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt); // using "jwtDecode" method decoding the jwt
  } catch (ex) {
    return null;
  }
}

// get the JWT
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

//
// default export  object ( using some obejct you created can be call these any methods)
export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};

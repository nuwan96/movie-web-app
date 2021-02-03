//               Example 05   Submitting user form      ////
///           video  -  167 , 168 , 169, 170
///                  registerFrom.jsx        &&       userService.js            ------

import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

// register the user

export function register(user) {
  // the user parameter is  getting from the User Interface
  /// ------ this user object has the "deatils" of the new user
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

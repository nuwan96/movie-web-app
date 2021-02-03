//                    Example 01   Repalce the GenreSrvice         ////
///                           video  -  159  -
///                  movies.js        &&       genreService.js            ------

// call the server
import http from "./httpService";

// import the endpoit json file
import { apiUrl } from "../config.json";

// get the "Genres"
export function getGenres() {
  return http.get(apiUrl + "/genres");
}

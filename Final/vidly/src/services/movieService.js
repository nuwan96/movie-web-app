//                    Example 02   Repalce the  MovieService        ////
///                           video  -  160  -
///                  movies.jsx        &&       movieService.js            ------

/*

// call the server
import http from "./httpService";

// import the endpoit json file
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

//
/// ------  We have to export two function ( beacuse "movies.jsx" needed)

// first function ( get the movies from the server)
export function getMovies() {
  return http.get(apiEndpoint); // use get method ( http)
}

// Second function ( delete the movies from the server)
export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId); // delet the specifc movie
}

*/

//                    Example 03   Populating Form       ////
///                           video  -  163  -
///                  movieFrom.jsx        &&       movieService.js            ------

/*

import http from "./httpService";

import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

// get the specific movie
export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

// save the movie
export function saveMovie(movie) {}

//
export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId); // delet the specifc movie
}

*/

//                    Example 04   PSave the movie      ////
///                           video  -  165 , 165 -
///                  movieFrom.jsx        &&       movieService.js            ------

import http from "./httpService";

import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

// save the movie  --- edit or new movie post  ---- ( movie obejcet is details about the  movie)
export function saveMovie(movie) {
  // edit in current exists movie
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  // post a new movie
  return http.post(apiEndpoint, movie);
}

//
export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId)); // delet the specifc movie
}

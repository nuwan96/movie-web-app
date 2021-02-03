import axios from "axios";

// import http logging service
import logService from "./logService";

import { toast } from "react-toastify";

//
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  //

  if (!expectedError) {
    logService.log(error);
    toast("An Unexpected Error occurred.");
  }

  return Promise.reject(error);
});

//
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

/// export the all axios https requests

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

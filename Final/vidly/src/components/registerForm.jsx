//               Example 05   Submitting user form      ////
///           video  -  167 , 168 , 169, 170 ,175
///                  registerFrom.jsx        &&       userService.js            ------

import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

// import the "registerService" to connect the server and UI
import * as userService from "../services/userService"; // using "*" import all function
// and using we have to use it as the "userService" and call the object in here

import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  ///---------------   Using this event new user details send to the server    ------------
  //
  doSubmit = async () => {
    // Call the server
    try {
      // first time (register time also create the JWT )
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/"; // after registering redirect the home page( with full page reload)
      //
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // this response got from the server ( including errors)
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

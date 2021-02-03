//               Example 06   logging user     ////
///           video  -  171 , 172 , 173 , 187
///                  loginFrom.jsx        &&       authService.js            ------

import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";

// ---  import the authService

import auth from "../services/authService";

///
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  ///---------------   Using this event logging user details send to the server    ------------
  doSubmit = async () => {
    // Call the server
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";

      //
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // this errors get from the server
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors }); // error msg send to the clint ( UI )
      }
    }
  };
  //

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

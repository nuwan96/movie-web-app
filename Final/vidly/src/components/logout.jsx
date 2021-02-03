import { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  // remove the JWT token ( we no need to call the functions or method)
  // using "componentDidMount" automatically  do this task when "LogOut"component is called
  componentDidMount() {
    // call the logout function
    auth.logout();
    /// using full page reload back to the home page
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;

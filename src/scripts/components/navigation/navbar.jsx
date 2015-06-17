import React from "react";
import Sidebar from "./sidebar";
import Login from "../authentication/login";
import Logout from "../authentication/logout";

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <Sidebar />
        <Login />
        <Logout />
      </div>
    );
  }
};

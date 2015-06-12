import React from "react";
import AuthActions from "../actions/auth_actions";

export default class extends React.Component {
  handleClick() {
    AuthActions.logout();
  },
  render() {
    return (
      <button onClick={this.handleClick}>logout </button>
    )
  }
}

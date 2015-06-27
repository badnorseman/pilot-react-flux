import React from "react";
import AuthActions from "../../actions/auth_actions";

export default class extends React.Component {
  handleClick() {
    AuthActions.logout()
  }

  render() {
    return (
      <div>
        <button className="btn waves-effect waves-light" onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}

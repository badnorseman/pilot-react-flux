import React from "react";
import AuthActions from "../../actions/auth_actions";
import Mui from "material-ui";

let RaisedButton = Mui.RaisedButton;

export default class extends React.Component {
  handleClick() {
    AuthActions.logout();
  }
  render() {
    return (
      <div>
        <RaisedButton label="Default" />
        <button onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}
